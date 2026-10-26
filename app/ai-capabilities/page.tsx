import ModernHub from "../components/ModernHub";
import { Badge } from "../components/poc/badge";
import { Card } from "../components/poc/card";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata(
  "AI for IT M&A | MergeVista Intelligence",
  "Explore MergeVista Intelligence for source-grounded contract extraction, product and license normalization, inventory reconciliation, exception detection and human-governed IT M&A decisions.",
  "/ai-capabilities",
);

const workflow = [
  [
    "01",
    "Source documents",
    "Read the commercial evidence",
    "Process machine-readable agreements in a private Azure AI environment and preserve the source language behind every proposed field.",
  ],
  [
    "02",
    "Structured intelligence",
    "Extract what execution teams need",
    "Identify contract terms, dates, renewal and consent requirements, disposition signals, products, editions, license metrics and quantities.",
  ],
  [
    "03",
    "Commercial model",
    "Normalize products and entitlements",
    "Reconcile product names and aliases, connect contractual rights to a governed catalog and retain the agreement and evidence from which each entitlement originated.",
  ],
  [
    "04",
    "Inventory relationships",
    "Connect rights to deployed technology",
    "Propose relationships between products and deal inventory—including applications, servers, network devices and users—with confidence, rationale and supporting evidence.",
  ],
  [
    "05",
    "Readiness decisions",
    "Turn relationships into action",
    "Expose missing rights, unallocated links, over-deployment and unresolved coverage so teams can make defensible Day 1, migration and exit decisions.",
  ],
];

const cards = [
  {
    eyebrow: "01 · Contract intelligence",
    title: "Extract fields that remain connected to their source",
    text: "MergeVista captures critical commercial terms and product-level information while retaining the supporting clause or snippet, confidence level and review state.",
    href: "/ai-capabilities/contract-commercial-intelligence",
    points: [
      "Contract identity, dates, renewal, assignment, change-of-control and consent terms",
      "Product, edition, quantity, metric and inventory-match signals",
      "Grounding checks reject output that cannot be traced to the uploaded document",
    ],
    linkLabel: "Faster understanding without losing evidence",
  },
  {
    eyebrow: "02 · Product normalization",
    title: "Create one commercial view of every product and service",
    text: "AI-assisted normalization brings inconsistent product references into a governed catalog while preserving aliases, vendor context and the original extracted name.",
    href: "/ai-capabilities/contract-commercial-intelligence",
    points: [
      "Canonical product records with vendor, edition, category and product type",
      "Approved aliases improve reconciliation across documents and inventories",
      "Lifecycle, scope and strategy remain explicit business decisions",
    ],
    linkLabel: "A commercial baseline teams can govern",
  },
  {
    eyebrow: "03 · License intelligence",
    title: "Connect contractual rights to the products they govern",
    text: "Entitlements retain purchased quantity, assigned quantity, metric, dates, source reference, coverage and disposition so technical execution stays aligned with commercial rights.",
    href: "/ai-capabilities/contract-commercial-intelligence",
    points: [
      "Agreement-to-product-to-entitlement traceability",
      "Inherited disposition with controlled, reasoned overrides",
      "Day 1 coverage and reconciliation status visible in context",
    ],
    linkLabel: "Move licensing and migration together",
  },
  {
    eyebrow: "04 · Inventory reconciliation",
    title: "Find where commercial products exist in the deal inventory",
    text: "MergeVista compares the product catalog and approved aliases with transaction inventory, then proposes potential relationships for accountable review.",
    href: "/ai-capabilities/inventory-reconciliation-exceptions",
    points: [
      "Candidate matches include confidence, rationale and evidence",
      "Links can be allocated to a specific entitlement",
      "Manual linking remains available when teams already know the relationship",
    ],
    linkLabel: "See which technology consumes which rights",
  },
  {
    eyebrow: "05 · Exception detection",
    title: "Surface the gaps that can disrupt Day 1 or TSA exit",
    text: "The connected model evaluates contractual rights, approved inventory links and reported consumption to identify actionable commercial and deployment exceptions.",
    href: "/ai-capabilities/inventory-reconciliation-exceptions",
    points: [
      "Missing entitlements for quantity-based products",
      "Consumption not reported or exceeding contractual rights",
      "Approved inventory links not allocated to an entitlement",
    ],
    linkLabel: "Turn hidden exposure into owned action",
  },
  {
    eyebrow: "06 · Human governance",
    title: "Keep accountable people in control of every consequential decision",
    text: "AI creates proposals—not final transaction decisions. Reviewers can correct extracted values, approve or reject matches, provide reasons and preserve the resulting history.",
    href: "/ai-capabilities/human-governed-ai",
    points: [
      "Pending-review status for extracted information",
      "Explicit approval or rejection of reconciliation proposals",
      "Reason-required removal of approved inventory links and auditable actions",
    ],
    linkLabel: "Automation with defensible control",
  },
];

