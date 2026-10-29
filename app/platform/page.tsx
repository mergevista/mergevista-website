import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import DemoVideoCard from "../components/DemoVideoCard";
import { Badge } from "../components/poc/badge";
import { Button } from "../components/poc/button";
import { Card } from "../components/poc/card";
import { Separator } from "../components/poc/separator";
import { pageMetadata } from "../lib/seo";
import { capabilityPackages } from "../capabilities/data";

export const metadata = pageMetadata(
  "IT M&A Software Platform | MergeVista",
  "Explore the MergeVista AI-powered platform for connected IT M&A inventories, governance, separation, Day 1 readiness, TSA operations, migration and exit.",
  "/platform",
);

const capabilities = [
  {
    label: "Baseline & governance",
    title: "Establish one governed source of truth",
    text: "Bring applications, infrastructure, sites, users, contracts and licenses into a deal-specific model—then govern the baseline through accountable review.",
    points: [
      "Configurable import, mapping and validation",
      "Submit, review, approve, freeze and control exceptions",
    ],
    outcome: "Stop reconciling competing inventories",
  },
  {
    label: "Dependency intelligence",
    title: "Make cross-workstream dependencies executable",
    text: "Connect technology records to the business processes, locations, owners and transition decisions that determine how separation and migration must sequence.",
    points: [
      "Cross-domain and cross-site relationship mapping",
      "Risks, decisions and actions connected to affected inventory",
    ],
    outcome: "See what must move together",
  },
  {
    label: "Commercial intelligence",
    title: "Turn contracts and licenses into execution intelligence",
    text: "Translate agreements into governed obligations and connect commercial constraints directly to the technology and services they affect.",
    points: [
      "AI-assisted extraction with source snippets and human review",
      "Consents, entitlements, products and coverage relationships",
    ],
    outcome: "Move commercial and technical readiness together",
  },
  {
    label: "Program orchestration",
    title: "Coordinate seller and buyer execution in one workspace",
    text: "Convert the trusted baseline into workstream, site, milestone and migration plans without losing the ownership and transaction context behind them.",
    points: [
      "Role-based access across companies, regions and modules",
      "Shared RAID, milestones, site plans and execution schedules",
    ],
    outcome: "Preserve context through every handoff",
  },
  {
    label: "TSA operations",
    title: "Operate every TSA service with an exit path",
    text: "Manage the service as an operational obligation—not simply a line in a tracker—from delivery and consumption through final termination.",
    points: [
      "Charges, SLAs, issues, notices and service dependencies",
      "Exit criteria linked to migration milestones and evidence",
    ],
    outcome: "Exit sooner without shifting risk",
  },
  {
    label: "Readiness & control",
    title: "Prove readiness with evidence—not percentage complete",
    text: "Give leaders a defensible view of whether the business can operate, responsibilities can transfer and seller dependencies can be removed safely.",
    points: [
      "Outcome-based readiness criteria and accountable approvals",
      "Executive visibility into risk, decisions and missing evidence",
    ],
    outcome: "Turn status reporting into operational confidence",
  },
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
    <Card
      className="relative overflow-hidden shadow-[0_18px_48px_rgba(24,24,27,0.08)]"
      aria-label="MergeVista transition readiness"
    >
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
        priority={priority}
        className="h-auto w-full"
        sizes="(max-width:900px) 94vw,54vw"
      />
      {priority && (
        <>
          <div className="absolute right-5 top-16 rounded-lg border border-zinc-200 bg-white/95 px-4 py-3 shadow-sm">
            <b className="block text-[10px] text-[#1559a6]">
              Evidence-based readiness
            </b>
            <span className="mt-1 block text-xs">
              13 of 24 workstreams ready
            </span>
          </div>
          <div className="absolute bottom-5 right-5 rounded-lg border border-zinc-200 bg-white/95 px-4 py-3 shadow-sm">
            <b className="block text-[10px] text-[#1559a6]">
              Actionable exposure
            </b>
            <span className="mt-1 block text-xs">11 need attention</span>
          </div>
        </>
      )}
    </Card>
  );
}

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.28] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="relative mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <Badge className="gap-2 bg-white">
              <Sparkles className="size-3.5 text-[#1559a6]" />
              The MergeVista platform
            </Badge>
            <h1 className="mt-7 text-[clamp(3rem,5.2vw,5.25rem)] font-medium leading-[1.01] tracking-[-0.05em]">
              One operating system for the{" "}
              <span className="font-normal text-[#1559a6]">
                complete IT M&amp;A journey.
              </span>
            </h1>
            <p className="mt-7 max-w-[620px] text-lg leading-8 text-zinc-600">
              Connect the inventories, teams, plans, dependencies, decisions and
              evidence required to move from discovery through separation, Day
              1, TSA operations, migration and exit.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/book-a-demo">
                  Book a demo
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/solutions">Explore solutions</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/guided-trial">
                  Guided trial
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative lg:-mr-20">
            <ProductFrame
              src="/product/redesign-transition-readiness-platform.png"
              alt="MergeVista transition readiness workspace showing evidence-based readiness across inventory workstreams"
              label="TRANSITION READINESS"
              priority
            />
          </div>
        </div>
      </section>
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-[1560px] px-5 py-7 lg:px-8">
          <p className="text-center text-[10px] font-semibold tracking-[0.17em] text-zinc-400">
            ONE CONNECTED EXECUTION ENVIRONMENT
          </p>
          <div className="mt-6 grid divide-y divide-zinc-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {[
              "Buyer + seller collaboration",
              "Deal-level access control",
              "End-to-end traceability",
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
      <section className="border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="mx-auto grid max-w-[1560px] gap-10 px-5 py-20 lg:grid-cols-[0.58fr_1.42fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <Badge>SEE THE PLATFORM IN ACTION</Badge>
            <h2 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.04em] sm:text-5xl">
              See how the platform connects the transaction.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-zinc-600">
              Take a concise tour from the deal dashboard and governed
              inventory through commercial intelligence, execution and
              readiness.
            </p>
          </div>
          <DemoVideoCard />
        </div>
      </section>
      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <Badge>CONFIGURABLE CAPABILITY PACKAGES</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
            Start with what you need today.
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-zinc-600">
            One connected platform, configured around your immediate transaction
            priorities. Add capabilities as your requirements evolve—without
            rebuilding your data, decisions or execution history.
          </p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilityPackages.map((item) => (
            <Card key={item.slug} className="flex min-h-[300px] flex-col p-8">
              <small className="font-semibold tracking-[0.1em] text-[#1559a6]">
                {item.name.toUpperCase()}
              </small>
              <h3 className="mt-8 text-xl font-medium leading-7">
                {item.headline}
              </h3>
              <p className="mt-5 text-sm leading-6 text-zinc-600">
                <strong className="font-semibold text-zinc-700">
                  Best for:
                </strong>{" "}
                {item.bestFor}
              </p>
              <Button
                asChild
                variant="ghost"
                className="mt-auto -ml-4 self-start"
              >
                <Link href={`/capabilities/${item.slug}`}>
                  Explore {item.shortName}
                  <ArrowRight />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
        <Card className="mt-10 grid gap-8 bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
              MergeVista COMPLETE
            </Badge>
            <h3 className="mt-6 text-3xl font-medium tracking-[-0.035em]">
              Need the complete operating model?
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Connect readiness, program control, Day 1, migration and TSA exit
              in one governed lifecycle.
            </p>
          </div>
          <Button asChild size="lg" variant="inverse">
            <Link href="#core-capabilities">
              Explore the complete platform
              <ArrowRight />
            </Link>
          </Button>
        </Card>
      </section>
      <section
        id="core-capabilities"
        className="border-y border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Badge className="bg-white">CORE CAPABILITIES</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Control the complete execution system—not another set of trackers.
            </h2>
            <p className="mt-5 max-w-3xl leading-7 text-zinc-600">
              MergeVista connects governed transaction data to the workflows,
              decisions and evidence required to protect continuity and prove
              progress across both sides of the deal.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-xl border border-zinc-200 bg-white md:grid-cols-2">
            {capabilities.map((item, index) => (
              <article
                key={item.label}
                className={`p-8 ${index > 1 ? "border-t border-zinc-200" : ""} ${index % 2 ? "md:border-l md:border-zinc-200" : ""}`}
              >
                <small className="font-semibold tracking-[0.1em] text-[#1559a6]">
                  0{index + 1} · {item.label.toUpperCase()}
                </small>
                <h3 className="mt-7 text-xl font-medium leading-7">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  {item.text}
                </p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm text-zinc-600"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-[#1559a6]" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Separator className="my-6" />
                <p className="text-xs font-medium text-[#1559a6]">
                  {item.outcome} →
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <Badge>CONNECTED BY DESIGN</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              The relationships matter as much as the records.
            </h2>
            <p className="mt-5 leading-7 text-zinc-600">
              An application is connected to infrastructure, users, data,
              contracts, licenses, sites and TSA services. MergeVista keeps
              those dependencies visible as plans and ownership change across
              the deal.
            </p>
          </div>
          <div className="w-full max-w-[760px] lg:justify-self-end">
            <ProductFrame
              src="/product/redesign-servers-platform.png"
              alt="MergeVista server inventory showing site, application and TSA disposition relationships"
              label="INFRASTRUCTURE INTELLIGENCE"
            />
          </div>
        </div>
      </section>
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <Badge className="bg-white">MergeVista INTELLIGENCE</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              AI grounded in transaction evidence.
            </h2>
            <p className="mt-6 max-w-xl leading-7 text-zinc-600">
              Accelerate understanding without giving up human control.
              Recommendations remain connected to source documents, confidence
              and reviewer approval.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Normalize inventories and identify gaps",
              "Extract contract, license and TSA obligations",
              "Surface cross-inventory dependencies and readiness risks",
              "Generate separation, migration and exit actions for review",
            ].map((x) => (
              <Card key={x} className="flex items-start gap-3 p-5">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-[#1559a6]" />
                <span className="text-sm leading-6">{x}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div>
            <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.035em] sm:text-5xl">
              See the complete execution model in action.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-zinc-400">
              We will tailor the conversation to your transaction, operating
              model and priorities.
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
