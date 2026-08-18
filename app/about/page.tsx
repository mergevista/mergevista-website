import type { Metadata } from "next";
import Link from "next/link";
import styles from "./about.module.css";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About MergeVista | IT M&A Execution Platform",
  description: "Learn why MergeVista is building a new generation of IT M&A execution platform for acquisitions, divestitures, integrations and separations.",
  alternates: { canonical: "https://www.mergevista.com/about" },
};

const principles = [
  ["01", "Connected execution", "Keep inventories, plans, dependencies, decisions and evidence connected across the complete transaction."],
  ["02", "Shared accountability", "Give sellers, buyers and transaction leaders a common operating model with clear ownership."],
  ["03", "Evidence-backed decisions", "Make recommendations and decisions traceable to the transaction data and documents that support them."],
  ["04", "Human-governed AI", "Use AI to accelerate understanding and action while keeping experienced people in control."],
];

export default function AboutPage() {
  return <main className={styles.page}>
    <SiteHeader />

    <header className={styles.hero}>
      <div className={styles.eyebrow}><span/>About MergeVista</div>
      <h1>Purpose-built for the <em>execution reality</em> of IT M&amp;A.</h1>
      <p>MergeVista was created to bring structure, visibility and accountability to one of the most complex dimensions of M&amp;A: IT execution.</p>
    </header>

    <section className={styles.problem}>
      <div><small>WHY WE EXIST</small><h2>Complex transactions deserve more than disconnected tools.</h2></div>
      <div><p>IT teams are expected to protect Day 1, manage separation, operate TSAs, coordinate migration and prove exit—often across companies, workstreams and timelines that were never designed to work together.</p><p>Yet critical execution still depends on fragmented spreadsheets, status meetings and institutional knowledge. MergeVista is being built to replace that fragmentation with one connected system of execution.</p></div>
    </section>

    <section className={styles.mission}>
      <div className={styles.orbits} aria-hidden="true"><i/><i/><i/><i/><i/></div>
      <small>OUR MISSION</small>
      <h2>Give every transaction team one trusted environment—from discovery through TSA exit.</h2>
      <p>We believe better connected execution leads to clearer decisions, stronger accountability and more predictable deal outcomes.</p>
    </section>

    <section className={styles.principles}>
      <div className={styles.sectionIntro}><div className={styles.eyebrow}><span/>What we believe</div><h2>Principles that shape the platform.</h2></div>
      <div className={styles.grid}>{principles.map(([number, title, text]) => <article key={number}><small>{number}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={styles.building}>
      <div><div className={styles.eyebrow}><span/>How we are building</div><h2>Shaped by the people doing the work.</h2></div>
      <blockquote>MergeVista LLC is building the next generation of IT M&amp;A execution platforms, shaped by the real-world needs of design partners and early customers.</blockquote>
    </section>

    <section className={styles.cta}><div><small>START A CONVERSATION</small><h2>Help shape a better way to execute IT M&amp;A.</h2><p>Explore the platform and tell us what your transaction teams need most.</p></div><Link href="/book-a-demo">Talk with our team <span>→</span></Link></section>

    <SiteFooter />
  </main>;
}
