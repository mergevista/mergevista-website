import { brand, canonicalUrl } from "../lib/brand";
import type { AiCapability } from "./data";

export default function AiCapabilityStructuredData({ capability }: { capability: AiCapability }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `MergeVista ${capability.name}`,
    description: capability.seoDescription,
    url: canonicalUrl(`/ai-capabilities/${capability.slug}`),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    publisher: { "@type": "Organization", name: brand.legalName, url: brand.websiteUrl },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
