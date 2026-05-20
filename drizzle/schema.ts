import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
// TODO: Add your tables here
/**
 * Leads table — every quote form submission is logged here.
 * webhookStatus tracks whether the Zapier/SuperMove webhook succeeded.
 */
export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  // Contact info
  fullName: varchar("fullName", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 32 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  // Move details
  moveDate: varchar("moveDate", { length: 32 }),
  moveType: varchar("moveType", { length: 64 }),
  moveSize: varchar("moveSize", { length: 64 }),   // e.g. '1 Bedroom', '2 Bedrooms', 'Studio'
  squareFeet: varchar("squareFeet", { length: 32 }), // Commercial only
  fromZip: varchar("fromZip", { length: 16 }),
  toZip: varchar("toZip", { length: 16 }),
  wantsStorage: int("wantsStorage").default(0).notNull(), // 0 = no, 1 = yes
  // Tracking
  sourcePage: text("sourcePage"),        // URL where form was submitted
  sourceLabel: varchar("sourceLabel", { length: 128 }), // e.g. "Homepage", "Bellevue Movers"
  // Webhook status
  webhookStatus: mysqlEnum("webhookStatus", ["pending", "synced", "failed"]).default("pending").notNull(),
  webhookAttemptedAt: timestamp("webhookAttemptedAt"),
  webhookError: text("webhookError"),
  // Supermove sync — populated by the outbound webhook receiver
  smProjectId: varchar("smProjectId", { length: 64 }),       // Supermove project UUID
  smProjectNumber: varchar("smProjectNumber", { length: 32 }), // Human-readable e.g. "7994"
  smStage: varchar("smStage", { length: 64 }),                // e.g. "New", "Quote Pending", "Booked"
  smBookingStatus: varchar("smBookingStatus", { length: 64 }), // booking_status from Supermove
  smTotalRevenue: varchar("smTotalRevenue", { length: 32 }),   // PROJECT_TOTAL_REVENUE
  smCoordinator: varchar("smCoordinator", { length: 128 }),   // coordinator full_name
  smSalesperson: varchar("smSalesperson", { length: 128 }),   // salesperson full_name
  smIsCancelled: int("smIsCancelled").default(0).notNull(),   // 0 = active, 1 = cancelled
  smMoveDate: varchar("smMoveDate", { length: 32 }),          // start_date from Supermove job
  smLastSyncedAt: timestamp("smLastSyncedAt"),                // when we last received a webhook
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;
