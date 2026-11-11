import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Gauge,
  Layers3,
  Puzzle,
  Settings2,
  Sparkles,
  Workflow,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { Badge } from "../components/poc/badge";
import { Button } from "../components/poc/button";
import { Card } from "../components/poc/card";
import { brand, canonicalUrl } from "../lib/brand";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata(
  "IT M&A Platform Pricing Structure | MergeVista",
  "Understand MergeVista pricing: an annual platform subscription, transaction execution pricing, one-time customer implementation and optional services aligned to deal complexity.",
  "/pricing",
);

const model = [
  {
    number: "01",
    icon: Layers3,
    title: "Annual platform subscription",
    text: "Maintain a governed organizational environment with retained transaction records, reusable capabilities, reporting and a technology inventory that remains available between deals.",
    note: "One persistent platform environment",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Transaction execution fee",
    text: "Add capacity for each active transaction. The fee reflects the execution scope and complexity of the acquisition, integration, divestiture or separation.",
    note: "Aligned to each active transaction",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Platform implementation & enablement",
    text: "Establish the customer’s MergeVista environment, access and governance model, reusable workflows, reporting standards, administrator enablement and initial user training.",
    note: "One-time per customer",
  },
  {
    number: "04",
    icon: Puzzle,
    title: "Platform-enabled services",
    text: "Add Transaction Launch, Execution Support, Managed Technology Transition or Specialist Advisory when expert capacity can accelerate execution.",
    note: "Optional and separately scoped",
  },
];

const complexity = [
  "Transaction structure",
  "Technology footprint",
  "People affected",
  "Geographic scope",
  "TSA requirements",
  "Migration complexity",
];

const included = [
  {
    title: "Governed environment",
    text: "One controlled organizational workspace across transactions.",
  },
  {
    title: "Retained transaction record",
    text: "Preserve data, decisions, approvals and execution history.",
  },
  {
    title: "Reusable operating model",
    text: "Carry workflows, playbooks and reporting into future deals.",
  },
  {
    title: "Included AI capacity",
    text: "Transaction-specific allowance for extraction, analysis and assistance.",
  },
];

const optionalServices = [
  {
    title: "Transaction Launch",
    text: "Configure the workspace, develop and validate inventories, map obligations and establish the initial execution baseline.",
  },
  {
    title: "Execution Support",
    text: "Maintain data, workflows, reporting, governance and PMO capacity throughout the transaction.",
  },
  {
    title: "Managed Technology Transition",
    text: "Lead the technology workstream through Day 1, integration, separation, migration and TSA exit.",
  },
  {
    title: "Specialist Advisory",
    text: "Add focused expertise for diligence, cost and synergy analysis, operating-model design, strategy and complex program leadership.",
  },
];

