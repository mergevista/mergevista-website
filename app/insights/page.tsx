import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import insetCtaStyles from "../components/inset-cta.module.css";
import styles from "./insights.module.css";
import heroStyles from "./insights-hero.module.css";

const pageTitle = "IT M&A Insights, Readiness & TSA Exit | MergeVista";
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
    images: [{ url: "/insights/application-license-may-not.webp", width: 1536, height: 1024, alt: "Application moving while its commercial software license remains restricted" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/insights/application-license-may-not.webp"] },
};

const topics = ["IT M&A strategy", "Divestitures & separation", "Integration & Day 1", "TSA operations & exit", "Data & applications", "AI in IT M&A"];
const articles = [
  ["DATA SEPARATION", "Data separation is not a database extract", "Why a technically accurate extract can still leave buyers and sellers with unresolved operational, legal, security and reporting issues.", "9 min read", "navy", "/insights/data-separation-not-database-extract", "Sep 30, 2026", "/insights/data-separation-governed.webp", "Shared enterprise data separating into governed buyer and seller environments"],
  ["SELLER READINESS", "Your company is ready to sell. Is your technology ready for diligence?", "What lower-middle-market companies should understand, organize and be prepared to explain before the buyer begins technology diligence.", "11 min read", "blue", "/insights/technology-ready-for-diligence", "Sep 23, 2026", "/insights/technology-diligence-ready.webp", "Technology records organized for buyer due diligence"],
  ["AI IN IT M&A", "Where AI actually belongs in IT M&A", "Where AI adds practical value by organizing evidence and preparing decisions—while experienced practitioners remain accountable for the outcome.", "7 min read", "cyan", "/insights/where-ai-belongs-in-it-ma", "Sep 17, 2026", "/insights/ai-governed-decisions.webp", "AI organizing transaction evidence for accountable human approval"],
  ["MIGRATION READINESS", "Everything is green—so why isn’t the migration wave ready?", "Why workstream-level completion can still produce an operationally unready migration—and how evidence, dependencies and business-process testing change the go/no-go decision.", "11 min read", "navy", "/insights/migration-wave-readiness", "Sep 11, 2026", "/insights/migration-wave-dependencies.webp", "Completed migration workstreams blocked by a hidden dependency"],
  ["APPLICATION STRATEGY", "Application disposition: Where separation strategy becomes execution", "Why disposition is more than an inventory field—and how each decision shapes data, infrastructure, contracts, TSAs, migration waves and operational readiness.", "12 min read", "blue", "/insights/application-disposition-separation-strategy-execution", "Sep 7, 2026", "/insights/application-disposition-pathways.webp", "Enterprise application connected to multiple governed disposition pathways"],
  ["POST-CLOSE EXECUTION", "Day 1 is not independence: What happens after legal close?", "Why legal close establishes continuity, not independence—and how transaction teams can use the TSA period to remove seller dependencies safely.", "13 min read", "navy", "/insights/day-1-is-not-independence", "Sep 2, 2026", "/insights/day-one-not-independence.webp", "Business crossing legal close while temporary seller dependencies remain"],
  ["IT M&A STRATEGY", "The complete IT M&A lifecycle: From discovery to TSA exit", "Seven connected stages. Two sides of the transaction. One operating model for continuity, accountability and evidence throughout the deal.", "10 min read", "blue", "/insights/complete-it-ma-lifecycle", "Aug 27, 2026", "/insights/complete-it-ma-lifecycle.webp", "Connected IT M&A lifecycle spanning two organizations"],
  ["DAY 1 READINESS", "Why Day 1 readiness fails despite detailed project plans", "The problem is rarely a lack of tasks. It is the absence of connected evidence, ownership and decisions across workstreams.", "7 min read", "blue", "/insights/why-day-1-readiness-fails", "Aug 20, 2026", "/insights/day-one-readiness-gap.webp", "Detailed project plans separated from the Day 1 operating checkpoint"],
  ["TSA OPERATIONS", "From TSA tracking to evidence-based TSA exit", "A practical operating model for connecting service obligations, migration dependencies and exit evidence from the start.", "9 min read", "navy", "/insights/evidence-based-tsa-exit", "Aug 13, 2026", "/insights/evidence-based-tsa-exit.webp", "TSA obligations and evidence connected to an approved exit"],
  ["SEPARATION", "The hidden cost of disconnected IT inventories", "How fragmented baselines create downstream risk for separation planning, Day 1 continuity and migration.", "9 min read", "cyan", "/insights/hidden-cost-disconnected-it-inventories", "Aug 6, 2026", "/insights/disconnected-it-inventories.webp", "Disconnected IT inventory towers producing conflicting transaction records"],
];

export default function InsightsPage() { return <main className={styles.page}>
  <SiteHeader />
  <header className={`${styles.hero} ${heroStyles.editorialHero}`}>
    <div className={heroStyles.heroCopy}><div className={styles.eyebrow}><span/>MergeVista Insights</div><h1>Perspectives for better <em>IT M&amp;A execution.</em></h1><p>Practical thinking for technology and transaction leaders navigating acquisitions, divestitures, Day 1, TSA operations, migration and exit.</p></div>
    <aside className={heroStyles.issuePanel} aria-label="Current Insights themes"><div><small>CURRENT THEMES</small></div><h2>Execution intelligence for the complete transaction.</h2><ul><li>Strategy &amp; operating model</li><li>Day 1 readiness</li><li>TSA operations &amp; exit</li><li>Separation dependencies</li></ul><Link href="#latest">Explore latest insights <b>↓</b></Link></aside>
  </header>
  <section className={styles.featured}>
    <div className={styles.featuredCopy}><small>FEATURED INSIGHT · SOFTWARE LICENSING</small><h2>The application can move. The license may not.</h2><p>Why technical migration readiness does not prove that the buyer has the commercial and operational right to use the software.</p><div><span>Oct 7, 2026</span><i/><span>12 min read</span></div><Link href="/insights/application-move-license-may-not">Read the insight <b>→</b></Link></div>
    <div className={styles.featuredArtwork}><Image src="/insights/application-license-may-not.webp" alt="Application moving while its commercial software license remains restricted" width={1536} height={1024} priority sizes="(max-width: 1050px) 84vw, 42vw" /></div>
  </section>
  <section className={styles.topicSection}><div><small>EXPLORE BY TOPIC</small><h2>Navigate the execution challenges that matter most.</h2></div><nav aria-label="Insight topics">{topics.map(topic=><a href="#latest" key={topic}>{topic}<span>→</span></a>)}</nav></section>
  <section className={styles.latest} id="latest"><div className={styles.sectionHead}><div><small>LATEST INSIGHTS</small><h2>Ideas grounded in execution.</h2></div><p>Clear, practical perspectives—not abstract transformation theory.</p></div><div className={styles.articleGrid}>{articles.map(([category,title,summary,time,tone,href,date,image,imageAlt])=><article key={title} className={`${styles[tone]} ${styles.editorialCard}`}><div className={styles.cardVisual}>{image ? <Image className={styles.cardImage} src={image} alt={imageAlt} width={1536} height={1024} sizes="(max-width: 650px) 90vw, (max-width: 1050px) 45vw, 29vw" /> : <><i/><i/><i/></>}</div><div className={styles.cardBody}><span className={styles.categoryPill}>{category}</span><small>{date} · {time}</small><h3>{title}</h3><p>{summary}</p><Link href={href}>Read article <b>→</b></Link></div></article>)}</div></section>
  <section className={`${styles.cta} ${insetCtaStyles.inset}`}><div><small>FROM INSIGHT TO EXECUTION</small><h2>Turn better thinking into better deal outcomes.</h2><p>See how MergeVista supports the complete IT M&amp;A journey.</p></div><div><Link href="/book-a-demo">Book a demo <span>→</span></Link><Link href="/#platform">Explore platform</Link></div></section>
  <SiteFooter bordered={false} />
</main> }
