import { brand, canonicalUrl } from "../lib/brand";
import type { Solution } from "./data";

export default function SolutionStructuredData({ solution }: { solution: Solution }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${solution.name} for IT M&A`,
    description: solution.seoDescription,
    url: canonicalUrl(`/solutions/${solution.slug}`),
    provider: { "@type": "Organization", name: brand.legalName, url: brand.websiteUrl },
    areaServed: "Worldwide",
    serviceType: `IT M&A ${solution.name}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
