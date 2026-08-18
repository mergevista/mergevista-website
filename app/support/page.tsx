import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import BackToTop from "../components/BackToTop";
import { brand, canonicalUrl, supportMailto } from "../lib/brand";
import styles from "../privacy/privacy.module.css";

export const metadata: Metadata = {
  title: "Support | MergeVista",
  description: "Contact MergeVista support for access, product, security and privacy assistance.",
  alternates: { canonical: canonicalUrl(brand.legalPaths.support) },
};

const sections = [
  ["access", "Workspace access"],
  ["product", "Product assistance"],
  ["security", "Security concerns"],
  ["privacy", "Privacy requests"],
  ["request", "What to include"],
];

export default function SupportPage() {
  return <main className={styles.page} id="top">
    <SiteHeader />
    <header className={styles.hero}>
      <div className={styles.eyebrow}><span/>Help when you need it</div>
      <h1>MergeVista Support</h1>
      <p>Get assistance with workspace access, product questions, security concerns or privacy requests.</p>
      <small>Contact {brand.supportEmail}</small>
    </header>

    <div className={styles.layout}>
      <aside><p>On this page</p>{sections.map(([id, label], index) => <a key={id} href={`#${id}`}><b>{String(index + 1).padStart(2, "0")}</b>{label}</a>)}</aside>
      <article className={styles.notice}>
        <section>
          <h2>How to reach us</h2>
          <p>Email <a href={supportMailto("MergeVista support request")}>{brand.supportEmail}</a>. We review requests on a best-effort basis and prioritize active security incidents and access-impacting issues. Any contractual support hours or response commitments are defined in the applicable customer agreement.</p>
        </section>

        <section id="access"><span>01</span><h2>Workspace access</h2>
          <p>For invitations, role assignments or access to a specific deal, first contact your organization’s MergeVista administrator. If an invitation fails or you cannot sign in, contact us and include your business email address and organization name.</p>
        </section>

        <section id="product"><span>02</span><h2>Product assistance</h2>
          <p>We can help investigate unexpected behavior, imports, exports and workflow questions. Include the module, deal, action attempted and the time the issue occurred. Screenshots are helpful when they do not expose sensitive transaction information.</p>
        </section>

        <section id="security"><span>03</span><h2>Security concerns</h2>
          <p>Report suspected unauthorized access or a vulnerability to <a href={supportMailto("Security concern")}>{brand.supportEmail}</a> with “Security concern” in the subject. Do not include passwords, authentication tokens or sensitive customer data in the initial message. For current security practices, see our <a href={brand.legalPaths.security}>Security &amp; Trust page</a>.</p>
        </section>

        <section id="privacy"><span>04</span><h2>Privacy requests</h2>
          <p>Send privacy questions or requests to <a href={supportMailto("Privacy request")}>{brand.supportEmail}</a> with “Privacy request” in the subject. Workspace-data requests should normally be directed first to the organization that controls the workspace. We may verify identity before acting on a request.</p>
        </section>

        <section id="request" className={styles.contact}><span>05</span><h2>What to include</h2>
          <ul><li>Your name, business email and organization.</li><li>A concise description of the issue and expected result.</li><li>The affected module or page and approximate time.</li><li>Any visible error message or support reference.</li></ul>
          <p>Never send passwords, one-time codes, access tokens or unnecessary transaction data.</p>
        </section>
        <BackToTop />
      </article>
    </div>
    <SiteFooter theme="dark" />
  </main>;
}
