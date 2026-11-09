import Link from "next/link";
import { ArrowRight, Check, Compass, Database, Flag, Layers3, LineChart, Settings2, Sparkles, Users, Workflow } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { Badge } from "../components/poc/badge";
import { Button } from "../components/poc/button";
import { Card } from "../components/poc/card";
import { brand, canonicalUrl } from "../lib/brand";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata(
  "Platform-Enabled IT M&A Services | MergeVista",
  "Accelerate IT M&A execution with MergeVista platform-enabled services for transaction launch, execution support, Day 1, migration and TSA exit.",
  "/services",
);

const packages = [
  {
    id: "transaction-launch",
    number: "01",
    title: "Transaction Launch",
    tagline: "Establish the transaction foundation.",
    bestFor: "Teams beginning an acquisition, divestiture or carve-out that need to organize the technology scope quickly.",
    points: ["Transaction workspace setup and configuration", "Initial inventory development and validation", "Contract, license and dependency mapping", "Ownership, approval and governance workflows", "Initial risks, decisions and reporting structure", "Baseline review and approval"],
    outcome: "A governed technology baseline and configured execution environment the transaction team can use immediately.",
  },
  {
    id: "execution-support",
    number: "02",
    title: "Execution Support",
    tagline: "Keep transaction data and execution control current.",
    bestFor: "Teams that own the transaction but need additional capacity to maintain the platform and sustain governance.",
    points: ["Inventory and dependency maintenance", "Workstream data coordination", "Change, exception and decision governance", "RAID and readiness management", "Leadership reporting and dashboards", "TSA service and exit-status maintenance"],
    outcome: "A continuously maintained execution environment with reliable data, visible ownership and current leadership reporting.",
  },
  {
    id: "managed-transition",
    number: "03",
    title: "Managed Technology Transition",
    tagline: "Lead the transition through critical milestones.",
    bestFor: "Organizations needing experienced leadership across Day 1, separation, integration, migration or TSA exit.",
    points: ["Technology workstream leadership", "Integration or separation planning", "Day 1 operating-readiness management", "Migration-wave and cutover governance", "TSA mobilization and exit management", "Executive reporting and escalation"],
    outcome: "A connected, governed technology program from transaction baseline through operational transition and TSA exit.",
  },
];

const lifecycle = [
  { icon: Database, label: "01 · ESTABLISH", title: "Build the baseline", text: "Configure the transaction, develop and validate inventories, map commercial obligations and establish accountable ownership.", items: ["Transaction setup", "Inventory validation", "Contract and dependency mapping"] },
  { icon: Compass, label: "02 · PLAN", title: "Design the transition", text: "Translate the baseline into dispositions, Day 1 requirements, separation plans, migration waves and TSA services.", items: ["Disposition decisions", "Day 1 requirements", "Migration and TSA planning"] },
  { icon: Workflow, label: "03 · GOVERN", title: "Control execution", text: "Connect workstreams, milestones, risks, decisions, changes and readiness evidence in one governed environment.", items: ["Execution governance", "RAID and exceptions", "Readiness and reporting"] },
  { icon: Flag, label: "04 · COMPLETE", title: "Reach independence", text: "Coordinate migration, transfer operational ownership, retire temporary dependencies and prove TSA exit readiness.", items: ["Migration readiness", "Operational handover", "Evidence-based TSA exit"] },
];

const advisory = ["IT due diligence", "Standalone cost and synergy analysis", "Technology operating-model design", "Integration and separation strategy", "TSA strategy and service definition", "Complex program leadership"];

const engagement = [
  ["Define the outcome", "Align transaction objectives, immediate priorities, scope and the operating model required."],
  ["Configure MergeVista", "Establish the workspace, data model, workflows, access, ownership and governance structure."],
  ["Build the baseline", "Develop and validate inventories, dependencies, commercial obligations and execution requirements."],
  ["Support execution", "Maintain the platform, coordinate action and provide leadership support for the agreed period."],
  ["Transfer capability", "Leave your team with the complete transaction record, operating history and ability to continue independently."],
];

