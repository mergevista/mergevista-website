import Link from "next/link";
import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { pageMetadata } from "../lib/seo";
import styles from "../product-pages.module.css";

export const metadata = pageMetadata(
  "AI for IT M&A | MergeVista Intelligence",
  "Explore MergeVista Intelligence for source-grounded contract extraction, product and license normalization, inventory reconciliation, exception detection and human-governed IT M&A decisions.",
  "/ai-capabilities",
);

const workflow = [
  { number: "01", label: "Source documents", title: "Read the commercial evidence", text: "Process machine-readable agreements in a private Azure AI environment and preserve the source language behind every proposed field." },
  { number: "02", label: "Structured intelligence", title: "Extract what execution teams need", text: "Identify contract terms, dates, renewal and consent requirements, disposition signals, products, editions, license metrics and quantities." },
  { number: "03", label: "Commercial model", title: "Normalize products and entitlements", text: "Reconcile product names and aliases, connect contractual rights to a governed catalog and retain the agreement and evidence from which each entitlement originated." },
  { number: "04", label: "Inventory relationships", title: "Connect rights to deployed technology", text: "Propose relationships between products and deal inventory—including applications, servers, network devices and users—with confidence, rationale and supporting evidence." },
  { number: "05", label: "Readiness decisions", title: "Turn relationships into action", text: "Expose missing rights, unallocated links, over-deployment and unresolved coverage so teams can make defensible Day 1, migration and exit decisions." },
];

const capabilities = [
  { number: "01", label: "Contract intelligence", title: "Extract fields that remain connected to their source", text: "MergeVista captures critical commercial terms and product-level information while retaining the supporting clause or snippet, confidence level and review state.", points: ["Contract identity, dates, renewal, assignment, change-of-control and consent terms", "Product, edition, quantity, metric and inventory-match signals", "Grounding checks reject output that cannot be traced to the uploaded document"], outcome: "Faster understanding without losing evidence" },
  { number: "02", label: "Product normalization", title: "Create one commercial view of every product and service", text: "AI-assisted normalization brings inconsistent product references into a governed catalog while preserving aliases, vendor context and the original extracted name.", points: ["Canonical product records with vendor, edition, category and product type", "Approved aliases improve reconciliation across documents and inventories", "Lifecycle, scope and strategy remain explicit business decisions"], outcome: "A commercial baseline teams can govern" },
  { number: "03", label: "License intelligence", title: "Connect contractual rights to the products they govern", text: "Entitlements retain purchased quantity, assigned quantity, metric, dates, source reference, coverage and disposition so technical execution stays aligned with commercial rights.", points: ["Agreement-to-product-to-entitlement traceability", "Inherited disposition with controlled, reasoned overrides", "Day 1 coverage and reconciliation status visible in context"], outcome: "Move licensing and migration together" },
  { number: "04", label: "Inventory reconciliation", title: "Find where commercial products exist in the deal inventory", text: "MergeVista compares the product catalog and approved aliases with transaction inventory, then proposes potential relationships for accountable review.", points: ["Candidate matches include confidence, rationale and evidence", "Links can be allocated to a specific entitlement", "Manual linking remains available when teams already know the relationship"], outcome: "See which technology consumes which rights" },
  { number: "05", label: "Exception detection", title: "Surface the gaps that can disrupt Day 1 or TSA exit", text: "The connected model evaluates contractual rights, approved inventory links and reported consumption to identify actionable commercial and deployment exceptions.", points: ["Missing entitlements for quantity-based products", "Consumption not reported or exceeding contractual rights", "Approved inventory links not allocated to an entitlement"], outcome: "Turn hidden exposure into owned action" },
  { number: "06", label: "Human governance", title: "Keep accountable people in control of every consequential decision", text: "AI creates proposals—not final transaction decisions. Reviewers can correct extracted values, approve or reject matches, provide reasons and preserve the resulting history.", points: ["Pending-review status for extracted information", "Explicit approval or rejection of reconciliation proposals", "Reason-required removal of approved inventory links and auditable actions"], outcome: "Automation with defensible control" },
];

