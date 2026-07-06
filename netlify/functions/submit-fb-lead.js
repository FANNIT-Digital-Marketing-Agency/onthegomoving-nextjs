/**
 * Netlify Function: submit-fb-lead
 *
 * Facebook Ads-specific lead submission function.
 * On every form submission this function:
 *   1. Writes the lead to the MySQL database (so it appears on /admin/leads/)
 *   2. Calls the SuperMove webhook to create a project
 *   3. Updates the lead's webhookStatus in the DB (synced / failed)
 *   4. Fires a Facebook Conversions API Lead event server-side
 *
 * Required env vars:
 *   DATABASE_URL             — MySQL connection string
 *   SUPERMOVE_WEBHOOK_URL    — SuperMove webhook URL (shared with submit-lead)
 *   FB_CAPI_ACCESS_TOKEN     — Facebook Conversions API access token
 *
 * FB Pixel ID: 129153980771695
 */
import crypto from "crypto";
import mysql from "mysql2/promise";

const FB_PIXEL_ID = "129153980771695";

// ── DB helper ────────────────────────────────────────────────────────────────

async function getConnection() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  try {
    return await mysql.createConnection(url);
  } catch (err) {
    console.error("[submit-fb-lead] DB connect error:", err.message);
    return null;
  }
}

async function insertLeadToDB(conn, lead, webhookStatus) {
  const sql = `
    INSERT INTO leads
      (fullName, phone, email, moveDate, moveType, moveSize, fromZip, toZip,
       wantsStorage, sourcePage, sourceLabel,
       utmSource, utmMedium, utmCampaign, utmContent, utmTerm, gclid, fbclid,
       webhookStatus, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
  `;
  const phoneDigits = (() => {
    let d = (lead.phone || "").replace(/\D/g, "");
    if (d.length === 11 && d.startsWith("1")) d = d.slice(1);
    return d.slice(0, 10);
  })();
  const values = [
    (lead.fullName || "").slice(0, 255),
    phoneDigits,
    (lead.email || "").slice(0, 320),
    lead.moveDate || null,
    lead.moveType || null,
    lead.moveSize || null,
    lead.fromZip || null,
    lead.toZip || null,
    lead.wantsStorage ? 1 : 0,
    lead.sourcePage || null,
    (lead.sourceLabel || "Facebook Ads").slice(0, 128),
    lead.utmSource || null,
    lead.utmMedium || null,
    lead.utmCampaign || null,
    lead.utmContent || null,
    lead.utmTerm || null,
    lead.gclid || null,
    lead.fbclid || null,
    webhookStatus,
  ];
  const [result] = await conn.execute(sql, values);
  return result.insertId;
}

async function updateLeadWebhookStatus(conn, id, status) {
  await conn.execute(
    `UPDATE leads SET webhookStatus = ?, webhookAttemptedAt = NOW(), updatedAt = NOW() WHERE id = ?`,
    [status, id]
  );
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function sha256(value) {
  if (!value) return undefined;
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function getSupermoveJobType(moveType) {
  const t = (moveType ?? "").toLowerCase();
  if (t.includes("commercial") || t.includes("office") || t.includes("business")) {
    return { projectType: "commercial-move", jobType: "commercial-move-move" };
  }
  if (t.includes("long") || t.includes("interstate") || t.includes("out of state")) {
    return { projectType: "long-distance-move", jobType: "long-distance-move-move" };
  }
  return { projectType: "local-move", jobType: "local-move-move" };
}

function buildSupermovePayload(lead) {
  const { projectType, jobType } = getSupermoveJobType(lead.moveType);
  let projectSize = null;
  if (lead.moveType === "commercial") {
    projectSize = "Commercial";
  } else if (lead.moveSize) {
    projectSize = lead.moveSize;
  }
  const noteLines = [
    lead.wantsStorage ? "Interested in storage" : "",
    lead.squareFeet ? `Square feet: ${lead.squareFeet}` : "",
    lead.sourceLabel ? `Source: ${lead.sourceLabel}` : "",
    "Channel: Facebook Ads",
  ].filter(Boolean);
  return {
    project_type: projectType,
    client: {
      primary_contact: {
        full_name: lead.fullName,
        email: lead.email,
        phone_number: (() => {
          let d = (lead.phone || "").replace(/\D/g, "");
          if (d.length === 11 && d.startsWith("1")) d = d.slice(1);
          return d.slice(0, 10);
        })(),
      },
    },
    jobs: [
      {
        job_type: jobType,
        date: lead.moveDate ?? "",
        locations: [
          ...(lead.fromZip ? [{ address: lead.fromZip }] : []),
          ...(lead.toZip ? [{ address: lead.toZip }] : []),
        ],
        note_from_customer: noteLines.join(" | "),
      },
    ],
    referral_source: "Custom Website via A Supermove-Managed Integration",
    referral_details: "Facebook Ads",
    tags: ["WEBSITE_LEAD", "FACEBOOK_LEAD_ADS_LEAD"],
    ...(projectSize ? { values: { PROJECT_SIZE: projectSize } } : {}),
  };
}

function buildCAPIPayload(lead, eventHeaders, testEventCode) {
  const nameParts = (lead.fullName || "").trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";
  const phoneDigits = (lead.phone || "").replace(/\D/g, "");
  const zip = (lead.fromZip || "").replace(/\D/g, "");

  const clientIp =
    (eventHeaders["x-forwarded-for"] || "").split(",")[0].trim() ||
    eventHeaders["client-ip"] ||
    "";
  const userAgent = lead.clientUserAgent || eventHeaders["user-agent"] || "";

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: lead.pageUrl || "https://onthegomoving.com/get/fb-residential-movers/",
        event_id: lead.fbEventId || `fb_lead_${Date.now()}`,
        user_data: {
          em: sha256(lead.email),
          ph: sha256(phoneDigits),
          fn: sha256(firstName),
          ln: sha256(lastName),
          zp: sha256(zip),
          client_ip_address: clientIp || undefined,
          client_user_agent: userAgent || undefined,
          fbc: lead.fbc || undefined,
          fbp: lead.fbp || undefined,
        },
        custom_data: {
          content_name: "Residential Moving Quote",
          content_category: "residential_moving",
        },
      },
    ],
  };
  if (testEventCode) {
    payload.test_event_code = testEventCode;
  }
  return payload;
}

