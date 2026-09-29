import { brand, canonicalUrl } from "../lib/brand";
import type { CapabilityPackage } from "./data";

export default function CapabilityStructuredData({ item }: { item: CapabilityPackage }) {
  const url = canonicalUrl(`/capabilities/${item.slug}`);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: item.name,
        description: item.seoDescription,
        isPartOf: { "@id": `${brand.websiteUrl}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: item.name,
        serviceType: "IT M&A execution platform capability",
        description: item.seoDescription,
        url,
        provider: { "@id": `${brand.websiteUrl}/#organization` },
        isRelatedTo: { "@id": `${brand.websiteUrl}/#software` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: brand.websiteUrl },
          { "@type": "ListItem", position: 2, name: "Platform", item: canonicalUrl("/platform") },
          { "@type": "ListItem", position: 3, name: item.shortName, item: url },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
