import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { Badge } from "../../components/poc/badge";
import { Button } from "../../components/poc/button";
import { Card } from "../../components/poc/card";
import { pageMetadata } from "../../lib/seo";
import CapabilityStructuredData from "../CapabilityStructuredData";
import { capabilityPackages, getCapabilityPackage } from "../data";

type PageProps = { params: Promise<{ slug: string }> };
type CapabilityItem = NonNullable<ReturnType<typeof getCapabilityPackage>>;

function ProductVisual({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <Card className="overflow-hidden shadow-[0_18px_48px_rgba(24,24,27,0.08)]">
      <div className="flex h-9 items-center border-b border-zinc-800 bg-zinc-950 px-3.5 text-white">
        <div className="flex gap-1.5">
          <i className="size-1.5 rounded-full bg-red-400" />
          <i className="size-1.5 rounded-full bg-amber-300" />
          <i className="size-1.5 rounded-full bg-emerald-400" />
        </div>
        <span className="ml-3 text-[9px] tracking-wide text-zinc-400">
          LIVE PRODUCT VIEW{" "}
          <i className="ml-2 not-italic">Illustrative sample data</i>
        </span>
        <Badge className="ml-auto border-zinc-700 bg-zinc-900 text-zinc-300">
          {label}
        </Badge>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1672}
        height={941}
        className="h-auto w-full"
        sizes="(max-width:900px) 94vw,54vw"
      />
    </Card>
  );
}

function CapabilityConcept({
  item,
  related,
}: {
  item: CapabilityItem;
  related: typeof capabilityPackages;
}) {
  const heroImage =
    item.slug === "transaction-baseline"
      ? "/product/redesign-transaction-baseline-network-devices.png"
      : item.slug === "migration-tsa-exit"
        ? "/product/redesign-tsa-exit-readiness.png"
        : item.slug === "transaction-control"
          ? "/product/redesign-transaction-control-program-management.png"
          : item.slug === "day-1-readiness"
            ? "/product/redesign-day-1-contracts-readiness.png"
      : "/product/redesign-deal-dashboard.png";
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <CapabilityStructuredData item={item} />
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.28] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="relative mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <Badge className="gap-2 bg-white">
              <Sparkles className="size-3.5 text-[#1559a6]" />
              {item.eyebrow}
            </Badge>
            <h1 className="mt-7 max-w-[650px] text-[clamp(2.75rem,4.45vw,4.6rem)] font-medium leading-[1.01] tracking-[-0.048em]">
              {item.name}
              <span className="mt-5 block max-w-[610px] text-[.55em] font-normal leading-[1.18] tracking-[-0.035em] text-[#1559a6]">
                {item.headline}
              </span>
            </h1>
            <p className="mt-7 max-w-[620px] text-lg leading-8 text-zinc-600">
              {item.introduction}
            </p>
            <p className="mt-6 text-xs leading-6 text-zinc-500">
              <strong className="font-semibold text-zinc-700">Best for:</strong>{" "}
              {item.bestFor}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/book-a-demo">
                  Book a demo
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/guided-trial">Apply for a guided trial</Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:-mr-20">
            <ProductVisual
              src={heroImage}
              alt={item.imageAlt}
              label={item.imageLabel}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-[1560px] px-5 py-7 lg:px-8">
          <div className="text-center">
            <p className="text-[10px] font-semibold tracking-[0.17em] text-zinc-400">
              ONE MergeVista PLATFORM
            </p>
            <strong className="mt-3 block text-sm">{item.shortName}</strong>
            <p className="mt-2 text-sm text-zinc-600">
              Start here today. Expand across the transaction lifecycle without
              rebuilding your data, decisions or execution history.
            </p>
          </div>
          <div className="mt-6 grid divide-y divide-zinc-200 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {item.connected.slice(0, 4).map((x) => (
              <div
                key={x}
                className="px-5 py-3 text-center text-xs font-semibold text-zinc-700"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div>
            <Badge>THE BUSINESS PROBLEM</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              {item.problemTitle}
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-zinc-600">
              {item.problem}
            </p>
          </div>
          <Card className="bg-zinc-950 p-8 text-white sm:p-10">
            <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
              CONNECTED INFORMATION
            </Badge>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {item.connected.map((record) => (
                <div
                  key={record}
                  className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm"
                >
                  <Check className="size-4 text-blue-400" />
                  {record}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
            <div>
              <Badge className="bg-white">WHAT THIS PACKAGE ENABLES</Badge>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Focused adoption. Connected execution.
              </h2>
            </div>
            <div className="w-full max-w-[760px] lg:justify-self-end">
              <ProductVisual
                src="/product/redesign-contracts-licenses.png"
                alt="MergeVista connected execution workspace"
                label="CONNECTED EXECUTION"
              />
            </div>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {item.enables.map((point) => (
              <Card key={point} className="p-8">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-md bg-blue-50">
                    <Check className="size-4 text-[#1559a6]" />
                  </span>
                  <h3 className="text-lg font-medium leading-7">{point}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <Badge>OPERATIONAL OUTCOMES</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            What your team can govern with confidence.
          </h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {item.outcomes.map((outcome) => (
            <Card key={outcome} className="flex min-h-32 items-center p-8">
              <h3 className="text-xl font-medium">{outcome}</h3>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-16 lg:px-8">
          <Badge className="bg-white">EXPAND WITHIN THE SAME PLATFORM</Badge>
          <div className="mt-8 grid overflow-hidden rounded-xl border border-zinc-200 bg-white md:grid-cols-3">
            {related.map((candidate) => (
              <Link
                className="flex items-center justify-between border-t border-zinc-200 p-6 text-sm font-semibold first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0"
                href={`/capabilities/${candidate.slug}`}
                key={candidate.slug}
              >
                {candidate.shortName}
                <ArrowRight className="size-4 text-[#1559a6]" />
              </Link>
            ))}
          </div>
          <Button asChild variant="ghost" className="mt-5 -ml-4">
            <Link href="/platform">
              Explore the complete MergeVista platform
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div>
            <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.035em] sm:text-5xl">
              See {item.shortName} in your transaction context.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-400">
              Start with the capabilities you need today, with room to expand
              across the complete lifecycle.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="inverse">
              <Link href="/book-a-demo">
                Book a demo
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-zinc-700 bg-zinc-900"
            >
              <Link href="/guided-trial">Apply for a guided trial</Link>
            </Button>
          </div>
        </div>
      </section>
      <SiteFooter bordered />
    </main>
  );
}

export function generateStaticParams() {
  return capabilityPackages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCapabilityPackage(slug);
  if (!item) return {};
  return pageMetadata(
    `${item.shortName} for IT M&A | MergeVista`,
    item.seoDescription,
    `/capabilities/${item.slug}`,
  );
}

export default async function CapabilityPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getCapabilityPackage(slug);
  if (!item) notFound();
  const related = capabilityPackages.filter(
    (candidate) => candidate.slug !== item.slug,
  );
  return <CapabilityConcept item={item} related={related} />;
}
