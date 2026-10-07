import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ArticleStructuredData from "../ArticleStructuredData";
import RelatedInsights from "../RelatedInsights";
import styles from "../complete-it-ma-lifecycle/article.module.css";
import localStyles from "../why-day-1-readiness-fails/day-one.module.css";

const title = "The Application Can Move. The License May Not.";
const seoTitle = "Software Licensing in IT Separations | MergeVista";
const description = "Why application migration readiness in an IT separation must include contracts, entitlements, vendor consent, deployment rights and evidence—not only technical readiness.";
const path = "/insights/application-move-license-may-not";
const published = "2026-10-07";

export const metadata: Metadata = {
  title: seoTitle,
  description,
  alternates: { canonical: `https://www.mergevista.com${path}` },
  openGraph: { title, description, type: "article", url: `https://www.mergevista.com${path}`, publishedTime: published, images: [{ url: "/og.png", width: 1200, height: 630, alt: "MergeVista — AI-Powered IT M&A Execution Platform" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

const entitlementExamples = [
  "A specific number of users",
  "A defined number of devices or processors",
  "Particular software editions or modules",
  "Use within certain countries or legal entities",
  "Deployment in an on-premises environment",
  "Access through a named cloud tenant",
  "Production, development and test environments",
  "Rights to upgrades, maintenance or technical support",
];

const enterpriseAgreementScope = [
  "Multiple products and editions",
  "Several legal entities",
  "Users in many countries",
  "Central infrastructure and local deployments",
  "Shared cloud tenants",
  "Volume-based discounts",
  "Bundled support and maintenance",
  "Products used by both the seller and the divested business",
];

const procurementInputs = [
  "Which applications are moving",
  "Which products support each application",
  "How those products are deployed",
  "How many users, devices or servers require coverage",
  "Which environments must be licensed",
  "When the rights are needed",
  "Whether the solution is temporary or permanent",
  "Which legal entity will contract with the vendor",
  "Whether the buyer intends to retain or replace the product",
  "What support is required during and after migration",
];

const applicationAssessment = [
  "The relevant vendor and agreements",
  "Products, editions and modules in use",
  "License metrics and quantities",
  "Contracting legal entities",
  "Assignment and change-of-control provisions",
  "Consent or notification requirements",
  "Deployment and geographic restrictions",
  "Cloud-tenant implications",
  "Support and maintenance arrangements",
  "Current and future entitlement requirements",
  "Required actions for Day 1, migration and TSA exit",
  "Commercial owner and decision authority",
  "Target completion date and supporting evidence",
];

const readinessEvidence = [
  "Executed vendor consent",
  "A new buyer agreement",
  "Confirmed entitlements and quantities",
  "Active subscriptions in the buyer’s tenant",
  "Issued license keys",
  "Completed account or portal transfers",
  "Valid support coverage",
  "Reconciled deployment information",
  "Confirmation that the seller’s residual requirements are covered",
  "Approval that the commercial dependency can be removed",
];

export default function ApplicationLicenseArticle() { return <main className={styles.page}>
  <ArticleStructuredData title={title} description={description} path={path} published={published}/>
  <SiteHeader/>
  <header className={styles.hero}><Link href="/insights">← Back to Insights</Link><small>SOFTWARE LICENSING · 12 MIN READ</small><h1>The Application Can Move. The License May Not.</h1><p>Technical migration readiness does not prove that the buyer has the commercial and operational right to use the software.</p><div><span>MergeVista Insights</span><i/><span>October 7, 2026</span></div></header>
  <section className={styles.takeaway}><small>KEY TAKEAWAY</small><p>An application is ready only when the buyer has the technology, data, access, support and contractual rights required to operate it.</p></section>
  <article className={styles.article}>
    <p className={styles.lead}>In an IT separation, application planning often begins with a familiar set of questions.</p>
    <p>Is the application moving to the buyer? Will it remain temporarily with the seller? Does it need to be cloned, rebuilt, replaced, or retired? What infrastructure does it require? How much data needs to move? When can it be included in a migration wave?</p>
    <p>The application disposition is agreed. The technical team develops a solution. The migration date is added to the plan.</p>
    <p>Then someone asks:</p>
    <blockquote>“Does the buyer have the right to use the software?”</blockquote>
    <p>That question often comes much later than it should.</p>
    <p>The application may be technically ready to move. Its infrastructure may be built, its data may be separated, and its users may be scheduled for migration.</p>
    <p><strong>But the license may belong to the seller.</strong></p>

    <h2>The contract is not the license</h2>
    <p>Contracts and licenses are frequently discussed as though they are the same thing. They are connected, but they answer different questions.</p>
    <p>The contract tells us about the commercial relationship with the vendor. It may address assignment, change of control, termination, renewal, pricing, support, geographic use and other obligations.</p>
    <p>The license or entitlement tells us what the company is actually allowed to use.</p>
    <p>That could mean:</p>
    <ul className={localStyles.editorialList}>{entitlementExamples.map(item => <li key={item}>{item}</li>)}</ul>
    <p>Finding the contract is only the beginning.</p>
    <p>The team still needs to understand which products it covers, what rights were purchased, who can use them, where the software is deployed and whether any of those rights can move to the buyer.</p>

    <h2>The application inventory rarely tells the commercial story</h2>
    <p>An application inventory may contain a vendor name, product name and perhaps a contract reference.</p>
    <p>That is useful, but it does not tell us whether the application is fully licensed.</p>
    <p>The product may have been purchased through a global enterprise agreement covering several business units and countries. The application may use multiple vendor products underneath it. A database, operating system, reporting component, integration tool and monitoring product may all be licensed separately.</p>
    <p>Some licenses may be assigned to users. Others may depend on servers, processors, cores, revenue, transaction volume or the number of employees in the company.</p>
    <p>The application may also rely on software that does not appear in the application inventory at all.</p>
    <p>For example, a business application may be moving to the buyer, but its database license sits under the seller’s enterprise agreement. The application team has planned the server migration. The infrastructure team has built the target environment. The data migration has been tested.</p>
    <p>The missing database entitlement is discovered shortly before cutover.</p>
    <p><strong>Technically, the application can move. Commercially, it cannot operate in the buyer’s environment until the licensing issue is resolved.</strong></p>

    <h2>“Transferable” does not always mean ready to transfer</h2>
    <p>Teams sometimes locate the agreement, confirm that assignment is permitted and conclude that the contract can move.</p>
    <p>The detailed language may tell a different story.</p>
    <p>Assignment may be allowed only with the vendor’s prior written consent. The vendor may require updated financial information, a new credit review, revised security terms or a replacement agreement.</p>
    <p>A change of control provision may apply differently from an asset sale. Rights may vary by country or legal entity. Some parts of an agreement may transfer while others remain with the seller.</p>
    <p>Even when the vendor agrees to the transfer, the operational work may still take time.</p>
    <p>Accounts may need to be created. Tenant ownership may need to change. New license keys may need to be issued. Support portals may need to be separated. Authorized contacts must be updated. Billing and purchase-order arrangements must be established.</p>
    <p>A consent received on paper does not necessarily mean the buyer is ready to use the product.</p>

    <h2>The seller’s enterprise agreement creates hidden complexity</h2>
    <p>Large companies often negotiate software agreements across the enterprise. This gives them better pricing and simpler administration during normal operations.</p>
    <p>During a divestiture, that same structure becomes difficult to separate.</p>
    <p>One agreement may cover:</p>
    <ul className={localStyles.editorialList}>{enterpriseAgreementScope.map(item => <li key={item}>{item}</li>)}</ul>
    <p>The buyer may need only a small part of that agreement. The vendor may not allow that portion to be carved out on the same commercial terms.</p>
    <p>The buyer could be required to negotiate a new agreement at a different price. Minimum-purchase commitments may apply. Discounts based on the seller’s total volume may disappear.</p>
    <p>This can affect both sides of the transaction.</p>
    <p>The buyer faces an unplanned cost or a delay in obtaining the required rights. The seller may continue paying for licenses associated with users or systems that have already moved, creating stranded cost.</p>
    <p>A technically complete separation can therefore leave behind a commercial dependency for the seller and an operating risk for the buyer.</p>

    <h2>Cloud subscriptions do not remove the problem</h2>
    <p>There is sometimes an assumption that cloud software is easier because there is nothing to install or physically transfer.</p>
    <p>Cloud applications create a different set of separation questions.</p>
    <p>Users may be licensed within the seller’s tenant. Data, configurations, workflows and integrations may all be tied to that environment. The vendor may not support splitting a tenant. A new tenant may require a separate subscription and a new implementation.</p>
    <p>Even when individual subscriptions can be reassigned, the associated data or configuration may not move with the user.</p>
    <p>Consider a collaboration or productivity platform. The buyer may purchase new licenses for the transferring employees, but those employees may still rely on shared workspaces, automated workflows, archives, distribution groups or applications owned by the seller.</p>
    <p>The user has a license in the new environment. The business capability has not yet been recreated.</p>
    <p>The same issue appears with SaaS applications that are configured globally. The buyer may receive the right to use the product, but still need to rebuild roles, integrations, reports, retention settings and security controls before the application can operate independently.</p>

    <h2>Licensing follows the real deployment—not the planned one</h2>
    <p>Another common challenge is reconciling purchased rights with actual usage.</p>
    <p>The contract may show what the company bought. The application and infrastructure inventories show what teams believe is deployed. Neither may represent the complete picture.</p>
    <p>Software may exist on servers that are no longer active. Products may have been installed locally at sites. Users may have access that is not reflected in the central inventory. Test environments may have become permanent. A business team may have purchased subscriptions outside the enterprise procurement process.</p>
    <p>During a transaction, these inconsistencies become important.</p>
    <p>The buyer needs to know what it must license on Day 1 and after migration. The seller needs to know which rights remain required and which costs can be removed.</p>
    <p>Without connecting contracts, products, entitlements and deployed technology, the team is forced to make assumptions.</p>
    <p>Those assumptions tend to surface at the worst possible time—during vendor discussions, migration testing or TSA exit.</p>

    <h2>A TSA can temporarily hide the licensing gap</h2>
    <p>Transition services can provide the buyer with temporary access to seller-operated applications and infrastructure.</p>
    <p>That may be necessary, but it can also delay the licensing conversation.</p>
    <p>While the application remains under the seller’s control, the seller’s licenses may continue to support the service. The buyer focuses on the migration solution and assumes the commercial arrangements will be completed before exit.</p>
    <p>Then the TSA exit date approaches.</p>
    <p>The buyer’s environment is ready, but the new agreement is still under negotiation. Vendor consent has not been received. The buyer has not purchased enough entitlements. License keys cannot be generated. A required support agreement is not active.</p>
    <p>The migration milestone may be complete from the technical team’s perspective, yet the TSA cannot be terminated safely.</p>
    <p><strong>The contract and licensing path should therefore be part of the TSA exit plan from the beginning—not an activity added near the end.</strong></p>

    <h2>Procurement cannot solve this alone</h2>
    <p>Contracts and licenses are often assigned to the procurement or vendor-management workstream.</p>
    <p>Those teams play a critical role, but they cannot resolve the issue without detailed input from technology and the business.</p>
    <p>Procurement needs to know:</p>
    <ul className={localStyles.editorialList}>{procurementInputs.map(item => <li key={item}>{item}</li>)}</ul>
    <p>The technology team, in turn, needs to understand the commercial restrictions that may change the solution.</p>
    <p>If a license cannot transfer, the application may need to remain on a TSA longer. If the cost of a new agreement is too high, the buyer may choose to replace the product. If the vendor will not support a separated deployment, the architecture may need to change.</p>
    <p>This is not a procurement activity followed by a technical activity.</p>
    <p><strong>It is one connected decision.</strong></p>

    <h2>The application disposition should trigger the licensing work</h2>
    <p>Once an application disposition is proposed, the associated contract and license assessment should begin.</p>
    <p>For every material application, the team should understand:</p>
    <ul className={localStyles.editorialList}>{applicationAssessment.map(item => <li key={item}>{item}</li>)}</ul>
    <p>Not every application needs an extensive legal and commercial review. But every material application should have enough information to determine whether a risk exists.</p>
    <p>“Contract identified” is not an outcome.</p>
    <p><strong>“Buyer has the confirmed right and operational ability to use the required products” is an outcome.</strong></p>

    <h2>Readiness requires evidence</h2>
    <p>A status of “license work in progress” does not tell leadership whether the application can move.</p>
    <p>Readiness should be supported by evidence appropriate to the situation.</p>
    <p>That evidence might include:</p>
    <ul className={localStyles.editorialList}>{readinessEvidence.map(item => <li key={item}>{item}</li>)}</ul>
    <p>The purpose is not to create more documentation.</p>
    <p>It is to prevent a migration from being declared ready while a basic right to operate remains unresolved.</p>

    <h2>The commercial and technical plans must move together</h2>
    <p>In complex separations, the licensing problem is rarely that nobody knew contracts existed.</p>
    <p>The problem is that commercial information, application plans, infrastructure deployments, user migrations and TSA milestones are managed in different places by different teams.</p>
    <p>The connection between them is made manually—often through meetings, spreadsheets and individual experience.</p>
    <p>That makes it easy for the technical plan to move faster than the commercial reality.</p>
    <p>The application can be built, tested and scheduled for migration while the required rights remain uncertain.</p>
    <p>By the time the issue becomes visible, the choices are limited: delay the migration, extend the TSA, accept additional cost or redesign the solution.</p>

    <h2>The right to operate is part of the separation</h2>
    <p>An application is not ready because its server exists in the buyer’s environment.</p>
    <p>It is ready when the buyer has the technology, data, access, support and contractual rights required to operate it.</p>
    <p>Contracts and licenses should not sit at the edge of the IT separation plan. They are part of the application disposition, the migration strategy, the Day 1 solution and the TSA exit.</p>
    <p>The application may be able to move.</p>
    <p><strong>Before it does, make sure the right to use it can move too.</strong></p>
  </article>
  <RelatedInsights current="application-move-license-may-not" productHref="/ai-capabilities" productLabel="Explore contract intelligence"/>
  <section className={styles.articleCta}><div><small>COMMERCIAL AND TECHNICAL READINESS</small><h2>Connect every application to the rights required to operate it.</h2></div><Link href="/book-a-demo">Book a demo <span>→</span></Link></section>
  <SiteFooter theme="dark"/>
</main> }
