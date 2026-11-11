import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

const expectedPages = [
  "index.html",
  "platform.html",
  "solutions.html",
  "services.html",
  "pricing.html",
  "use-cases.html",
  "ai-capabilities.html",
  "insights.html",
  "product-demo.html",
  "insights/application-not-separation-boundary-interface-is.html",
  "insights/exception-list-real-separation-plan.html",
  "book-a-demo.html",
  "guided-trial.html",
  "capabilities/transaction-baseline.html",
  "capabilities/transaction-control.html",
  "capabilities/day-1-readiness.html",
  "capabilities/migration-tsa-exit.html",
  "solutions/divestitures-separations.html",
  "solutions/acquisitions-integrations.html",
  "solutions/day-1-readiness.html",
  "solutions/tsa-management-exit.html",
  "use-cases/serial-acquirers.html",
  "ai-capabilities/human-governed-ai.html",
  "insights/tsa-exit-not-cost-exit.html",
];

test("exports the primary public website routes", async () => {
  await Promise.all(
    expectedPages.map((page) => access(new URL(page, outputRoot))),
  );
  await access(new URL("robots.txt", outputRoot));
  await access(new URL("sitemap.xml", outputRoot));
});

test("exports a complete, branded landing page", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<title>MergeVista \| AI-Powered IT M&amp;A Execution Platform<\/title>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.mergevista\.com"\s*\/>/i);
  assert.match(html, /One operating model/i);
  assert.match(html, /Guided Trial/i);
  assert.match(html, /Book a demo/i);
  assert.match(html, /redesign-deal-execution-dashboard-landing\.png/i);
  assert.match(html, /mergevista-tab-icon-v8-32\.png/i);
  assert.match(html, /application\/ld\+json/i);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/i);
});

test("keeps key site navigation consistent across page families", async () => {
  const pages = [
    "platform.html",
    "solutions/divestitures-separations.html",
    "use-cases/serial-acquirers.html",
    "ai-capabilities/human-governed-ai.html",
    "insights/tsa-exit-not-cost-exit.html",
  ];

  for (const page of pages) {
    const html = await readFile(new URL(page, outputRoot), "utf8");
    assert.match(html, /aria-label="Primary navigation"/i, page);
    assert.match(html, /href="\/services"[^>]*>Services/i, page);
    assert.match(html, /href="\/pricing"[^>]*>Pricing/i, page);
    assert.match(html, /href="\/guided-trial"[^>]*>Guided Trial/i, page);
    assert.match(html, /aria-label="Footer navigation"/i, page);
    assert.match(html, /href="\/privacy"/i, page);
    assert.match(html, /href="\/terms"/i, page);
  }
});

test("exports the pricing page with complete SEO signals", async () => {
  const html = await readFile(new URL("pricing.html", outputRoot), "utf8");
  const sitemap = await readFile(new URL("sitemap.xml", outputRoot), "utf8");

  assert.match(html, /<title>IT M&amp;A Platform Pricing Structure \| MergeVista<\/title>/i);
  assert.match(html, /name="description" content="Understand MergeVista pricing/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.mergevista\.com\/pricing"\s*\/>/i);
  assert.match(html, /property="og:url" content="https:\/\/www\.mergevista\.com\/pricing"/i);
  assert.match(html, /name="robots" content="index, follow/i);
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /Annual platform subscription/i);
  assert.match(html, /Transaction execution fee/i);
  assert.match(html, /Platform implementation &amp; enablement/i);
  assert.match(html, /One-time per customer/i);
  assert.match(sitemap, /<loc>https:\/\/www\.mergevista\.com\/pricing<\/loc>/i);
});

test("exports the services page with complete SEO signals", async () => {
  const html = await readFile(new URL("services.html", outputRoot), "utf8");
  const sitemap = await readFile(new URL("sitemap.xml", outputRoot), "utf8");

  assert.match(html, /<title>Platform-Enabled IT M&amp;A Services \| MergeVista<\/title>/i);
  assert.match(html, /name="description" content="Accelerate IT M&amp;A execution/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.mergevista\.com\/services"\s*\/>/i);
  assert.match(html, /property="og:url" content="https:\/\/www\.mergevista\.com\/services"/i);
  assert.match(html, /name="robots" content="index, follow/i);
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /Platform-Enabled IT M&amp;A Services/i);
  assert.match(html, /MergeVista platform-enabled services/i);
  assert.match(html, /Transaction Launch/i);
  assert.match(html, /Execution Support/i);
  assert.match(html, /Managed Technology Transition/i);
  assert.match(sitemap, /<loc>https:\/\/www\.mergevista\.com\/services<\/loc>/i);
});
