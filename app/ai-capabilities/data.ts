export type AiCapability = {
  slug: string;
  name: string;
  seoTitle: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  seoDescription: string;
  challengeTitle: string;
  challenge: string;
  principles: string[];
  steps: { title: string; text: string }[];
  outcomes: string[];
  connectsTo: { name: string; slug: string }[];
  image: string;
  imageAlt: string;
  imageLabel: string;
};

export const aiCapabilities: AiCapability[] = [
  {
    slug: "contract-commercial-intelligence",
    name: "Contract & Commercial Intelligence",
    seoTitle: "Contract Intelligence for IT M&A | MergeVista",
    eyebrow: "Carry commercial evidence into execution",
    headline: "Turn agreement language into governed commercial intelligence.",
    introduction: "Extract critical terms, normalize product references and establish traceable license entitlements while preserving the source evidence and accountable review behind every approved value.",
    seoDescription: "Use source-grounded AI for IT M&A contract extraction, product normalization and license entitlement intelligence with human review.",
    challengeTitle: "Extracted fields have limited value when they lose their commercial context.",
    challenge: "Transaction teams need more than dates and clauses. They must understand which products are governed, what rights were purchased, which consent or assignment conditions apply and how those facts affect Day 1, separation and migration decisions.",
    principles: ["Source-grounded extraction with clause-level evidence", "Governed product names, aliases, editions and metrics", "Agreement-to-product-to-entitlement traceability", "Explicit reviewer approval before information becomes authoritative"],
    steps: [
      { title: "Read the commercial evidence", text: "Process machine-readable agreements in a private Azure AI environment and retain the source language behind each proposal." },
      { title: "Extract execution-relevant terms", text: "Identify dates, renewal, assignment, change-of-control, consent, product, quantity and license metric information." },
      { title: "Normalize products and rights", text: "Reconcile inconsistent product references into a governed catalog and connect approved entitlements to their origin." },
      { title: "Approve the commercial baseline", text: "Let accountable reviewers correct, approve or reject proposed information with reasons and history preserved." },
    ],
    outcomes: ["Faster agreement understanding without losing evidence", "One governed commercial product model", "Traceable license and entitlement rights", "Commercial facts ready for execution decisions"],
    connectsTo: [{ name: "Transaction Baseline", slug: "transaction-baseline" }, { name: "Day 1 Readiness", slug: "day-1-readiness" }, { name: "Migration & TSA Exit", slug: "migration-tsa-exit" }],
    image: "/product/ai-evidence-review.png",
    imageAlt: "MergeVista AI agreement review with extracted values, confidence and source evidence",
    imageLabel: "SOURCE-GROUNDED CONTRACT REVIEW",
  },
  {
    slug: "inventory-reconciliation-exceptions",
    name: "Inventory Reconciliation & Exception Detection",
    seoTitle: "Inventory Reconciliation for IT M&A | MergeVista",
    eyebrow: "Connect commercial rights to deployed technology",
    headline: "Find where products exist—and where coverage breaks down.",
    introduction: "Use AI-assisted matching to connect governed commercial products and entitlements to transaction inventory, then surface missing, unallocated and insufficient coverage for accountable action.",
    seoDescription: "Reconcile software products, license entitlements and IT inventory with AI-assisted matching and detect commercial coverage exceptions for IT M&A.",
    challengeTitle: "A contract list and an IT inventory do not explain whether technology is covered.",
    challenge: "Product names vary across agreements, applications, servers and user records. Without governed reconciliation, teams cannot reliably determine which technology consumes which rights or identify exposure before Day 1, migration or TSA exit.",
    principles: ["Approved aliases and product context guide matching", "Candidate links include confidence, rationale and evidence", "Entitlement allocation remains explicit and reviewable", "Exceptions remain connected to the affected transaction inventory"],
    steps: [
      { title: "Prepare the governed product model", text: "Use approved commercial products, aliases, editions and license metrics as the controlled basis for reconciliation." },
      { title: "Propose inventory relationships", text: "Compare products with applications, servers, devices and users to identify candidate links with supporting rationale." },
      { title: "Review and allocate coverage", text: "Approve authoritative relationships and allocate covered inventory to the appropriate entitlement." },
      { title: "Turn exceptions into action", text: "Surface missing rights, unallocated links, over-deployment and absent consumption as owned execution issues." },
    ],
    outcomes: ["Visible relationships between rights and technology", "Earlier identification of license coverage gaps", "Defensible inventory-to-entitlement allocation", "Commercial exceptions connected to execution action"],
    connectsTo: [{ name: "Transaction Baseline", slug: "transaction-baseline" }, { name: "Transaction Control", slug: "transaction-control" }, { name: "Migration & TSA Exit", slug: "migration-tsa-exit" }],
    image: "/product/contracts-licenses-enriched.png",
    imageAlt: "MergeVista contracts and licenses workspace connecting products, entitlements and inventory",
    imageLabel: "COMMERCIAL INVENTORY RECONCILIATION",
  },
  {
    slug: "human-governed-ai",
    name: "Human-Governed AI",
    seoTitle: "Human-Governed AI for IT M&A | MergeVista",
    eyebrow: "Accelerate analysis without surrendering control",
    headline: "Keep accountable people behind every consequential decision.",
    introduction: "Combine private AI processing, source-grounded proposals, validation, confidence and explicit human review so automation accelerates the work without becoming the transaction authority.",
    seoDescription: "Apply human-governed AI to IT M&A with private Azure processing, source grounding, confidence, validation, accountable review and audit history.",
    challengeTitle: "Transaction AI must earn trust at the point where decisions are made.",
    challenge: "Sensitive deal information, incomplete records and consequential decisions make opaque automation unacceptable. Teams need AI that shows its evidence, stays inside defined boundaries and leaves accountable people in control of what becomes authoritative.",
    principles: ["Customer-enabled private Azure AI processing", "Source evidence before assertion", "Validated proposals within allowed transaction records", "Explicit approval, rejection, correction and audit history"],
    steps: [
      { title: "Authorize the AI boundary", text: "Enable processing for the appropriate tenant and workflow through a privately configured Azure environment." },
      { title: "Generate grounded proposals", text: "Require extracted information and proposed relationships to retain evidence, confidence and rationale." },
      { title: "Validate before review", text: "Reject unsupported output and constrain proposals to the records and actions allowed by the workflow." },
      { title: "Keep people accountable", text: "Let reviewers approve, reject, correct or remove proposals while preserving the resulting decision history." },
    ],
    outcomes: ["Faster analysis with an inspectable basis", "Clear separation between proposal and decision", "Accountable approval of authoritative information", "Auditable AI-assisted transaction workflows"],
    connectsTo: [{ name: "Transaction Baseline", slug: "transaction-baseline" }, { name: "Transaction Control", slug: "transaction-control" }, { name: "Day 1 Readiness", slug: "day-1-readiness" }],
    image: "/product/avenlor-deal-dashboard.png",
    imageAlt: "MergeVista governed deal environment where AI-assisted intelligence supports accountable execution decisions",
    imageLabel: "GOVERNED EXECUTION CONTEXT",
  },
];

export function getAiCapability(slug: string) {
  return aiCapabilities.find((capability) => capability.slug === slug);
}
