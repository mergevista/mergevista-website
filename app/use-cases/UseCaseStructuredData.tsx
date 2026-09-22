import { brand, canonicalUrl } from "../lib/brand";
import type { UseCase } from "./data";

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function UseCasesCollectionStructuredData({ items }: { items: UseCase[] }) {
  const url = canonicalUrl("/use-cases");
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: "IT M&A Use Cases",
    description: "MergeVista use cases for sellers, acquirers, private equity firms, enterprises, carve-out teams and consulting partners.",
    isPartOf: { "@id": `${brand.websiteUrl}/#website` },
    about: { "@id": `${brand.websiteUrl}/#software` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: canonicalUrl(`/use-cases/${item.slug}`),
      })),
    },
  }} />;
}

export function UseCaseDetailStructuredData({ item }: { item: UseCase }) {
  const url = canonicalUrl(`/use-cases/${item.slug}`);
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: item.title,
        description: item.seoDescription,
        isPartOf: { "@id": `${brand.websiteUrl}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: item.title,
        serviceType: "IT M&A execution platform use case",
        description: item.seoDescription,
        url,
        provider: { "@id": `${brand.websiteUrl}/#organization` },
        audience: { "@type": "Audience", audienceType: item.audience },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: brand.websiteUrl },
          { "@type": "ListItem", position: 2, name: "Use Cases", item: canonicalUrl("/use-cases") },
          { "@type": "ListItem", position: 3, name: item.title, item: url },
        ],
      },
    ],
  }} />;
}
