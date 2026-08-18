import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import BackToTop from "../components/BackToTop";
import styles from "../privacy/privacy.module.css";
import { brand, canonicalUrl, supportMailto } from "../lib/brand";

export const metadata: Metadata = {
  title: "Security & Trust | MergeVista",
  description: "Learn about the security controls MergeVista uses to protect transaction workspaces and customer data.",
  alternates: { canonical: canonicalUrl(brand.legalPaths.security) },
};

const sections = [
  ["identity", "Identity and access"],
  ["isolation", "Workspace isolation"],
  ["protection", "Data protection"],
  ["accountability", "Audit and accountability"],
  ["operations", "Secure operations"],
  ["responsibility", "Shared responsibility"],
  ["report", "Report a concern"],
];

export default function SecurityPage() {
  return <main className={styles.page} id="top">
    <SiteHeader />

    <header className={styles.hero}>
      <div className={styles.eyebrow}><span/>Security by design</div>
      <h1>Security &amp; Trust</h1>
      <p>MergeVista is designed to protect sensitive IT M&amp;A information through controlled identity, scoped authorization, workspace separation and accountable activity.</p>
      <small>Last reviewed {brand.securityReviewDate}</small>
    </header>

    <div className={styles.layout}>
      <aside><p>On this page</p>{sections.map(([id, label], index) => <a key={id} href={`#${id}`}><b>{String(index + 1).padStart(2, "0")}</b>{label}</a>)}</aside>

      <article className={styles.notice}>
        <section>
          <h2>Our approach</h2>
          <p>Transaction workspaces contain commercially sensitive inventories, obligations, decisions and evidence. MergeVista applies security controls throughout the account and workspace lifecycle. This page describes current platform practices and is not a claim of a third-party certification.</p>
        </section>

        <section id="identity">
          <span>01</span><h2>Identity and access</h2>
          <ul><li>Microsoft Entra ID authentication supports invited business users, including users whose email is not hosted by Microsoft.</li><li>Microsoft credentials are handled by Microsoft; MergeVista does not receive a user’s Microsoft password.</li><li>Administrators assign organization, deal and responsibility-level access according to a user’s role.</li><li>Accounts and assignments can be disabled or removed when access is no longer required.</li></ul>
        </section>

        <section id="isolation">
          <span>02</span><h2>Workspace isolation</h2>
          <p>Platform authorization scopes customer users to their organization and the deals, modules and responsibilities they are permitted to access. Administrative functions are separately restricted. MergeVista validates these boundaries in the application service rather than relying only on what is visible in the browser.</p>
        </section>

        <section id="protection">
          <span>03</span><h2>Data protection</h2>
          <ul><li>MergeVista is hosted using managed Microsoft Azure services.</li><li>Platform and identity traffic is protected in transit using HTTPS.</li><li>Authentication sessions use secure, HTTP-only cookies in deployed environments.</li><li>Application secrets and service credentials are kept outside browser-delivered code and managed separately from source code.</li></ul>
          <p>Specific customer security requirements, data locations and retention commitments are addressed through the applicable service agreement and implementation configuration.</p>
        </section>

        <section id="accountability">
          <span>04</span><h2>Audit and accountability</h2>
          <p>MergeVista maintains audit and evidence history for supported administrative and transaction activities. Identity assignments and invitation status provide administrators visibility into who has been provisioned and whether access remains active. Operational authentication failures are logged without recording passwords or authentication tokens.</p>
        </section>

        <section id="operations">
          <span>05</span><h2>Secure operations</h2>
          <p>We use controlled deployment workflows, environment-specific configuration, least-privilege service access, application validation and monitoring to operate the service. Security-relevant changes are reviewed and tested before deployment. We assess reported vulnerabilities and security events based on their potential impact and take appropriate containment and remediation action.</p>
        </section>

        <section id="responsibility">
          <span>06</span><h2>Shared responsibility</h2>
          <p>MergeVista secures the platform and its operation. Customer administrators are responsible for inviting the correct individuals, assigning appropriate roles, reviewing access periodically, removing access promptly, and configuring their Microsoft identity policies—including multifactor authentication and conditional access—according to their organization’s requirements.</p>
        </section>

        <section id="report" className={styles.contact}>
          <span>07</span><h2>Report a security concern</h2>
          <p>To report a suspected vulnerability, unauthorized access or other security concern, email <a href={supportMailto("Security concern")}>{brand.supportEmail}</a> with “Security concern” in the subject line. Do not include passwords, authentication tokens or sensitive transaction data in the initial message.</p>
        </section>
        <BackToTop />
      </article>
    </div>

    <SiteFooter theme="dark" />
  </main>;
}
