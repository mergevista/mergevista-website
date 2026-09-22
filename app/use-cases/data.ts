export type UseCase = {
  slug: string;
  number: string;
  title: string;
  audience: string;
  headline: string;
  intro: string;
  seoDescription: string;
  challenge: string;
  signals: string[];
  steps: { title: string; text: string }[];
  outcomes: string[];
  capabilities: string[];
  cta: string;
};

export const useCases: UseCase[] = [
  {
    slug: "seller-transaction-readiness", number: "01", title: "Seller and transaction readiness", audience: "Small and mid-sized companies preparing for a transaction",
    headline: "Get your IT environment transaction-ready before diligence begins.",
    seoDescription: "Prepare IT inventories, contracts, dependencies and transaction evidence before buyer diligence with MergeVista's seller-readiness workspace.",
    intro: "Create a clear, defensible technology fact base before a buyer starts asking questions. MergeVista helps management teams organize what they have, expose what is missing and prepare for a controlled diligence and transition process.",
    challenge: "For many sellers, the first comprehensive view of IT is assembled under deal pressure. Information is spread across spreadsheets, contracts, people and service providers—making diligence slower and increasing the risk of late surprises.",
    signals: ["A sale, recapitalization or investor process is approaching", "Application, infrastructure and contract information is fragmented", "Key knowledge depends on a small number of people", "Management wants to reduce diligence friction and execution risk"],
    steps: [{title:"Establish the baseline",text:"Consolidate applications, infrastructure, data, users, sites, contracts and licenses."},{title:"Test completeness",text:"Identify missing ownership, outdated records and unresolved dependencies before the buyer does."},{title:"Prepare the evidence",text:"Organize source documents, decisions and supporting information in a governed workspace."},{title:"Enable the handoff",text:"Carry the approved fact base into separation, Day 1 and post-close execution when required."}],
    outcomes: ["Faster, more credible technology diligence", "Fewer late-stage surprises and information gaps", "A clearer separation or integration starting point", "Reduced dependence on ad hoc spreadsheets and individual memory"],
    capabilities: ["Governed IT inventories", "Document and evidence management", "Dependency mapping", "Contract and license visibility", "Data-quality controls", "Buyer and seller handoff"],
    cta: "Assess your transaction readiness",
  },
  {
    slug: "first-time-occasional-acquirers", number: "02", title: "First-time or occasional acquirers", audience: "Companies without a standing IT M&A capability",
    headline: "Execute the acquisition with a ready-made IT M&A playbook.",
    seoDescription: "Give first-time and occasional acquirers a structured IT M&A playbook for discovery, Day 1 readiness, integration and migration.",
    intro: "Give the deal team a structured path from discovery through Day 1 and integration—without first building a permanent M&A operating function or inventing a new spreadsheet process for every transaction.",
    challenge: "Occasional acquirers often know their business outcome but lack a repeatable IT transaction model. Teams must define scope, ownership, governance and reporting while the deal clock is already running.",
    signals: ["The organization has limited recent acquisition experience", "IT leaders are balancing the transaction with their day jobs", "There is no common diligence-to-integration workspace", "Leadership needs confidence that critical Day 1 outcomes are protected"],
    steps: [{title:"Mobilize quickly",text:"Start with a structured lifecycle, responsibilities, templates and governance model."},{title:"Understand the acquired environment",text:"Build the baseline and connect technology assets to owners, contracts and dependencies."},{title:"Protect Day 1",text:"Define outcome-based readiness, accountable actions and evidence for critical services."},{title:"Drive the transition",text:"Turn disposition decisions into integration, migration and closure plans."}],
    outcomes: ["Faster transaction mobilization", "Clear ownership across business and technology teams", "Fewer gaps between diligence and execution", "A reusable foundation for the next acquisition"],
    capabilities: ["Guided transaction lifecycle", "Day 1 readiness", "RAID and decision governance", "Application disposition", "Migration planning", "Executive reporting"],
    cta: "See the acquisition playbook",
  },
  {
    slug: "serial-acquirers", number: "03", title: "Serial acquirers", audience: "Companies pursuing acquisition-led growth",
    headline: "Turn individual deal experience into a repeatable acquisition capability.",
    seoDescription: "Standardize IT M&A execution across repeated acquisitions with reusable governance, reporting, data and integration playbooks.",
    intro: "Standardize the execution foundation across deals while retaining the flexibility each acquisition requires. MergeVista helps teams reuse what works, compare progress consistently and preserve institutional knowledge.",
    challenge: "When acquisitions are frequent, isolated tools and deal-specific processes create avoidable reinvention. Lessons are lost, reporting varies and leadership cannot compare risk or readiness across transactions.",
    signals: ["Multiple acquisitions are completed each year", "Integration methods vary by deal or team", "Leadership lacks a consistent cross-deal view", "Past decisions and lessons are difficult to reuse"],
    steps: [{title:"Standardize the core",text:"Use common data structures, governance, readiness criteria and reporting across transactions."},{title:"Configure for the deal",text:"Adapt the playbook to the target, thesis, integration model and transaction complexity."},{title:"Compare and govern",text:"View risks, milestones and readiness through consistent executive measures."},{title:"Improve every cycle",text:"Preserve evidence, decisions, templates and lessons for the next acquisition."}],
    outcomes: ["A scalable IT M&A operating model", "Less reinvention and faster mobilization", "Consistent leadership visibility across deals", "Compounding institutional knowledge"],
    capabilities: ["Reusable templates", "Multi-deal governance", "Comparable reporting", "Configurable data model", "Decision history", "Role-based workspaces"],
    cta: "Scale your acquisition model",
  },
  {
    slug: "private-equity-portfolio-operations", number: "04", title: "Private equity and portfolio operations", audience: "PE firms, operating partners and portfolio companies",
    headline: "Make IT execution repeatable across portfolio acquisitions.",
    seoDescription: "Help PE firms and portfolio companies standardize IT diligence, Day 1 readiness, integration governance and acquisition execution.",
    intro: "Equip portfolio companies with a practical transaction playbook while giving operating partners a more consistent view of execution risk, Day 1 readiness and value-creation dependencies.",
    challenge: "Portfolio companies have different levels of M&A maturity, resources and technology complexity. A common execution foundation is valuable, but a rigid one-size-fits-all target state is not.",
    signals: ["Buy-and-build is central to the investment thesis", "Portfolio companies have uneven integration capabilities", "Operating partners need earlier visibility into execution risk", "Teams want to accelerate value creation without adding permanent overhead"],
    steps: [{title:"Set the operating standard",text:"Establish a common transaction lifecycle, minimum evidence and governance expectations."},{title:"Enable the portfolio company",text:"Provide guided structure that complements its team, advisors and existing environment."},{title:"Connect risk to value",text:"Trace technology decisions and dependencies to integration priorities and business outcomes."},{title:"Maintain oversight",text:"Review readiness and execution consistently without taking ownership away from management."}],
    outcomes: ["More consistent execution across the portfolio", "Earlier visibility into risks that threaten the thesis", "Faster portfolio-company mobilization", "A repeatable foundation for add-on acquisitions"],
    capabilities: ["Portfolio-level consistency", "Guided acquisition playbooks", "Readiness and risk reporting", "Value-creation dependencies", "Flexible governance", "Evidence-based oversight"],
    cta: "Explore the PE operating model",
  },
  {
    slug: "enterprise-acquisitions-integrations", number: "05", title: "Enterprise acquisitions and integrations", audience: "Large enterprises managing complex integrations",
    headline: "Coordinate complex integration without losing transaction context.",
    seoDescription: "Connect enterprise IT inventories, dependencies, decisions, Day 1 readiness and integration plans in one governed M&A workspace.",
    intro: "Connect detailed technology inventories, cross-functional dependencies, decisions and execution plans across business units, workstreams and geographies in one governed transaction workspace.",
    challenge: "Enterprise acquisitions create scale and coordination complexity. Workstreams often report progress independently while shared dependencies, decision history and the evidence behind readiness remain fragmented.",
    signals: ["The transaction spans multiple businesses or geographies", "Many internal teams and external partners share delivery responsibility", "Technology dependencies cross workstream boundaries", "Executives need defensible, outcome-based reporting"],
    steps: [{title:"Create the shared baseline",text:"Reconcile inventories, scope, ownership and source evidence across both organizations."},{title:"Connect the workstreams",text:"Map technical, commercial and execution dependencies across teams and plans."},{title:"Govern the outcomes",text:"Tie milestones and approvals to Day 1, integration and target-state readiness."},{title:"Preserve accountability",text:"Maintain decision history, evidence and executive visibility throughout execution."}],
    outcomes: ["A trusted enterprise transaction baseline", "Stronger cross-workstream coordination", "More credible executive reporting", "Continuity from diligence through integration"],
    capabilities: ["Enterprise-scale inventories", "Cross-workstream dependencies", "Governance workflows", "Outcome-based readiness", "Executive dashboards", "Audit history"],
    cta: "Discuss enterprise integration",
  },
  {
    slug: "carve-outs-separation-tsa-exit", number: "06", title: "Carve-outs, separation and TSA exit", audience: "Sellers, buyers and separation teams",
    headline: "Create a traceable path from deal perimeter to independence.",
    seoDescription: "Manage carve-out scope, separation dependencies, Day 1 readiness, migration milestones and evidence-based TSA exit with MergeVista.",
    intro: "Carry the seller’s separation intelligence into buyer execution. MergeVista connects scope, dispositions and shared dependencies to Day 1, migration milestones, TSA obligations and objective exit evidence.",
    challenge: "Carve-outs fail at the handoffs: from diligence to separation, seller to buyer and Day 1 to TSA exit. When context is lost, dependencies surface late and temporary services become difficult to exit.",
    signals: ["The target shares systems, infrastructure, contracts or people with the seller", "Day 1 requires temporary services or interim arrangements", "Seller and buyer plans are managed separately", "TSA exit depends on migrations across multiple domains"],
    steps: [{title:"Define the perimeter",text:"Establish in-scope assets, dispositions, ownership and shared dependencies."},{title:"Prepare Day 1",text:"Coordinate separation actions and prove that critical business outcomes can operate."},{title:"Connect transition to migration",text:"Link TSA services and obligations to buyer-led target-state milestones."},{title:"Prove the exit",text:"Collect completion evidence, resolve blockers and close services through governed approval."}],
    outcomes: ["Fewer separation surprises", "A controlled seller-to-buyer handoff", "Clear line of sight from migration to TSA exit", "Faster, defensible operational independence"],
    capabilities: ["Deal perimeter and disposition", "Separation planning", "Day 1 readiness", "TSA service governance", "Migration dependencies", "Exit evidence and approval"],
    cta: "Explore carve-out execution",
  },
  {
    slug: "consulting-delivery-partners", number: "07", title: "Consulting and delivery partners", audience: "Specialist advisors and M&A delivery firms",
    headline: "Put a repeatable execution layer beneath your M&A methodology.",
    seoDescription: "Give M&A consulting and delivery teams a configurable execution platform for governed client delivery, reporting and handoff.",
    intro: "Keep your expertise and client relationship at the center while using MergeVista to structure delivery, reduce manual coordination and give clients a governed workspace that lasts beyond the engagement.",
    challenge: "Advisory teams often recreate trackers, templates and reporting for every engagement. Senior expertise is consumed by coordination, and clients may lose context when the engagement ends.",
    signals: ["Your firm delivers diligence, separation or integration work", "Teams rely heavily on spreadsheets and presentation updates", "You want to scale delivery without adding equivalent coordination overhead", "Clients are asking for stronger visibility and continuity"],
    steps: [{title:"Configure your delivery model",text:"Align the workspace to your methodology, terminology, templates and governance."},{title:"Mobilize the client",text:"Establish a shared fact base, responsibilities and evidence expectations quickly."},{title:"Deliver with visibility",text:"Connect expert decisions to the underlying data, risks, actions and outcomes."},{title:"Create a stronger handoff",text:"Leave the client with governed execution context rather than disconnected files."}],
    outcomes: ["Less manual coordination and reporting effort", "More leverage for senior practitioners", "A differentiated client experience", "New licensing, referral or joint-delivery opportunities"],
    capabilities: ["Configurable workflows", "Partner-led workspaces", "Client governance and reporting", "Reusable templates", "Role-based access", "Delivery and channel models"],
    cta: "Discuss a delivery partnership",
  },
  {
    slug: "specialist-boutique-ma-firms", number: "08", title: "Specialist and boutique M&A firms", audience: "Independent IT M&A advisors and boutique transaction firms",
    headline: "Scale your M&A methodology without scaling coordination overhead.",
    seoDescription: "Help specialist and boutique M&A firms standardize IT diligence, Day 1, integration, carve-out and TSA-exit delivery with MergeVista.",
    intro: "Turn specialist expertise into a repeatable, platform-enabled delivery model. MergeVista helps lean advisory teams structure engagements, reduce spreadsheet coordination and give clients clearer visibility from diligence through execution.",
    challenge: "Boutique firms compete through senior expertise and close client relationships, but each new engagement can require rebuilding inventories, trackers, governance and reporting. That limits delivery capacity and makes growth dependent on adding more coordination effort.",
    signals: ["Your firm specializes in IT diligence, integration, carve-outs or TSA exit", "Senior practitioners spend too much time maintaining trackers and status reports", "You want to support more engagements without adding proportional delivery overhead", "Clients expect a structured workspace and continuity after the advisory phase"],
    steps: [{title:"Codify your approach",text:"Configure your methodology, terminology, templates and quality controls in a repeatable workspace."},{title:"Mobilize faster",text:"Start each engagement with a governed fact base, clear responsibilities and consistent reporting."},{title:"Extend into execution",text:"Carry diligence findings into Day 1, integration, separation, migration and TSA-exit actions."},{title:"Build recurring value",text:"Use licensing, referral or platform-enabled delivery models to deepen client relationships beyond a single project."}],
    outcomes: ["More delivery capacity for a lean senior team", "A differentiated and repeatable client experience", "Less spreadsheet administration and reporting effort", "Recurring licensing, referral or platform-enabled revenue opportunities"],
    capabilities: ["Boutique delivery playbooks", "Configurable client workspaces", "IT inventories and dependencies", "Day 1 and execution governance", "Reusable templates and reporting", "Referral and channel models"],
    cta: "Explore a boutique partnership",
  },
];

export function getUseCase(slug: string) { return useCases.find(item => item.slug === slug); }
