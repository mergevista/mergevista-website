type ArticleStructuredDataProps = {
  title: string;
  description: string;
  path: string;
  published: string;
};

export default function ArticleStructuredData({
  title,
  description,
  path,
  published,
}: ArticleStructuredDataProps) {
  const url = `https://www.mergevista.com${path}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: published,
    dateModified: published,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      name: "MergeVista Insights",
      url: "https://www.mergevista.com/insights",
    },
    publisher: {
      "@type": "Organization",
      name: "MergeVista LLC",
      url: "https://www.mergevista.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mergevista.com/brand/mergevista-favicon-512.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
