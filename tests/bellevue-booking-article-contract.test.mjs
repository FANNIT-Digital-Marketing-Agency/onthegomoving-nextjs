import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), "utf8");

test("backdated Bellevue booking article has the required unique intent, date, and source files", () => {
  const blogData = read("lib/blogData.ts");
  const blogPosts = read("lib/blogPosts.ts");
  const sitemap = read("public/sitemap.xml");
  const llms = read("public/llms.txt");
  const slug = "when-to-book-movers-bellevue";

  assert.match(blogData, new RegExp(`"${slug}": \\{`));
  assert.match(blogData, /title: `When to Book Movers for a Bellevue Move: A Practical Timing Guide`/);
  assert.match(blogData, /date: "August 24, 2026"/);
  assert.match(blogData, /dateISO: "2026-08-24"/);
  assert.match(blogData, /heroImage: BRAND_IMAGES\.truckBellevueSkyline/);
  assert.match(blogData, /href="\/residential-moving\/"/);
  assert.match(blogData, /href="\/apartment-moving\/"/);
  assert.match(blogData, /href="\/bellevue-moving-estimate-checklist\/"/);
  assert.match(blogData, /href="\/how-to-time-your-move-mortgage-closing-date\/"/);
  assert.match(blogData, /Bellevue mover booking-timing guide/);
  assert.match(blogPosts, new RegExp(`slug: "${slug}"[\\s\\S]*?date: "August 24, 2026"`));
  assert.equal(blogPosts.indexOf(`slug: "${slug}"`) < blogPosts.indexOf('slug: "redmond-move-day-planning-checklist"'), true);
  assert.match(sitemap, new RegExp(`<loc>https://onthegomoving\\.com/${slug}/</loc>[\\s\\S]*?<lastmod>2026-08-24</lastmod>`));
  assert.match(llms, new RegExp(`https://onthegomoving\\.com/${slug}/`));
});
