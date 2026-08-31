import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");
const slug = "bellevue-move-out-checklist-apartments-condos";
const articleUrl = `/${slug}/`;

test("staged Bellevue move-out article preserves its date, full content, and six contextual destinations", () => {
  const blogData = read("lib/blogData.ts");
  const start = blogData.indexOf(`"${slug}": {`);
  const end = blogData.indexOf("\n  }\n};", start);
  assert.ok(start >= 0, "the staged article must have a BLOG_DATA record");
  assert.ok(end > start, "the staged article must end at the BLOG_DATA boundary");
  const record = blogData.slice(start, end);

  assert.match(record, /date: "August 31, 2026"/);
  assert.match(record, /dateISO: "2026-08-31"/);
  assert.equal((record.match(/"type": "h2"/g) ?? []).length, 7);
  assert.equal((record.match(/"q":/g) ?? []).length, 6);
  assert.ok(record.split(/\s+/).length >= 2500, "the staged record must retain the complete approved draft");

  for (const url of [
    "/bellevue-movers/",
    "/apartment-moving/",
    "/packing-services/",
    "/when-to-book-movers-bellevue/",
    "/bellevue-moving-estimate-checklist/",
    "/apartment-moving-tips/",
  ]) {
    assert.ok(record.includes(`href=\\"${url}\\"`) || record.includes(`href="${url}"`), `missing contextual link to ${url}`);
  }

  assert.doesNotMatch(record, /\b(IT services|IT relocation|servers|networks|technology infrastructure)\b/i);
  assert.doesNotMatch(record, /—/);
});

test("staged publication has a current-date blog index entry, sitemap and llms entries, plus the backward donor", () => {
  const blogPosts = read("lib/blogPosts.ts");
  const blogData = read("lib/blogData.ts");
  const sitemap = read("public/sitemap.xml");
  const llms = read("public/llms.txt");

  assert.match(blogPosts, new RegExp(`slug: "${slug}"[\\s\\S]{0,600}date: "August 31, 2026"`));
  assert.match(sitemap, new RegExp(`https://onthegomoving\\.com${articleUrl}`));
  assert.match(llms, new RegExp(`https://onthegomoving\\.com${articleUrl}`));

  const donorStart = blogData.indexOf('"when-to-book-movers-bellevue": {');
  const donorEnd = blogData.indexOf('\n  },\n  "redmond-apartment-moving-estimate"', donorStart);
  const donor = blogData.slice(donorStart, donorEnd);
  assert.ok(donor.includes(`href="${articleUrl}"`), "the Bellevue booking guide must link forward to the new move-out guide");
});
