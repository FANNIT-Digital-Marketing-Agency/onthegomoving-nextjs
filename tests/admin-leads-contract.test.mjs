import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../components/pages/AdminLeads.tsx", import.meta.url), "utf8");

test("the compact dashboard preserves requested summary columns and expandable detail controls", () => {
  for (const label of ["Name", "Contact", "Message", "Ad Source", "Attribution", "Submitted", "Record"]) {
    assert.match(source, new RegExp(`>${label}<`));
  }
  assert.match(source, /expandedLeadId/);
  assert.match(source, /full details/);
  assert.match(source, /First landing URL/);
  assert.match(source, /Referrer/);
  assert.match(source, /UTM Content/);
  assert.match(source, />Content</);
  assert.match(source, /Attribution evidence/);
  assert.match(source, /min-w-\[1240px\] table-fixed/);
});

test("dashboard source display uses direct attribution instead of landing-page or source-label inference", () => {
  assert.match(source, /classifyLeadAttribution/);
  assert.match(source, /Unattributed/);
  assert.doesNotMatch(source, /FB_LABELS/);
  assert.doesNotMatch(source, /GOOGLE_LABELS/);
  assert.doesNotMatch(source, /inferred/);
  assert.doesNotMatch(source, /page\.startsWith\("\/get\/"\)/);
});

test("dashboard exposes a direct UTM source and medium breakdown for Tagged Other leads", () => {
  assert.match(source, /taggedOtherBreakdown/);
  assert.match(source, /Tagged Other Breakdown/);
  assert.match(source, /Direct UTM source \/ medium values only/);
  assert.match(source, /attributionPart\(lead\.utmSource\)/);
  assert.match(source, /attributionPart\(lead\.utmMedium\)/);
});

test("Netlify Forms records are not offered a database-only delete action", () => {
  assert.match(source, /lead\.source === "netlify-forms"/);
  assert.match(source, /Form record/);
});
