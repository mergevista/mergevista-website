import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ArticleStructuredData from "../ArticleStructuredData";
import ArticleHero from "../ArticleHero";
import { ArticleBody, ArticleCta, ArticleTakeaway } from "../ArticleLayout";
import RelatedInsights from "../RelatedInsights";
import localStyles from "../why-day-1-readiness-fails/day-one.module.css";

const title = "The Business Does Not Pause for Cutover: Managing Transactions in Flight";
const seoTitle = "In-Flight Transactions During IT Separation Cutover | MergeVista";
const description =
  "How separation teams can identify, disposition, test and reconcile business transactions that begin before cutover and finish after it.";
const path = "/insights/business-does-not-pause-for-cutover";
const published = "2026-11-21";
const image = "/insights/editorial-in-flight-transactions.svg";
const socialImage = "/insights/social-in-flight-transactions.png";
const imageAlt =
  "A shipment beginning before an IT separation cutover and completing in the new environment after cutover";

export const metadata: Metadata = {
  title: seoTitle,
  description,
  alternates: { canonical: `https://www.mergevista.com${path}` },
  openGraph: {
    title,
    description,
    type: "article",
    url: `https://www.mergevista.com${path}`,
    publishedTime: published,
    images: [{ url: socialImage, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

const transactionExamples = [
  "Goods received but not invoiced",
  "Customer orders awaiting fulfillment",
  "Manufacturing orders still in production",
  "Shipments already in transit",
  "Inventory transfers between locations",
  "Supplier invoices awaiting approval",
  "Customer returns, rebates and warranty claims",
  "Intercompany transactions and expense reports in progress",
  "Payroll transactions awaiting processing",
  "Bank payments initiated but not completed",
  "Transactions being processed by logistics providers, banks or other third parties",
];

const contextQuestions = [
  "Which stage of the business process has already been completed?",
  "Which documents have been sent to customers, suppliers or regulators?",
  "Will existing document and reference numbers remain valid?",
  "Which legal entity owns the transaction before and after cutover?",
  "Where are the physical goods, and who is responsible for them?",
  "Have external parties received updated instructions?",
  "How will accounting entries be posted and reconciled?",
  "Which system will remain the source of historical evidence?",
  "Who will resolve exceptions after cutover?",
];

const dispositions = [
  "Complete in the old environment",
  "Migrate and complete in the new environment",
  "Cancel and recreate",
  "Process manually",
  "Remain temporarily under a TSA",
  "Divide between the seller and buyer",
  "Follow a transaction-specific reconciliation process",
];

const freezeControls = [
  "Which activities are frozen and when the freeze begins and ends",
  "Which exceptions are permitted and who approves them",
  "How exception transactions are recorded",
  "How those transactions will be entered or reconciled after cutover",
  "Who confirms that the backlog has been cleared",
];

const externalUpdates = [
  "Legal-entity information",
  "Billing and shipping addresses",
  "Tax registrations and bank details",
  "Purchase-order instructions",
  "Electronic data interchange endpoints",
  "Contact and escalation information",
  "Document formats and reference numbers",
];

const testScenarios = [
  "Create a purchase order in the old environment and receive the goods in the new one",
  "Create a customer order before cutover and invoice it afterward",
  "Initiate an inventory transfer between sites transitioning in different waves",
  "Send a payment file before cutover and reconcile the settlement afterward",
  "Process a return against a sale completed under the previous legal entity",
];

const rollbackQuestions = [
  "How long rollback remains possible",
  "Which business activities must remain paused during that period",
  "Which transactions may occur and how they will be captured",
  "Whether new transactions can be replayed in the old environment",
  "How inventory and financial balances will be reconciled",
  "Who has authority to make the rollback decision",
];

const ownershipQuestions = [
  "Who investigates the transaction",
  "Which team can access the old environment",
  "How long historical data remains available",
  "Whether seller support is included in a TSA",
  "How financial adjustments are approved",
  "How issues are tracked through resolution",
  "When the business can confirm that the in-flight backlog is closed",
];

export default function InFlightTransactionsArticle() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <ArticleStructuredData
        title={title}
        description={description}
        path={path}
        published={published}
        image={socialImage}
      />
      <SiteHeader />
      <ArticleHero
        category={<>CUTOVER READINESS · 15 MIN READ</>}
        title={<>The Business Does Not Pause for Cutover: Managing Transactions in Flight</>}
        description={<>A technically successful migration is not enough if the business cannot complete the transactions already in motion.</>}
        date={<>November 21, 2026</>}
        image={image}
        imageAlt={imageAlt}
      />
      <ArticleTakeaway>
        <p>Transactions cross the separation boundary even when technology does not. Cutover planning must account for the orders, shipments, invoices, payments and other business activity that begins before the transition and finishes after it.</p>
      </ArticleTakeaway>
      <ArticleBody>
        <p className="article-lead">Most IT separation cutover plans are built around technology: applications are migrated, data is loaded, users are moved, interfaces are redirected and technical teams validate the new environment.</p>
        <p>But the business does not pause while those activities take place. Orders are processed. Products are manufactured. Shipments move between countries. Invoices are approved. Payments are already in progress.</p>
        <p>Some of these transactions begin before cutover and finish after it. They cross the separation boundary even when the technology does not.</p>

        <h2>The shipment was already at sea</h2>
        <p>Consider a shipment travelling by vessel to a country on the other side of the world. The goods leave before cutover. The purchase order, company code, legal entity, shipping documentation and receiving information all reflect the current organization.</p>
        <p>While the vessel is at sea, the cutover takes place. Company codes and legal-entity information change. Applications and master data move. Purchase orders and receiving processes transition. Financial structures and responsibilities are reassigned.</p>
        <p>From a technology perspective, the cutover completes successfully. Then the vessel arrives.</p>
        <p>The receiving team cannot easily process the shipment because the accompanying documentation no longer aligns with the company codes, purchase orders or transactions available in the new environment.</p>
        <blockquote>The application may be working. The data may have migrated. The user may be able to log in. But the business transaction cannot be completed.</blockquote>

        <h2>Not every transaction fits inside the cutover window</h2>
        <p>Cutover planning often assumes a clean before-and-after state: transactions created before a defined time remain in the old environment, while transactions created afterward belong in the new one.</p>
        <p>The business is rarely that simple. A customer order may be created before cutover but shipped afterward. A purchase order may exist in the old system while the goods arrive after migration. A payment may have been transmitted but not yet settled. Inventory may be moving between sites that transition in different waves.</p>
        <ul className={localStyles.editorialList}>{transactionExamples.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>These are not simply open database records. Each transaction may involve multiple applications, documents, organizations, people and external parties. Some steps may occur in the seller environment and others in the buyer environment.</p>
        <p><strong>The transaction itself becomes the bridge between the two organizations.</strong></p>

        <h2>Migrating open items is only part of the answer</h2>
        <p>Most ERP migration plans include open-item conversion. Open purchase orders, customer orders, invoices and other balances may be extracted from the old environment and loaded into the new one. That is necessary, but it does not solve every problem.</p>
        <p>The program still needs to understand:</p>
        <ul className={localStyles.editorialList}>{contextQuestions.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>An open purchase order may migrate successfully. But if the supplier invoice references the old company name, purchase-order number or billing address, the transaction may still fail.</p>
        <p><strong>The record moved. The complete business context did not.</strong></p>

        <h2>The ERP is not the only place to look</h2>
        <p>Programs often begin with ERP open transactions because those records are visible and structured. But in-flight activity exists across warehouse, transportation, manufacturing, treasury and customer-service platforms.</p>
        <p>Some activity may not be in a system at all. It may be sitting with a logistics provider, bank, supplier, distributor or customs broker. It may depend on an email approval, a manually prepared document or a spreadsheet used by a local site.</p>
        <p>The ERP master data may be ready, but the business transaction may still depend on information outside the ERP. That is why in-flight transaction planning must be performed by business process—not only by application.</p>

        <h2>Every transaction type needs a disposition</h2>
        <p>Application disposition is familiar in IT M&amp;A. Applications may move, remain, be replicated, replaced or retired. In-flight transactions also need a disposition.</p>
        <ul className={localStyles.editorialList}>{dispositions.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>There may not be one answer for every transaction. An unapproved purchase order may be cancelled and recreated. A shipment already at sea cannot be restarted. A payment already sent to a bank may need to complete under the old entity and then be reconciled after cutover.</p>
        <p>The disposition should reflect the actual stage of the transaction and the operational risk involved.</p>

        <h2>Freeze periods help—but they do not stop the business</h2>
        <p>Transaction freezes can simplify conversion and reconciliation, but they have limits. A global business operates across time zones. Plants may run continuously. Warehouses have scheduled deliveries. Customers have contractual commitments. Ships, trucks and aircraft do not stop moving because an IT cutover has started.</p>
        <p>There will also be exceptions. Urgent customer orders, critical materials, emergency payments and continuous production may need to continue.</p>
        <ul className={localStyles.editorialList}>{freezeControls.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>A freeze without an exception process creates untracked manual activity. That activity often becomes Monday morning&apos;s problem.</p>

        <h2>External parties are part of the cutover</h2>
        <p>A transaction may be correctly configured inside the new environment and still fail because an external party is operating with old information. Suppliers may invoice the old entity. Customers may use previous bank details. Logistics providers may hold old receiving instructions. Customs documentation may reference an entity that no longer owns the transaction.</p>
        <p>Customers, suppliers, banks, logistics providers and other partners may need updated:</p>
        <ul className={localStyles.editorialList}>{externalUpdates.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>Timing matters. Change the information too early and transactions may fail before cutover. Change it too late and old information may continue to be used afterward.</p>

        <h2>Test transactions that span the cutover</h2>
        <p>Traditional testing often validates transactions created and completed entirely within the new environment. That does not test the most difficult scenarios.</p>
        <ul className={localStyles.editorialList}>{testScenarios.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>These scenarios expose missing document history, incompatible numbering, incorrect company-code mapping, legal-entity mismatches, broken interfaces, incomplete master data, unclear ownership and reconciliation gaps.</p>
        <p>If the business expects a transaction to cross the cutover boundary, testing should do the same.</p>

        <h2>In-flight transactions also affect rollback</h2>
        <p>Rollback is usually documented as a technical recovery option. That option becomes more difficult as soon as the business creates activity in the new environment—orders, receipts, shipments, invoices, inventory changes and payments that do not exist in the old one.</p>
        <p>Before cutover, the program should define:</p>
        <ul className={localStyles.editorialList}>{rollbackQuestions.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>The rollback window does not remain open simply because the project plan says it does. Every new transaction makes rollback more complicated.</p>

        <h2>Ownership must continue after cutover</h2>
        <p>In-flight transactions often create exceptions after the main migration team has moved on. A supplier invoice may arrive weeks later. A return may reference an old transaction. A shipment may be delayed at customs. A payment may require reconciliation after the command center has closed.</p>
        <ul className={localStyles.editorialList}>{ownershipQuestions.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>Cutover completion should not mean that ownership disappears.</p>

        <h2>Plan around the business transaction</h2>
        <p>Technology teams naturally organize cutover around applications, data, infrastructure and users. The business experiences cutover differently: an order that cannot be completed, a shipment that cannot be received, an invoice that cannot be matched or a payment that cannot be reconciled.</p>
        <p>For every critical process, the program should understand:</p>
        <ol className={localStyles.editorialList}>
          <li>Which transactions may be open during cutover</li>
          <li>Where each transaction is in its lifecycle</li>
          <li>Which system and legal entity own each stage</li>
          <li>Whether the transaction will complete, migrate, restart or be handled manually</li>
          <li>How it will be tested and reconciled</li>
          <li>Who owns exceptions after cutover</li>
        </ol>
        <p>A technically successful migration is not enough if the business cannot complete the transactions already in motion.</p>
        <p><strong>The business does not pause for cutover. The separation plan must be ready for everything that crosses it.</strong></p>
      </ArticleBody>
      <RelatedInsights
        current="business-does-not-pause-for-cutover"
        productHref="/platform"
        productLabel="Explore connected cutover execution"
      />
      <ArticleCta
        eyebrow={<>PROTECT BUSINESS CONTINUITY</>}
        title={<>Plan the cutover around the transactions already in motion.</>}
      />
      <SiteFooter theme="dark" />
    </main>
  );
}
