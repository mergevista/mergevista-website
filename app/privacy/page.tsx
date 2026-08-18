import type { Metadata } from "next";
import styles from "./privacy.module.css";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import BackToTop from "../components/BackToTop";
import { brand, canonicalUrl, supportMailto } from "../lib/brand";

export const metadata: Metadata = {
  title: "Privacy Notice | MergeVista",
  description: "Learn how MergeVista collects, uses, protects and shares information through its website and platform.",
  alternates: { canonical: canonicalUrl(brand.legalPaths.privacy) },
};

const sections = [
  ["information", "Information we collect"],
  ["platform", "Platform and sign-in data"],
  ["use", "How we use information"],
  ["analytics", "Cookies and analytics"],
  ["sharing", "How information is shared"],
  ["retention", "Retention and security"],
  ["rights", "Your choices and rights"],
  ["contact", "Contact us"],
];

export default function PrivacyPage() {
  return <main className={styles.page} id="top">
    <SiteHeader />

    <header className={styles.hero}>
      <div className={styles.eyebrow}><span/>Trust and transparency</div>
      <h1>Privacy Notice</h1>
      <p>This notice explains how MergeVista LLC collects and uses personal information when you visit our website, contact us, request a product demonstration or use the MergeVista platform.</p>
      <small>Effective {brand.privacyEffectiveDate}</small>
    </header>

    <div className={styles.layout}>
      <aside><p>On this page</p>{sections.map(([id, label], index) => <a key={id} href={`#${id}`}><b>{String(index + 1).padStart(2, "0")}</b>{label}</a>)}</aside>

      <article className={styles.notice}>
        <section>
          <h2>About this notice</h2>
          <p>MergeVista LLC (&quot;MergeVista,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides an AI-powered IT M&amp;A execution platform and is responsible for the personal information described in this notice. This notice applies to our public website at mergevista.com and to personal information we handle to provide and secure the platform. A customer’s use of the platform may also be governed by its agreement with MergeVista LLC, including any applicable data-processing terms.</p>
          <p>For information a customer uploads to or manages in its workspace, the customer generally determines why and how that information is processed and MergeVista processes it to provide the service on the customer’s behalf. Users should direct workspace-data requests to their organization in the first instance.</p>
        </section>

        <section id="information">
          <span>01</span><h2>Information we collect</h2>
          <h3>Information you provide</h3>
          <p>When you request a demo or contact us, we may collect your first and last name, work email address, company, job title or role, transaction interest and any optional message you provide. We also collect information you send to us by email.</p>
          <h3>Website and device information</h3>
          <p>We use Google Analytics to understand how our website is used. It may collect information such as pages viewed, interactions, session information, browser and device type, approximate location and an online identifier stored in a cookie. Google states that IP addresses are used to derive approximate location and are discarded before the data is logged in Google Analytics.</p>
        </section>

        <section id="platform">
          <span>02</span><h2>Platform and sign-in data</h2>
          <h3>Account invitations and Microsoft sign-in</h3>
          <p>When an authorized workspace administrator invites you, we process your name, business email address, organization and assigned workspace roles. MergeVista uses Microsoft Entra ID and Microsoft’s business-to-business invitation service for platform sign-in. Microsoft may provide identifiers such as your name, email or username, Microsoft tenant identifier and Microsoft user object identifier. MergeVista does not receive your Microsoft password.</p>
          <h3>Platform activity</h3>
          <p>We process workspace membership, role and permission assignments, invitation and account status, authentication method, sign-in and security events, audit history, and technical information needed to operate, diagnose and protect the service. We also process content and records that authorized users enter, import or upload to their organization’s workspace.</p>
          <h3>Sessions and local credentials</h3>
          <p>The platform uses essential authentication cookies to maintain signed-in sessions. Where a customer environment permits a MergeVista-managed local account, passwords are stored using a one-way salted hash rather than in readable form.</p>
        </section>

        <section id="use">
          <span>03</span><h2>How we use information</h2>
          <p>We use personal information to:</p>
          <ul><li>Respond to inquiries and arrange product demonstrations.</li><li>Create invited accounts and provide authorized access to customer workspaces.</li><li>Authenticate users and administer roles, permissions and account lifecycles.</li><li>Operate, secure, troubleshoot and improve our website and platform.</li><li>Maintain audit history and investigate security or support events.</li><li>Measure website performance and understand aggregate usage patterns.</li><li>Comply with applicable law and protect our rights, users and services.</li></ul>
          <p>Where applicable, we rely on consent, legitimate interests, steps taken at your request before entering a contract, compliance with legal obligations, or a customer’s instructions under our contract. We do not sell personal information covered by this notice or use it to make solely automated decisions that produce legal or similarly significant effects.</p>
        </section>

        <section id="analytics">
          <span>04</span><h2>Cookies and analytics</h2>
          <p>Google Analytics uses cookies and similar technologies to distinguish browsers and provide usage statistics. Depending on applicable law and the choices available in your browser, you may be able to block or delete these cookies. Doing so may affect measurement but should not prevent you from viewing the website.</p>
          <p>Google processes analytics information under its own terms and privacy practices. Learn more in <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google’s Privacy Policy</a>.</p>
        </section>

        <section id="sharing">
          <span>05</span><h2>How information is shared</h2>
          <p>We may share information with service providers that help us host, authenticate, secure, analyze and operate our services or communicate with you, including Microsoft Azure and Entra ID, Google Analytics and our business email providers. These providers may process information only to deliver their services to us and under their applicable contractual obligations.</p>
          <p>Workspace information may be available to the customer organization that manages the workspace and to users whom that organization authorizes, according to their assigned access. If optional AI capabilities are enabled, relevant workspace content may be sent to the configured AI service to perform the customer-requested operation.</p>
          <p>We may also disclose information when required by law, to protect rights or safety, or in connection with a merger, financing, acquisition, reorganization or sale of assets. Our providers may process information in countries other than your own; where required, we use appropriate safeguards for these transfers.</p>
        </section>

        <section id="retention">
          <span>06</span><h2>Retention and security</h2>
          <p>We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, the applicable customer relationship, and legal, accounting, contractual and security requirements. Account, audit and security records may be retained after access ends when needed for accountability, dispute resolution or security. When information is no longer required, we delete or anonymize it where reasonably practicable.</p>
          <p>We use administrative, technical and organizational safeguards designed to protect personal information. You can learn more on our <a href="/security">Security &amp; Trust page</a>. No online service or transmission is completely secure, so we cannot guarantee absolute security.</p>
        </section>

        <section id="rights">
          <span>07</span><h2>Your choices and rights</h2>
          <p>Depending on where you live, you may have rights to request access to, correction of or deletion of your personal information, or to restrict or object to certain processing. You may also withdraw consent where processing is based on consent. These rights can be subject to legal exceptions.</p>
          <p>You can manage cookies through your browser settings. You may opt out of non-essential marketing emails using the unsubscribe option in the message or by contacting us. To correct or remove a platform account or customer-workspace record, contact your workspace administrator; you may also contact MergeVista for assistance. Our website and platform are intended for business users and are not directed to children.</p>
        </section>

        <section>
          <h2>Changes to this notice</h2>
          <p>We may update this notice as our practices, services or legal obligations change. We will publish the updated notice here and revise the effective date above. Material changes may also be communicated through another appropriate channel.</p>
        </section>

        <section id="contact" className={styles.contact}>
          <span>08</span><h2>Contact us</h2>
          <p>For a privacy question or request, email <a href={supportMailto("Privacy request")}>{brand.supportEmail}</a> with “Privacy request” in the subject line. To help protect your information, we may need to verify your identity before completing a request.</p>
        </section>
        <BackToTop />
      </article>
    </div>

    <SiteFooter theme="dark" />
  </main>;
}
