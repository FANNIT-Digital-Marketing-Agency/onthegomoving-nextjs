/**
 * ONE-TIME migration: Import all leads from Netlify Forms into MySQL.
 * GET /.netlify/functions/import-netlify-leads?key=otgm-admin-2025
 *
 * Reads all submissions from Netlify Forms API and inserts them into the
 * MySQL leads table (skipping duplicates by email+moveDate).
 */
import mysql from "mysql2/promise";

const NETLIFY_API_TOKEN = process.env.NETLIFY_API_TOKEN || "nfp_TBPuSHsYiBk694ebCvcGUbXD8iDphJfQcfb5";
const FORM_ID = process.env.NETLIFY_FORM_ID || "69e79d1e5a0b680008ea12ab";
const ADMIN_KEY = process.env.ADMIN_DASHBOARD_KEY || "otgm-admin-2025";

async function getConnection() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  try {
    return await mysql.createConnection(url);
  } catch (err) {
    console.error("[import-netlify-leads] DB connect error:", err.message);
    return null;
  }
}

export const handler = async (event) => {
  const headers = { "Content-Type": "application/json" };

  const key = event.queryStringParameters?.key || "";
  if (key !== ADMIN_KEY) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: "Unauthorized" }) };
  }

  // ── Fetch all Netlify Forms submissions ───────────────────────────────────
  let allSubmissions = [];
  let page = 1;
  while (true) {
    const url = `https://api.netlify.com/api/v1/forms/${FORM_ID}/submissions?page=${page}&per_page=100`;
    const resp = await fetch(url, {
      headers: { Authorization: `Bearer ${NETLIFY_API_TOKEN}` },
    });
    if (!resp.ok) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: `Netlify API error: ${resp.status}` }) };
    }
    const batch = await resp.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    allSubmissions = allSubmissions.concat(batch);
    if (batch.length < 100) break;
    page++;
  }

  console.log(`[import-netlify-leads] Fetched ${allSubmissions.length} submissions from Netlify Forms`);

  // ── Connect to DB ─────────────────────────────────────────────────────────
  const conn = await getConnection();
  if (!conn) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "DB connection failed" }) };
  }

  let inserted = 0;
  let skipped = 0;
  const errors = [];

  try {
    for (const sub of allSubmissions) {
      const data = sub.data || {};

      // Extract source page
      let sourcePage = data.sourcePage || "";
      if (!sourcePage && data.referrer) {
        try { sourcePage = new URL(data.referrer).pathname; } catch { sourcePage = data.referrer; }
      }
      sourcePage = sourcePage || "/";

      const fullName    = (data.fullName || "").trim();
      const phone       = (data.phone || "").replace(/\D/g, "").slice(-10);
      const email       = (data.email || "").toLowerCase().trim();
      const moveDate    = data.moveDate || null;
      const moveType    = data.moveType || "";
      const moveSize    = data.moveSize || data.squareFeet || "";
      const fromZip     = data.zipFrom || data.fromZip || "";
      const toZip       = data.zipTo || data.toZip || "";
      const wantsStorage = data.wantsStorage || data.freeStorage ? 1 : 0;
      const sourceLabel = data.sourceLabel || "";
      const createdAt   = sub.created_at ? new Date(sub.created_at) : new Date();

      // Use Netlify submission ID as the lead ID (numeric portion)
      // We'll use a large offset to avoid collisions with existing IDs
      // Actually, just let MySQL auto-increment handle it

      try {
        // Check for duplicate by email + moveDate (or phone + moveDate)
        let existsRows;
        if (email) {
          [existsRows] = await conn.execute(
            "SELECT id FROM leads WHERE email = ? AND moveDate = ? LIMIT 1",
            [email, moveDate]
          );
        } else if (phone) {
          [existsRows] = await conn.execute(
            "SELECT id FROM leads WHERE phone = ? AND moveDate = ? LIMIT 1",
            [phone, moveDate]
          );
        } else {
          existsRows = [];
        }

        if (existsRows.length > 0) {
          skipped++;
          continue;
        }

        await conn.execute(
          `INSERT INTO leads
            (fullName, phone, email, moveDate, moveType, moveSize,
             fromZip, toZip, wantsStorage, sourcePage, sourceLabel,
             webhookStatus, createdAt, updatedAt)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'imported', ?, NOW())`,
          [fullName, phone, email, moveDate, moveType, moveSize,
           fromZip, toZip, wantsStorage, sourcePage, sourceLabel, createdAt]
        );
        inserted++;
      } catch (err) {
        errors.push({ name: fullName, error: err.message });
      }
    }

    await conn.end();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        total: allSubmissions.length,
        inserted,
        skipped,
        errors: errors.slice(0, 10),
      }),
    };
  } catch (err) {
    try { await conn.end(); } catch {}
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
