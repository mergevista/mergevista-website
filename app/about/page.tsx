import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { Badge } from "../components/poc/badge";
import { Button } from "../components/poc/button";
import { Card } from "../components/poc/card";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "About MergeVista | IT M&A Execution Platform",
  "Learn why MergeVista is building a new generation of IT M&A execution platform for acquisitions, divestitures, integrations and separations.",
  "/about",
);
const principles = [
  [
    "Connected execution",
    "Keep inventories, plans, dependencies, decisions and evidence connected across the complete transaction.",
  ],
  [
    "Shared accountability",
    "Give sellers, buyers and transaction leaders a common operating model with clear ownership.",
  ],
  [
    "Evidence-backed decisions",
    "Make recommendations and decisions traceable to the transaction data and documents that support them.",
  ],
  [
    "Human-governed AI",
    "Use AI to accelerate understanding and action while keeping experienced people in control.",
  ],
];
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[.28]" />
        <div className="relative mx-auto max-w-[1560px] px-5 py-24 lg:px-8 lg:py-32">
          <Badge className="gap-2 bg-white">
            <Sparkles className="size-3.5 text-[#1559a6]" />
            About MergeVista
          </Badge>
          <h1 className="mt-7 max-w-5xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[.98] tracking-[-.055em]">
            Purpose-built for the
            <span className="block font-normal text-[#1559a6]">
              execution reality of IT M&amp;A.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            MergeVista was created to bring structure, visibility and
            accountability to one of the most complex dimensions of M&amp;A: IT
            execution.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
        <div>
          <Badge>WHY WE EXIST</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            Complex transactions deserve more than disconnected tools.
          </h2>
        </div>
        <Card className="bg-zinc-950 p-8 text-white sm:p-12">
          <p className="text-lg leading-8 text-zinc-300">
            IT teams are expected to protect Day 1, manage separation, operate
            TSAs, coordinate migration and prove exit—often across companies,
            workstreams and timelines that were never designed to work together.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Yet critical execution still depends on fragmented spreadsheets,
            status meetings and institutional knowledge. MergeVista is being
            built to replace that fragmentation with one connected system of
            execution.
          </p>
        </Card>
      </section>
      <section className="border-y border-zinc-200 bg-zinc-950 text-white">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
            OUR MISSION
          </Badge>
          <h2 className="mt-6 max-w-5xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            Give every transaction team one trusted environment—from discovery
            through TSA exit.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            We believe better connected execution leads to clearer decisions,
            stronger accountability and more predictable deal outcomes.
          </p>
        </div>
      </section>
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <Badge className="bg-white">WHAT WE BELIEVE</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            Principles that shape the platform.
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {principles.map(([t, d], index) => (
              <Card key={t} className="p-8">
                <small className="text-[10px] font-semibold tracking-[.16em] text-[#1559a6]">
                  0{index + 1}
                </small>
                <Check className="size-5 text-[#1559a6]" />
                <h3 className="mt-7 text-2xl font-medium">{t}</h3>
                <p className="mt-4 leading-7 text-zinc-600">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1560px] gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <Badge>HOW WE ARE BUILDING</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            Shaped by the people doing the work.
          </h2>
        </div>
        <blockquote className="text-2xl leading-10 text-zinc-600">
          MergeVista LLC is building the next generation of IT M&amp;A execution
          platforms, shaped by the real-world needs of design partners and early
          customers.
        </blockquote>
      </section>
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div>
            <Badge className="mb-6 border-zinc-700 bg-zinc-900 text-zinc-300">
              START A CONVERSATION
            </Badge>
            <h2 className="text-3xl font-medium tracking-[-.035em] sm:text-5xl">
              Help shape a better way to execute IT M&amp;A.
            </h2>
            <p className="mt-5 text-zinc-400">
              Explore the platform and tell us what your transaction teams need
              most.
            </p>
          </div>
          <Button asChild size="lg" variant="inverse">
            <Link href="/book-a-demo">
              Talk with our team
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <SiteFooter bordered />
    </main>
  );
}
