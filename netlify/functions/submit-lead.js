/**
 * Netlify Function: submit-lead
 *
 * On every form submission this function:
 *   1. Calls the SuperMove webhook to create a project
 *   2. Calls the Facebook Conversions API to send a Lead event (server-side)
 *
 * FB CAPI fires in parallel with SuperMove — a failure in CAPI never blocks
 * the lead from reaching SuperMove or the user from seeing the thank-you page.
 *
 * Environment variables required:
 *   SUPERMOVE_WEBHOOK_URL   — SuperMove standard website endpoint
 *   FB_CAPI_ACCESS_TOKEN    — Facebook Conversions API access token
 *                             (generate in Events Manager → Pixel → Settings → Conversions API)
 */

import crypto from "crypto";

// ── FB Pixel ID (public, safe to hardcode) ──────────────────────────────────
const FB_PIXEL_ID = "129153980771695";

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

  // PROJECT_SIZE must be one of the valid SuperMove enum values:
  // 'Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms',
  // '5 Bedrooms', '6+ Bedrooms', 'Commercial', '(none)'
  let projectSize = "(none)";
  if (lead.moveType === "commercial") {
    projectSize = "Commercial";
  } else if (lead.moveSize) {
    projectSize = lead.moveSize; // Already matches enum (Studio, 1 Bedroom, etc.)
  }

  const noteLines = [
    lead.wantsStorage ? "Interested in storage" : "",
    lead.squareFeet ? `Square feet: ${lead.squareFeet}` : "",
    lead.sourceLabel ? `Source: ${lead.sourceLabel}` : "",
  ].filter(Boolean);

  return {
    project_type: projectType,
    client: {
      primary_contact: {
        full_name: lead.fullName,
        email: lead.email,
        phone_number: "+1" + (lead.phone || "").replace(/\D/g, "").replace(/^1/, ""),
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
    tags: ["WEBSITE_LEAD"],
    values: { PROJECT_SIZE: projectSize },
  };
}

/**
 * Build the Facebook CAPI payload for a Lead event.
 * All PII fields are SHA-256 hashed before transmission.
 */
function buildCAPIPayload(lead, eventHeaders) {
  // Split full name into first/last for better match rates
  const nameParts = (lead.fullName || "").trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  // Phone: digits only
  const phoneDigits = (lead.phone || "").replace(/\D/g, "");

  // Zip: first 5 digits only
  const zip = (lead.fromZip || "").replace(/\D/g, "").slice(0, 5);

  const userData = {
    em: sha256(lead.email),
    ph: sha256(phoneDigits),
    fn: sha256(firstName),
    ln: sha256(lastName),
    zp: sha256(zip),
    // Client IP and user agent improve match rates
    client_ip_address: (eventHeaders["x-forwarded-for"] || "").split(",")[0].trim() || undefined,
    client_user_agent: lead.clientUserAgent || undefined,
  };

  // Remove undefined fields
  Object.keys(userData).forEach((k) => userData[k] === undefined && delete userData[k]);

  const customData = {
    content_name: "Residential Moving Quote",
    content_category: "residential_moving",
  };
  if (lead.moveType) customData.move_type = lead.moveType;
  if (lead.moveSize) customData.move_size = lead.moveSize;
  if (lead.fromZip) customData.zip_from = lead.fromZip;
  if (lead.sourceLabel) customData.source_label = lead.sourceLabel;

  return {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: lead.fbEventId || `lead_${Date.now()}`,
        event_source_url: lead.pageUrl || "https://onthegomoving.com/get/residential-movers/",
        action_source: "website",
        user_data: userData,
        custom_data: customData,
      },
    ],
    // Uncomment to verify events in Meta Events Manager test tool:
    // test_event_code: "TEST12345",
  };
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

  // Basic validation
  if (!lead.fullName || !lead.phone || !lead.email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name, phone, and email are required" }),
    };
  }

  const webhookUrl = process.env.SUPERMOVE_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[submit-lead] SUPERMOVE_WEBHOOK_URL not configured");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Webhook not configured" }),
    };
  }

  const supermovePayload = buildSupermovePayload(lead);
  const capiPayload = buildCAPIPayload(lead, event.headers || {});
  const fbToken = process.env.FB_CAPI_ACCESS_TOKEN;

  // ── Fire SuperMove + CAPI in parallel ──────────────────────────────────────
  const [supermoveResult, capiResult] = await Promise.allSettled([
    // 1. SuperMove
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        "User-Agent": "Zapier",
      },
      body: JSON.stringify(supermovePayload),
      signal: AbortSignal.timeout(10_000),
    }),

    // 2. Facebook CAPI (only fires if token is configured)
    fbToken
      ? fetch(`https://graph.facebook.com/v20.0/${FB_PIXEL_ID}/events?access_token=${fbToken}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(capiPayload),
          signal: AbortSignal.timeout(8_000),
        })
      : Promise.resolve(null),
  ]);

  // ── Log CAPI result ────────────────────────────────────────────────────────
  if (capiResult.status === "fulfilled" && capiResult.value) {
    const capiText = await capiResult.value.text().catch(() => "");
    if (!capiResult.value.ok) {
      console.error("[submit-lead] FB CAPI error:", capiResult.value.status, capiText);
    } else {
      console.log("[submit-lead] FB CAPI success:", capiText);
    }
  } else if (capiResult.status === "rejected") {
    console.error("[submit-lead] FB CAPI fetch failed:", capiResult.reason);
  } else if (!fbToken) {
    console.warn("[submit-lead] FB_CAPI_ACCESS_TOKEN not set — CAPI skipped");
  }

  // ── Evaluate SuperMove result ──────────────────────────────────────────────
  if (supermoveResult.status === "rejected") {
    console.error("[submit-lead] SuperMove fetch failed:", supermoveResult.reason);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, webhookStatus: "failed" }),
    };
  }

  const smResponse = supermoveResult.value;
  const smText = await smResponse.text().catch(() => "");
  if (!smResponse.ok) {
    console.error("[submit-lead] SuperMove error:", smResponse.status, smText);
    return {
      statusCode: 200, // Return 200 to client so form still shows success
      body: JSON.stringify({ success: true, webhookStatus: "failed" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, webhookStatus: "synced" }),
  };
};
