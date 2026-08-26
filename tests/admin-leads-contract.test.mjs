import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../components/pages/AdminLeads.tsx", import.meta.url), "utf8");

test("the compact dashboard preserves the tracked lead columns", () => {
  for (const label of ["Name", "Contact", "Move Details", "Ad Source", "Submitted", "Record"]) {
    assert.match(source, new RegExp(`>${label}<`));
  }
  assert.match(source, /min-w-\[1080px\] table-fixed/);
});

test("Netlify Forms records are not offered a database-only delete action", () => {
  assert.match(source, /lead\.source === "netlify-forms"/);
  assert.match(source, /Form record/);
});
