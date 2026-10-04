export type Solution = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  seoDescription: string;
  audience: string[];
  challengeTitle: string;
  challenge: string;
  controls: string[];
  steps: { title: string; text: string }[];
  outcomes: string[];
  capabilities: { name: string; slug: string }[];
  image: string;
  imageAlt: string;
  imageLabel: string;
};

export const solutions: Solution[] = [
  {
    slug: "divestitures-separations",
    name: "Divestitures & Separations",
    eyebrow: "Separate without losing operational control",
    headline: "Turn carve-out complexity into an executable separation model.",
    introduction: "Establish the in-scope technology baseline, expose shared dependencies and coordinate the decisions, interim services and execution required to separate the business safely.",
    seoDescription: "Plan and govern IT divestitures, carve-outs and separations with connected inventories, dependencies, Day 1 readiness and TSA exit evidence.",
    audience: ["Corporate development and separation leaders", "Seller and buyer technology teams", "Separation management offices", "Functional and workstream owners"],
    challengeTitle: "A legal perimeter does not create an operationally separable business.",
    challenge: "Applications, infrastructure, identity, data, sites, contracts and support models frequently remain shared long after transaction scope is defined. Teams need one governed view of what belongs to the business, what it depends on and how continuity will be protected while those dependencies are removed.",
    controls: ["Carve-out scope and inventory ownership", "Shared technology and cross-workstream dependencies", "Day 1 continuity and exception decisions", "TSA requirements and interim operating arrangements"],
    steps: [
      { title: "Establish the carve-out baseline", text: "Reconcile applications, infrastructure, users, sites, data and commercial records into a governed transaction scope." },
      { title: "Expose separation dependencies", text: "Connect shared services, technology relationships, contracts and operational ownership before plans rely on incomplete assumptions." },
      { title: "Protect Day 1 continuity", text: "Coordinate cutover, access, interim services, readiness criteria and accountable exceptions around business outcomes." },
      { title: "Define separation ownership and handoffs", text: "Assign seller and buyer responsibilities, interim support needs and accountable handoffs required to execute the separation." },
    ],
    outcomes: ["A defensible carve-out technology baseline", "Earlier visibility into shared dependencies", "Coordinated continuity through legal close", "A controlled path from separation to independence"],
    capabilities: [{ name: "Transaction Baseline", slug: "transaction-baseline" }, { name: "Day 1 Readiness", slug: "day-1-readiness" }, { name: "Migration & TSA Exit", slug: "migration-tsa-exit" }],
    image: "/product/transition-readiness-enriched.png",
    imageAlt: "MergeVista transition readiness workspace for an IT carve-out and separation",
    imageLabel: "SEPARATION READINESS",
  },
  {
    slug: "acquisitions-integrations",
    name: "Acquisitions & Integrations",
    eyebrow: "Connect acquisition decisions to execution",
    headline: "Move from acquired inventory to an accountable integration plan.",
    introduction: "Give buyer teams a structured view of acquired technology, operational dependencies, future-state decisions and migration work—without losing the transaction context behind them.",
    seoDescription: "Govern IT acquisition and integration planning with connected technology inventories, dispositions, dependencies, milestones and accountable decisions.",
    audience: ["Corporate development and integration leaders", "CIO and enterprise technology teams", "Integration management offices", "Application and infrastructure owners"],
    challengeTitle: "Receiving the inventory is not the same as understanding the acquisition.",
    challenge: "Buyer teams inherit technology records assembled for diligence or separation, then must quickly determine what to retain, integrate, replace or retire. If those decisions are disconnected from dependencies, contracts and execution plans, the integration begins with avoidable uncertainty.",
    controls: ["Acquired technology baseline and data quality", "Disposition and future-state decisions", "Integration dependencies and accountable owners", "Migration waves, milestones, risk and evidence"],
    steps: [
      { title: "Absorb the transaction fact base", text: "Carry forward the approved inventory, ownership, source evidence and unresolved exceptions into buyer execution." },
      { title: "Govern future-state decisions", text: "Connect application and infrastructure dispositions to business needs, dependencies, contracts and target architecture." },
      { title: "Build executable integration waves", text: "Sequence work around technical relationships, site priorities, resource constraints and operational readiness." },
      { title: "Control delivery and decisions", text: "Track milestones, RAID, dependencies and approvals against the technology and outcomes they affect." },
    ],
    outcomes: ["A trusted view of acquired technology", "Traceable future-state decisions", "Migration sequencing informed by dependencies", "Executive visibility into integration risk and progress"],
    capabilities: [{ name: "Transaction Baseline", slug: "transaction-baseline" }, { name: "Transaction Control", slug: "transaction-control" }, { name: "Migration & TSA Exit", slug: "migration-tsa-exit" }],
    image: "/product/application-inventory-enriched.png",
    imageAlt: "MergeVista application inventory supporting acquisition integration decisions",
    imageLabel: "ACQUISITION TECHNOLOGY BASELINE",
  },
  {
    slug: "day-1-readiness",
    name: "Day 1 Readiness",
    eyebrow: "Protect continuity at legal close",
    headline: "Prove the business can operate—not merely that the plan is green.",
    introduction: "Connect workstream readiness to the applications, infrastructure, users, sites, access, contracts, services and evidence required for operational continuity on Day 1.",
    seoDescription: "Build evidence-based IT M&A Day 1 readiness across business outcomes, sites, technology, users, dependencies, cutover and accountable approvals.",
    audience: ["Day 1 and transition leaders", "Business and technology workstream owners", "Site and functional readiness teams", "Executive approvers"],
    challengeTitle: "Workstream completion can conceal an unready business outcome.",
    challenge: "Status reporting usually asks whether individual plans are complete. The business experiences readiness across connected services: identity must work with applications, infrastructure must support sites and users, contracts must permit operation and accountable leaders must accept known exceptions.",
    controls: ["Outcome-based readiness criteria", "Cross-workstream and site dependencies", "Cutover activities, rehearsals and blockers", "Evidence, exceptions and accountable approvals"],
    steps: [
      { title: "Define what must operate", text: "Translate Day 1 objectives into specific readiness criteria for business services, locations, teams and technology." },
      { title: "Connect the readiness chain", text: "Relate applications, infrastructure, identity, users, sites, contracts and interim services to the outcomes they support." },
      { title: "Resolve or accept exceptions", text: "Make blockers, mitigations, owners and approval decisions visible before the go/no-go conversation." },
      { title: "Approve with evidence", text: "Preserve the supporting facts, sign-offs and decision history behind each readiness conclusion." },
    ],
    outcomes: ["Readiness measured around operational outcomes", "Earlier discovery of cross-workstream blockers", "Explicit ownership of exceptions and mitigations", "A defensible Day 1 approval record"],
    capabilities: [{ name: "Day 1 Readiness", slug: "day-1-readiness" }, { name: "Transaction Control", slug: "transaction-control" }, { name: "Transaction Baseline", slug: "transaction-baseline" }],
    image: "/product/day-1-site-readiness.png",
    imageAlt: "MergeVista Day 1 site readiness workspace with connected blockers and approvals",
    imageLabel: "DAY 1 SITE READINESS",
  },
  {
    slug: "tsa-management-exit",
    name: "TSA Management & Exit",
    eyebrow: "Operate every service with an exit path",
    headline: "Manage TSA delivery and exit as one connected operating process.",
    introduction: "Connect service obligations, owners, consumption, costs, issues, technology dependencies, migration milestones and objective exit evidence from transition through final termination.",
    seoDescription: "Manage TSA services, obligations, charges, issues, dependencies, migration milestones and evidence-based exit in one connected IT M&A operating model.",
    audience: ["TSA management offices", "Seller service owners", "Buyer transition and migration teams", "Finance, commercial and technology leaders"],
    challengeTitle: "A TSA register records the agreement—not whether the service can exit.",
    challenge: "TSA delivery, technology migration and commercial governance are often tracked separately. That makes it difficult to see whether the seller is meeting its obligations, whether the buyer is removing dependencies and whether termination criteria are genuinely satisfied.",
    controls: ["Service obligations, ownership and consumption", "Charges, SLA performance, issues and notices", "Technology dependencies and migration milestones", "Exit criteria, approvals and termination evidence"],
    steps: [
      { title: "Operationalize the agreement", text: "Translate TSA schedules into governed services with owners, obligations, charges, performance measures and notice requirements." },
      { title: "Connect delivery to technology", text: "Relate every service to the applications, infrastructure, data, users and contracts that create the dependency." },
      { title: "Govern migration and exit", text: "Track buyer capabilities, migration milestones, blockers and seller actions against each service exit path." },
      { title: "Terminate with evidence", text: "Confirm objective exit criteria, approvals, notices and operational acceptance before ending the service." },
    ],
    outcomes: ["Accountable service delivery and consumption", "Visible cost, performance and extension exposure", "Migration plans connected to TSA dependencies", "Defensible, evidence-based service termination"],
    capabilities: [{ name: "Migration & TSA Exit", slug: "migration-tsa-exit" }, { name: "Transaction Control", slug: "transaction-control" }, { name: "Transaction Baseline", slug: "transaction-baseline" }],
    image: "/product/tsa-exit-workstream-readiness.png",
    imageAlt: "MergeVista TSA exit readiness workspace connecting services, migration and evidence",
    imageLabel: "TSA EXIT READINESS",
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
