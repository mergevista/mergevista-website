import type { Metadata } from "next";
import styles from "./privacy.module.css";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Notice | MergeVista",
  description: "Learn how MergeVista collects, uses, protects and shares information through its website.",
  alternates: { canonical: "https://www.mergevista.com/privacy" },
};

const sections = [
  ["information", "Information we collect"],
  ["use", "How we use information"],
  ["analytics", "Cookies and analytics"],
  ["sharing", "How information is shared"],
  ["retention", "Retention and security"],
  ["rights", "Your choices and rights"],
  ["contact", "Contact us"],
];

export default function PrivacyPage() {
  return <main className={styles.page}>
    <SiteHeader />

    <header className={styles.hero}>
      <div className={styles.eyebrow}><span/>Trust and transparency</div>
      <h1>Privacy Notice</h1>
      <p>This notice explains how MergeVista collects and uses personal information when you visit our website, contact us or request a product demonstration.</p>
      <small>Effective August 9, 2026</small>
    </header>

    <div className={styles.layout}>
      <aside><p>On this page</p>{sections.map(([id, label], index) => <a key={id} href={`#${id}`}><b>{String(index + 1).padStart(2, "0")}</b>{label}</a>)}</aside>

      <article className={styles.notice}>
        <section>
          <h2>About this notice</h2>
          <p>MergeVista provides an AI-powered IT M&amp;A execution platform. This notice applies to our public marketing website at mergevista.com. A customer’s use of the MergeVista platform may also be governed by contractual terms and a separate product privacy or data-processing notice.</p>
        </section>

        <section id="information">
          <span>01</span><h2>Information we collect</h2>
          <h3>Information you provide</h3>
          <p>When you request a demo or contact us, we may collect your first and last name, work email address, company, job title or role, transaction interest and any optional message you provide. We also collect information you send to us by email.</p>
          <h3>Website and device information</h3>
          <p>We use Google Analytics to understand how our website is used. It may collect information such as pages viewed, interactions, session information, browser and device type, approximate location and an online identifier stored in a cookie. Google states that IP addresses are used to derive approximate location and are discarded before the data is logged in Google Analytics.</p>
        </section>

        <section id="use">
          <span>02</span><h2>How we use information</h2>
          <p>We use personal information to:</p>
          <ul><li>Respond to inquiries and arrange product demonstrations.</li><li>Understand your organization’s interests and tailor our communications.</li><li>Operate, secure, troubleshoot and improve our website.</li><li>Measure website performance and understand aggregate usage patterns.</li><li>Comply with applicable law and protect our rights, users and services.</li></ul>
          <p>Where applicable, we rely on consent, legitimate interests, steps taken at your request before entering a contract, or compliance with legal obligations. We do not sell personal information collected through this website or use it to make solely automated decisions that produce legal or similarly significant effects.</p>
        </section>

        <section id="analytics">
          <span>03</span><h2>Cookies and analytics</h2>
          <p>Google Analytics uses cookies and similar technologies to distinguish browsers and provide usage statistics. Depending on applicable law and the choices available in your browser, you may be able to block or delete these cookies. Doing so may affect measurement but should not prevent you from viewing the website.</p>
          <p>Google processes analytics information under its own terms and privacy practices. Learn more in <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google’s Privacy Policy</a>.</p>
        </section>

        <section id="sharing">
          <span>04</span><h2>How information is shared</h2>
          <p>We may share information with service providers that help us host, secure, analyze and operate the website or communicate with you, including Microsoft Azure, Google Analytics and our business email providers. These providers may process information only to deliver their services to us and under their applicable contractual obligations.</p>
          <p>We may also disclose information when required by law, to protect rights or safety, or in connection with a merger, financing, acquisition, reorganization or sale of assets. Our providers may process information in countries other than your own; where required, we use appropriate safeguards for these transfers.</p>
        </section>

        <section id="retention">
          <span>05</span><h2>Retention and security</h2>
          <p>We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, our relationship with you, and applicable legal, accounting and security requirements. When information is no longer required, we delete or anonymize it where reasonably practicable.</p>
          <p>We use administrative, technical and organizational safeguards designed to protect personal information. No online service or transmission is completely secure, so we cannot guarantee absolute security.</p>
        </section>

        <section id="rights">
          <span>06</span><h2>Your choices and rights</h2>
          <p>Depending on where you live, you may have rights to request access to, correction of or deletion of your personal information, or to restrict or object to certain processing. You may also withdraw consent where processing is based on consent. These rights can be subject to legal exceptions.</p>
          <p>You can manage cookies through your browser settings. You may opt out of non-essential marketing emails using the unsubscribe option in the message or by contacting us. This website is intended for business users and is not directed to children.</p>
        </section>

        <section>
          <h2>Changes to this notice</h2>
          <p>We may update this notice as our practices, services or legal obligations change. We will publish the updated notice here and revise the effective date above. Material changes may also be communicated through another appropriate channel.</p>
        </section>

        <section id="contact" className={styles.contact}>
          <span>07</span><h2>Contact us</h2>
          <p>For a privacy question or request, email <a href="mailto:hello@mergevista.com?subject=Privacy%20request">hello@mergevista.com</a> with “Privacy request” in the subject line. To help protect your information, we may need to verify your identity before completing a request.</p>
        </section>
      </article>
    </div>

    <SiteFooter theme="dark" />
  </main>;
}
