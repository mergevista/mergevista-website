import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { pageMetadata } from "../lib/seo";
import styles from "../product-pages.module.css";

export const metadata = pageMetadata("IT Separation & Integration Solutions | MergeVista", "Explore MergeVista solutions for divestitures, acquisitions, carve-out Day 1 readiness, post-close migration and TSA exit.", "/solutions");

const solutions = [
  ["01", "Divestitures and separations", "Create a trusted carve-out baseline, expose shared dependencies and coordinate logical and physical separation across seller and buyer teams.", ["Connected separation inventories", "Site and workstream planning", "Contract, license and consent visibility"]],
  ["02", "Acquisitions and integrations", "Give the buyer a structured view of acquired technology, transition dependencies and the decisions required to establish the future-state environment.", ["Buyer transition planning", "Disposition and dependency decisions", "Migration wave coordination"]],
  ["03", "Day 1 readiness for carve-outs", "Demonstrate that employees, business processes and critical services can operate from legal close—not simply that individual workstreams report green.", ["Outcome-based readiness criteria", "Cross-workstream dependencies", "Evidence and accountable approvals"]],
  ["04", "Post-close migration and TSA exit", "Connect migration and every interim service to its obligations, costs, dependencies, milestones and objective exit evidence.", ["Service delivery and consumption", "Migration and dependency control", "Evidence-based exit governance"]],
];
const solutionSlugs = ["divestitures-separations", "acquisitions-integrations", "day-1-readiness", "tsa-management-exit"];

export default function SolutionsPage(){return <main className={styles.page}>
  <SiteHeader/>
  <header className={`${styles.hero} ${styles.solutionHero}`}><div className={styles.heroInner}>
    <div className={styles.heroCopy}><div className={styles.eyebrow}><span/>Solutions for transaction execution</div><h1>Control the moments that determine <em>deal outcomes.</em></h1><p>Use one connected operating model to establish the baseline, protect Day 1, govern TSA delivery and accelerate migration and exit.</p><div className={styles.actions}><Link className={styles.primary} href="/book-a-demo">Book a demo →</Link><Link className={styles.secondary} href="/platform">Explore the platform</Link></div></div>
    <div className={styles.solutionMap} aria-label="MergeVista solution areas"><small>FOUR CONNECTED EXECUTION PRIORITIES</small>{solutions.map(([n,title,text])=><article key={n as string}><b>{n as string}</b><h3>{title as string}</h3><p>{text as string}</p></article>)}</div>
  </div></header>
  <section className={styles.section}><div className={styles.sectionHead}><div className={styles.eyebrow}><span/>Built for real transaction pressure</div><h2>Move from planning activity to executable outcomes.</h2><p>Each solution is connected to the same inventories, ownership model, dependencies and evidence—so progress in one part of the transaction does not create blind spots elsewhere.</p></div><div className={styles.solutionGrid}>{solutions.map(([n,title,text,items], index)=><article key={n as string}><small>{n as string}</small><h3>{title as string}</h3><p>{text as string}</p><ul>{(items as string[]).map(item=><li key={item}>{item}</li>)}</ul><Link href={`/solutions/${solutionSlugs[index]}`}>Explore this solution →</Link></article>)}</div></section>
  <section className={`${styles.section} ${styles.sectionAlt}`}><div><div className={styles.sectionHead}><div className={styles.eyebrow}><span/>From challenge to outcome</div><h2>Govern the transaction through what must be true.</h2><p>MergeVista connects execution detail to the business outcomes leaders need to protect.</p></div><div className={styles.outcomeTable}><div className={styles.tableHead}><span>EXECUTION CHALLENGE</span><span>MERGEVISTA APPROACH</span><span>BUSINESS OUTCOME</span></div><div><span>Multiple versions of the IT baseline</span><span>Reconciled, governed deal inventories</span><span>A trusted foundation for every plan</span></div><div><span>Workstreams report status independently</span><span>Connected dependencies and readiness evidence</span><span>Operational confidence on Day 1</span></div><div><span>TSA services tracked as a spreadsheet</span><span>Service obligations linked to migration and exit criteria</span><span>Faster, defensible TSA exit</span></div><div><span>Seller and buyer plans lose context at handoff</span><span>One shared transaction workspace</span><span>Continuity from separation through migration</span></div></div></div></section>
  <section className={styles.cta}><div><h2>Bring your transaction priorities into focus.</h2><p>See how MergeVista can support your acquisition, divestiture, integration or separation.</p></div><div className={styles.ctaActions}><Link href="/book-a-demo">Book a demo →</Link><Link className={styles.ctaSecondary} href="/guided-trial">Apply for a guided trial →</Link></div></section>
  <SiteFooter bordered={false}/>
</main>}
