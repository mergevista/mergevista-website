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
import AiCapabilityStructuredData from "../AiCapabilityStructuredData";
import { aiCapabilities, getAiCapability } from "../data";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return aiCapabilities.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const x = getAiCapability((await params).slug);
  return x
    ? pageMetadata(x.seoTitle, x.seoDescription, `/ai-capabilities/${x.slug}`)
    : {};
}
export default async function Page({ params }: Props) {
  const x = getAiCapability((await params).slug);
  if (!x) notFound();
  const related = aiCapabilities.filter((y) => y.slug !== x.slug);
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <AiCapabilityStructuredData capability={x} />
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[.28] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="relative mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <Badge className="gap-2 bg-white">
              <Sparkles className="size-3.5 text-[#1559a6]" />
              {x.eyebrow}
            </Badge>
            <h1 className="mt-7 text-[clamp(2.75rem,4.45vw,4.6rem)] font-medium leading-[1.01] tracking-[-.048em]">
              {x.name}
              <span className="mt-5 block text-[.55em] font-normal leading-[1.18] tracking-[-.035em] text-[#1559a6]">
                {x.headline}
              </span>
            </h1>
            <p className="mt-7 max-w-[640px] text-lg leading-8 text-zinc-600">
              {x.introduction}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/book-a-demo">
                  See it in action
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/ai-capabilities">Explore all AI capabilities</Link>
              </Button>
            </div>
          </div>
          <Card className="overflow-hidden shadow-[0_18px_48px_rgba(24,24,27,.08)] lg:-mr-20">
            <div className="flex h-9 items-center border-b border-zinc-800 bg-zinc-950 px-3.5 text-white">
              <span className="text-[9px] tracking-wide text-zinc-400">
                LIVE PRODUCT VIEW{" "}
                <i className="ml-2 not-italic">Illustrative sample data</i>
              </span>
              <Badge className="ml-auto border-zinc-700 bg-zinc-900 text-zinc-300">
                {x.imageLabel}
              </Badge>
            </div>
            <Image
              src={x.image}
              alt={x.imageAlt}
              width={1672}
              height={941}
              className="h-auto w-full"
            />
          </Card>
        </div>
      </section>
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-[1560px] px-5 py-7 text-center lg:px-8">
          <p className="text-[10px] font-semibold tracking-[.17em] text-zinc-400">
            MERGEVISTA INTELLIGENCE
          </p>
          <strong className="mt-3 block text-sm">{x.name}</strong>
          <p className="mt-2 text-sm text-zinc-600">
            Source-grounded proposals remain connected to transaction context
            and accountable human decisions.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <Badge>THE INTELLIGENCE CHALLENGE</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
              {x.challengeTitle}
            </h2>
            <p className="mt-6 leading-7 text-zinc-600">{x.challenge}</p>
          </div>
          <Card className="bg-zinc-950 p-8 text-white sm:p-10">
            <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
              DESIGNED FOR GOVERNED EXECUTION
            </Badge>
            <h3 className="mt-6 text-2xl font-medium">
              Evidence, context and control stay connected.
            </h3>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {x.principles.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-sm leading-6"
                >
                  <Check className="mt-1 size-4 shrink-0 text-blue-400" />
                  {p}
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] font-semibold tracking-[.12em] text-zinc-400">
              RESPONSIBILITY BOUNDARY
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "AI proposes",
                "Systems validate",
                "People review",
                "Decisions remain accountable",
              ].map((boundary) => (
                <span
                  key={boundary}
                  className="rounded-md border border-zinc-700 px-3 py-2 text-xs text-zinc-300"
                >
                  {boundary}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section
        className="border-y border-zinc-200 bg-zinc-50"
        aria-label="Explore other AI capabilities"
      >
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <Badge className="bg-white">HOW IT WORKS</Badge>
          <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            Move from source information to governed action.
          </h2>
          <div className="mt-14 grid overflow-hidden rounded-xl border border-zinc-200 bg-white md:grid-cols-2 xl:grid-cols-4">
            {x.steps.map((s, i) => (
              <article
                key={s.title}
                className="border-t border-zinc-200 p-8 first:border-t-0 md:border-l md:[&:nth-child(-n+2)]:border-t-0 md:[&:nth-child(odd)]:border-l-0 xl:border-t-0 xl:[&:nth-child(odd)]:border-l xl:first:border-l-0"
              >
                <small className="text-[10px] font-semibold tracking-[.18em] text-[#1559a6]">
                  0{i + 1}
                </small>
                <h3 className="mt-8 text-xl font-medium">{s.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <Badge>EXPECTED OUTCOMES</Badge>
        <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
          What changes when intelligence remains accountable.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {x.outcomes.map((o) => (
            <Card key={o} className="flex min-h-28 items-center p-7">
              <h3 className="text-lg font-medium">{o}</h3>
            </Card>
          ))}
        </div>
        <Card className="mt-10 p-8">
          <Badge>CONNECTED CAPABILITY PACKAGES</Badge>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {x.connectsTo.map((item) => (
              <Link
                key={item.slug}
                href={`/capabilities/${item.slug}`}
                className="flex items-center justify-between rounded-lg border border-zinc-200 p-4 text-sm font-medium"
              >
                {item.name}
                <ArrowRight className="size-4 text-[#1559a6]" />
              </Link>
            ))}
          </div>
        </Card>
      </section>
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-16 lg:px-8">
          <Badge className="bg-white">
            EXPLORE MORE MERGEVISTA INTELLIGENCE
          </Badge>
          <div className="mt-8 grid overflow-hidden rounded-xl border border-zinc-200 bg-white md:grid-cols-2">
            {related.map((y) => (
              <Link
                key={y.slug}
                href={`/ai-capabilities/${y.slug}`}
                className="flex items-center justify-between border-t border-zinc-200 p-6 text-sm font-semibold first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0"
              >
                {y.name}
                <ArrowRight className="size-4 text-[#1559a6]" />
              </Link>
            ))}
          </div>
          <Button asChild variant="ghost" className="mt-5 -ml-4">
            <Link href="/ai-capabilities">
              View all AI capabilities
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div>
            <h2 className="text-3xl font-medium tracking-[-.035em] sm:text-5xl">
              See {x.name} in your transaction context.
            </h2>
            <p className="mt-5 text-sm text-zinc-400">
              Explore how grounded intelligence can accelerate the work without
              surrendering control.
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
              <Link href="/guided-trial">
                Apply for a guided trial
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <SiteFooter bordered />
    </main>
  );
}
