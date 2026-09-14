import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const sitemap = fs.readFileSync(path.join(root, "public/sitemap.xml"), "utf8");
const llms = fs.readFileSync(path.join(root, "public/llms.txt"), "utf8");

const canonicalArticles = [
  "apartment-hunting-checklist-what-to-look-for-before-you-sign",
  "commercial-moving-timeline-what-to-expect",
  "what-to-know-before-signing-lease-washington-state",
];

const removedLifestyleSlugs = [
  "best-things-to-do-in-everett-wa",
  "things-to-do-in-lynnwood-wa",
  "things-to-do-on-mercer-island",
  "things-to-do-in-sammamish",
  "things-to-do-in-kirkland-wa",
  "things-to-do-in-seattle-in-summer",
  "things-to-do-in-seattle-in-winter",
  "best-things-to-do-in-redmond",
  "things-to-do-in-shoreline-wa",
  "parks-in-bellevue",
  "parks-in-lynnwood",
  "lake-sammamish-parks",
  "kirkland-waterfront",
  "parks-in-redmond-wa",
  "attractions-in-seattle",
  "best-restaurants-in-seattle",
  "restaurant-in-redmond",
  "seattle-restaurant-fremont",
  "mercer-island-restaurants",
  "shopping-in-seattle",
];

test("AI content map remediation keeps only canonical sitemap entries and approved moving-focused map entries", () => {
  for (const slug of canonicalArticles) {
    const canonicalUrl = `https://onthegomoving.com/${slug}/`;
    const wwwUrl = `https://www.onthegomoving.com/${slug}/`;
    assert.equal((sitemap.match(new RegExp(canonicalUrl, "g")) || []).length, 1);
    assert.equal(sitemap.includes(wwwUrl), false);
  }

  const sourceNotes = llms.indexOf("## Source and Accuracy Notes");
  assert.ok(sourceNotes > -1);
  assert.ok(llms.indexOf("seattle-office-building-access-worksheet") < sourceNotes);
  assert.ok(llms.indexOf("bellevue-move-out-checklist-apartments-condos") < sourceNotes);

  for (const slug of removedLifestyleSlugs) {
    assert.equal(llms.includes(`https://onthegomoving.com/${slug}/`), false);
  }

  assert.match(
    llms,
    /Office Relocation Checklist: From Lease Signing to Move-In Day[\s\S]*including IT, vendor booking, employee communication, and post-move tasks/,
  );
});
