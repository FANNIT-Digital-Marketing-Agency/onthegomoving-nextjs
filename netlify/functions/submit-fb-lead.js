/**
 * Netlify Function: submit-fb-lead
 *
 * Facebook Ads-specific lead submission function.
 * On every form submission this function:
 *   1. Calls the SuperMove webhook to create a project (same as submit-lead)
 *   2. Fires a Facebook Conversions API Lead event server-side
 *
 * Required env vars:
 *   SUPERMOVE_WEBHOOK_URL    — SuperMove webhook URL (shared with submit-lead)
 *   FB_CAPI_ACCESS_TOKEN     — Facebook Conversions API access token
 *
 * FB Pixel ID: 129153980771695
 */
import crypto from "crypto";

const FB_PIXEL_ID = "129153980771695";

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
  let projectSize = "(none)";
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
    referral_details: "Facebook Ads",
    tags: ["WEBSITE_LEAD", "FACEBOOK_ADS"],
    values: { PROJECT_SIZE: projectSize },
  };
}

function buildCAPIPayload(lead, eventHeaders, testEventCode) {
  const nameParts = (lead.fullName || "").trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";
  const phoneDigits = (lead.phone || "").replace(/\D/g, "");
  const zip = (lead.fromZip || "").replace(/\D/g, "");

  // Client IP from Netlify headers
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
  // Include test_event_code when testing via Meta Events Manager
  if (testEventCode) {
    payload.test_event_code = testEventCode;
  }
  return payload;
}

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
    console.error("[submit-fb-lead] SUPERMOVE_WEBHOOK_URL not configured");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Webhook not configured" }),
    };
  }

  const supermovePayload = buildSupermovePayload(lead);
  const capiPayload = buildCAPIPayload(lead, event.headers || {}, lead.testEventCode);
  const fbToken = process.env.FB_CAPI_ACCESS_TOKEN;

  // Fire SuperMove and CAPI in parallel
  const [supermoveResult, capiResult] = await Promise.allSettled([
    // 1. SuperMove webhook
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        "User-Agent": "Zapier",
      },
      body: JSON.stringify(supermovePayload),
      signal: AbortSignal.timeout(10_000),
    }),

    // 2. Facebook CAPI
    fbToken
      ? fetch(`https://graph.facebook.com/v20.0/${FB_PIXEL_ID}/events?access_token=${fbToken}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(capiPayload),
          signal: AbortSignal.timeout(8_000),
        })
      : Promise.resolve(null),
  ]);

  // Log CAPI result
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

  // Always return success to the client (SuperMove failure is non-fatal UX-wise)
  if (supermoveResult.status === "fulfilled") {
    const smResp = supermoveResult.value;
    if (!smResp.ok) {
      const smText = await smResp.text().catch(() => "");
      console.error("[submit-fb-lead] SuperMove error:", smResp.status, smText);
    }
  } else {
    console.error("[submit-fb-lead] SuperMove fetch failed:", supermoveResult.reason);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