const faqs = [
  [
    "Is MergeVista priced per user?",
    "No. MergeVista is structured around a persistent platform environment and the active transactions it supports, rather than a conventional per-seat model.",
  ],
  [
    "What determines transaction pricing?",
    "Transaction structure, technology footprint, the number of people affected, geographic scope, TSA requirements and migration complexity all help determine the appropriate scope.",
  ],
  [
    "Is setup charged for every transaction?",
    "No. Platform implementation and enablement is a one-time customer engagement. New transactions carry their applicable execution fee, while Transaction Launch services are optional and separately scoped when additional support is required.",
  ],
  [
    "Are services included in the platform subscription?",
    "Optional services are separately scoped. This keeps the software commercial model clear while allowing teams to add expert capacity where it accelerates the outcome.",
  ],
  [
    "Is AI usage included?",
    "Each transaction includes an AI usage allowance sized to its scope. Additional capacity can be added when document volume or analysis requirements are higher.",
  ],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: "MergeVista pricing structure",
  url: canonicalUrl("/pricing"),
  description:
    "How MergeVista combines an annual platform subscription with transaction execution pricing, one-time customer implementation and optional services.",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
  publisher: {
    "@type": "Organization",
    "@id": `${brand.websiteUrl}/#organization`,
    name: brand.legalName,
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[.28] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="relative mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:items-end lg:px-8 lg:py-28">
          <div>
            <Badge className="gap-2 bg-white"><Sparkles className="size-3.5 text-[#1559a6]" />PREDICTABLE BY DESIGN</Badge>
            <h1 className="mt-7 max-w-5xl text-[clamp(3rem,5.8vw,5.9rem)] font-medium leading-[.98] tracking-[-.055em]">
              Pricing that scales with
              <span className="block font-normal text-[#1559a6]">transaction complexity.</span>
            </h1>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-2xl text-lg leading-8 text-zinc-600">
              Start with a persistent platform environment, then add transaction capacity and expert support according to the scope of each deal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/book-a-demo">Discuss your transaction <ArrowRight /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/platform">Explore the platform</Link></Button>
            </div>
            <p className="mt-6 text-xs text-zinc-500">No per-user pricing · No public rate card · Scope aligned to the transaction</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div><Badge>HOW PRICING WORKS</Badge><h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">A commercial model built around the work—not the number of logins.</h2></div>
          <p className="max-w-2xl text-base leading-7 text-zinc-600 lg:justify-self-end">MergeVista combines a predictable annual platform subscription with transaction-specific pricing. Your environment remains available between deals; transaction capacity scales when execution begins.</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 md:grid-cols-2 xl:grid-cols-4">
          {model.map((item) => <div key={item.title} className="flex min-h-[390px] flex-col bg-white p-7 sm:p-9"><div className="flex items-center justify-between"><item.icon className="size-5 text-[#1559a6]" /><span className="text-xs font-semibold tracking-[.13em] text-zinc-400">{item.number}</span></div><h3 className="mt-14 text-2xl font-medium tracking-[-.035em]">{item.title}</h3><p className="mt-5 text-sm leading-6 text-zinc-600">{item.text}</p><p className="mt-auto border-t border-zinc-200 pt-5 text-xs font-medium text-[#1559a6]">{item.note}</p></div>)}
        </div>
        <div className="grid border-x border-b border-zinc-200 bg-zinc-50 px-7 py-6 sm:grid-cols-[220px_1fr] sm:items-center sm:px-9"><div className="flex items-center gap-3"><Puzzle className="size-4 text-[#1559a6]" /><h3 className="text-sm font-medium text-zinc-900">Enterprise Integrations</h3></div><p className="mt-3 text-sm leading-6 text-zinc-600 sm:mt-0">SSO and identity-provider setup, APIs, third-party integrations and custom data migration are scoped separately based on requirements.</p></div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
          <div><Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">WHAT SHAPES YOUR SCOPE</Badge><h2 className="mt-6 text-4xl font-medium tracking-[-.04em] sm:text-5xl">Deal value is a guide. Execution complexity determines the fit.</h2><p className="mt-6 max-w-xl leading-7 text-zinc-400">We begin with the transaction profile, then assess the operating realities that determine the platform capacity, configuration and support required.</p></div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
            {complexity.map((item, index) => <div key={item} className="flex min-h-32 items-center gap-5 bg-zinc-950 p-6 sm:p-7"><span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-xs text-[#76a9e2]">0{index + 1}</span><span className="text-base text-zinc-200">{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <Badge className="bg-white">CLEARLY DEFINED</Badge>
          <div className="mt-5 grid gap-7 lg:grid-cols-[1fr_.7fr] lg:items-end"><h2 className="max-w-4xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">Know what forms the platform relationship—and what is added by choice.</h2><p className="leading-7 text-zinc-600">The subscription and transaction scope establish the software foundation. Services and integrations remain visible, optional and separately scoped.</p></div>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <Card className="p-7 sm:p-10"><Gauge className="size-5 text-[#1559a6]" /><small className="mt-8 block font-semibold tracking-[.12em] text-[#1559a6]">PLATFORM &amp; TRANSACTION FOUNDATION</small><h3 className="mt-4 text-3xl font-medium tracking-[-.04em]">Designed for continuity across transactions.</h3><p className="mt-4 text-sm leading-6 text-zinc-600">Establish a durable platform foundation that stays useful before, during and after each deal.</p><div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200 sm:grid-cols-2">{included.map((item) => <div key={item.title} className="bg-white p-5"><h4 className="text-sm font-medium text-zinc-900">{item.title}</h4><p className="mt-2 text-xs leading-5 text-zinc-600">{item.text}</p></div>)}</div><div className="mt-5 rounded-lg border border-zinc-200 bg-zinc-50 p-5"><small className="font-semibold tracking-[.1em] text-[#1559a6]">BUILT FOR CONTINUITY</small><p className="mt-2 text-xs leading-5 text-zinc-600">The platform remains available between transactions, preserving institutional knowledge and reducing the effort required to launch the next deal.</p></div><Button asChild variant="ghost" className="mt-7 px-0"><Link href="/platform">Explore the MergeVista platform <ArrowRight /></Link></Button></Card>
            <Card className="p-7 sm:p-10"><BrainCircuit className="size-5 text-[#1559a6]" /><small className="mt-8 block font-semibold tracking-[.12em] text-zinc-500">OPTIONAL PLATFORM-ENABLED SERVICES</small><h3 className="mt-4 text-3xl font-medium tracking-[-.04em]">Add expert capacity where it accelerates execution.</h3><p className="mt-4 text-sm leading-6 text-zinc-600">Keep the platform at the center while adding support around the specific outcomes your team needs.</p><div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200 sm:grid-cols-2">{optionalServices.map((item) => <div key={item.title} className="bg-white p-5"><h4 className="text-sm font-medium text-zinc-900">{item.title}</h4><p className="mt-2 text-xs leading-5 text-zinc-600">{item.text}</p></div>)}</div><div className="mt-5 rounded-lg border border-zinc-200 bg-zinc-50 p-5"><small className="font-semibold tracking-[.1em] text-[#1559a6]">ENTERPRISE INTEGRATIONS</small><p className="mt-2 text-xs leading-5 text-zinc-600">SSO and identity-provider setup, APIs, third-party integrations and custom data migration are available and scoped separately.</p></div><Button asChild variant="ghost" className="mt-7 px-0"><Link href="/services">Explore platform-enabled services <ArrowRight /></Link></Button></Card>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[.72fr_1.28fr] lg:px-8 lg:py-28">
        <div><Badge>PRICING QUESTIONS</Badge><h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">The structure is consistent. The scope reflects your transaction.</h2><p className="mt-6 max-w-xl leading-7 text-zinc-600">We will translate your transaction profile into a clear commercial proposal covering platform access, active-deal capacity, setup and any optional support.</p></div>
        <div className="border-t border-zinc-200">{faqs.map(([question, answer], index) => <article key={question} className="grid gap-5 border-b border-zinc-200 py-7 sm:grid-cols-[52px_.72fr_1.1fr]"><span className="text-sm font-medium text-[#1559a6]">0{index + 1}</span><h3 className="text-xl font-medium tracking-[-.025em]">{question}</h3><p className="text-sm leading-6 text-zinc-600">{answer}</p></article>)}</div>
      </section>

      <section className="px-5 py-16 lg:px-8"><div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16"><div><Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">A CLEAR STARTING POINT</Badge><h2 className="mt-6 max-w-4xl text-3xl font-medium tracking-[-.035em] sm:text-5xl">Tell us what you are executing. We will define the right scope.</h2><p className="mt-5 max-w-3xl text-zinc-400">Start with the platform, align capacity to the transaction and add expert support only where your team needs it.</p></div><div className="flex flex-wrap gap-3"><Button asChild size="lg" variant="inverse"><Link href="/book-a-demo">Discuss your transaction <ArrowRight /></Link></Button><Button asChild size="lg" className="border border-zinc-700 bg-zinc-900 hover:bg-zinc-800"><Link href="/contact">Contact MergeVista</Link></Button></div></div></section>

      <SiteFooter bordered />
    </main>
  );
}
