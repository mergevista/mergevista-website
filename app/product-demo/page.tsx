import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import DemoVideoCard from "../components/DemoVideoCard";
import { Badge } from "../components/poc/badge";
import { Button } from "../components/poc/button";
import { brand } from "../lib/brand";

const title = "MergeVista Product Demo | Connected IT M&A Execution";
const description =
  "Watch a concise product tour of MergeVista and see how teams connect inventory, contracts, TSA management, program execution, reporting, and readiness.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-demo" },
  openGraph: {
    type: "video.other",
    url: `${brand.websiteUrl}/product-demo`,
    siteName: "MergeVista",
    title,
    description,
    images: [
      {
        url: "/product/redesign-deal-execution-dashboard-landing.png",
        width: 1672,
        height: 941,
        alt: "MergeVista deal execution dashboard",
      },
    ],
    videos: [
      {
        url: "https://player.vimeo.com/video/1240902482?h=629b13653c",
        width: 1920,
        height: 1080,
        type: "text/html",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/product/redesign-deal-execution-dashboard-landing.png"],
  },
};

const videoData = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "MergeVista Product Demo",
  description,
  thumbnailUrl: [
    "https://i.vimeocdn.com/video/2218804427-fd67c08017fb3b2ea323a6d38e1a14cadc83a9da4b39a28dfe5e4702d817980a-d_1280",
  ],
  uploadDate: "2026-10-29",
  duration: "PT2M22S",
  embedUrl: "https://player.vimeo.com/video/1240902482?h=629b13653c",
  contentUrl: "https://vimeo.com/1240902482/629b13653c",
  publisher: {
    "@type": "Organization",
    name: brand.legalName,
    logo: {
      "@type": "ImageObject",
      url: `${brand.websiteUrl}/brand/mergevista-favicon-512.png`,
    },
  },
};

export default function ProductDemoPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] text-zinc-950">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoData) }}
      />

      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <Badge>MergeVista PRODUCT TOUR</Badge>
            <h1 className="mt-6 text-[clamp(2.7rem,5vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.05em]">
              See connected IT M&amp;A execution in action.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
              In just over two minutes, see how MergeVista connects the deal
              baseline, commercial obligations, execution plans, risks,
              reporting and readiness in one governed platform.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[1280px]">
            <DemoVideoCard priority />
          </div>

          <div className="mx-auto mt-8 flex max-w-[1280px] flex-col gap-5 border-t border-zinc-200 pt-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-600">
              {["One connected transaction view", "Evidence-backed AI", "Readiness from Day 1 through TSA exit"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="size-4 text-[#1559a6]" />
                  {item}
                </span>
              ))}
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link href="/book-a-demo">
                Book a guided demo
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
