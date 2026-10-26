import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  FileCheck2,
  Fingerprint,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { Badge } from "./components/poc/badge";
import { Button } from "./components/poc/button";
import { Card } from "./components/poc/card";
import { Separator } from "./components/poc/separator";

const stages = [
  [
    "01",
    "Discovery",
    "Build a reliable IT baseline from inventories, source systems and transaction documents.",
  ],
  [
    "02",
    "Assessment",
    "Expose dependencies, contract obligations, dispositions, TSA needs and execution risks.",
  ],
  [
    "03",
    "Separation",
    "Execute logical and physical separation while controlling dependencies and readiness.",
  ],
  [
    "04",
    "Day 1",
    "Validate operational continuity, ownership transitions and critical business services.",
  ],
  [
    "05",
    "TSA Operations",
    "Manage services, obligations, performance, costs, issues and buyer consumption.",
  ],
  [
    "06",
    "Migration",
    "Coordinate buyer-led application, data, user and infrastructure migrations.",
  ],
  [
    "07",
    "TSA Exit",
    "Prove exit readiness, complete service transitions and close TSA obligations.",
  ],
];
const outcomes = [
  [
    "Establish the baseline faster",
    "Import applications, infrastructure, sites, users, contracts and licenses into a deal-specific data model.",
    "Reduce weeks of reconciliation",
  ],
  [
    "Protect Day 1",
    "Connect dependencies, separation activities, readiness gates and critical decisions across every workstream.",
    "Maintain business continuity",
  ],
  [
    "Control TSA delivery",
    "Manage services, obligations, performance, costs, issues and exit criteria in one operating view.",
    "Make every service accountable",
  ],
  [
    "Accelerate migration and exit",
    "Coordinate buyer-led migrations while tracking the evidence required to retire each TSA service.",
    "Exit sooner with less risk",
  ],
];
const audiences = [
  [
    "CIO & technology leadership",
    "See readiness, risk, cost and critical decisions across the complete transaction.",
    "Executive control →",
  ],
  [
    "Integration & separation leaders",
    "Coordinate execution across workstreams, companies, milestones and dependencies.",
    "Connected execution →",
  ],
  [
    "Corporate development",
    "Connect transaction commitments with operational delivery and business outcomes.",
    "Deal visibility →",
  ],
  [
    "Private equity operating teams",
    "Apply a repeatable IT M&A operating model across portfolio transactions.",
    "Portfolio repeatability →",
  ],
];

function ProductFrame({
  src,
  alt,
  label,
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  priority?: boolean;
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
          LIVE PRODUCT VIEW
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
        priority={priority}
        className="h-auto w-full"
        sizes="(max-width:900px) 94vw,54vw"
      />
    </Card>
  );
}

