import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const data = fs.readFileSync(path.join(root, "lib/blogData.ts"), "utf8");
const posts = fs.readFileSync(path.join(root, "lib/blogPosts.ts"), "utf8");
const sitemap = fs.readFileSync(path.join(root, "public/sitemap.xml"), "utf8");
const llms = fs.readFileSync(path.join(root, "public/llms.txt"), "utf8");
const slug = "moving-in-seattle-rain-practical-move-day-plan";

test("Seattle rainy-season guide is staged with complete source coverage", () => {
  const article = data.slice(data.indexOf("\"" + slug + "\":"));
  assert.notEqual(article, data);
  assert.match(article, /dateISO\": \"2026-09-11\"/);
  assert.equal((article.match(/\"heading\":/g) || []).length, 7);
  assert.equal((article.match(/\"q\":/g) || []).length, 6);
  for (const destination of ["/seattle-movers/", "/residential-moving/", "/packing-services/", "/8-tips-move-bad-weather/", "/apartment-moving-tips/"]) {
    assert.ok(article.includes(destination));
  }
  assert.ok(article.includes("National Weather Service Seattle/Tacoma"));
  const donorStart = data.indexOf("\"8-tips-move-bad-weather\":");
  const donorEnd = data.indexOf("\"changing-your-address-essential-checklist\":", donorStart);
  const donor = data.slice(donorStart, donorEnd);
  assert.ok(donor.includes("/" + slug + "/"));
  assert.ok(posts.includes("slug: \"" + slug + "\""));
  assert.ok(posts.includes("image: BRAND_IMAGES.crewHoodieAtTruck"));
  assert.ok(sitemap.includes("https://onthegomoving.com/" + slug + "/"));
  assert.ok(llms.includes("https://onthegomoving.com/" + slug + "/"));
});