export default function AiCapabilitiesPage() {
  return <main className={styles.page}>
    <SiteHeader />
    <header className={`${styles.hero} ${styles.aiHero}`}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}><span />MergeVista Intelligence</div>
          <h1>AI that connects contract evidence to <em>execution decisions.</em></h1>
          <p>Move from an uploaded agreement to governed products, license entitlements, inventory relationships and readiness action—without separating the AI output from its source or the people accountable for approving it.</p>
          <div className={styles.actions}><Link className={styles.primary} href="/book-a-demo">See it in action →</Link><Link className={styles.secondary} href="/platform">Explore the platform</Link></div>
        </div>
        <div className={`${styles.productFrame} ${styles.productFrameDark}`} aria-label="MergeVista AI evidence review" data-product-reveal><div className={styles.productFrameTop}><span>LIVE PRODUCT VIEW <i>Illustrative sample data</i></span><b>SOURCE-GROUNDED REVIEW</b></div><Image src="/product/ai-evidence-review.png" alt="MergeVista AI contract review comparing extracted values with confidence, decisions and source evidence" width={1280} height={720} priority/></div>
      </div>
    </header>

    <section className={styles.proof}><div><span><b>01</b>Source-grounded extraction</span><span><b>02</b>Private Azure AI processing</span><span><b>03</b>Confidence + rationale</span><span><b>04</b>Human approval</span></div></section>

    <section className={styles.section}>
      <div className={styles.sectionHead}><div className={styles.eyebrow}><span />One connected intelligence chain</div><h2>Do more than extract contract fields.</h2><p>The value comes from carrying trustworthy commercial intelligence forward—into the products, rights, technology records and execution decisions that determine whether the transaction can operate.</p></div>
      <div className={styles.aiWorkflow}>{workflow.map((step) => <article key={step.number}><small>{step.number}</small><span>{step.label}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    </section>

    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.sectionHead}><div className={styles.eyebrow}><span />Platform capabilities</div><h2>Intelligence designed for governed IT M&amp;A execution.</h2><p>Each capability produces structured, reviewable information that remains connected to transaction context and accountable ownership.</p></div>
      <div className={`${styles.capabilityGrid} ${styles.aiCapabilityGrid}`}>{capabilities.map((capability) => <article key={capability.number}><div className={styles.capabilityTop}><small>{capability.number}</small><span>{capability.label}</span></div><h3>{capability.title}</h3><p>{capability.text}</p><ul>{capability.points.map((point) => <li key={point}>{point}</li>)}</ul><b>{capability.outcome} →</b></article>)}</div>
    </section>

    <section className={styles.governanceBand}>
      <div><div className={styles.eyebrow}><span />Governed by design</div><h2>Private processing. Grounded output. Accountable decisions.</h2><p>MergeVista uses customer-enabled private Azure AI processing with managed identity. AI execution requires explicit authorization, proposed outputs are validated against allowed records and source evidence, and consequential changes remain subject to human review.</p></div>
      <div className={styles.governanceGrid}><article><b>PRIVATE</b><h3>Tenant-controlled AI</h3><p>AI processing can be enabled by customer tenant and runs through a privately configured Azure environment.</p></article><article><b>GROUNDED</b><h3>Evidence before assertion</h3><p>Extracted values retain source snippets; proposed inventory matches carry confidence, rationale and evidence.</p></article><article><b>CONTROLLED</b><h3>Proposal before decision</h3><p>Reviewers approve, reject, correct or remove relationships with the decision history preserved.</p></article></div>
    </section>

    <section className={styles.boundarySection}><div><div className={styles.eyebrow}><span />The responsibility boundary</div><h2>AI accelerates analysis. People remain accountable.</h2></div><div className={styles.boundaryGrid}><article><small>AI ASSISTS</small><ul><li>Extracting structured information from source documents</li><li>Normalizing inconsistent product references</li><li>Proposing product-to-inventory relationships</li><li>Highlighting potential licensing and coverage exceptions</li></ul></article><article><small>PEOPLE DECIDE</small><ul><li>Whether extracted information is correct and approved</li><li>Which inventory relationships become authoritative</li><li>Product scope, disposition and Day 1 coverage</li><li>Commercial, migration and TSA exit actions</li></ul></article></div></section>

    <section className={styles.cta}><div><h2>See contract intelligence become execution intelligence.</h2><p>Explore the complete path from agreement evidence to governed inventory and readiness decisions.</p></div><Link href="/book-a-demo">Book a demo →</Link></section>
    <SiteFooter />
  </main>;
}
