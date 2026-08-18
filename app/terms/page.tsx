import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import BackToTop from "../components/BackToTop";
import { brand, canonicalUrl, supportMailto } from "../lib/brand";
import styles from "../privacy/privacy.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | MergeVista",
  description: "Terms governing access to the MergeVista website and platform.",
  alternates: { canonical: canonicalUrl(brand.legalPaths.terms) },
};

const sections = [
  ["eligibility", "Eligibility and accounts"],
  ["service", "Use of the service"],
  ["customer-data", "Customer data"],
  ["intellectual-property", "Intellectual property"],
  ["confidentiality", "Confidentiality and security"],
  ["third-party", "Third-party services"],
  ["availability", "Availability and changes"],
  ["disclaimers", "Disclaimers and liability"],
  ["termination", "Suspension and termination"],
  ["law", "Governing law"],
  ["contact", "Contact us"],
];

export default function TermsPage() {
  return <main className={styles.page} id="top">
    <SiteHeader />
    <header className={styles.hero}>
      <div className={styles.eyebrow}><span/>Legal</div>
      <h1>Terms of Service</h1>
      <p>These terms govern access to the MergeVista website and platform unless a separate written agreement applies.</p>
      <small>Effective {brand.termsEffectiveDate}</small>
    </header>

    <div className={styles.layout}>
      <aside><p>On this page</p>{sections.map(([id, label], index) => <a key={id} href={`#${id}`}><b>{String(index + 1).padStart(2, "0")}</b>{label}</a>)}</aside>
      <article className={styles.notice}>
        <section>
          <h2>Agreement and order of precedence</h2>
          <p>These Terms of Service (&quot;Terms&quot;) are an agreement between you and {brand.legalName} (&quot;MergeVista,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing our website or platform, you agree to these Terms.</p>
          <p>If your organization has a signed order form, master services agreement, subscription agreement, data-processing agreement or other written agreement with MergeVista, that agreement controls to the extent it conflicts with these Terms.</p>
        </section>

        <section id="eligibility"><span>01</span><h2>Eligibility and accounts</h2>
          <p>The platform is intended for authorized business users. You must provide accurate account information, protect your sign-in credentials and promptly notify your administrator or MergeVista of suspected unauthorized access. You may not share an individual account or use another person’s account.</p>
          <p>Your organization controls invitations, workspace membership and assigned permissions. Access may be limited or removed by your organization or MergeVista when required to protect the service or enforce applicable agreements.</p>
        </section>

        <section id="service"><span>02</span><h2>Use of the service</h2>
          <p>You may use the service only for lawful business purposes and in accordance with your organization’s authorization. You may not attempt to bypass access controls, interfere with service operation, introduce malicious code, probe for vulnerabilities without written permission, scrape the service, or use it to violate another person’s rights.</p>
          <p>You are responsible for the accuracy, legality and appropriateness of information you enter, import or upload and for decisions made using platform outputs.</p>
        </section>

        <section id="customer-data"><span>03</span><h2>Customer data</h2>
          <p>As between MergeVista and the customer organization, the customer retains its rights in information submitted to its workspace. The customer authorizes MergeVista to host, process, transmit and display that information as needed to provide, secure, support and improve the contracted service.</p>
          <p>Customers and users must not submit information they lack authority to process. Retention, return and deletion obligations may be further defined in the applicable customer agreement.</p>
        </section>

        <section id="intellectual-property"><span>04</span><h2>Intellectual property</h2>
          <p>MergeVista and its licensors retain all rights in the website, platform, software, designs, documentation and related technology. Except for the limited right to use the service under an applicable agreement, no rights are transferred to you. Feedback may be used to improve MergeVista without restriction or payment, provided it does not identify a customer or disclose customer confidential information.</p>
        </section>

        <section id="confidentiality"><span>05</span><h2>Confidentiality and security</h2>
          <p>Users must handle workspace information as confidential unless their organization authorizes otherwise. MergeVista maintains safeguards designed to protect the service, as described on our <a href={brand.legalPaths.security}>Security &amp; Trust page</a>. No online service can guarantee absolute security.</p>
        </section>

        <section id="third-party"><span>06</span><h2>Third-party services</h2>
          <p>The service may interoperate with third-party identity, hosting, analytics, communication or AI services. Their services are governed by their own terms. MergeVista is not responsible for third-party products outside its control, although commitments in a signed customer agreement continue to apply.</p>
        </section>

        <section id="availability"><span>07</span><h2>Availability and changes</h2>
          <p>We may maintain, update or modify the service and may temporarily interrupt access for maintenance, security or operational reasons. Any service-level commitments are stated only in a signed customer agreement; these public Terms do not create a service-level agreement.</p>
        </section>

        <section id="disclaimers"><span>08</span><h2>Disclaimers and liability</h2>
          <p>Except as expressly provided in a signed customer agreement, the website and service are provided “as is” and “as available” to the extent permitted by law. MergeVista does not provide legal, tax, accounting or investment advice, and platform information does not replace professional judgment.</p>
          <p>To the maximum extent permitted by law, MergeVista will not be liable under these public Terms for indirect, incidental, special, consequential or punitive damages, or for lost profits, revenues, goodwill or data. Limitations and remedies in a signed customer agreement control for contracted services.</p>
        </section>

        <section id="termination"><span>09</span><h2>Suspension and termination</h2>
          <p>We may suspend or terminate access when reasonably necessary to address a security threat, unlawful activity, material breach, nonpayment under an applicable agreement or risk to the service or other users. Customer-agreement provisions govern termination of paid services and disposition of customer data.</p>
        </section>

        <section id="law"><span>10</span><h2>Governing law</h2>
          <p>These Terms are governed by the laws of the State of {brand.governingLaw}, without regard to conflict-of-law principles. Unless a signed customer agreement states otherwise, any legal action relating to these Terms must be brought in the state or federal courts located in {brand.venue}, and each party consents to their jurisdiction.</p>
          <p>If any provision is unenforceable, the remaining provisions continue in effect. A failure to enforce a provision is not a waiver. We may update these Terms by publishing a revised version and effective date.</p>
        </section>

        <section id="contact" className={styles.contact}><span>11</span><h2>Contact us</h2>
          <p>Questions about these Terms may be sent to <a href={supportMailto("Legal question")}>{brand.supportEmail}</a>.</p>
        </section>
        <BackToTop />
      </article>
    </div>
    <SiteFooter theme="dark" />
  </main>;
}
