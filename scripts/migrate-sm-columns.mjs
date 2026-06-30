/**
 * One-time migration: add Supermove sync columns to the leads table.
 * Run with: node scripts/migrate-sm-columns.mjs
 * Requires DATABASE_URL env var to be set.
 */
import mysql from "mysql2/promise";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("ERROR: DATABASE_URL env var not set");
  process.exit(1);
}

const conn = await mysql.createConnection(url);

const alterStatements = [
  `ALTER TABLE leads ADD COLUMN IF NOT EXISTS smProjectId VARCHAR(64) NULL`,
  `ALTER TABLE leads ADD COLUMN IF NOT EXISTS smProjectNumber VARCHAR(32) NULL`,
  `ALTER TABLE leads ADD COLUMN IF NOT EXISTS smStage VARCHAR(64) NULL`,
  `ALTER TABLE leads ADD COLUMN IF NOT EXISTS smBookingStatus VARCHAR(64) NULL`,
  `ALTER TABLE leads ADD COLUMN IF NOT EXISTS smTotalRevenue VARCHAR(32) NULL`,
  `ALTER TABLE leads ADD COLUMN IF NOT EXISTS smCoordinator VARCHAR(128) NULL`,
  `ALTER TABLE leads ADD COLUMN IF NOT EXISTS smSalesperson VARCHAR(128) NULL`,
  `ALTER TABLE leads ADD COLUMN IF NOT EXISTS smIsCancelled INT NOT NULL DEFAULT 0`,
  `ALTER TABLE leads ADD COLUMN IF NOT EXISTS smMoveDate VARCHAR(32) NULL`,
  `ALTER TABLE leads ADD COLUMN IF NOT EXISTS smLastSyncedAt TIMESTAMP NULL`,
];

for (const sql of alterStatements) {
  try {
    await conn.execute(sql);
    console.log("✓", sql.slice(0, 80));
  } catch (err) {
    // Column already exists — safe to ignore
    if (err.code === "ER_DUP_FIELDNAME") {
      console.log("⚠ already exists, skipping:", sql.slice(40, 80));
    } else {
      console.error("✗ FAILED:", err.message, "\n  SQL:", sql);
    }
  }
}

await conn.end();
console.log("\nMigration complete.");
