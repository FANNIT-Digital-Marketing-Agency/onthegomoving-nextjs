// ============================================================
// ON THE GO MOVING — Netlify Function: get-leads
// Proxies the Netlify Forms API so the API token stays
// server-side and never reaches the browser.
//
// GET /.netlify/functions/get-leads?page=1&per_page=100
//
// Simple password protection: pass ?key=<ADMIN_KEY> in the
// query string. The key is stored in the ADMIN_DASHBOARD_KEY
// env var (set in Netlify UI → Site settings → Environment).
// Falls back to a hardcoded default if the env var is not set.
// ============================================================

const NETLIFY_API_TOKEN = process.env.NETLIFY_API_TOKEN || "nfp_TBPuSHsYiBk694ebCvcGUbXD8iDphJfQcfb5";
const FORM_ID = process.env.NETLIFY_FORM_ID || "69e79d1e5a0b680008ea12ab";
const ADMIN_KEY = process.env.ADMIN_DASHBOARD_KEY || "otgm-admin-2025";

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Simple password protection
  const providedKey = event.queryStringParameters?.key || "";
  if (providedKey !== ADMIN_KEY) {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ error: "Unauthorized" }),
    };
  }

  try {
    const page = parseInt(event.queryStringParameters?.page || "1", 10);
    const perPage = Math.min(parseInt(event.queryStringParameters?.per_page || "100", 10), 100);

    // Fetch from Netlify Forms API
    const url = `https://api.netlify.com/api/v1/forms/${FORM_ID}/submissions?page=${page}&per_page=${perPage}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${NETLIFY_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Netlify API error: ${response.status} ${response.statusText}`);
    }

    const submissions = await response.json();

    // Normalise each submission: derive sourcePage from referrer if not set
    const normalised = submissions.map((sub) => {
      const data = sub.data || {};
      let sourcePage = data.sourcePage || "";
      let sourceLabel = data.sourceLabel || "";

      // Derive source page from referrer for older submissions that lack the hidden input
      if (!sourcePage && data.referrer) {
        try {
          const url = new URL(data.referrer);
          sourcePage = url.pathname;
        } catch {
          sourcePage = data.referrer;
        }
      }

      return {
        id: sub.id,
        createdAt: sub.created_at,
        fullName: data.fullName || "",
        phone: data.phone || "",
        email: data.email || "",
        moveDate: data.moveDate || "",
        zipFrom: data.zipFrom || "",
        zipTo: data.zipTo || "",
        moveType: data.moveType || "",
        moveSize: data.moveSize || data.squareFeet || "",
        wantsStorage: data.wantsStorage || data.freeStorage || "",
        sourcePage: sourcePage || "/",
        sourceLabel: sourceLabel || "",
        referrer: data.referrer || "",
        ip: data.ip || "",
        userAgent: data.user_agent || "",
      };
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ submissions: normalised, total: normalised.length }),
    };
  } catch (err) {
    console.error("[get-leads] Error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
