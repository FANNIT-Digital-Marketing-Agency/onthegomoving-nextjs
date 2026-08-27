import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const component = await readFile(new URL("../components/pages/Partners.tsx", import.meta.url), "utf8");

test("Partners page references the supplied Bennett Family Foundation and Seattle Children’s public logo assets", async () => {
  assert.match(component, /src="\/assets\/bennett-foundation\.webp"/);
  assert.match(component, /alt="Bennett Family Foundation"/);
  assert.match(component, /src="\/assets\/seattle-childrens\.png"/);
  assert.match(component, /alt="Seattle Children’s Hospital, Research, and Foundation"/);

  await access(new URL("../public/assets/bennett-foundation.webp", import.meta.url));
  await access(new URL("../public/assets/seattle-childrens.png", import.meta.url));
});
