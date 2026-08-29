import type { Metadata } from "next";
import { canonicalUrl } from "./brand";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = canonicalUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "MergeVista",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "MergeVista — AI-Powered IT M&A Execution Platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
