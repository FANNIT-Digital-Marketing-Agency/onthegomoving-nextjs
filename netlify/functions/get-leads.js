// ============================================================
// ON THE GO MOVING — Netlify Function: get-leads
// Reads leads from MySQL database (includes Supermove sync data).
// Falls back to Netlify Forms API if DB is unavailable.
//
// GET /.netlify/functions/get-leads?key=<ADMIN_KEY>&page=1&per_page=100&days=30
// ============================================================
import mysql from "mysql2/promise";
import netlifyFormsLeadModule from "../../lib/netlifyFormsLeads.js";

const { fetchAllNetlifyFormSubmissions, recentNormalizedSubmissions } = netlifyFormsLeadModule;

const NETLIFY_API_TOKEN = process.env.NETLIFY_API_TOKEN || "nfp_TBPuSHsYiBk694ebCvcGUbXD8iDphJfQcfb5";
const FORM_ID = process.env.NETLIFY_FORM_ID || "69e79d1e5a0b680008ea12ab";
const ADMIN_KEY = process.env.ADMIN_DASHBOARD_KEY || "otgm-admin-2025";

export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, X-Admin-Key",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  const providedKey = event.headers?.["x-admin-key"] || event.headers?.["X-Admin-Key"] || event.queryStringParameters?.key || "";
  if (providedKey !== ADMIN_KEY) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: "Unauthorized" }) };
  }

  const page    = Math.max(1, parseInt(event.queryStringParameters?.page     || "1",   10));
  const perPage = Math.min(1000, parseInt(event.queryStringParameters?.per_page || "100", 10));
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

      const limitVal = Number(perPage);
      const offsetVal = Number(offset);
      const sql = `SELECT
          id, fullName, phone, email,
          moveDate, moveType, moveSize, squareFeet,
          fromZip, toZip, wantsStorage,
          sourcePage, sourceLabel,
          utmSource, utmMedium, utmCampaign, utmContent, utmTerm, gclid, fbclid,
          webhookStatus, webhookAttemptedAt, webhookError,
          smProjectId, smProjectNumber, smStage, smBookingStatus,
          smTotalRevenue, smCoordinator, smSalesperson,
          smIsCancelled, smMoveDate, smLastSyncedAt,
          smProjectType, smSentAt, smCompletedAt, smHrsToSend, smHrsToComplete,
          createdAt, updatedAt
        FROM leads
        WHERE createdAt >= ?
        ORDER BY createdAt DESC
        LIMIT ${limitVal} OFFSET ${offsetVal}`;
      const [rows] = await conn.execute(sql, [cutoff]);

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
        utmSource:       r.utmSource    || null,
        utmMedium:       r.utmMedium    || null,
        utmCampaign:     r.utmCampaign  || null,
        utmContent:      r.utmContent   || null,
        utmTerm:         r.utmTerm      || null,
        gclid:           r.gclid        || null,
        fbclid:          r.fbclid       || null,
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
        smProjectType:   r.smProjectType   || null,
        smSentAt:        r.smSentAt        || null,
        smCompletedAt:   r.smCompletedAt   || null,
        smHrsToSend:     r.smHrsToSend     != null ? Number(r.smHrsToSend) : null,
        smHrsToComplete: r.smHrsToComplete != null ? Number(r.smHrsToComplete) : null,
        source:          "db",
      }));

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ submissions, total, source: "db", page, perPage }),
      };
    } catch (err) {
      console.error("[get-leads] DB error:", err.message, err.code);
      try { if (conn) await conn.end(); } catch {}
      // The form system is the durable operational fallback. Do not expose
      // database connection details to the client, and do not hide valid form leads.
    }
  } else {
    console.warn("[get-leads] DATABASE_URL not set, using Netlify Forms fallback");
  }

  // ── Fallback: Netlify Forms API ────────────────────────────────────────────
  try {
    const raw = await fetchAllNetlifyFormSubmissions({
      formId: FORM_ID,
      token: NETLIFY_API_TOKEN,
    });
    const submissions = recentNormalizedSubmissions(raw, days);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ submissions, total: submissions.length, source: "netlify-forms", page: 1, perPage: submissions.length }),
    };
  } catch (err) {
    console.error("[get-leads] Fallback error:", err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
// deploy trigger Wed May 20 18:59:29 EDT 2026
