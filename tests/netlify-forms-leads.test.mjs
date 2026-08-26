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
    },
  });
  assert.equal(lead.id, "form-123");
  assert.equal(lead.moveSize, "2 Bedrooms");
  assert.equal(lead.source, "netlify-forms");
  assert.equal(lead.webhookStatus, "form-recorded");
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
