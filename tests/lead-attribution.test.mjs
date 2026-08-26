import assert from "node:assert/strict";
import test from "node:test";
import leadAttribution from "../lib/leadAttribution.js";

const { attributionLabel, classifyLeadAttribution } = leadAttribution;

test("classifies Google Ads only from a gclid or Google source plus paid medium", () => {
  assert.equal(classifyLeadAttribution({ gclid: "google-click-id" }), "google");
  assert.equal(classifyLeadAttribution({ utmSource: "google", utmMedium: "cpc" }), "google");
  assert.equal(classifyLeadAttribution({ utmSource: "google", utmMedium: "ad" }), "google");
  assert.equal(classifyLeadAttribution({ utmSource: "google", utmMedium: "organic" }), "tagged");
});

test("classifies Meta Ads only from an fbclid or Meta source plus paid medium", () => {
  assert.equal(classifyLeadAttribution({ fbclid: "AbCdEfMetaClickId" }), "meta");
  assert.equal(classifyLeadAttribution({ utmSource: "instagram", utmMedium: "paid_social" }), "meta");
  assert.equal(attributionLabel({ utmSource: "facebook", utmMedium: "cpc" }), "Meta Ads");
});

test("does not infer paid traffic from source labels or /get landing-page paths", () => {
  const untaggedLandingLead = {
    sourceLabel: "landing-social-residential-movers",
    sourcePage: "/get/fb-residential-movers/",
  };
  assert.equal(classifyLeadAttribution(untaggedLandingLead), "unattributed");
  assert.equal(attributionLabel(untaggedLandingLead), "Unattributed");
});
