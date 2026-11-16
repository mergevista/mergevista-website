export type CapabilityArea = {
  slug: string;
  number: string;
  shortName: string;
  name: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  seoDescription: string;
  problemTitle: string;
  problem: string;
  enables: string[];
  connected: string[];
  outcomes: string[];
  image: string;
  imageAlt: string;
  imageLabel: string;
};

export const capabilityAreas: CapabilityArea[] = [
  {
    slug: "transaction-baseline",
    number: "01",
    shortName: "Operational Baseline",
    name: "Operational Baseline",
    eyebrow: "Establish the transition foundation",
    headline: "Build the governed foundation for the transition.",
    introduction: "Bring functional and technology inventories, services, obligations, ownership and dependencies into one trusted transaction model for integration, separation and transition planning.",
    seoDescription: "Build a governed operational baseline across functional and technology inventories, services, obligations, ownership and dependencies with MergeVista.",
    problemTitle: "Disconnected records cannot support a coordinated transition.",
    problem: "Operational information is distributed across workstreams, systems, sites and partners. MergeVista brings it into one controlled model so teams can reconcile scope, ownership, dependencies and data quality before execution plans rely on it.",
    enables: ["Import and normalize inventories from multiple contributors", "Assign accountable owners and governed review workflows", "Connect workstreams, operational records, services and obligations", "Expose missing information, conflicts and readiness gaps"],
    connected: ["Workstreams", "Applications", "Infrastructure", "Sites", "Contracts", "Services", "Suppliers", "Obligations"],
    outcomes: ["One governed operational baseline", "A trusted foundation for transition planning", "Visible dependencies before execution", "Evidence behind scope and ownership decisions"],
    image: "/product/application-inventory-enriched.png",
    imageAlt: "MergeVista governed application inventory for transaction readiness",
    imageLabel: "GOVERNED APPLICATION INVENTORY",
  },
  {
    slug: "transaction-control",
    number: "02",
    shortName: "Plans & Governance",
    name: "Plans & Governance",
    eyebrow: "Coordinate transition execution",
    headline: "Coordinate execution around shared outcomes.",
    introduction: "Connect functional and technology plans, milestones, RAID, decisions, dependencies and executive reporting without separating status from the operational context it affects.",
    seoDescription: "Connect M&A transition plans, milestones, RAID, decisions, dependencies and executive reporting in one governed environment.",
    problemTitle: "Green workstreams do not guarantee a ready enterprise.",
    problem: "Traditional program reporting aggregates status while critical cross-workstream dependencies remain hidden. MergeVista connects plans and governance to the underlying transaction records so leaders can see what is blocked, why it matters and who must act.",
    enables: ["Coordinate workstreams, milestones and accountable owners", "Connect RAID items and decisions to affected inventory", "Manage cross-company and cross-workstream dependencies", "Give leaders current, evidence-backed reporting"],
    connected: ["Workstreams", "Plans", "Milestones", "RAID", "Decisions", "Dependencies", "Owners", "Reporting"],
    outcomes: ["One operating view of execution", "Earlier visibility into critical-path exposure", "Clear ownership and decision history", "Executive reporting grounded in transaction data"],
    image: "/product/avenlor-deal-dashboard.png",
    imageAlt: "MergeVista deal dashboard showing milestones, attention items and program risks",
    imageLabel: "DEAL PROGRAM CONTROL",
  },
  {
    slug: "day-1-readiness",
    number: "03",
    shortName: "Day 1 Readiness",
    name: "Day 1 Readiness",
    eyebrow: "Protect continuity at close",
    headline: "Prepare the carved-out business to operate from legal close.",
    introduction: "Coordinate functional and technology workstreams, critical operations, sites, access, contracts, cutover activities and interim services required to maintain continuity on Day 1.",
    seoDescription: "Coordinate functional and technology workstreams, critical operations, dependencies and evidence for defensible M&A Day 1 readiness.",
    problemTitle: "Day 1 is experienced through business outcomes—not workstreams.",
    problem: "An application, device or site can report green while an unresolved identity, infrastructure, contract or data dependency prevents the business from operating. MergeVista connects the complete readiness chain and the evidence required to approve it.",
    enables: ["Define readiness criteria around business outcomes", "Connect functional and technology dependencies to critical operations", "Coordinate cutover activities, rehearsals and approvals", "Track evidence, exceptions and accountable acceptance"],
    connected: ["Workstreams", "Critical operations", "Applications", "Access", "Sites", "Interim services", "Cutover", "Evidence"],
    outcomes: ["Defensible operational readiness", "Fewer late dependency surprises", "Clear exception and acceptance decisions", "A coordinated path through close and hypercare"],
    image: "/product/day-1-site-readiness.png",
    imageAlt: "MergeVista Site Readiness workspace connecting locations, inventory, Day 1 milestones, blockers and leadership approval",
    imageLabel: "DAY 1 SITE READINESS",
  },
  {
    slug: "migration-tsa-exit",
    number: "04",
    shortName: "Stabilization & TSA Exit",
    name: "Stabilization & TSA Exit",
    eyebrow: "Move from continuity to independence",
    headline: "Move from Day 1 continuity to sustainable operational independence.",
    introduction: "Connect stabilization plans, post-close migrations, TSA services, functional and technology dependencies, exit criteria and supporting evidence through operational independence.",
    seoDescription: "Connect stabilization, migrations, TSA services, cross-functional dependencies, exit criteria and evidence to achieve operational independence with MergeVista.",
    problemTitle: "A TSA end date is not an exit plan.",
    problem: "Each service can depend on applications, infrastructure, data, contracts, licenses, identity, support and seller activity. MergeVista makes those dependencies executable and connects completion to objective exit criteria.",
    enables: ["Translate TSA services into executable exit requirements", "Plan stabilization and migration around connected dependencies", "Track buyer and seller responsibilities and evidence", "Validate operational readiness before termination"],
    connected: ["Workstreams", "TSA services", "Operational inventories", "Dependencies", "Obligations", "Migration waves", "Exit criteria", "Evidence"],
    outcomes: ["A credible path to independence", "Migration decisions informed by dependencies", "Evidence-based service termination", "Lower extension cost and operational risk"],
    image: "/product/tsa-exit-workstream-readiness.png",
    imageAlt: "MergeVista TSA Exit Workstream Readiness workspace connecting inventory, contracts, migration milestones and RAID blockers",
    imageLabel: "TSA EXIT WORKSTREAM READINESS",
  },
];

export function getCapabilityArea(slug: string) {
  return capabilityAreas.find((item) => item.slug === slug);
}
