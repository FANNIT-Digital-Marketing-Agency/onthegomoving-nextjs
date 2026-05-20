// ============================================================
// ON THE GO MOVING — Netlify Function: get-leads
// Reads leads from MySQL database (includes Supermove sync data).
// Falls back to Netlify Forms API if DB is unavailable.
//
// GET /.netlify/functions/get-leads?key=<ADMIN_KEY>&page=1&per_page=100&days=30
// ============================================================
import mysql from "mysql2/promise";

const NETLIFY_API_TOKEN = process.env.NETLIFY_API_TOKEN || "nfp_TBPuSHsYiBk694ebCvcGUbXD8iDphJfQcfb5";
const FORM_ID = process.env.NETLIFY_FORM_ID || "69e79d1e5a0b680008ea12ab";
const ADMIN_KEY = process.env.ADMIN_DASHBOARD_KEY || "otgm-admin-2025";

export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  const providedKey = event.queryStringParameters?.key || "";
  if (providedKey !== ADMIN_KEY) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: "Unauthorized" }) };
  }

  const page    = Math.max(1, parseInt(event.queryStringParameters?.page     || "1",   10));
  const perPage = Math.min(200, parseInt(event.queryStringParameters?.per_page || "100", 10));
  const days    = parseInt(event.queryStringParameters?.days || "30", 10);
  const offset  = (page - 1) * perPage;

  // ── Try MySQL first (same pattern as run-migration which is known to work) ──
  const dbUrl = process.env.DATABASE_URL;
  if (dbUrl) {
    let conn;
    try {
      conn = await mysql.createConnection(dbUrl);

      const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
        .toISOString().slice(0, 19).replace("T", " ");

      const [rows] = await conn.execute(
        `SELECT
          id, fullName, phone, email,
          moveDate, moveType, moveSize, squareFeet,
          fromZip, toZip, wantsStorage,
          sourcePage, sourceLabel,
          webhookStatus, webhookAttemptedAt, webhookError,
          smProjectId, smProjectNumber, smStage, smBookingStatus,
          smTotalRevenue, smCoordinator, smSalesperson,
          smIsCancelled, smMoveDate, smLastSyncedAt,
          createdAt, updatedAt
        FROM leads
        WHERE createdAt >= ?
        ORDER BY createdAt DESC
        LIMIT ? OFFSET ?`,
        [cutoff, perPage, offset]
      );

      const [[{ total }]] = await conn.execute(
        "SELECT COUNT(*) AS total FROM leads WHERE createdAt >= ?",
        [cutoff]
      );

      await conn.end();

      const submissions = rows.map((r) => ({
        id:              r.id,
        createdAt:       r.createdAt,
        fullName:        r.fullName  || "",
        phone:           r.phone     || "",
        email:           r.email     || "",
        moveDate:        r.moveDate  || "",
        zipFrom:         r.fromZip   || "",
        zipTo:           r.toZip     || "",
        moveType:        r.moveType  || "",
        moveSize:        r.moveSize  || r.squareFeet || "",
        wantsStorage:    r.wantsStorage ? "yes" : "",
        sourcePage:      r.sourcePage  || "/",
        sourceLabel:     r.sourceLabel || "",
        webhookStatus:   r.webhookStatus,
        smProjectId:     r.smProjectId     || null,
        smProjectNumber: r.smProjectNumber || null,
        smStage:         r.smStage         || null,
        smBookingStatus: r.smBookingStatus || null,
        smTotalRevenue:  r.smTotalRevenue  || null,
        smCoordinator:   r.smCoordinator   || null,
        smSalesperson:   r.smSalesperson   || null,
        smIsCancelled:   r.smIsCancelled   === 1,
        smMoveDate:      r.smMoveDate      || null,
        smLastSyncedAt:  r.smLastSyncedAt  || null,
        source:          "db",
      }));

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ submissions, total, source: "db", page, perPage }),
      };
    } catch (err) {
      console.error("[get-leads] DB error:", err.message);
      try { if (conn) await conn.end(); } catch {}
      // Fall through to Netlify Forms fallback
    }
  } else {
    console.warn("[get-leads] DATABASE_URL not set, using Netlify Forms fallback");
  }

  // ── Fallback: Netlify Forms API ────────────────────────────────────────────
  try {
    const url = `https://api.netlify.com/api/v1/forms/${FORM_ID}/submissions?page=${page}&per_page=${perPage}`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${NETLIFY_API_TOKEN}` },
    });
    if (!response.ok) throw new Error(`Netlify API error: ${response.status}`);
    const raw = await response.json();

    const submissions = raw.map((sub) => {
      const data = sub.data || {};
      let sourcePage = data.sourcePage || "";
      if (!sourcePage && data.referrer) {
        try { sourcePage = new URL(data.referrer).pathname; } catch { sourcePage = data.referrer; }
      }
      return {
        id:           sub.id,
        createdAt:    sub.created_at,
        fullName:     data.fullName    || "",
        phone:        data.phone       || "",
        email:        data.email       || "",
        moveDate:     data.moveDate    || "",
        zipFrom:      data.zipFrom     || "",
        zipTo:        data.zipTo       || "",
        moveType:     data.moveType    || "",
        moveSize:     data.moveSize || data.squareFeet || "",
        wantsStorage: data.wantsStorage || data.freeStorage || "",
        sourcePage:   sourcePage || "/",
        sourceLabel:  data.sourceLabel || "",
        webhookStatus: "unknown",
        source:       "netlify-forms",
      };
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ submissions, total: submissions.length, source: "netlify-forms", page, perPage }),
    };
  } catch (err) {
    console.error("[get-leads] Fallback error:", err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
