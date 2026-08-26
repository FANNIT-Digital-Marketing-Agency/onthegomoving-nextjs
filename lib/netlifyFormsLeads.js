const NETLIFY_API_PAGE_SIZE = 100;

function nextPageFromLink(linkHeader) {
  if (!linkHeader) return null;
  const next = linkHeader
    .split(",")
    .map((part) => part.trim())
    .find((part) => /rel="next"/.test(part));
  if (!next) return null;

  const match = next.match(/<([^>]+)>/);
  if (!match) return null;
  try {
    const value = Number(new URL(match[1]).searchParams.get("page"));
    return Number.isInteger(value) && value > 0 ? value : null;
  } catch {
    return null;
  }
}

async function fetchAllNetlifyFormSubmissions({ formId, token, fetchImpl = fetch }) {
  const submissions = [];
  let page = 1;

  for (let requestCount = 0; requestCount < 100; requestCount += 1) {
    const url = `https://api.netlify.com/api/v1/forms/${formId}/submissions?page=${page}&per_page=${NETLIFY_API_PAGE_SIZE}`;
    const response = await fetchImpl(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error(`Netlify Forms API error: ${response.status}`);

    const batch = await response.json();
    if (!Array.isArray(batch)) throw new Error("Netlify Forms API returned an invalid submission list");
    submissions.push(...batch);

    const nextPage = nextPageFromLink(response.headers?.get?.("link") || "");
    if (!nextPage || batch.length === 0) break;
    page = nextPage;
  }

  return submissions;
}

function normalizeNetlifySubmission(submission) {
  const data = submission?.data || {};
  let sourcePage = data.sourcePage || "";
  if (!sourcePage && data.referrer) {
    try {
      sourcePage = new URL(data.referrer).pathname;
    } catch {
      sourcePage = data.referrer;
    }
  }

  return {
    id: submission?.id || "",
    createdAt: submission?.created_at || "",
    fullName: data.fullName || data.name || "",
    phone: data.phone || "",
    email: data.email || "",
    moveDate: data.moveDate || "",
    zipFrom: data.zipFrom || data.fromZip || "",
    zipTo: data.zipTo || data.toZip || "",
    moveType: data.moveType || "",
    moveSize: data.moveSize || data.squareFeet || "",
    wantsStorage: data.wantsStorage || data.freeStorage || "",
    sourcePage: sourcePage || "/",
    sourceLabel: data.sourceLabel || "",
    webhookStatus: "form-recorded",
    source: "netlify-forms",
  };
}

function recentNormalizedSubmissions(submissions, days) {
  const cutoff = Date.now() - Math.max(0, Number(days) || 0) * 24 * 60 * 60 * 1000;
  return submissions
    .filter((submission) => {
      const created = Date.parse(submission?.created_at || "");
      return !Number.isNaN(created) && created >= cutoff;
    })
    .map(normalizeNetlifySubmission)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
}

module.exports = {
  fetchAllNetlifyFormSubmissions,
  nextPageFromLink,
  normalizeNetlifySubmission,
  recentNormalizedSubmissions,
};
