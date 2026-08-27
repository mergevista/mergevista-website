import BookDemoForm from "./BookDemoForm";
import styles from "./book-a-demo.module.css";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("Book a Demo | MergeVista", "Book a focused demonstration of the MergeVista AI-powered IT M&A execution platform.", "/book-a-demo");

export default function BookDemoPage() {
  return <main className={styles.page}>
    <SiteHeader />
    <section className={styles.content}>
      <div className={styles.intro}>
        <div className={styles.eyebrow}><span/>A focused product conversation</div>
        <h1>See how MergeVista brings <em>clarity and control</em> to IT M&amp;A execution.</h1>
        <p>Tell us what you are working through. We will tailor the conversation around your transaction, operating model and priorities.</p>
        <div className={styles.outcomes}><span><b>01</b>Explore the complete IT M&amp;A lifecycle</span><span><b>02</b>See connected inventory and execution</span><span><b>03</b>Discuss your Day 1, TSA and exit priorities</span></div>
        <aside><p>Prefer email?</p><a href="mailto:hello@mergevista.com">hello@mergevista.com</a></aside>
      </div>
      <div className={styles.formPanel}><BookDemoForm /></div>
    </section>
    <SiteFooter />
  </main>;
}
