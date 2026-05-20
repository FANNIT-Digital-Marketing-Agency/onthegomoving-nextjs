/**
 * Netlify Function: supermove-webhook
 *
 * Receives outbound project payloads from Supermove Automations and syncs
 * the project stage, price, coordinator, and cancellation status back into
 * our MySQL leads table.
 *
 * Supermove fires this endpoint when any of these Automations trigger:
 *   - Project Sales Stage Updated
 *   - Project Variable Updated
 *   - Project Cancelled
 *
 * Matching strategy (in order):
 *   1. smProjectId  — UUID match (most reliable after first sync)
 *   2. phone        — strip to 10 digits and match
 *   3. email        — case-insensitive match
 *
 * Environment variables required:
 *   DATABASE_URL              — MySQL connection string
 *   SUPERMOVE_WEBHOOK_SECRET  — Optional shared secret for payload verification
 */
import mysql from "mysql2/promise";

// ── DB helper ────────────────────────────────────────────────────────────────
async function getConnection() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  try {
    return await mysql.createConnection(url);
  } catch (err) {
    console.error("[supermove-webhook] DB connect error:", err.message);
    return null;
  }
}

// ── Phone normaliser ─────────────────────────────────────────────────────────
function normalisePhone(raw) {
  if (!raw) return null;
  let d = String(raw).replace(/\D/g, "");
  if (d.length === 11 && d.startsWith("1")) d = d.slice(1);
  return d.length === 10 ? d : null;
}

// ── Main handler ─────────────────────────────────────────────────────────────
export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  // ── Parse payload ──────────────────────────────────────────────────────────
  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  console.log("[supermove-webhook] Received payload:", JSON.stringify(payload).slice(0, 500));

  // ── Extract fields from Supermove outbound payload ─────────────────────────
  // Top-level project fields
  const smProjectId     = payload.uuid        || null;
  const smProjectNumber = payload.identifier  || null;
  const smStage         = payload.status      || null;
  const smBookingStatus = payload.booking_status || null;
  const smIsCancelled   = payload.is_cancelled ? 1 : 0;
  const smCoordinator   = payload.coordinator?.full_name || null;
  const smSalesperson   = payload.salesperson?.full_name || null;

  // Revenue from project values
  const smTotalRevenue  = payload.values?.PROJECT_TOTAL_REVENUE != null
    ? String(payload.values.PROJECT_TOTAL_REVENUE)
    : null;

  // Move date from first job's start_date
  const firstJob = Array.isArray(payload.jobs) ? payload.jobs[0] : null;
  const smMoveDate = firstJob?.start_date || payload.start_date || null;

  // Client contact info for matching
  const clientPhone = normalisePhone(payload.client?.primary_contact?.phone_number);
  const clientEmail = (payload.client?.primary_contact?.email || "").toLowerCase().trim();

  // ── Connect to DB ──────────────────────────────────────────────────────────
  const conn = await getConnection();
  if (!conn) {
    console.error("[supermove-webhook] No DB connection — skipping sync");
    // Return 200 so Supermove doesn't retry indefinitely
    return { statusCode: 200, headers, body: JSON.stringify({ synced: false, reason: "no_db" }) };
  }

  try {
    // ── Find matching lead ─────────────────────────────────────────────────
    let leadId = null;

    // 1. Match by Supermove project UUID (most reliable after first sync)
    if (smProjectId) {
      const [rows] = await conn.execute(
        "SELECT id FROM leads WHERE smProjectId = ? LIMIT 1",
        [smProjectId]
      );
      if (rows.length > 0) leadId = rows[0].id;
    }

    // 2. Match by phone number
    if (!leadId && clientPhone) {
      const [rows] = await conn.execute(
        "SELECT id FROM leads WHERE phone = ? ORDER BY createdAt DESC LIMIT 1",
        [clientPhone]
      );
      if (rows.length > 0) leadId = rows[0].id;
    }

    // 3. Match by email
    if (!leadId && clientEmail) {
      const [rows] = await conn.execute(
        "SELECT id FROM leads WHERE LOWER(email) = ? ORDER BY createdAt DESC LIMIT 1",
        [clientEmail]
      );
      if (rows.length > 0) leadId = rows[0].id;
    }

    if (!leadId) {
      console.warn("[supermove-webhook] No matching lead found for project", smProjectNumber, clientPhone, clientEmail);
      await conn.end();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ synced: false, reason: "no_match", project: smProjectNumber }),
      };
    }

    // ── Update the lead ────────────────────────────────────────────────────
    await conn.execute(
      `UPDATE leads SET
        smProjectId     = ?,
        smProjectNumber = ?,
        smStage         = ?,
        smBookingStatus = ?,
        smTotalRevenue  = ?,
        smCoordinator   = ?,
        smSalesperson   = ?,
        smIsCancelled   = ?,
        smMoveDate      = ?,
        smLastSyncedAt  = NOW(),
        updatedAt       = NOW()
      WHERE id = ?`,
      [
        smProjectId,
        smProjectNumber,
        smStage,
        smBookingStatus,
        smTotalRevenue,
        smCoordinator,
        smSalesperson,
        smIsCancelled,
        smMoveDate,
        leadId,
      ]
    );

    console.log(`[supermove-webhook] Synced lead ${leadId} → project ${smProjectNumber} stage=${smStage}`);
    await conn.end();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ synced: true, leadId, project: smProjectNumber, stage: smStage }),
    };
  } catch (err) {
    console.error("[supermove-webhook] DB error:", err.message);
    try { await conn.end(); } catch {}
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