export default function Page() {
  return (
    <ModernHub
      eyebrow="MergeVista Intelligence"
      title="AI that connects contract evidence to"
      accent="execution decisions."
      intro="Move from an uploaded agreement to governed products, license entitlements, inventory relationships and readiness action—without separating the AI output from its source or the people accountable for approving it."
      primaryLabel="See it in action"
      cards={cards}
      sectionLabel="PLATFORM CAPABILITIES"
      sectionTitle="Intelligence designed for governed IT M&A execution."
      sectionIntro="Each capability produces structured, reviewable information that remains connected to transaction context and accountable ownership."
      image="/product/redesign-contracts-licenses.png"
      imageLabel="SOURCE-GROUNDED REVIEW"
      imageAlt="MergeVista AI contract review comparing extracted values with confidence, decisions and source evidence"
      imageMeta="Illustrative sample data"
      ctaTitle="See contract intelligence become execution intelligence."
      ctaText="Explore the complete path from agreement evidence to governed inventory and readiness decisions."
      ctaLabel="Book a demo"
    >
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-[1560px] gap-px bg-zinc-200 px-5 py-0 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            "Source-grounded extraction",
            "Private Azure AI processing",
            "Confidence + rationale",
            "Human approval",
          ].map((item) => (
            <div
              key={item}
              className="bg-white px-5 py-6 text-center text-xs font-medium text-zinc-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <Badge className="bg-white">ONE CONNECTED INTELLIGENCE CHAIN</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            Do more than extract contract fields.
          </h2>
          <p className="mt-5 max-w-4xl leading-7 text-zinc-600">
            The value comes from carrying trustworthy commercial intelligence
            forward—into the products, rights, technology records and execution
            decisions that determine whether the transaction can operate.
          </p>
          <div className="mt-14 grid gap-4 lg:grid-cols-5">
            {workflow.map(([n, l, t, d]) => (
              <Card key={n} className="p-6">
                <Badge>{n}</Badge>
                <small className="mt-6 block font-semibold tracking-[.08em] text-[#1559a6]">
                  {l.toUpperCase()}
                </small>
                <h3 className="mt-4 text-xl font-medium">{t}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <Badge>GOVERNED BY DESIGN</Badge>
        <h2 className="mt-5 max-w-5xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">
          Private processing. Grounded output. Accountable decisions.
        </h2>
        <p className="mt-5 max-w-4xl leading-7 text-zinc-600">
          MergeVista uses customer-enabled private Azure AI processing with
          managed identity. AI execution requires explicit authorization,
          proposed outputs are validated against allowed records and source
          evidence, and consequential changes remain subject to human review.
        </p>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {[
            [
              "PRIVATE",
              "Tenant-controlled AI",
              "AI processing can be enabled by customer tenant and runs through a privately configured Azure environment.",
            ],
            [
              "GROUNDED",
              "Evidence before assertion",
              "Extracted values retain source snippets; proposed inventory matches carry confidence, rationale and evidence.",
            ],
            [
              "CONTROLLED",
              "Proposal before decision",
              "Reviewers approve, reject, correct or remove relationships with the decision history preserved.",
            ],
          ].map(([l, t, d]) => (
            <Card key={l} className="p-8">
              <Badge>{l}</Badge>
              <h3 className="mt-7 text-2xl font-medium">{t}</h3>
              <p className="mt-4 leading-7 text-zinc-600">{d}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <Badge className="bg-white">THE RESPONSIBILITY BOUNDARY</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            AI accelerates analysis. People remain accountable.
          </h2>
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <Card className="p-8">
              <Badge>AI ASSISTS</Badge>
              <ul className="mt-7 space-y-4 text-zinc-600">
                {[
                  "Extracting structured information from source documents",
                  "Normalizing inconsistent product references",
                  "Proposing product-to-inventory relationships",
                  "Highlighting potential licensing and coverage exceptions",
                ].map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Card>
            <Card className="p-8">
              <Badge>PEOPLE DECIDE</Badge>
              <ul className="mt-7 space-y-4 text-zinc-600">
                {[
                  "Whether extracted information is correct and approved",
                  "Which inventory relationships become authoritative",
                  "Product scope, disposition and Day 1 coverage",
                  "Commercial, migration and TSA exit actions",
                ].map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </ModernHub>
  );
}
