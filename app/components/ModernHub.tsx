import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { Badge } from "./poc/badge";
import { Button } from "./poc/button";
import { Card } from "./poc/card";

export type HubCard = {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  points?: string[];
  outcome?: string;
  linkLabel?: string;
};
export default function ModernHub({
  eyebrow,
  title,
  accent,
  intro,
  primaryLabel,
  cards,
  sectionLabel,
  sectionTitle,
  sectionIntro,
  image = "/product/redesign-deal-dashboard.png",
  imageLabel = "CONNECTED EXECUTION",
  imageAlt,
  imageMeta,
  ctaTitle,
  ctaText,
  ctaLabel = "Book a focused demo",
  ctaSecondaryLabel,
  ctaSecondaryHref = "/guided-trial",
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  primaryLabel: string;
  cards: HubCard[];
  sectionLabel: string;
  sectionTitle: string;
  sectionIntro: string;
  image?: string;
  imageLabel?: string;
  imageAlt?: string;
  imageMeta?: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  children?: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.28] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="relative mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <Badge className="gap-2 bg-white">
              <Sparkles className="size-3.5 text-[#1559a6]" />
              {eyebrow}
            </Badge>
            <h1 className="mt-7 max-w-[720px] text-[clamp(2.75rem,4.45vw,4.6rem)] font-medium leading-[1.01] tracking-[-0.048em]">
              {title}
              <span className="mt-5 block text-[.62em] font-normal leading-[1.12] tracking-[-0.035em] text-[#1559a6]">
                {accent}
              </span>
            </h1>
            <p className="mt-7 max-w-[650px] text-lg leading-8 text-zinc-600">
              {intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/book-a-demo">
                  {primaryLabel}
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/platform">Explore the platform</Link>
              </Button>
            </div>
          </div>
          <Card
            aria-label={imageAlt}
            className="overflow-hidden shadow-[0_18px_48px_rgba(24,24,27,.08)] lg:-mr-20"
          >
            <div className="flex h-9 items-center border-b border-zinc-800 bg-zinc-950 px-3.5 text-white">
              <div className="flex gap-1.5">
                <i className="size-1.5 rounded-full bg-red-400" />
                <i className="size-1.5 rounded-full bg-amber-300" />
                <i className="size-1.5 rounded-full bg-emerald-400" />
              </div>
              <span className="ml-3 text-[9px] tracking-wide text-zinc-400">
                LIVE PRODUCT VIEW
                {imageMeta && <i className="ml-2 not-italic">{imageMeta}</i>}
              </span>
              <Badge className="ml-auto border-zinc-700 bg-zinc-900 text-zinc-300">
                {imageLabel}
              </Badge>
            </div>
            <Image
              src={image}
              alt={imageAlt ?? imageLabel}
              width={1672}
              height={941}
              className="h-auto w-full"
              priority
            />
          </Card>
        </div>
      </section>
      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <Badge>{sectionLabel}</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            {sectionTitle}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            {sectionIntro}
          </p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <Card
              key={`${card.href}:${card.title}`}
              className="flex min-h-[310px] flex-col p-8 sm:p-10"
            >
              <Badge className="w-fit">{card.eyebrow}</Badge>
              <h3 className="mt-8 text-2xl font-medium tracking-[-.03em]">
                {card.title}
              </h3>
              <p className="mt-4 leading-7 text-zinc-600">{card.text}</p>
              {card.points && (
                <div className="mt-6 space-y-3">
                  {card.points.map((x) => (
                    <div key={x} className="flex gap-3 text-sm text-zinc-600">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#1559a6]" />
                      {x}
                    </div>
                  ))}
                </div>
              )}
              {card.outcome && (
                <p className="mt-6 text-xs font-semibold text-[#1559a6]">
                  <span className="mr-2 text-zinc-400">OUTCOME</span>
                  {card.outcome}
                </p>
              )}
              <Button
                asChild
                variant="ghost"
                className="mt-auto self-start px-0 pt-8"
              >
                <Link href={card.href}>
                  {card.linkLabel ?? "Explore"}
                  <ArrowRight />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>
      {children}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div>
            <h2 className="max-w-3xl text-3xl font-medium tracking-[-.035em] sm:text-5xl">
              {ctaTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-400">
              {ctaText}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="inverse">
              <Link href="/book-a-demo">
                {ctaLabel}
                <ArrowRight />
              </Link>
            </Button>
            {ctaSecondaryLabel && (
              <Button
                asChild
                size="lg"
                className="border border-zinc-700 bg-zinc-900"
              >
                <Link href={ctaSecondaryHref}>
                  {ctaSecondaryLabel}
                  <ArrowRight />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>
      <SiteFooter bordered />
    </main>
  );
}
