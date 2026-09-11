import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import styles from "./insights.module.css";
import heroStyles from "./insights-hero.module.css";

const pageTitle = "Insights | MergeVista";
const pageDescription = "Practical perspectives on IT M&A execution, Day 1 readiness, TSA operations, separation and migration.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "https://www.mergevista.com/insights" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "https://www.mergevista.com/insights",
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription },
};

const topics = ["IT M&A strategy", "Divestitures & separation", "Integration & Day 1", "TSA operations & exit", "Data & applications", "AI in IT M&A"];
const articles = [
  ["APPLICATION STRATEGY", "Application disposition: Where separation strategy becomes execution", "Why disposition is more than an inventory field—and how each decision shapes data, infrastructure, contracts, TSAs, migration waves and operational readiness.", "12 min read", "blue", "/insights/application-disposition-separation-strategy-execution", "Sep 7, 2026"],
  ["POST-CLOSE EXECUTION", "Day 1 is not independence: What happens after legal close?", "Why legal close establishes continuity, not independence—and how transaction teams can use the TSA period to remove seller dependencies safely.", "13 min read", "navy", "/insights/day-1-is-not-independence", "Sep 2, 2026"],
  ["IT M&A STRATEGY", "The complete IT M&A lifecycle: From discovery to TSA exit", "Seven connected stages. Two sides of the transaction. One operating model for continuity, accountability and evidence throughout the deal.", "10 min read", "blue", "/insights/complete-it-ma-lifecycle", "Aug 27, 2026"],
  ["DAY 1 READINESS", "Why Day 1 readiness fails despite detailed project plans", "The problem is rarely a lack of tasks. It is the absence of connected evidence, ownership and decisions across workstreams.", "7 min read", "blue", "/insights/why-day-1-readiness-fails", "Aug 20, 2026"],
  ["TSA OPERATIONS", "From TSA tracking to evidence-based TSA exit", "A practical operating model for connecting service obligations, migration dependencies and exit evidence from the start.", "9 min read", "navy", "/insights/evidence-based-tsa-exit", "Aug 13, 2026"],
  ["SEPARATION", "The hidden cost of disconnected IT inventories", "How fragmented baselines create downstream risk for separation planning, Day 1 continuity and migration.", "9 min read", "cyan", "/insights/hidden-cost-disconnected-it-inventories", "Aug 6, 2026"],
];

export default function InsightsPage() { return <main className={styles.page}>
  <SiteHeader />
  <header className={`${styles.hero} ${heroStyles.editorialHero}`}>
    <div className={heroStyles.heroCopy}><div className={styles.eyebrow}><span/>MergeVista Insights</div><h1>Perspectives for better <em>IT M&amp;A execution.</em></h1><p>Practical thinking for technology and transaction leaders navigating acquisitions, divestitures, Day 1, TSA operations, migration and exit.</p></div>
    <aside className={heroStyles.issuePanel} aria-label="Current Insights themes"><div><small>CURRENT THEMES</small><b>01 / 04</b></div><h2>Execution intelligence for the complete transaction.</h2><ul><li><span>01</span>Strategy &amp; operating model</li><li><span>02</span>Day 1 readiness</li><li><span>03</span>TSA operations &amp; exit</li><li><span>04</span>Separation dependencies</li></ul><Link href="#latest">Explore latest insights <b>↓</b></Link></aside>
  </header>
  <section className={styles.featured}>
    <div className={styles.featuredCopy}><small>FEATURED INSIGHT · MIGRATION READINESS</small><h2>Everything is green—so why isn’t the migration wave ready?</h2><p>Why workstream-level completion can still produce an operationally unready migration—and how evidence, dependencies and business-process testing change the go/no-go decision.</p><div><span>Sep 11, 2026</span><i/><span>11 min read</span></div><Link href="/insights/migration-wave-readiness">Read the insight <b>→</b></Link></div>
    <div className={styles.framework}><div className={styles.frameworkTop}><span>THE READINESS QUESTION</span><b>STATUS → EVIDENCE</b></div><div className={styles.lifecycle}>{["Users","Devices","Apps","Identity","Network","Data","Operate"].map((stage,index)=><div key={stage}><i>{String(index+1).padStart(2,"0")}</i><span>{stage}</span></div>)}</div><p>DEPENDENCIES · BUSINESS PROCESSES · TESTING · OWNERSHIP</p></div>
  </section>
  <section className={styles.topicSection}><div><small>EXPLORE BY TOPIC</small><h2>Navigate the execution challenges that matter most.</h2></div><nav aria-label="Insight topics">{topics.map(topic=><a href="#latest" key={topic}>{topic}<span>→</span></a>)}</nav></section>
  <section className={styles.latest} id="latest"><div className={styles.sectionHead}><div><small>LATEST INSIGHTS</small><h2>Ideas grounded in execution.</h2></div><p>Clear, practical perspectives—not abstract transformation theory.</p></div><div className={styles.articleGrid}>{articles.map(([category,title,summary,time,tone,href,date])=><article key={title} className={styles[tone]}><div className={styles.cardVisual}><span>{category}</span><i/><i/><i/></div><div className={styles.cardBody}><small>{date} · {time}</small><h3>{title}</h3><p>{summary}</p><Link href={href}>Read article <b>→</b></Link></div></article>)}</div></section>
  <section className={styles.cta}><div><small>FROM INSIGHT TO EXECUTION</small><h2>Turn better thinking into better deal outcomes.</h2><p>See how MergeVista supports the complete IT M&amp;A journey.</p></div><div><Link href="/book-a-demo">Book a demo <span>→</span></Link><Link href="/#platform">Explore platform</Link></div></section>
  <SiteFooter theme="dark" />
</main> }
