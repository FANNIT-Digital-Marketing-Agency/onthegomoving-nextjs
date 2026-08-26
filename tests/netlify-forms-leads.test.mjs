import assert from "node:assert/strict";
import test from "node:test";
import formsLeads from "../lib/netlifyFormsLeads.js";

const { nextPageFromLink, normalizeNetlifySubmission, recentNormalizedSubmissions } = formsLeads;

test("reads the next Netlify API page from the Link header", () => {
  const link = '<https://api.netlify.com/api/v1/forms/form/submissions?page=2&per_page=100>; rel="next", <https://api.netlify.com/api/v1/forms/form/submissions?page=12&per_page=100>; rel="last"';
  assert.equal(nextPageFromLink(link), 2);
  assert.equal(nextPageFromLink(""), null);
});

test("normalizes a Netlify form lead for the dashboard", () => {
  const lead = normalizeNetlifySubmission({
    id: "form-123",
    created_at: "2026-08-26T14:00:00.000Z",
    data: {
      fullName: "Taylor Test",
      phone: "2065550101",
      email: "taylor@example.com",
      moveType: "apartment",
      moveSize: "2 Bedrooms",
      sourcePage: "/seattle-movers/",
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "residential-search",
      utm_content: "responsive-ad",
      utm_term: "residential movers seattle",
      gclid: "google-click-id",
      fbclid: "",
    },
  });
  assert.equal(lead.id, "form-123");
  assert.equal(lead.moveSize, "2 Bedrooms");
  assert.equal(lead.source, "netlify-forms");
  assert.equal(lead.webhookStatus, "form-recorded");
  assert.equal(lead.utmSource, "google");
  assert.equal(lead.utmMedium, "cpc");
  assert.equal(lead.utmCampaign, "residential-search");
  assert.equal(lead.utmContent, "responsive-ad");
  assert.equal(lead.utmTerm, "residential movers seattle");
  assert.equal(lead.gclid, "google-click-id");
  assert.equal(lead.fbclid, "");
  assert.equal(lead.attributionEvidence, "Stored form fields");
});

test("preserves canonical camelCase UTM and case-sensitive Meta click-ID fields", () => {
  const lead = normalizeNetlifySubmission({
    id: "form-meta-456",
    created_at: "2026-08-26T15:00:00.000Z",
    data: {
      fullName: "Meta Test",
      utmSource: "facebook",
      utmMedium: "paid_social",
      utmCampaign: "seattle-apartments",
      utmContent: "carousel-a",
      utmTerm: "apartment movers",
      fbclid: "AbCdEfMetaClickId",
    },
  });
  assert.equal(lead.utmSource, "facebook");
  assert.equal(lead.utmMedium, "paid_social");
  assert.equal(lead.utmCampaign, "seattle-apartments");
  assert.equal(lead.utmContent, "carousel-a");
  assert.equal(lead.utmTerm, "apartment movers");
  assert.equal(lead.fbclid, "AbCdEfMetaClickId");
});

test("uses directly retained query parameters in historic captured URLs without page-path inference", () => {
  const lead = normalizeNetlifySubmission({
    id: "form-historic-789",
    created_at: "2026-08-26T16:00:00.000Z",
    data: {
      fullName: "Historic Test",
      sourceLabel: "landing-social-residential-movers",
      sourcePage: "/get/fb-residential-movers/",
      referrer: "https://onthegomoving.com/get/fb-residential-movers/?utm_source=facebook&utm_medium=paid_social&utm_campaign=apartment-moves&utm_content=feed&fbclid=AbCdEfHistoricClickId",
    },
  });
  assert.equal(lead.utmSource, "facebook");
  assert.equal(lead.utmMedium, "paid_social");
  assert.equal(lead.utmCampaign, "apartment-moves");
  assert.equal(lead.utmContent, "feed");
  assert.equal(lead.fbclid, "AbCdEfHistoricClickId");
  assert.equal(lead.attributionEvidence, "Captured URL query");
});

test("filters and sorts recent Netlify form leads without losing normalized fields", () => {
  const now = new Date();
  const recent = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString();
  const older = new Date(now.getTime() - 400 * 24 * 60 * 60 * 1000).toISOString();
  const records = recentNormalizedSubmissions([
    { id: "old", created_at: older, data: { fullName: "Old Lead" } },
    { id: "new", created_at: recent, data: { fullName: "New Lead" } },
  ], 365);
  assert.equal(records.length, 1);
  assert.equal(records[0].fullName, "New Lead");
});
