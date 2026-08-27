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
          url: "/brand/mergevista-primary-dark.png",
          width: 714,
          height: 233,
          alt: "MergeVista — AI-Powered IT M&A Execution Platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/mergevista-primary-dark.png"],
    },
  };
}
