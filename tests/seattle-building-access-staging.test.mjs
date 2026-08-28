import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const repo = '/home/ubuntu/otgm-leads-repair';
const slug = 'seattle-office-building-access-worksheet';
const articleUrl = `https://onthegomoving.com/${slug}/`;

test('staged Seattle worksheet preserves the approved content, link map, chronological date, and backward donor', () => {
  const blogData = fs.readFileSync(`${repo}/lib/blogData.ts`, 'utf8');
  const blogPosts = fs.readFileSync(`${repo}/lib/blogPosts.ts`, 'utf8');
  const sitemap = fs.readFileSync(`${repo}/public/sitemap.xml`, 'utf8');
  const llms = fs.readFileSync(`${repo}/public/llms.txt`, 'utf8');
  const start = blogData.indexOf(`"${slug}": {`);
  const end = blogData.indexOf('\n  }\n};', start);
  const article = blogData.slice(start, end);

  assert.ok(start > -1, 'article record exists in BLOG_DATA');
  assert.match(article, /date: "August 28, 2026"/);
  assert.match(article, /dateISO: "2026-08-28"/);
  assert.match(article, /heroImage: BRAND_IMAGES\.officeMoveAction/);
  assert.equal((article.match(/type: "h2"/g) || []).length, 8);
  assert.equal((article.match(/q: `/g) || []).length, 6);
  assert.ok(article.replace(/<[^>]+>/g, ' ').split(/\s+/).length >= 2600, 'rendered article copy meets minimum depth');
  [
    '/seattle-movers/',
    '/commercial-moving/',
    '/office-moving/',
    '/commercial-moving-timeline-what-to-expect/',
    '/office-relocation-checklist-lease-to-move-in/',
    '/what-to-consider-before-signing-office-lease-eastside/',
  ].forEach((href) => assert.match(article, new RegExp(`href="${href}"`)));
  assert.doesNotMatch(article, /\bIT\b/);
  assert.doesNotMatch(article, /\b(server|network|workstation|technology infrastructure)\b/i);
  assert.doesNotMatch(article, /—/);
  assert.match(blogData, new RegExp(`href="/${slug}/"`), 'commercial timeline links forward to the new worksheet');
  assert.match(blogPosts, new RegExp(`slug: "${slug}"[\\s\\S]*?date: "August 28, 2026"`));
  assert.ok(blogPosts.indexOf(`slug: "${slug}"`) < blogPosts.indexOf('slug: "when-to-book-movers-bellevue"'), 'August 28 item sits before earlier dated entries');
  assert.match(sitemap, new RegExp(articleUrl));
  assert.match(llms, new RegExp(articleUrl));
});
