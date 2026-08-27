import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const renderer = fs.readFileSync(path.join(root, "components/pages/BlogPost.tsx"), "utf8");

test("authored blog links have a persistent visible treatment in intros, sections, and FAQs", () => {
  assert.match(renderer, /const ARTICLE_CONTENT_LINK_CLASSES = "[^"]*\[&_a\]:underline[^"]*\[&_a\]:decoration-2[^"]*\[&_a:focus-visible\]:outline[^"]*"/);
  assert.match(renderer, /className=\{`text-lg text-gray-700[\s\S]*?\$\{ARTICLE_CONTENT_LINK_CLASSES\}`\}/);
  assert.match(renderer, /className=\{`text-gray-600 leading-relaxed space-y-3[\s\S]*?\$\{ARTICLE_CONTENT_LINK_CLASSES\}`\}/);
  assert.match(renderer, /dangerouslySetInnerHTML=\{\{ __html: faq\.a \}\}/);
  assert.match(renderer, /className=\{`text-gray-600 text-sm leading-relaxed \$\{ARTICLE_CONTENT_LINK_CLASSES\}`\}/);
});
