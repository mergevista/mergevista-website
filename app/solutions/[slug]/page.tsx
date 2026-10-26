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
import SolutionStructuredData from "../SolutionStructuredData";
import { getSolution, solutions } from "../data";

type PageProps = { params: Promise<{ slug: string }> };

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
        priority
        className="h-auto w-full"
        sizes="(max-width:900px) 94vw,54vw"
      />
    </Card>
  );
}

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return pageMetadata(
    `${solution.seoTitle ?? `${solution.name} for IT M&A`} | MergeVista`,
    solution.seoDescription,
    `/solutions/${solution.slug}`,
  );
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  const related = solutions.filter(
    (candidate) => candidate.slug !== solution.slug,
  );
  const heroImage =
    solution.slug === "acquisitions-integrations"
      ? "/product/redesign-acquisitions-applications.png"
      : solution.slug === "divestitures-separations"
        ? "/product/redesign-divestitures-site-readiness.png"
        : solution.slug === "day-1-readiness"
          ? "/product/redesign-solution-day-1-contracts-readiness.png"
          : solution.slug === "tsa-management-exit"
            ? "/product/redesign-tsa-management-service-readiness.png"
      : "/product/redesign-deal-dashboard.png";
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <SolutionStructuredData solution={solution} />
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.28] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="relative mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <Badge className="gap-2 bg-white">
              <Sparkles className="size-3.5 text-[#1559a6]" />
              {solution.eyebrow}
            </Badge>
            <h1 className="mt-7 max-w-[720px] text-[clamp(2.75rem,4.45vw,4.6rem)] font-medium leading-[1.01] tracking-[-0.048em]">
              {solution.name}
              <span className="mt-5 block max-w-[650px] text-[.55em] font-normal leading-[1.18] tracking-[-0.035em] text-[#1559a6]">
                {solution.headline}
              </span>
            </h1>
            <p className="mt-7 max-w-[620px] text-lg leading-8 text-zinc-600">
              {solution.introduction}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/book-a-demo">
                  Book a focused demo
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
              alt={solution.imageAlt}
              label={solution.imageLabel}
            />
          </div>
        </div>
      </section>
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-[1560px] px-5 py-7 lg:px-8">
          <div className="text-center">
            <p className="text-[10px] font-semibold tracking-[0.17em] text-zinc-400">
              MERGEVISTA SOLUTION
            </p>
            <strong className="mt-3 block text-sm">{solution.name}</strong>
            <p className="mt-2 text-sm text-zinc-600">
              One connected operating model brings transaction facts, decisions,
              execution and evidence together.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div>
            <Badge>THE EXECUTION CHALLENGE</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              {solution.challengeTitle}
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-zinc-600">
              {solution.challenge}
            </p>
          </div>
          <Card className="bg-zinc-950 p-8 text-white sm:p-10">
            <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
              WHAT MUST BE CONTROLLED
            </Badge>
            <h2 className="mt-6 text-2xl font-medium">
              Connect the operating detail behind the outcome.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {solution.controls.map((x) => (
                <div
                  key={x}
                  className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm leading-6"
                >
                  <Check className="mt-1 size-4 shrink-0 text-blue-400" />
                  {x}
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] font-semibold tracking-[.12em] text-zinc-400">
              TEAMS INVOLVED
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {solution.audience.map((audience) => (
                <span
                  key={audience}
                  className="rounded-md border border-zinc-700 px-3 py-2 text-xs text-zinc-300"
                >
                  {audience}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section
        className="border-y border-zinc-200 bg-zinc-50"
        aria-label="Explore other solutions"
      >
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Badge className="bg-white">THE OPERATING APPROACH</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Move from fragmented activity to governed execution.
            </h2>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-xl border border-zinc-200 bg-white md:grid-cols-2 xl:grid-cols-4">
            {solution.steps.map((step, index) => (
              <article
                key={step.title}
                className="border-t border-zinc-200 p-8 first:border-t-0 md:border-l md:first:border-l-0 xl:border-t-0"
              >
                <small className="font-mono text-[11px] text-[#1559a6]">
                  0{index + 1}
                </small>
                <h3 className="mt-8 text-xl font-medium leading-7">
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
        <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <Badge>EXPECTED OUTCOMES</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              What changes when the work is connected.
            </h2>
            <div className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200">
              {solution.outcomes.map((x) => (
                <div key={x} className="flex items-center gap-3 py-5 text-sm">
                  <Check className="size-4 text-[#1559a6]" />
                  {x}
                </div>
              ))}
            </div>
          </div>
          <Card className="h-fit p-8">
            <Badge>RELEVANT CAPABILITY PACKAGES</Badge>
            <div className="mt-7 divide-y divide-zinc-200 border-y border-zinc-200">
              {solution.capabilities.map((x) => (
                <Link
                  key={x.slug}
                  href={`/capabilities/${x.slug}`}
                  className="flex items-center justify-between py-4 text-sm font-medium"
                >
                  {x.name}
                  <ArrowRight className="size-4 text-[#1559a6]" />
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-16 lg:px-8">
          <Badge className="bg-white">EXPLORE ANOTHER SOLUTION</Badge>
          <div className="mt-8 grid overflow-hidden rounded-xl border border-zinc-200 bg-white md:grid-cols-3">
            {related.map((x) => (
              <Link
                key={x.slug}
                href={`/solutions/${x.slug}`}
                className="flex items-center justify-between border-t border-zinc-200 p-6 text-sm font-semibold first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0"
              >
                {x.name}
                <ArrowRight className="size-4 text-[#1559a6]" />
              </Link>
            ))}
          </div>
          <Button asChild variant="ghost" className="mt-5 -ml-4">
            <Link href="/solutions">
              View all MergeVista solutions
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div>
            <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.035em] sm:text-5xl">
              See {solution.name} in your transaction context.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-400">
              We’ll focus the conversation on your operating model, immediate
              priorities and execution pressure.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="inverse">
              <Link href="/book-a-demo">
                Book a focused demo
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