const commercial = [
  { icon: Layers3, title: "Fixed-fee transaction package", text: "For Transaction Launch and other clearly defined deliverables." },
  { icon: Users, title: "Monthly execution support", text: "For ongoing data, reporting, governance and PMO capacity." },
  { icon: LineChart, title: "Milestone-based engagement", text: "For Day 1, migration waves, integration, separation and TSA exit." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Platform-Enabled IT M&A Services",
  description:
    "Platform-enabled services for transaction launch, execution support, Day 1, migration, separation, integration and TSA exit.",
  url: canonicalUrl("/services"),
  provider: {
    "@type": "Organization",
    "@id": `${brand.websiteUrl}/#organization`,
    name: brand.legalName,
    url: brand.websiteUrl,
  },
  areaServed: "Worldwide",
  serviceType: "IT M&A execution services",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "MergeVista platform-enabled services",
    itemListElement: packages.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.tagline,
        url: canonicalUrl(`/services#${service.id}`),
      },
    })),
  },
};

export default function ServicesPage() {
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
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[.28] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        <div className="relative mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:px-8 lg:py-28">
          <div>
            <Badge className="gap-2 bg-white"><Sparkles className="size-3.5 text-[#1559a6]" />PLATFORM-ENABLED SERVICES</Badge>
            <h1 className="mt-7 max-w-5xl text-[clamp(3rem,5.8vw,5.9rem)] font-medium leading-[.98] tracking-[-.055em]">Expert execution,<span className="block font-normal text-[#1559a6]">enabled by MergeVista.</span></h1>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-2xl text-lg leading-8 text-zinc-600">Establish a reliable transaction baseline, configure the right operating model and maintain execution control with experienced IT M&amp;A practitioners—all delivered through the MergeVista platform.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link href="/book-a-demo">Discuss your transaction <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline"><Link href="/platform">Explore the platform</Link></Button></div>
            <p className="mt-6 text-xs text-zinc-500">Optional services · Separately scoped · One connected transaction record</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1560px] gap-12 px-5 py-20 lg:grid-cols-[.85fr_1.15fr] lg:px-8 lg:py-28">
        <div><Badge>OUR SERVICE MODEL</Badge><h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">Software at the center. Expertise where it accelerates the outcome.</h2><p className="mt-6 max-w-xl leading-7 text-zinc-600">MergeVista is an IT M&amp;A execution platform—not a traditional consulting model. Optional services help teams configure the platform, establish reliable data and maintain execution discipline.</p></div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Settings2, title: "Faster time to value", text: "Begin with a configured workspace and an actionable transaction baseline." },
            { icon: Check, title: "Lower adoption risk", text: "Apply proven workflows without building the operating model internally first." },
            { icon: Layers3, title: "Capability that remains", text: "Retain the data, execution history and platform after the engagement ends." },
          ].map((item) => <Card key={item.title} className="p-6 sm:p-7"><item.icon className="size-5 text-[#1559a6]" /><h3 className="mt-8 text-xl font-medium tracking-[-.025em]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-600">{item.text}</p></Card>)}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <Badge className="bg-white">THREE WAYS TO ENGAGE</Badge>
          <div className="mt-5 grid gap-7 lg:grid-cols-[1fr_.65fr] lg:items-end"><h2 className="max-w-4xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">Start with the support your transaction needs today.</h2><p className="text-base leading-7 text-zinc-600 lg:justify-self-end">Every package uses MergeVista as the system of execution, so the work produces a durable transaction record—not disconnected deliverables.</p></div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {packages.map((item) => <Card id={item.id} key={item.title} className="flex scroll-mt-28 flex-col overflow-hidden"><div className="border-b border-zinc-200 p-7 sm:p-8"><small className="font-semibold tracking-[.12em] text-[#1559a6]">{item.number}</small><h3 className="mt-7 text-3xl font-medium tracking-[-.04em]">{item.title}</h3><p className="mt-3 text-lg text-zinc-700">{item.tagline}</p><p className="mt-6 text-sm leading-6 text-zinc-500"><strong className="font-medium text-zinc-800">Best for:</strong> {item.bestFor}</p></div><div className="flex flex-1 flex-col p-7 sm:p-8"><ul className="space-y-3">{item.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-zinc-600"><Check className="mt-1 size-4 shrink-0 text-[#1559a6]" />{point}</li>)}</ul><div className="mt-8 border-t border-zinc-200 pt-6"><small className="font-semibold tracking-[.1em] text-zinc-400">OUTCOME</small><p className="mt-3 text-sm leading-6 text-zinc-700">{item.outcome}</p></div><Button asChild variant="ghost" className="mt-6 self-start px-0"><Link href="/book-a-demo">Discuss this package <ArrowRight /></Link></Button></div></Card>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <Badge>COMPLETE LIFECYCLE SUPPORT</Badge><h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">Support across the complete IT M&amp;A journey.</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 md:grid-cols-2 xl:grid-cols-4">{lifecycle.map((item) => <div key={item.title} className="bg-white p-7 sm:p-9"><item.icon className="size-5 text-[#1559a6]" /><small className="mt-8 block font-semibold tracking-[.1em] text-zinc-400">{item.label}</small><h3 className="mt-4 text-2xl font-medium tracking-[-.03em]">{item.title}</h3><p className="mt-4 text-sm leading-6 text-zinc-600">{item.text}</p><ul className="mt-7 space-y-2 text-xs text-zinc-500">{item.items.map((x) => <li key={x}>— {x}</li>)}</ul></div>)}</div>
      </section>

      <section id="specialist-advisory" className="scroll-mt-28 border-y border-zinc-800 bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-[1560px] gap-12 px-5 py-20 lg:grid-cols-[.85fr_1.15fr] lg:px-8 lg:py-28"><div><Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">SELECTIVE ADVISORY SUPPORT</Badge><h2 className="mt-6 text-4xl font-medium tracking-[-.04em] sm:text-5xl">Specialized expertise for complex transaction decisions.</h2><p className="mt-6 max-w-2xl leading-7 text-zinc-400">When a transaction requires additional strategic or technical depth, MergeVista can provide selectively scoped advisory support alongside the platform and connected to the same transaction evidence.</p></div><div className="grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2">{advisory.map((item) => <div key={item} className="flex min-h-28 items-center gap-4 bg-zinc-950 p-6"><span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-sm text-[#76a9e2]">+</span><span className="text-sm leading-6 text-zinc-200">{item}</span></div>)}</div></div>
      </section>

      <section className="mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-8 lg:py-28"><div><Badge>HOW ENGAGEMENTS WORK</Badge><h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">Focused support that leaves your team in control.</h2><p className="mt-6 leading-7 text-zinc-600">The engagement ends with your team retaining the platform, the complete transaction record and the capability to continue independently.</p></div><ol className="border-t border-zinc-200">{engagement.map(([title, text], index) => <li key={title} className="grid gap-5 border-b border-zinc-200 py-7 sm:grid-cols-[60px_.65fr_1fr] sm:items-start"><span className="text-sm font-medium text-[#1559a6]">0{index + 1}</span><h3 className="text-xl font-medium tracking-[-.025em]">{title}</h3><p className="text-sm leading-6 text-zinc-600">{text}</p></li>)}</ol></section>

      <section className="border-y border-zinc-200 bg-zinc-50"><div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28"><Badge className="bg-white">COMMERCIAL FLEXIBILITY</Badge><div className="mt-5 grid gap-7 lg:grid-cols-[1fr_.7fr] lg:items-end"><h2 className="max-w-4xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">Clearly scoped services. Flexible engagement models.</h2><p className="leading-7 text-zinc-600">Platform subscriptions and professional services are separately scoped and priced around transaction complexity and internal capacity.</p></div><div className="mt-14 grid gap-4 md:grid-cols-3">{commercial.map((item) => <Card key={item.title} className="p-7 sm:p-8"><item.icon className="size-5 text-[#1559a6]" /><h3 className="mt-8 text-xl font-medium tracking-[-.025em]">{item.title}</h3><p className="mt-4 text-sm leading-6 text-zinc-600">{item.text}</p></Card>)}</div></div></section>

      <section className="px-5 py-16 lg:px-8"><div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16"><div><Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">PLATFORM + EXPERT EXECUTION</Badge><h2 className="mt-6 max-w-4xl text-3xl font-medium tracking-[-.035em] sm:text-5xl">Start with the support your transaction needs today.</h2><p className="mt-5 max-w-3xl text-zinc-400">Combine the platform and optional expert services around your priorities—without losing ownership of the process or transaction record.</p></div><div className="flex flex-wrap gap-3"><Button asChild size="lg" variant="inverse"><Link href="/book-a-demo">Discuss your transaction <ArrowRight /></Link></Button><Button asChild size="lg" className="border border-zinc-700 bg-zinc-900 hover:bg-zinc-800"><Link href="/platform">Explore the platform</Link></Button></div></div></section>
      <SiteFooter bordered />
    </main>
  );
}
