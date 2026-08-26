const GOOGLE_PAID_MEDIA = new Set([
  "cpc",
  "ppc",
  "paid",
  "paid_search",
  "paid-search",
  "search_ads",
]);

const META_PAID_MEDIA = new Set([
  "cpc",
  "ppc",
  "paid",
  "paid_social",
  "paid-social",
  "paidsocial",
]);

function normalizedValue(value) {
  return String(value || "").trim().toLowerCase();
}

function isGoogleSource(source) {
  return normalizedValue(source).includes("google");
}

function isMetaSource(source) {
  return ["meta", "facebook", "instagram", "fb"].includes(normalizedValue(source));
}

/**
 * Returns an attribution class only when the form record contains a direct
 * click ID or a directly supplied UTM source and paid-medium pair. In
 * particular, sourceLabel and landing-page paths are deliberately excluded.
 */
function classifyLeadAttribution(lead = {}) {
  const source = normalizedValue(lead.utmSource);
  const medium = normalizedValue(lead.utmMedium);

  if (String(lead.gclid || "").trim()) return "google";
  if (String(lead.fbclid || "").trim()) return "meta";
  if (isGoogleSource(source) && GOOGLE_PAID_MEDIA.has(medium)) return "google";
  if (isMetaSource(source) && META_PAID_MEDIA.has(medium)) return "meta";

  const hasExplicitUtm = [
    lead.utmSource,
    lead.utmMedium,
    lead.utmCampaign,
    lead.utmContent,
    lead.utmTerm,
  ].some((value) => String(value || "").trim());

  return hasExplicitUtm ? "tagged" : "unattributed";
}

function attributionLabel(lead) {
  const classification = classifyLeadAttribution(lead);
  if (classification === "google") return "Google Ads";
  if (classification === "meta") return "Meta Ads";
  if (classification === "tagged") return "Tagged campaign";
  return "Unattributed";
}

module.exports = {
  attributionLabel,
  classifyLeadAttribution,
};
