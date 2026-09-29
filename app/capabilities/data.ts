export type CapabilityPackage = {
  slug: string;
  number: string;
  shortName: string;
  name: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  seoDescription: string;
  bestFor: string;
  problemTitle: string;
  problem: string;
  enables: string[];
  connected: string[];
  outcomes: string[];
  image: string;
  imageAlt: string;
  imageLabel: string;
};

export const capabilityPackages: CapabilityPackage[] = [
  {
    slug: "transaction-baseline",
    number: "01",
    shortName: "Transaction Baseline",
    name: "MergeVista Transaction Baseline",
    eyebrow: "Build the transaction baseline",
    headline: "Know what the business depends on before execution begins.",
    introduction: "Establish a governed IT fact base across applications, infrastructure, users, sites, contracts, licenses and dependencies—ready for diligence, separation planning and accountable decisions.",
    seoDescription: "Build a governed IT transaction baseline across applications, infrastructure, users, sites, contracts, licenses and dependencies with MergeVista.",
    bestFor: "Transaction preparation, diligence and baseline creation",
    problemTitle: "A list of assets is not a transaction-ready baseline.",
    problem: "Discovery is often distributed across workstreams, sites and advisers. MergeVista brings that information into one controlled model so teams can reconcile scope, ownership, dependencies and data quality before plans rely on them.",
    enables: ["Import and normalize inventories from multiple contributors", "Assign accountable owners and governed review workflows", "Connect applications, infrastructure, sites, users and commercial records", "Expose missing information, conflicts and readiness gaps"],
    connected: ["Applications", "Infrastructure", "Sites", "Users", "Contracts", "Licenses", "Dependencies", "Data quality"],
    outcomes: ["One governed transaction baseline", "Faster, more defensible diligence", "Visible dependencies before planning", "Evidence behind scope and ownership decisions"],
    image: "/product/application-inventory-enriched.png",
    imageAlt: "MergeVista governed application inventory for transaction readiness",
    imageLabel: "GOVERNED APPLICATION INVENTORY",
  },
  {
    slug: "transaction-control",
    number: "02",
    shortName: "Transaction Control",
    name: "MergeVista Transaction Control",
    eyebrow: "Coordinate the execution system",
    headline: "Turn workstream activity into connected transaction control.",
    introduction: "Connect plans, milestones, RAID, decisions, dependencies and executive reporting in one transaction environment without separating status from the inventories and business outcomes it affects.",
    seoDescription: "Connect IT M&A plans, milestones, RAID, decisions, dependencies and executive reporting in one governed transaction control environment.",
    bestFor: "Integration teams, IMO leaders and occasional acquirers",
    problemTitle: "Green workstreams do not guarantee a ready enterprise.",
    problem: "Traditional program reporting aggregates status while critical cross-workstream dependencies remain hidden. MergeVista connects plans and governance to the underlying transaction records so leaders can see what is blocked, why it matters and who must act.",
    enables: ["Coordinate workstreams, milestones and accountable owners", "Connect RAID items and decisions to affected inventory", "Manage cross-company and cross-workstream dependencies", "Give leaders current, evidence-backed reporting"],
    connected: ["Workstreams", "Milestones", "RAID", "Decisions", "Dependencies", "Owners", "Sites", "Executive reporting"],
    outcomes: ["One operating view of execution", "Earlier visibility into critical-path exposure", "Clear ownership and decision history", "Executive reporting grounded in transaction data"],
    image: "/product/avenlor-deal-dashboard.png",
    imageAlt: "MergeVista deal dashboard showing milestones, attention items and program risks",
    imageLabel: "DEAL PROGRAM CONTROL",
  },
  {
    slug: "day-1-readiness",
    number: "03",
    shortName: "Day 1 Readiness",
    name: "MergeVista Day 1 Readiness",
    eyebrow: "Protect continuity at close",
    headline: "Prepare the carved-out business to operate from legal close.",
    introduction: "Coordinate the applications, infrastructure, users, sites, contracts, access, cutover activities and interim services required to maintain business continuity on Day 1.",
    seoDescription: "Coordinate applications, infrastructure, users, sites, contracts, access and cutover evidence for defensible IT M&A Day 1 readiness.",
    bestFor: "Carve-outs and divestitures preparing for legal close and operational Day 1",
    problemTitle: "Day 1 is experienced through business outcomes—not workstreams.",
    problem: "An application, device or site can report green while an unresolved identity, infrastructure, contract or data dependency prevents the business from operating. MergeVista connects the complete readiness chain and the evidence required to approve it.",
    enables: ["Define readiness criteria around business outcomes", "Connect applications, people, sites and critical services", "Coordinate cutover activities, rehearsals and approvals", "Track evidence, exceptions and accountable acceptance"],
    connected: ["Business processes", "Applications", "Identity", "End users", "Sites", "Critical services", "Cutover", "Evidence"],
    outcomes: ["Defensible operational readiness", "Fewer late dependency surprises", "Clear exception and acceptance decisions", "A coordinated path through close and hypercare"],
    image: "/product/day-1-site-readiness.png",
    imageAlt: "MergeVista Site Readiness workspace connecting locations, inventory, Day 1 milestones, blockers and leadership approval",
    imageLabel: "DAY 1 SITE READINESS",
  },
  {
    slug: "migration-tsa-exit",
    number: "04",
    shortName: "Migration & TSA Exit",
    name: "MergeVista Migration & TSA Exit",
    eyebrow: "Move from continuity to independence",
    headline: "Move from Day 1 continuity to sustainable operational independence.",
    introduction: "Connect post-close migrations, TSA services, technology dependencies, buyer capabilities, exit criteria and supporting evidence through final separation.",
    seoDescription: "Connect post-close migrations, TSA services, technology dependencies, exit criteria and evidence to achieve operational independence with MergeVista.",
    bestFor: "Post-Day 1 migration programs, TSA operations and evidence-based TSA exit",
    problemTitle: "A TSA end date is not an exit plan.",
    problem: "Each service can depend on applications, infrastructure, data, contracts, licenses, identity, support and seller activity. MergeVista makes those dependencies executable and connects completion to objective exit criteria.",
    enables: ["Translate TSA services into executable exit requirements", "Plan migration waves around connected technology dependencies", "Track buyer and seller responsibilities and evidence", "Validate operational readiness before termination"],
    connected: ["TSA services", "Applications", "Infrastructure", "Data", "Contracts", "Licenses", "Migration waves", "Exit evidence"],
    outcomes: ["A credible path to independence", "Migration decisions informed by dependencies", "Evidence-based service termination", "Lower extension cost and operational risk"],
    image: "/product/tsa-exit-workstream-readiness.png",
    imageAlt: "MergeVista TSA Exit Workstream Readiness workspace connecting inventory, contracts, migration milestones and RAID blockers",
    imageLabel: "TSA EXIT WORKSTREAM READINESS",
  },
];

export function getCapabilityPackage(slug: string) {
  return capabilityPackages.find((item) => item.slug === slug);
}
