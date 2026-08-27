import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");
const slug = "when-to-book-movers-bellevue";

function extractArticleRecord(blogData) {
  const start = blogData.indexOf(`  "${slug}": {`);
  const end = blogData.indexOf("\n  }\n};", start);
  assert.notEqual(start, -1, "The Bellevue article record must exist.");
  assert.notEqual(end, -1, "The Bellevue article record must end cleanly.");
  return blogData.slice(start, end + "\n  }".length);
}

function renderedWordCount(source) {
  return source
    .replace(/<[^>]*>/g, " ")
    .replace(/[`{}\[\]":;,]/g, " ")
    .split(/\s+/)
    .filter((word) => /[A-Za-z0-9]/.test(word)).length;
}

test("rewritten Bellevue booking guide has complete content and every mapped in-body link", () => {
  const blogData = read("lib/blogData.ts");
  const blogPosts = read("lib/blogPosts.ts");
  const sitemap = read("public/sitemap.xml");
  const llms = read("public/llms.txt");
  const article = extractArticleRecord(blogData);

  assert.match(article, /title: `When to Book Movers for a Bellevue Move: A Practical Timing Guide`/);
  assert.match(article, /date: "August 24, 2026"/);
  assert.match(article, /dateISO: "2026-08-24"/);
  assert.match(article, /heroImage: BRAND_IMAGES\.truckBellevueSkyline/);
  assert.equal((article.match(/type: "h2"/g) ?? []).length, 7);
  assert.equal((article.match(/q: `/g) ?? []).length, 6);
  assert.equal(renderedWordCount(article) >= 2600, true, "Rendered article source should meet the 2,600-word minimum.");
  assert.equal(renderedWordCount(article) <= 2900, true, "Rendered article source should remain below 2,900 words.");

  const linkMap = [
    "/bellevue-movers/",
    "/apartment-moving/",
    "/residential-moving/",
    "/bellevue-moving-estimate-checklist/",
    "/how-to-time-your-move-mortgage-closing-date/",
    "/how-to-prepare-for-movers/",
  ];
  for (const destination of linkMap) {
    assert.equal((article.match(new RegExp(`href="${destination.replaceAll("/", "\\/")}"`, "g")) ?? []).length, 1, `${destination} must appear exactly once in the new article body.`);
  }
  assert.match(article, /Street Use Permit guidance/);

  const donorStart = blogData.indexOf('  "bellevue-moving-estimate-checklist": {');
  const donorEnd = blogData.indexOf('\n  "redmond-move-day-planning-checklist": {', donorStart);
  const donor = blogData.slice(donorStart, donorEnd);
  assert.match(donor, /href="\/when-to-book-movers-bellevue\/"/);
  assert.match(donor, /Bellevue mover booking-timing guide/);

  assert.match(blogPosts, new RegExp(`slug: "${slug}"[\\s\\S]*?date: "August 24, 2026"`));
  assert.equal(blogPosts.indexOf(`slug: "${slug}"`) < blogPosts.indexOf('slug: "redmond-move-day-planning-checklist"'), true);
  assert.match(sitemap, new RegExp(`<loc>https://onthegomoving\\.com/${slug}/</loc>[\\s\\S]*?<lastmod>2026-08-24</lastmod>`));
  assert.match(llms, new RegExp(`https://onthegomoving\\.com/${slug}/`));
});