export default function MarketingHome() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.28] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="relative mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <Badge className="gap-2 bg-white">
              <Sparkles className="size-3.5 text-[#1559a6]" />
              The AI-powered execution platform for IT M&amp;A
            </Badge>
            <h1 className="mt-7 text-[clamp(3rem,5.2vw,5.25rem)] font-medium leading-[1.01] tracking-[-0.05em]">
              Run the complete IT M&amp;A journey with{" "}
              <span className="font-normal text-[#1559a6]">
                clarity and control.
              </span>
            </h1>
            <p className="mt-7 max-w-[620px] text-lg leading-8 text-zinc-600">
              MergeVista connects sellers and buyers across discovery,
              separation, Day 1, TSA operations, migration and TSA exit—all in
              one AI-powered execution platform.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/book-a-demo">
                  Book a demo
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/platform">Explore the platform</Link>
              </Button>
            </div>
            <div className="mt-9 flex flex-wrap gap-6 text-xs text-zinc-500">
              {[
                "Deal-ready operating model",
                "Unlimited collaboration",
                "Evidence-backed AI",
              ].map((x) => (
                <span key={x} className="flex items-center gap-2">
                  <Check className="size-3.5 text-[#1559a6]" />
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div className="relative lg:-mr-20">
            <ProductFrame
              src="/product/redesign-deal-dashboard-landing.png"
              alt="MergeVista Avenlor deal dashboard showing Day 1 timing, attention items, RAID status and key milestones"
              label="ILLUSTRATIVE SAMPLE DATA"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-[1560px] px-5 py-7 lg:px-8">
          <p className="text-center text-[10px] font-semibold tracking-[0.17em] text-zinc-400">
            PURPOSE-BUILT FOR COMPLEX ACQUISITIONS AND DIVESTITURES
          </p>
          <div className="mt-6 grid divide-y divide-zinc-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {[
              "Buyer + seller collaboration",
              "End-to-end traceability",
              "Enterprise controls",
              "Human-governed AI",
            ].map((x) => (
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

      <section
        id="ownership"
        className="mx-auto max-w-[1560px] scroll-mt-20 px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="max-w-4xl">
          <Badge>ONE SHARED TRANSACTION WORKSPACE</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
            Continuous execution across both sides of the deal.
          </h2>
          <p className="mt-6 max-w-3xl leading-7 text-zinc-600">
            The seller establishes the baseline and leads separation. The buyer
            joins planning, assumes operational responsibility at Day 1 and
            leads migration through TSA exit.
          </p>
          <Button asChild variant="ghost" className="mt-5 -ml-4">
            <Link href="/solutions">
              Explore transaction solutions
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 lg:grid-cols-[1.5fr_0.8fr_1.3fr_1.2fr]">
          {[
            ["SELLER-LED", "Discovery · Assessment · Separation"],
            ["JOINT TRANSITION", "Day 1"],
            ["JOINT TSA GOVERNANCE", "Seller delivers · Buyer consumes"],
            ["BUYER-LED", "Migration · TSA Exit"],
          ].map(([a, b], i) => (
            <div
              key={a}
              className={`border-t border-zinc-200 p-6 first:border-t-0 lg:border-l lg:border-t-0 lg:first:border-l-0 ${i === 3 ? "border-zinc-800 bg-zinc-950 text-white" : ""}`}
            >
              <small className="font-semibold tracking-[0.14em] text-[#1559a6]">
                {a}
              </small>
              <b className="mt-3 block text-sm">{b}</b>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 rounded-lg border border-zinc-200 px-5 py-4 text-xs text-zinc-500 sm:grid-cols-[auto_1fr] sm:items-center lg:grid-cols-[auto_1.35fr_auto_1.15fr_auto_1fr]">
          <strong className="whitespace-nowrap text-[#1559a6]">
            CONTINUOUS PLANNING
          </strong>
          <span className="sm:border-l sm:border-zinc-200 sm:pl-5">
            Seller-led separation &amp; Day 1
          </span>
          <span className="hidden text-zinc-300 lg:block">→</span>
          <span>Joint TSA service &amp; exit</span>
          <span className="hidden text-zinc-300 lg:block">→</span>
          <span>Buyer-led migration</span>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-950 text-white">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
            EXECUTIVE CLARITY THROUGHOUT THE DEAL
          </Badge>
          <h2 className="mt-6 max-w-5xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
            One trusted baseline.
            <br />
            Every workstream aligned.
            <br />
            <span className="text-blue-400">Every decision evidenced.</span>
          </h2>
          <p className="mt-6 max-w-2xl leading-7 text-zinc-400">
            MergeVista connects the operational detail of execution to the
            outcomes leadership needs to govern—readiness, risk, cost,
            accountability and exit.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-4 lg:max-w-3xl">
            {[
              "Trusted inventory",
              "Visible dependencies",
              "Governed decisions",
              "Provable exit",
            ].map((x) => (
              <div
                key={x}
                className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm"
              >
                <Check className="size-4 text-blue-400" />
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="outcomes"
        className="mx-auto max-w-[1560px] scroll-mt-20 px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <Badge>ONE SYSTEM OF EXECUTION</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Turn fragmented IT tracking into measurable deal outcomes.
            </h2>
            <p className="mt-5 leading-7 text-zinc-600">
              Move from disconnected spreadsheets and status meetings to a
              connected operating model that protects Day 1 and accelerates
              migration and TSA exit.
            </p>
          </div>
          <div className="w-full max-w-[760px] lg:justify-self-end">
            <ProductFrame
              src="/product/redesign-application-inventory-landing.png"
              alt="MergeVista governed application inventory with ownership and data quality controls"
              label="GOVERNED INVENTORY"
            />
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {outcomes.map(([a, b, c]) => (
            <Card key={a} className="p-8">
              <h3 className="text-2xl font-medium">{a}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">{b}</p>
              <Separator className="my-6" />
              <p className="flex items-center gap-2 text-xs font-medium">
                <Check className="size-3.5 text-[#1559a6]" />
                {c}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="platform"
        className="scroll-mt-20 border-y border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Badge className="bg-white">FROM DISCOVERY TO TSA EXIT</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              A complete IT M&amp;A operating model for every deal.
            </h2>
            <p className="mt-5 max-w-3xl leading-7 text-zinc-600">
              One lifecycle connects seller-led separation with buyer-led
              transition—without losing the data, decisions or evidence created
              along the way.
            </p>
          </div>
          <div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200">
            {stages.map(([n, a, b]) => (
              <div
                key={n}
                className="grid gap-4 py-7 sm:grid-cols-[70px_190px_1fr] sm:items-center"
              >
                <span className="font-mono text-[11px] text-[#1559a6]">
                  {n}
                </span>
                <h3 className="text-xl font-medium">{a}</h3>
                <p className="text-sm leading-6 text-zinc-600">{b}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 w-full max-w-[1020px]">
            <ProductFrame
              src="/product/redesign-contracts-licenses-landing.png"
              alt="MergeVista contracts and licenses workspace connecting commercial obligations to execution"
              label="CONTRACTS & LICENSES"
            />
          </div>
        </div>
      </section>

      <section
        id="ai"
        className="mx-auto grid max-w-[1560px] scroll-mt-20 gap-16 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28"
      >
        <div>
          <Badge>MERGEVISTA INTELLIGENCE</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            AI grounded in your transaction evidence.
          </h2>
          <p className="mt-6 max-w-xl leading-7 text-zinc-600">
            Turn inventory data and deal documents into structured
            intelligence—with source evidence, confidence and human review built
            into every recommendation.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Normalize inventories and identify data gaps",
              "Extract contracts, licenses, obligations and consent requirements",
              "Discover cross-inventory dependencies and Day 1 risks",
              "Generate separation, migration and TSA exit actions",
            ].map((x) => (
              <li
                key={x}
                className="flex items-center gap-3 rounded-lg border border-zinc-200 px-4 py-3 text-sm"
              >
                <Sparkles className="size-4 text-[#1559a6]" />
                {x}
              </li>
            ))}
          </ul>
          <Button asChild variant="ghost" className="mt-5 -ml-4">
            <Link href="/ai-capabilities">
              Explore AI capabilities
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <Card className="bg-zinc-950 p-9 text-white">
          <div className="flex justify-between">
            <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
              AI ASSESSMENT
            </Badge>
            <Bot className="size-5 text-blue-400" />
          </div>
          <h3 className="mt-7 text-2xl font-medium">
            Orion Software Subscription Agreement
          </h3>
          <div className="mt-8 divide-y divide-zinc-800 border-y border-zinc-800">
            {[
              ["Assignment requirement", "Consent Required"],
              ["Recommended action", "Split agreement"],
              ["Affected inventory", "Applications · Users"],
            ].map(([a, b]) => (
              <div key={a} className="flex justify-between gap-6 py-4 text-sm">
                <span className="text-zinc-500">{a}</span>
                <b>{b}</b>
              </div>
            ))}
          </div>
          <blockquote className="my-7 border-l-2 border-blue-500 pl-4 text-sm text-zinc-400">
            “Prior written consent is required before assignment…”
          </blockquote>
          <footer className="flex justify-between text-xs">
            <span>89% confidence</span>
            <b className="text-blue-400">Review recommendation →</b>
          </footer>
        </Card>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <Badge className="bg-white">BUILT AROUND THE TRANSACTION TEAM</Badge>
          <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            One execution environment. Every deal stakeholder.
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-zinc-600">
            Give each leader the context they need while keeping plans,
            dependencies, decisions and evidence connected in one operating
            model.
          </p>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {audiences.map(([a, b, c]) => (
              <Card key={a} className="bg-white p-8">
                <h3 className="text-2xl font-medium">{a}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600">{b}</p>
                <p className="mt-6 text-xs font-semibold text-[#1559a6]">{c}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="security"
        className="mx-auto grid max-w-[1560px] scroll-mt-20 gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8"
      >
        <div>
          <Badge>ENTERPRISE BY DESIGN</Badge>
          <h2 className="mt-5 text-3xl font-medium sm:text-4xl">
            Sensitive transaction data deserves uncompromising control.
          </h2>
          <Button asChild variant="ghost" className="mt-5 -ml-4">
            <Link href="/security">
              Explore Security &amp; Trust
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            [LockKeyhole, "Deal-level access controls"],
            [Fingerprint, "Tenant data isolation"],
            [FileCheck2, "Evidence and audit history"],
            [ShieldCheck, "Customer-controlled AI processing"],
          ].map(([Icon, label]) => {
            const I = Icon as typeof LockKeyhole;
            return (
              <Card
                key={label as string}
                className="flex items-center gap-3 p-4"
              >
                <I className="size-4" />
                <span className="text-sm font-medium">{label as string}</span>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div>
            <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.035em] sm:text-5xl">
              One platform from discovery to TSA exit.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-400">
              Give sellers and buyers a shared operating model for separation,
              Day 1 continuity, TSA operations and migration.
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
              <Link href="/platform">Explore the platform</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
