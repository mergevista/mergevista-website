import type { MetadataRoute } from "next";
import { brand, canonicalUrl } from "./lib/brand";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: brand.websiteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: canonicalUrl("/book-a-demo"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: canonicalUrl("/contact"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl(brand.legalPaths.privacy),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: canonicalUrl(brand.legalPaths.security),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/platform"),
      lastModified: new Date("2026-08-28"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: canonicalUrl("/solutions"),
      lastModified: new Date("2026-08-28"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: canonicalUrl("/ai-capabilities"),
      lastModified: new Date("2026-08-28"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: canonicalUrl("/insights"),
      lastModified: new Date("2026-09-17"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: canonicalUrl("/insights/where-ai-belongs-in-it-ma"),
      lastModified: new Date("2026-09-17"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/insights/migration-wave-readiness"),
      lastModified: new Date("2026-09-11"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/insights/application-disposition-separation-strategy-execution"),
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/insights/day-1-is-not-independence"),
      lastModified: new Date("2026-09-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/insights/complete-it-ma-lifecycle"),
      lastModified: new Date("2026-08-27"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/insights/why-day-1-readiness-fails"),
      lastModified: new Date("2026-08-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/insights/evidence-based-tsa-exit"),
      lastModified: new Date("2026-08-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/insights/hidden-cost-disconnected-it-inventories"),
      lastModified: new Date("2026-08-06"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl(brand.legalPaths.terms),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: canonicalUrl(brand.legalPaths.support),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
