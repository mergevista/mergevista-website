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
import { getUseCase, useCases, type UseCase } from "../data";
import { UseCaseDetailStructuredData } from "../UseCaseStructuredData";

const useCaseProductImages: Record<string, string> = {
  "seller-transaction-readiness":
    "/product/redesign-transaction-baseline-network-devices.png",
  "first-time-occasional-acquirers":
    "/product/redesign-deal-dashboard-landing.png",
  "serial-acquirers": "/product/redesign-transition-readiness-platform.png",
  "private-equity-portfolio-operations":
    "/product/redesign-servers-platform.png",
  "enterprise-acquisitions-integrations":
    "/product/redesign-acquisitions-applications.png",
  "carve-outs-separation-tsa-exit":
    "/product/redesign-tsa-exit-readiness.png",
  "consulting-delivery-partners":
    "/product/redesign-transaction-control-program-management.png",
  "specialist-boutique-ma-firms":
    "/product/redesign-day-1-contracts-readiness.png",
};

export function generateStaticParams() {
  return useCases.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const item = getUseCase((await params).slug);
  return item
    ? pageMetadata(
        `${item.title} | MergeVista`,
        item.seoDescription,
        `/use-cases/${item.slug}`,
      )
    : {};
}

function ProductVisual({ item }: { item: UseCase }) {
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
          {item.title.toUpperCase()}
        </Badge>
      </div>
      <Image
        src={
          useCaseProductImages[item.slug] ??
          "/product/redesign-deal-dashboard.png"
        }
        alt={`MergeVista workspace for ${item.title}`}
        width={1672}
        height={941}
        className="h-auto w-full"
        sizes="(max-width:900px) 94vw,54vw"
      />
    </Card>
  );
}

export default async function UseCaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const item = getUseCase((await params).slug);
  if (!item) notFound();
  const pair: Record<string, string> = {
    "consulting-delivery-partners": "specialist-boutique-ma-firms",
    "specialist-boutique-ma-firms": "consulting-delivery-partners",
  };
  const paired = pair[item.slug];
  const related = [
    ...(paired ? useCases.filter((x) => x.slug === paired) : []),
    ...useCases.filter((x) => x.slug !== item.slug && x.slug !== paired),
  ].slice(0, 3);
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <UseCaseDetailStructuredData item={item} />
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.28] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="relative mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <Badge className="gap-2 bg-white">
              <Sparkles className="size-3.5 text-[#1559a6]" />
              Use case
            </Badge>
            <p className="mt-6 text-sm font-semibold text-[#1559a6]">
              {item.audience}
            </p>
            <h1 className="mt-7 max-w-[700px] text-[clamp(2.75rem,4.45vw,4.6rem)] font-medium leading-[1.01] tracking-[-0.048em]">
              {item.headline}
            </h1>
            <p className="mt-7 max-w-[640px] text-lg leading-8 text-zinc-600">
              {item.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/book-a-demo">
                  {item.cta}
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/use-cases">All use cases</Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:-mr-20">
            <ProductVisual item={item} />
          </div>
        </div>
      </section>
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-[1560px] px-5 py-7 lg:px-8">
          <p className="text-center text-[10px] font-semibold tracking-[0.17em] text-zinc-400">
            MERGEVISTA CONNECTS
          </p>
          <div className="mt-6 grid divide-y divide-zinc-200 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {["Fact base", "Decisions", "Execution", "Evidence"].map((x) => (
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
            <Badge>THE SITUATION</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              {item.title}
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-zinc-600">
              {item.challenge}
            </p>
          </div>
          <Card className="bg-zinc-950 p-8 text-white sm:p-10">
            <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
              WHEN THIS USE CASE FITS
            </Badge>
            <h3 className="mt-6 text-2xl font-medium">
              Recognize the situation early.
            </h3>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {item.signals.map((x) => (
                <div
                  key={x}
                  className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-4 text-sm leading-6"
                >
                  <Check className="mt-1 size-4 shrink-0 text-blue-400" />
                  {x}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section
        className="border-y border-zinc-200 bg-zinc-50"
        aria-label="Explore other use cases"
      >
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Badge className="bg-white">HOW MERGEVISTA SUPPORTS THE WORK</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Move from transaction pressure to controlled execution.
            </h2>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-xl border border-zinc-200 bg-white md:grid-cols-2 xl:grid-cols-4">
            {item.steps.map((step, i) => (
              <article
                key={step.title}
                className="border-t border-zinc-200 p-8 first:border-t-0 md:border-l md:[&:nth-child(-n+2)]:border-t-0 md:[&:nth-child(odd)]:border-l-0 xl:border-t-0 xl:[&:nth-child(odd)]:border-l xl:first:border-l-0"
              >
                <small className="text-[10px] font-semibold tracking-[.18em] text-[#1559a6]">
                  0{i + 1}
                </small>
                <h3 className="mt-8 text-xl font-medium tracking-[-.02em]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_.8fr]">
          <div>
            <Badge>EXPECTED OUTCOMES</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              What changes when the work is connected.
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {item.outcomes.map((x) => (
                <Card key={x} className="flex min-h-28 items-center p-7">
                  <h3 className="text-lg font-medium leading-7">{x}</h3>
                </Card>
              ))}
            </div>
          </div>
          <Card className="self-start bg-zinc-950 p-8 text-white sm:p-10">
            <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
              RELEVANT CAPABILITIES
            </Badge>
            <div className="mt-8 divide-y divide-zinc-800">
              {item.capabilities.map((x) => (
                <div key={x} className="flex items-center gap-3 py-4 text-sm">
                  <Check className="size-4 text-blue-400" />
                  {x}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-16 lg:px-8">
          <Badge className="bg-white">EXPLORE ANOTHER SITUATION</Badge>
          <div className="mt-8 grid overflow-hidden rounded-xl border border-zinc-200 bg-white md:grid-cols-3">
            {related.map((x) => (
              <Link
                className="flex items-center justify-between border-t border-zinc-200 p-6 text-sm font-semibold first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0"
                key={x.slug}
                href={`/use-cases/${x.slug}`}
              >
                {x.title}
                <ArrowRight className="size-4 text-[#1559a6]" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div>
            <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.035em] sm:text-5xl">
              See how this use case works in MergeVista.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-400">
              We’ll focus the conversation on your transaction model, team and
              immediate priorities.
            </p>
          </div>
          <Button asChild size="lg" variant="inverse">
            <Link href="/book-a-demo">
              {item.cta}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <SiteFooter bordered />
    </main>
  );
}
