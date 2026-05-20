/**
 * ONE-TIME migration function — adds Supermove sync columns to the leads table.
 * Call once via: GET /.netlify/functions/run-migration?key=otgm-admin-2025
 * Delete this file after running.
 */
import mysql from "mysql2/promise";

const ADMIN_KEY = process.env.ADMIN_DASHBOARD_KEY || "otgm-admin-2025";

export const handler = async (event) => {
  const headers = { "Content-Type": "application/json" };

  const key = event.queryStringParameters?.key || "";
  if (key !== ADMIN_KEY) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: "Unauthorized" }) };
  }

  const url = process.env.DATABASE_URL;
  if (!url) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "DATABASE_URL not set" }) };
  }

  const conn = await mysql.createConnection(url);

  const columns = [
    ["smProjectId",     "VARCHAR(64)  NULL"],
    ["smProjectNumber", "VARCHAR(32)  NULL"],
    ["smStage",         "VARCHAR(64)  NULL"],
    ["smBookingStatus", "VARCHAR(64)  NULL"],
    ["smTotalRevenue",  "VARCHAR(32)  NULL"],
    ["smCoordinator",   "VARCHAR(128) NULL"],
    ["smSalesperson",   "VARCHAR(128) NULL"],
    ["smIsCancelled",   "INT NOT NULL DEFAULT 0"],
    ["smMoveDate",      "VARCHAR(32)  NULL"],
    ["smLastSyncedAt",  "TIMESTAMP    NULL"],
  ];

  const results = [];
  for (const [col, def] of columns) {
    try {
      await conn.execute(`ALTER TABLE leads ADD COLUMN ${col} ${def}`);
      results.push({ col, status: "added" });
    } catch (err) {
      if (err.code === "ER_DUP_FIELDNAME") {
        results.push({ col, status: "already_exists" });
      } else {
        results.push({ col, status: "error", message: err.message });
      }
    }
  }

  await conn.end();
  return { statusCode: 200, headers, body: JSON.stringify({ results }) };
};
