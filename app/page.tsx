import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const stages = [
  ["01", "Discovery", "Build a reliable IT baseline from inventories, source systems and transaction documents."],
  ["02", "Assessment", "Expose dependencies, contract obligations, dispositions, TSA needs and execution risks."],
  ["03", "Separation", "Execute logical and physical separation while controlling dependencies and readiness."],
  ["04", "Day 1", "Validate operational continuity, ownership transitions and critical business services."],
  ["05", "TSA Operations", "Manage services, obligations, performance, costs, issues and buyer consumption."],
  ["06", "Migration", "Coordinate buyer-led application, data, user and infrastructure migrations."],
  ["07", "TSA Exit", "Prove exit readiness, complete service transitions and close TSA obligations."],
];

export default function MarketingHome() {
  return <main className={styles.page}>
    <SiteHeader />

    <section className={styles.hero}>
      <div className={styles.heroGlow}/>
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}><span/>The AI-powered execution platform for IT M&amp;A</div>
        <h1>Run the complete IT M&amp;A journey with <em>clarity and control.</em></h1>
        <p>MergeVista connects sellers and buyers across discovery, separation, Day 1, TSA operations, migration and TSA exit—all in one AI-powered execution platform.</p>
        <div className={styles.heroActions}><Link className={styles.primary} href="/book-a-demo">Book a demo <b>→</b></Link><Link className={styles.secondary} href="/platform">Explore the platform</Link></div>
        <div className={styles.trust}><span>✓ Deal-ready operating model</span><span>✓ Unlimited collaboration</span><span>✓ Evidence-backed AI</span></div>
      </div>

      <div className={styles.productWrap} aria-label="MergeVista product preview" data-product-reveal>
        <div className={styles.browserBar}><span/><span/><span/><b>MergeVista · Deal Dashboard</b><small>Illustrative sample data</small><i>•••</i></div>
        <Image className={styles.productScreenshot} src="/product/avenlor-deal-dashboard.png" alt="MergeVista Avenlor deal dashboard showing Day 1 timing, attention items, RAID status and key milestones" width={1584} height={992} priority/>
        <div className={`${styles.productCallout} ${styles.calloutReadiness}`} aria-hidden="true"><b>Day 1 focus</b><span>189 days remaining</span></div>
        <div className={`${styles.productCallout} ${styles.calloutRisk}`} aria-hidden="true"><b>Executive attention</b><span>16 overdue RAID items</span></div>
      </div>
    </section>

    <section className={styles.proof} aria-label="MergeVista platform principles">
      <p>Purpose-built for complex acquisitions and divestitures</p>
      <div><span><b>01</b>Buyer + seller collaboration</span><span><b>02</b>End-to-end traceability</span><span><b>03</b>Enterprise controls</span><span><b>04</b>Human-governed AI</span></div>
    </section>

    <section className={styles.signal}><span>DISCOVERY</span><i/><span>ASSESSMENT</span><i/><span>SEPARATION</span><i/><span>DAY 1</span><i/><span>TSA OPERATIONS</span><i/><span>MIGRATION</span><i/><span>TSA EXIT</span></section>

    <section className={styles.ownership} aria-label="Seller and buyer participation across the transaction lifecycle">
      <div className={styles.sectionIntro}><div className={styles.eyebrow}><span/>One shared transaction workspace</div><h2>Continuous execution across both sides of the deal.</h2><p>The seller establishes the baseline and leads separation. The buyer joins planning, assumes operational responsibility at Day 1 and leads migration through TSA exit.</p><Link className={styles.sectionLink} href="/solutions">Explore transaction solutions →</Link></div>
      <div className={styles.ownershipTrack}><div className={styles.ownerSeller}><small>SELLER-LED</small><b>Discovery · Assessment · Separation</b></div><div className={styles.ownerJoint}><small>JOINT TRANSITION</small><b>Day 1</b></div><div className={styles.ownerTsa}><small>JOINT TSA GOVERNANCE</small><b>Seller delivers · Buyer consumes</b></div><div className={styles.ownerBuyer}><small>BUYER-LED</small><b>Migration · TSA Exit</b></div></div>
      <div className={styles.planningLayer}><strong>CONTINUOUS PLANNING</strong><span>Seller-led separation &amp; Day 1</span><i/><span>Joint TSA service &amp; exit</span><i/><span>Buyer-led migration</span></div>
    </section>

    <section className={styles.executiveOutcomes}>
      <div className={styles.nodeField} aria-hidden="true"><i/><i/><i/><i/><i/></div>
      <div className={styles.eyebrowLight}><span/>Executive clarity throughout the deal</div>
      <h2>One trusted baseline.<br/>Every workstream aligned.<br/><em>Every decision evidenced.</em></h2>
      <p>MergeVista connects the operational detail of execution to the outcomes leadership needs to govern—readiness, risk, cost, accountability and exit.</p>
      <div><span>Trusted inventory</span><span>Visible dependencies</span><span>Governed decisions</span><span>Provable exit</span></div>
    </section>

    <section className={styles.value} id="outcomes">
      <div className={styles.valueLead}><div className={styles.sectionIntro}><div className={styles.eyebrow}><span/>One system of execution</div><h2>Turn fragmented IT tracking into measurable deal outcomes.</h2><p>Move from disconnected spreadsheets and status meetings to a connected operating model that protects Day 1 and accelerates migration and TSA exit.</p></div><div className={styles.inlineProduct} data-product-reveal><div className={styles.inlineProductTop}><span>LIVE PRODUCT VIEW <i>Illustrative sample data</i></span><b>GOVERNED INVENTORY</b></div><Image src="/product/application-inventory-enriched.png" alt="MergeVista governed application inventory with ownership and data quality controls" width={1672} height={941}/></div></div>
      <div className={styles.valueGrid}>
        <article><span>01</span><h3>Establish the baseline faster</h3><p>Import applications, infrastructure, sites, users, contracts and licenses into a deal-specific data model.</p><b>Reduce weeks of reconciliation</b></article>
        <article><span>02</span><h3>Protect Day 1</h3><p>Connect dependencies, separation activities, readiness gates and critical decisions across every workstream.</p><b>Maintain business continuity</b></article>
        <article><span>03</span><h3>Control TSA delivery</h3><p>Manage services, obligations, performance, costs, issues and exit criteria in one operating view.</p><b>Make every service accountable</b></article>
        <article><span>04</span><h3>Accelerate migration and exit</h3><p>Coordinate buyer-led migrations while tracking the evidence required to retire each TSA service.</p><b>Exit sooner with less risk</b></article>
      </div>
    </section>

    <section className={styles.how} id="platform">
      <div className={styles.sectionIntro}><div className={styles.eyebrow}><span/>From discovery to TSA exit</div><h2>A complete IT M&amp;A operating model for every deal.</h2><p>One lifecycle connects seller-led separation with buyer-led transition—without losing the data, decisions or evidence created along the way.</p></div>
      <div className={styles.stages}>{stages.map(([n,title,text])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      <div className={styles.wideProduct} data-product-reveal><div className={styles.inlineProductTop}><span>LIVE PRODUCT VIEW <i>Illustrative sample data</i></span><b>CONTRACTS &amp; LICENSES</b></div><Image src="/product/contracts-licenses-enriched.png" alt="MergeVista contracts and licenses workspace connecting commercial obligations to execution" width={1672} height={941}/></div>
    </section>

    <section className={styles.ai} id="ai"><div><div className={styles.eyebrowLight}><span/>MergeVista Intelligence</div><h2>AI grounded in your transaction evidence.</h2><p>Turn inventory data and deal documents into structured intelligence—with source evidence, confidence and human review built into every recommendation.</p><ul><li>Normalize inventories and identify data gaps</li><li>Extract contracts, licenses, obligations and consent requirements</li><li>Discover cross-inventory dependencies and Day 1 risks</li><li>Generate separation, migration and TSA exit actions</li></ul><Link className={styles.aiMore} href="/ai-capabilities">Explore AI capabilities →</Link></div><aside><small>AI ASSESSMENT</small><h3>Orion Software Subscription Agreement</h3><div><span>Assignment requirement</span><b>Consent Required</b></div><div><span>Recommended action</span><b>Split agreement</b></div><div><span>Affected inventory</span><b>Applications · Users</b></div><blockquote>“Prior written consent is required before assignment…”</blockquote><footer><span>89% confidence</span><b>Review recommendation →</b></footer></aside></section>

    <section className={styles.audiences}>
      <div className={styles.sectionIntro}><div className={styles.eyebrow}><span/>Built around the transaction team</div><h2>One execution environment. Every deal stakeholder.</h2><p>Give each leader the context they need while keeping plans, dependencies, decisions and evidence connected in one operating model.</p></div>
      <div className={styles.audienceGrid}>
        <article><small>01</small><h3>CIO &amp; technology leadership</h3><p>See readiness, risk, cost and critical decisions across the complete transaction.</p><b>Executive control →</b></article>
        <article><small>02</small><h3>Integration &amp; separation leaders</h3><p>Coordinate execution across workstreams, companies, milestones and dependencies.</p><b>Connected execution →</b></article>
        <article><small>03</small><h3>Corporate development</h3><p>Connect transaction commitments with operational delivery and business outcomes.</p><b>Deal visibility →</b></article>
        <article><small>04</small><h3>Private equity operating teams</h3><p>Apply a repeatable IT M&amp;A operating model across portfolio transactions.</p><b>Portfolio repeatability →</b></article>
      </div>
    </section>

    <section className={styles.security} id="security"><div><div className={styles.eyebrow}><span/>Enterprise by design</div><h2>Sensitive transaction data deserves uncompromising control.</h2><Link href="/security">Explore Security &amp; Trust →</Link></div><div className={styles.securityList}><span>Deal-level access controls</span><span>Tenant data isolation</span><span>Evidence and audit history</span><span>Customer-controlled AI processing</span></div></section>

    <section className={styles.cta}><Image className={styles.ctaLogo} src="/brand/mergevista-icon-white-transparent.png" alt="" width={128} height={124} aria-hidden="true"/><div><h2>One platform from discovery to TSA exit.</h2><p>Give sellers and buyers a shared operating model for separation, Day 1 continuity, TSA operations and migration.</p></div><div><Link className={styles.primaryLight} href="/book-a-demo">Book a demo →</Link><Link href="/platform">Explore the platform</Link></div></section>

    <SiteFooter bordered={false} />
  </main>;
}
