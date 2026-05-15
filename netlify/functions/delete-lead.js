// ============================================================
// ON THE GO MOVING — Netlify Function: delete-lead
// Deletes a single form submission from Netlify Forms API.
//
// DELETE /.netlify/functions/delete-lead?key=<ADMIN_KEY>&id=<SUBMISSION_ID>
// ============================================================
const NETLIFY_API_TOKEN = process.env.NETLIFY_API_TOKEN || "nfp_TBPuSHsYiBk694ebCvcGUbXD8iDphJfQcfb5";
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

  // Only allow DELETE or POST
  if (event.httpMethod !== "DELETE" && event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  // Auth check
  const providedKey = event.queryStringParameters?.key || "";
  if (providedKey !== ADMIN_KEY) {
    return { statusCode: 401, headers, body: JSON.stringify({ error: "Unauthorized" }) };
  }

  // Get submission ID from query or body
  let submissionId = event.queryStringParameters?.id || "";
  if (!submissionId && event.body) {
    try {
      const body = JSON.parse(event.body);
      submissionId = body.id || "";
    } catch {}
  }

  if (!submissionId) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing submission id" }) };
  }

  try {
    const url = `https://api.netlify.com/api/v1/submissions/${submissionId}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${NETLIFY_API_TOKEN}`,
      },
    });

    if (response.status === 204 || response.status === 200) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, id: submissionId }),
      };
    }

    const text = await response.text();
    throw new Error(`Netlify API error: ${response.status} — ${text}`);
  } catch (err) {
    console.error("[delete-lead] Error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
