import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { pageMetadata } from "../lib/seo";
import styles from "../product-pages.module.css";
import { useCases } from "./data";
import { UseCasesCollectionStructuredData } from "./UseCaseStructuredData";

export const metadata = pageMetadata("IT M&A Use Cases | MergeVista", "See how MergeVista supports transaction readiness, acquirers, private equity, enterprise M&A, carve-outs and advisory partners.", "/use-cases");

const pathways = [["PREPARE", "Seller readiness"], ["ACQUIRE", "First-time & serial buyers"], ["SCALE", "Private equity"], ["CONTROL", "Enterprise M&A"], ["SEPARATE", "Carve-outs"]] as const;

export default function UseCasesPage() { return <main className={styles.page}>
  <UseCasesCollectionStructuredData items={useCases} />
  <SiteHeader />
  <header className={`${styles.hero} ${styles.useCaseHero}`}><div className={styles.heroInner}>
    <div className={styles.heroCopy}><div className={styles.eyebrow}><span />Use cases</div><h1>One platform. Different <em>M&amp;A situations.</em></h1><p>Whether you are preparing a business for sale, making your first acquisition, scaling a repeatable acquisition program or executing a complex carve-out, MergeVista provides structure, visibility and governance from discovery through Day 1, migration and TSA exit.</p><div className={styles.actions}><Link className={styles.primary} href="/book-a-demo">Discuss your use case →</Link><Link className={styles.secondary} href="/platform">Explore the platform</Link></div></div>
    <div className={styles.pathwayMap} aria-label="MergeVista transaction pathways"><small>WHERE MERGEVISTA FITS</small><strong>Use the same connected execution foundation across different deal situations.</strong><div>{pathways.map(([label, title]) => <article key={label}><b>{label}</b><span>{title}</span></article>)}</div><p>Discovery <i>→</i> Day 1 <i>→</i> Integration &amp; migration <i>→</i> TSA exit</p></div>
  </div></header>
  <section className={styles.section}><div className={styles.sectionHead}><div className={styles.eyebrow}><span />Choose your situation</div><h2>Start with the outcome you need to protect.</h2><p>MergeVista adapts to the transaction—not the other way around. Each use case draws on the same connected fact base, governance and execution model.</p></div><div className={styles.useCaseGrid}>{useCases.map(item => <article key={item.number}><div className={styles.useCaseTop}><small>{item.number}</small><span>{item.audience}</span></div><h3>{item.title}</h3><p>{item.intro}</p><ul>{item.steps.slice(0, 3).map(step => <li key={step.title}>{step.title}</li>)}</ul><div className={styles.useCaseOutcome}><div><b>OUTCOME</b><span>{item.outcomes[0]}</span></div><Link href={`/use-cases/${item.slug}`}>Explore this use case →</Link></div></article>)}</div></section>
  <section className={`${styles.section} ${styles.sectionAlt}`}><div><div className={styles.sectionHead}><div className={styles.eyebrow}><span />A connected operating model</div><h2>Different starting points. One governed path to execution.</h2><p>Teams can begin with the situation in front of them while preserving the data, decisions and evidence needed by the next phase of the transaction.</p></div><div className={styles.useCaseFlow}><article><b>01</b><h3>Establish the fact base</h3><p>Bring transaction documents, inventories and ownership into a governed baseline.</p></article><article><b>02</b><h3>Connect what matters</h3><p>Expose dependencies, obligations, decisions, risks and accountable actions.</p></article><article><b>03</b><h3>Execute with evidence</h3><p>Carry context through Day 1, migration, governance and TSA exit.</p></article></div></div></section>
  <section className={styles.cta}><div><h2>Which transaction situation are you preparing for?</h2><p>We can focus the conversation on the use case, operating model and level of complexity that matter to you.</p></div><Link href="/book-a-demo">Book a focused demo →</Link></section>
  <SiteFooter />
</main>; }
