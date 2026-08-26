import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
import test from "node:test";

const source = await readFile(new URL("../components/QuoteForm.tsx", import.meta.url), "utf8");

test("quote form captures first-touch query parameters before submit and persists canonical values to Netlify Forms", () => {
  assert.match(source, /captureFirstTouchAttribution\(\);/);
  assert.match(source, /if \(value && !sessionStorage\.getItem\(`otgm_\$\{key\}`\)\)/);
  for (const field of ["utmSource", "utmMedium", "utmCampaign", "utmContent", "utmTerm", "gclid", "fbclid"]) {
    assert.match(source, new RegExp(`netlifyFormData\\.append\\(\\"${field}\\"`));
  }
});
