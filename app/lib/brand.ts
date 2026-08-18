export const brand = {
  productName: "MergeVista",
  legalName: "MergeVista LLC",
  tagline: "AI-Powered IT M&A Execution Platform",
  websiteUrl: "https://www.mergevista.com",
  supportEmail: "support@mergevista.com",
  copyrightYear: 2026,
  governingLaw: "Texas",
  venue: "Collin County, Texas",
  privacyEffectiveDate: "August 17, 2026",
  termsEffectiveDate: "August 18, 2026",
  securityReviewDate: "August 18, 2026",
  legalPaths: {
    privacy: "/privacy",
    terms: "/terms",
    security: "/security",
    support: "/support",
  },
} as const;

export function canonicalUrl(path: string) {
  return new URL(path, brand.websiteUrl).toString();
}

export function supportMailto(subject?: string) {
  return `mailto:${brand.supportEmail}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}
