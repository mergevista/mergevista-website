import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ArticleStructuredData from "../ArticleStructuredData";
import styles from "./article.module.css";

const title = "The Complete IT M&A Lifecycle";
const description = "A practical framework connecting discovery, separation, Day 1, TSA operations, migration and TSA exit.";
const path = "/insights/complete-it-ma-lifecycle";

export const metadata: Metadata = {
  title: `${title} | MergeVista Insights`,
  description,
  alternates: { canonical: `https://www.mergevista.com${path}` },
  openGraph: { title, description, type: "article", url: `https://www.mergevista.com${path}`, publishedTime: "2026-08-27", images: [] },
  twitter: { card: "summary", title, description, images: [] },
};
const stages = [
  ["01", "Discovery", "Establish a trusted baseline across applications, infrastructure, sites, users, contracts and licenses."],
  ["02", "Assessment", "Expose dependencies, obligations, dispositions, TSA needs and execution risks."],
  ["03", "Separation", "Translate the baseline into governed separation work with visible ownership and readiness."],
  ["04", "Day 1", "Prove continuity for critical services, ownership transitions and operational controls."],
  ["05", "TSA operations", "Manage delivery, consumption, performance, cost, issues and exit criteria."],
  ["06", "Migration", "Coordinate buyer-led transitions while preserving dependencies and evidence."],
  ["07", "TSA exit", "Demonstrate that services can be retired without creating new operational risk."],
];

export default function ArticlePage(){return <main className={styles.page}><ArticleStructuredData title={title} description={description} path={path} published="2026-08-27"/><SiteHeader/>
  <header className={styles.hero}><Link href="/insights">← Back to Insights</Link><small>IT M&amp;A STRATEGY · 10 MIN READ</small><h1>The complete IT M&amp;A lifecycle: From discovery to TSA exit</h1><p>IT M&amp;A execution is not a collection of independent projects. It is one connected lifecycle in which early data, decisions and dependencies shape every outcome that follows.</p><div><span>MergeVista Insights</span><i/><span>August 27, 2026</span></div></header>
  <section className={styles.takeaway}><small>KEY TAKEAWAY</small><p>The strongest transaction teams manage discovery, separation, Day 1, TSA operations, migration and exit as one evidence-connected system of execution—not as a sequence of disconnected workplans.</p></section>
  <article className={styles.article}><p className={styles.lead}>A successful IT transaction must preserve business continuity while systems, contracts, people, services and accountability move between organizations. That requires a lifecycle view from the first inventory through the final exit decision.</p><h2>One lifecycle, seven connected stages</h2><p>Each stage produces information and decisions needed by the next. When those connections are lost, teams spend valuable time reconciling spreadsheets, rediscovering dependencies and debating which status is trustworthy.</p><div className={styles.stageList}>{stages.map(([n,title,text])=><section key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></section>)}</div><h2>The handoffs are where execution risk concentrates</h2><p>Most transaction risk does not sit within a single workstream. It sits between teams, companies and milestones: an application depends on infrastructure; a contract requires consent; a TSA service cannot exit until a buyer migration is complete.</p><blockquote>Execution improves when every handoff carries forward its source data, decision history, accountable owner and required evidence.</blockquote><h2>Build the operating model before the pressure peaks</h2><p>Day 1 and TSA exit are not dates that teams can prepare for at the last minute. They are cumulative outcomes. A connected baseline, explicit ownership and evidence-based readiness make those outcomes governable long before the deadline arrives.</p></article>
  <section className={styles.articleCta}><div><small>PUT THE FRAMEWORK INTO PRACTICE</small><h2>Run the complete journey with clarity and control.</h2></div><Link href="/book-a-demo">Book a demo <span>→</span></Link></section>
  <SiteFooter theme="dark"/></main>}
