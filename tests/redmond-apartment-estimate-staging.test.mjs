import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const blogData = fs.readFileSync(path.join(root, "lib/blogData.ts"), "utf8");
const blogPosts = fs.readFileSync(path.join(root, "lib/blogPosts.ts"), "utf8");
const sitemap = fs.readFileSync(path.join(root, "public/sitemap.xml"), "utf8");
const llms = fs.readFileSync(path.join(root, "public/llms.txt"), "utf8");
const slug = "redmond-apartment-moving-estimate";
const recordStart = blogData.indexOf(`  "${slug}": {`);
const recordEnd = blogData.indexOf("\n  \"", recordStart + 4);
const record = blogData.slice(recordStart, recordEnd === -1 ? undefined : recordEnd);

function wordCount(value) {
  return value.replace(/<[^>]+>/g, " ").match(/[\p{L}\p{N}][\p{L}\p{N}'-]*/gu)?.length ?? 0;
}

test("staged Redmond estimate guide preserves the approved content, date, and complete internal-link plan", () => {
  assert.notEqual(recordStart, -1);
  assert.match(record, /title: `What to Tell Movers When You Request a Redmond Apartment Moving Estimate`/);
  assert.match(record, /date: "August 26, 2026"/);
  assert.match(record, /dateISO: "2026-08-26"/);
  assert.match(record, /heroImage: BRAND_IMAGES\.crewCarryingUpRamp/);
  assert.match(record, /<p>Moving into or out of an apartment in Redmond can look simple from the outside\./);
  assert.match(record, /The useful comparison is not just the starting price\./);
  assert.equal((record.match(/type: "h2"/g) ?? []).length, 7);
  assert.equal((record.match(/q: `/g) ?? []).length, 6);
  assert.ok(wordCount(record) >= 2600, `Expected at least 2,600 rendered source words; found ${wordCount(record)}`);

  for (const href of [
    "/redmond-movers/",
    "/apartment-moving/",
    "/packing-services/",
    "/redmond-move-day-planning-checklist/",
    "/bellevue-moving-estimate-checklist/",
    "/apartment-moving-tips/",
  ]) {
    assert.match(record, new RegExp(`href="${href}"`));
  }
});

test("staged Redmond estimate guide has a natural backward link and supporting index records", () => {
  assert.match(blogData, /href="\/redmond-apartment-moving-estimate\/">Redmond apartment moving estimate guide<\/a>/);
  assert.ok(blogPosts.indexOf('slug: "when-to-book-movers-bellevue"') < blogPosts.indexOf(`slug: "${slug}"`));
  assert.ok(blogPosts.indexOf(`slug: "${slug}"`) < blogPosts.indexOf('slug: "redmond-move-day-planning-checklist"'));
  assert.match(sitemap, new RegExp(`<loc>https://onthegomoving\\.com/${slug}/</loc>`));
  assert.match(llms, new RegExp(`https://onthegomoving\\.com/${slug}/`));
});
