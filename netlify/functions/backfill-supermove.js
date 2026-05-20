/**
 * Netlify Function: backfill-supermove
 *
 * Accepts a POST body with an array of Supermove project records and
 * matches them against leads in the MySQL DB by client name (normalized),
 * then updates smStage, smTotalRevenue, smSalesperson, smProjectNumber,
 * smLastSyncedAt.
 *
 * POST /.netlify/functions/backfill-supermove?key=otgm-admin-2025
 * Body: { "projects": [ { "projectNumber": 7600, "status": "Booked", "revenue": 1225.0, "salesperson": "John Doe", "client": "Jane Smith" }, ... ] }
 *
 * Returns: { matched: N, unmatched: N, details: [...] }
 */
import mysql from "mysql2/promise";

const ADMIN_KEY = process.env.ADMIN_DASHBOARD_KEY || "otgm-admin-2025";

async function getConnection() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  try {
    return await mysql.createConnection(url);
  } catch (err) {
    console.error("[backfill-supermove] DB connect error:", err.message);
    return null;
  }
}

function normalizeName(name) {
  if (!name) return "";
  // Trim, lowercase, collapse multiple spaces, remove trailing/leading spaces
  return name.toLowerCase().trim().replace(/\s+/g, " ");
}

export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  const key = event.queryStringParameters?.key || "";
  if (key !== ADMIN_KEY) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: "Unauthorized" }) };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "POST required" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const projects = body.projects || [];
  if (!Array.isArray(projects) || projects.length === 0) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "No projects provided" }) };
  }

  const conn = await getConnection();
  if (!conn) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "DB connection failed" }) };
  }

  try {
    // ── Load all leads from DB ──────────────────────────────────────────────
    const [rows] = await conn.execute(
      "SELECT id, fullName, phone, email, smProjectNumber FROM leads ORDER BY createdAt DESC"
    );

    // Build lookup maps
    const byName = new Map(); // normalized full name -> lead id
    const byProjectNum = new Map(); // project number (string) -> lead id

    const debug = event.queryStringParameters?.debug === "1";
    const debugNames = [];

    for (const row of rows) {
      const norm = normalizeName(row.fullName);
      if (norm && !byName.has(norm)) {
        byName.set(norm, row.id);
        if (debug) debugNames.push({ norm, id: row.id, original: row.fullName });
      }
      if (row.smProjectNumber) {
        byProjectNum.set(String(row.smProjectNumber), row.id);
      }
    }

    if (debug) {
      await conn.end();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ leadsLoaded: rows.length, names: debugNames.slice(0, 20) }),
      };
    }

    console.log(`[backfill-supermove] Loaded ${rows.length} leads, processing ${projects.length} projects`);

    const details = [];
    let matched = 0;
    let unmatched = 0;

    for (const proj of projects) {
      const projNum = String(proj.projectNumber);
      const clientNorm = normalizeName(proj.client);

      // Try to find matching lead
      let leadId = byProjectNum.get(projNum) || null;

      if (!leadId && clientNorm) {
        // Try exact name match
        leadId = byName.get(clientNorm) || null;

        // Try partial match: first word of client name matches first word of lead name
        if (!leadId) {
          const clientFirstWord = clientNorm.split(" ")[0];
          for (const [name, id] of byName.entries()) {
            if (name.startsWith(clientFirstWord + " ") || name === clientFirstWord) {
              // Check last name too if available
              const clientParts = clientNorm.split(" ");
              const nameParts = name.split(" ");
              if (clientParts.length >= 2 && nameParts.length >= 2) {
                if (clientParts[clientParts.length - 1] === nameParts[nameParts.length - 1]) {
                  leadId = id;
                  break;
                }
              }
            }
          }
        }
      }

      if (!leadId) {
        unmatched++;
        details.push({ projectNumber: projNum, client: proj.client, status: "unmatched" });
        continue;
      }

      // Update the lead
      await conn.execute(
        `UPDATE leads SET
          smProjectNumber = ?,
          smStage         = ?,
          smTotalRevenue  = ?,
          smSalesperson   = ?,
          smLastSyncedAt  = NOW(),
          updatedAt       = NOW()
        WHERE id = ?`,
        [
          projNum,
          proj.status || null,
          proj.revenue != null ? String(proj.revenue) : null,
          proj.salesperson || null,
          leadId,
        ]
      );

      matched++;
      details.push({
        projectNumber: projNum,
        client: proj.client,
        leadId,
        status: "updated",
        stage: proj.status,
        revenue: proj.revenue,
      });
    }

    await conn.end();

    console.log(`[backfill-supermove] Done: ${matched} matched, ${unmatched} unmatched`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ matched, unmatched, total: projects.length, details }),
    };
  } catch (err) {
    console.error("[backfill-supermove] Error:", err.message);
    try { await conn.end(); } catch {}
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
