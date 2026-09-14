import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const data = fs.readFileSync(path.join(root, "lib/blogData.ts"), "utf8");
const posts = fs.readFileSync(path.join(root, "lib/blogPosts.ts"), "utf8");
const sitemap = fs.readFileSync(path.join(root, "public/sitemap.xml"), "utf8");
const llms = fs.readFileSync(path.join(root, "public/llms.txt"), "utf8");
const slug = "bellevue-townhome-move-stairs-access-plan";

test("Bellevue townhome article is staged with complete source coverage", () => {
  const article = data.slice(data.indexOf("\"" + slug + "\":"));
  assert.notEqual(article, data);
  assert.match(article, /dateISO\": \"2026-09-14\"/);
  assert.equal((article.match(/\"heading\":/g) || []).length, 7);
  assert.equal((article.match(/\"q\":/g) || []).length, 6);
  for (const destination of ["/bellevue-movers/", "/residential-moving/", "/packing-services/", "/when-to-book-movers-bellevue/", "/bellevue-moving-estimate-checklist/", "/bellevue-portable-storage-container-move-guide/"]) {
    assert.ok(article.includes(destination));
  }
  assert.ok(article.includes("City of Bellevue residential parking guidance"));
  const donorStart = data.indexOf("\"how-to-prepare-for-movers\":");
  const donorEnd = data.indexOf("\"how-to-protect-fragile-items-during-a-move\":", donorStart);
  const donor = data.slice(donorStart, donorEnd);
  assert.ok(donor.includes("/" + slug + "/"));
  assert.ok(posts.includes("slug: \"" + slug + "\""));
  assert.ok(posts.includes("image: BRAND_IMAGES.crewStaircaseCarrying"));
  assert.ok(sitemap.includes("https://onthegomoving.com/" + slug + "/"));
  assert.ok(llms.includes("https://onthegomoving.com/" + slug + "/"));
});
