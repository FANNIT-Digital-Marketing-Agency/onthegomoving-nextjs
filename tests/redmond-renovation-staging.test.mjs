import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const data = fs.readFileSync(path.join(root, "lib/blogData.ts"), "utf8");
const posts = fs.readFileSync(path.join(root, "lib/blogPosts.ts"), "utf8");
const sitemap = fs.readFileSync(path.join(root, "public/sitemap.xml"), "utf8");
const llms = fs.readFileSync(path.join(root, "public/llms.txt"), "utf8");
const slug = "redmond-home-renovation-moving-storage";

test("Redmond renovation article is staged with complete source coverage", () => {
  const article = data.slice(data.indexOf("\"" + slug + "\":"));
  assert.notEqual(article, data);
  assert.match(article, /dateISO\": \"2026-09-02\"/);
  assert.equal((article.match(/\"heading\":/g) || []).length, 7);
  assert.equal((article.match(/\"q\":/g) || []).length, 6);
  for (const destination of ["/redmond-movers/", "/storage-services/", "/packing-services/", "/how-to-pack-a-storage-unit/", "/redmond-move-day-planning-checklist/"]) {
    assert.ok(article.includes(destination));
  }
  const donor = data.slice(data.indexOf("\"how-to-pack-a-storage-unit\":"), data.indexOf("\"storage-unit-prices\":"));
  assert.ok(donor.includes("/" + slug + "/"));
  assert.ok(posts.includes("slug: \"" + slug + "\""));
  assert.ok(sitemap.includes("https://onthegomoving.com/" + slug + "/"));
  assert.ok(llms.includes("https://onthegomoving.com/" + slug + "/"));
});