// ── Main handler ─────────────────────────────────────────────────────────────

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let lead;
  try {
    lead = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  // Sanitize name — strip any leading non-alphabetic characters (e.g. ": Justin" → "Justin")
  lead.fullName = (lead.fullName || "").replace(/^[^a-zA-Z]+/, "").trim();

  // Sanitize phone — strip non-digits, handle 11-digit with leading 1
  const rawPhone = (lead.phone || "").replace(/\D/g, "");
  const cleanPhone = rawPhone.length === 11 && rawPhone.startsWith("1") ? rawPhone.slice(1) : rawPhone;
  lead.phone = cleanPhone;

  if (!lead.fullName || !lead.phone || !lead.email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name, phone, and email are required" }),
    };
  }

  // Validate phone is exactly 10 US digits
  if (lead.phone.length !== 10) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Please enter a valid 10-digit US phone number." }),
    };
  }

  const webhookUrl = process.env.SUPERMOVE_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[submit-fb-lead] SUPERMOVE_WEBHOOK_URL not configured");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Webhook not configured" }),
    };
  }

  // ── 1. Write lead to DB (pending) ─────────────────────────────────────────
  const conn = await getConnection();
  let leadId = null;
  if (conn) {
    try {
      leadId = await insertLeadToDB(conn, lead, "pending");
    } catch (err) {
      console.error("[submit-fb-lead] DB insert error:", err.message);
    }
  } else {
    console.warn("[submit-fb-lead] No DB connection — lead will not appear in admin dashboard");
  }

  // ── 2. Fire SuperMove + CAPI in parallel ──────────────────────────────────
  const supermovePayload = buildSupermovePayload(lead);
  const capiPayload = buildCAPIPayload(lead, event.headers || {}, lead.testEventCode);
  const fbToken = process.env.FB_CAPI_ACCESS_TOKEN;

  const [supermoveResult, capiResult] = await Promise.allSettled([
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        "User-Agent": "Zapier",
      },
      body: JSON.stringify(supermovePayload),
      signal: AbortSignal.timeout(10_000),
    }),
    fbToken
      ? fetch(`https://graph.facebook.com/v20.0/${FB_PIXEL_ID}/events?access_token=${fbToken}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(capiPayload),
          signal: AbortSignal.timeout(8_000),
        })
      : Promise.resolve(null),
  ]);

  // ── 3. Log CAPI result ────────────────────────────────────────────────────
  if (!fbToken) {
    console.warn("[submit-fb-lead] FB_CAPI_ACCESS_TOKEN not set — CAPI skipped");
  } else if (capiResult.status === "fulfilled" && capiResult.value) {
    const capiText = await capiResult.value.text().catch(() => "");
    if (!capiResult.value.ok) {
      console.error("[submit-fb-lead] CAPI error:", capiResult.value.status, capiText);
    } else {
      console.log("[submit-fb-lead] CAPI success:", capiText);
    }
  } else if (capiResult.status === "rejected") {
    console.error("[submit-fb-lead] CAPI fetch failed:", capiResult.reason);
  }

  // ── 4. Evaluate SuperMove result + update DB ──────────────────────────────
  let webhookStatus = "synced";

  if (supermoveResult.status === "fulfilled") {
    const smResp = supermoveResult.value;
    if (!smResp.ok) {
      const smText = await smResp.text().catch(() => "");
      console.error("[submit-fb-lead] SuperMove error:", smResp.status, smText);
      webhookStatus = "failed";
    }
  } else {
    console.error("[submit-fb-lead] SuperMove fetch failed:", supermoveResult.reason);
    webhookStatus = "failed";
  }

  if (conn && leadId) {
    try {
      await updateLeadWebhookStatus(conn, leadId, webhookStatus);
    } catch (err) {
      console.error("[submit-fb-lead] DB status update error:", err.message);
    }
    await conn.end().catch(() => {});
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, webhookStatus }),
  };
};
