import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../components/pages/AdminLeads.tsx", import.meta.url), "utf8");

test("the compact dashboard preserves requested summary columns and expandable detail controls", () => {
  for (const label of ["Name", "Contact", "Message", "Ad Source", "Attribution", "Submitted", "Record"]) {
    assert.match(source, new RegExp(`>${label}<`));
  }
  assert.match(source, /expandedLeadId/);
  assert.match(source, /full details/);
  assert.match(source, /First landing URL/);
  assert.match(source, /Referrer/);
  assert.match(source, /min-w-\[1240px\] table-fixed/);
});

test("Netlify Forms records are not offered a database-only delete action", () => {
  assert.match(source, /lead\.source === "netlify-forms"/);
  assert.match(source, /Form record/);
});
