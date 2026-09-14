import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const [header, quoteForm, servicePage, storageLanding, seattleHouse, submitLead] = await Promise.all([
  readFile(new URL("../components/layout/Header.tsx", import.meta.url), "utf8"),
  readFile(new URL("../components/QuoteForm.tsx", import.meta.url), "utf8"),
  readFile(new URL("../components/pages/ServicePage.tsx", import.meta.url), "utf8"),
  readFile(new URL("../components/pages/landing/StorageServicesLanding.tsx", import.meta.url), "utf8"),
  readFile(new URL("../components/pages/landing/SeattleHouseLanding.tsx", import.meta.url), "utf8"),
  readFile(new URL("../netlify/functions/submit-lead.js", import.meta.url), "utf8"),
]);

const offer = "Store with us and get 10% off your move";
const conditions = "Requires at least one month of storage. Applies to moving services only and cannot be combined with another offer.";

test("storage discount appears in the header and canonical storage page with the approved conditions", () => {
  assert.match(header, new RegExp(offer));
  assert.match(header, /href="\/storage-services\/#storage-discount"/);
  assert.match(header, /sm:hidden bg-\[\#fbc319\]/);
  assert.match(header, /hidden sm:block py-1\.5 px-4/);
  assert.match(servicePage, new RegExp(offer));
  assert.match(servicePage, /Requires at least one month of storage\./);
  assert.match(servicePage, /The discount applies to moving services only and cannot be combined with another offer\./);
});

test("quote form reuses the existing storage field and retains transparent eligibility copy", () => {
  assert.match(quoteForm, /showStorageOffer\?: boolean/);
  assert.match(quoteForm, new RegExp(offer));
  assert.match(quoteForm, new RegExp(conditions));
  assert.match(quoteForm, /netlifyFormData\.append\("wantsStorage", formData\.freeStorage \? "yes" : "no"\)/);
  assert.match(quoteForm, /wantsStorage: formData\.freeStorage/);
  assert.match(storageLanding, /defaultFreeStorage=\{true\}/);
});

test("partner discount flow does not silently stack the storage offer and SuperMove receives an explicit note", () => {
  assert.match(seattleHouse, /showStorageOffer=\{false\}/);
  assert.match(submitLead, /Storage offer requested: Store with us for at least one month and get 10% off your move/);
  assert.match(submitLead, /WEBSITE_LEAD/);
  assert.match(submitLead, /\.\.\.\(lead\.supermoveTags \|\| \[\]\)/);
});
