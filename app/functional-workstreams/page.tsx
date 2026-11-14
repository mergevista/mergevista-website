import Link from "next/link";
import { ArrowRight, Check, Network } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { Badge } from "../components/poc/badge";
import { Button } from "../components/poc/button";
import { Card } from "../components/poc/card";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata(
  "Functional M&A Workstreams | MergeVista",
  "Connect IT M&A with People, Finance, Legal, EHS, Procurement, Real Estate, Operations and Communications in one governed execution environment.",
  "/functional-workstreams",
);

const lifecycle = [
  "Discovery",
  "Assessment",
  "Separation",
  "Day 1",
  "TSA Operations",
  "Migration",
  "TSA Exit",
];

const workstreams = [
  ["People & HR", "Workforce, organization, payroll, benefits, access, training and employee readiness."],
  ["Finance", "Close, controls, reporting, treasury, tax and finance-service dependencies."],
  ["Legal & Compliance", "Entities, obligations, consents, policies and regulatory actions."],
  ["Environment, Health & Safety", "Permits, workplace safety, environmental obligations and site readiness."],
  ["Procurement & Suppliers", "Supplier continuity, sourcing actions, novations and commercial dependencies."],
  ["Real Estate & Facilities", "Site transfers, exits, access, workplace services and facility cutovers."],
  ["Operations & Supply Chain", "Production, logistics, inventory, customer delivery and operating continuity."],
  ["Communications & Change", "Stakeholders, change impacts, communications, training and adoption."],
];

const executionCore = [
  ["Plans and milestones", "Give each functional team a clear plan, accountable owners and transaction-aligned dates."],
  ["Dependencies and decisions", "Connect cross-functional dependencies, decisions and approvals to the work they affect."],
  ["Risks and readiness", "Manage risks, issues, assumptions and readiness criteria through the same governance model."],
  ["Evidence and reporting", "Retain status, approvals and completion evidence in one traceable transaction record."],
];

export default function FunctionalWorkstreamsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.28] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <div className="relative mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8 lg:py-28">
          <div data-motion="hero-copy">
            <Badge className="gap-2 bg-white">
              <Network className="size-3.5 text-[#1559a6]" />
              FUNCTIONAL WORKSTREAMS
            </Badge>
            <h1 className="mt-7 text-[2.75rem] font-medium leading-[1.01] tracking-[-0.05em] sm:text-[clamp(3rem,5.2vw,5.25rem)]">
              Run IT M&amp;A.{" "}
              <span className="font-normal text-[#1559a6]">
                Coordinate every functional workstream.
              </span>
            </h1>
            <p className="mt-7 max-w-[650px] text-lg leading-8 text-zinc-600">
              MergeVista runs IT M&amp;A and brings every functional workstream
              into the same governed execution environment.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/book-a-demo">Book a demo <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/platform">Explore the platform</Link>
              </Button>
            </div>
          </div>

          <Card data-motion="hero-visual" className="overflow-hidden p-5 shadow-[0_18px_48px_rgba(24,24,27,0.08)] sm:p-7">
            <div className="grid gap-px overflow-hidden rounded-xl bg-zinc-200 md:grid-cols-2">
              <div className="bg-[#071b42] p-6 text-white">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-blue-300">COMPLETE IT M&amp;A LIFECYCLE</p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em]">Technology execution</h2>
                <p className="mt-4 text-sm leading-6 text-zinc-300">{lifecycle.join(" · ")}</p>
              </div>
              <div className="bg-white p-6">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-[#1559a6]">CONNECTED FUNCTIONAL WORKSTREAMS</p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em]">Business transition</h2>
                <p className="mt-4 text-sm leading-6 text-zinc-600">People · Finance · Legal · EHS · Procurement · Real Estate · Operations · Communications</p>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-zinc-200 bg-[#f5f8fc] p-5">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-[#1559a6]">SHARED GOVERNED EXECUTION ENVIRONMENT</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">Plans · Milestones · Ownership · Dependencies · Risks · Decisions · Readiness · Evidence</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-[1560px] gap-12 px-5 py-20 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-24">
          <div>
            <Badge>ONE TRANSACTION ENVIRONMENT</Badge>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">Give every function a clear role in execution.</h2>
            <p className="mt-6 max-w-xl leading-7 text-zinc-600">Functional teams manage their own plans and commitments while the transaction team maintains a connected view of ownership, dependencies, decisions, risks and readiness.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
            {executionCore.map(([title, description]) => (
              <div key={title} className="bg-white p-6">
                <div className="flex items-start gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-[#1559a6]" />
                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.02em]">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <Badge className="bg-white">FUNCTIONAL WORKSTREAMS</Badge>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">Connect the teams that determine transaction readiness.</h2>
            <p className="mt-5 leading-7 text-zinc-600">Each function can manage its own execution detail while remaining connected to shared milestones, cross-functional dependencies and the complete transaction record.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workstreams.map(([name, description], index) => (
              <Card key={name} className="p-5">
                <span className="font-mono text-[10px] text-[#1559a6]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-7 text-lg font-medium tracking-[-0.02em]">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071b42] text-white">
        <div className="mx-auto flex max-w-[1560px] flex-col justify-between gap-8 px-5 py-16 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.16em] text-blue-300">ONE TRANSACTION RECORD</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">Coordinate IT and every functional workstream with clarity.</h2>
            <p className="mt-3 max-w-2xl text-zinc-300">See how MergeVista can support the execution model for your next acquisition, integration, divestiture or separation.</p>
          </div>
          <Button asChild size="lg" variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white hover:text-zinc-950">
            <Link href="/book-a-demo">Discuss your transaction <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
