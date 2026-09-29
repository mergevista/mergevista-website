import GuidedTrialForm from "./GuidedTrialForm";
import styles from "./guided-trial.module.css";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("Request a Guided Trial | MergeVista", "Apply to evaluate MergeVista in a secure workspace configured around a representative IT M&A scenario.", "/guided-trial");

const steps = [
  ["01", "Qualification", "Tell us about your organization, role, use case and expected transaction activity."],
  ["02", "Discovery", "Join a focused 20–30-minute conversation and demonstration with our team."],
  ["03", "Provisioning", "Qualified organizations receive a dedicated workspace containing a realistic, synthetic deal."],
  ["04", "Guided evaluation", "Complete representative tasks with onboarding support over a defined 14–30-day period."],
];

export default function GuidedTrialPage() {
  return <main className={styles.page}>
    <SiteHeader />
    <section className={styles.hero}>
      <div className={styles.intro}>
        <div className={styles.eyebrow}><span/>A secure, structured evaluation</div>
        <h1>Request a <em>guided trial</em> of MergeVista.</h1>
        <p>Explore MergeVista in a secure workspace configured around a representative IT M&amp;A scenario.</p>
        <div className={styles.note}><b>Why guided?</b><span>MergeVista supports organization-level workflows, multiple roles and sensitive transaction data. A guided environment ensures your evaluation begins with the right structure, context and safeguards.</span></div>
      </div>
      <div className={styles.formPanel}><GuidedTrialForm /></div>
    </section>
    <section className={styles.process}>
      <div className={styles.processHead}><small>WHAT TO EXPECT</small><h2>A focused path from interest to informed evaluation.</h2></div>
      <div className={styles.steps}>{steps.map(([number,title,text]) => <article key={number}><small>{number}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className={styles.demoPath}><div><small>STILL EXPLORING?</small><h2>Start with a focused product demonstration.</h2><p>We will tailor the conversation around your transaction model, priorities and questions.</p></div><a href="/book-a-demo">Request a demo →</a></section>
    <SiteFooter />
  </main>;
}
