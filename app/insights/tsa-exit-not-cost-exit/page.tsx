import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ArticleStructuredData from "../ArticleStructuredData";
import ArticleHero from "../ArticleHero";
import { ArticleBody, ArticleCta, ArticleTakeaway } from "../ArticleLayout";
import RelatedInsights from "../RelatedInsights";
import localStyles from "../why-day-1-readiness-fails/day-one.module.css";

const title = "TSA Exit Is Not Cost Exit: Where Stranded IT Costs Hide After Separation";
const seoTitle = "Stranded IT Costs After TSA Exit | MergeVista";
const description = "Why TSA exit does not automatically remove the seller’s underlying IT costs—and how separation teams can connect decommissioning, licenses, contracts, cloud resources and support changes to evidence-based cost exit.";
const path = "/insights/tsa-exit-not-cost-exit";
const published = "2026-10-16";
const image = "/insights/editorial-line-tsa-cost-exit-transparent.png";
const socialImage = "/insights/social-tsa-cost-exit.png";
const imageAlt = "Separated buyer and seller environments with duplicate infrastructure and ongoing costs remaining active";

export const metadata: Metadata = {
  title: seoTitle,
  description,
  alternates: { canonical: `https://www.mergevista.com${path}` },
  openGraph: { title, description, type: "article", url: `https://www.mergevista.com${path}`, publishedTime: published, images: [{ url: socialImage, width: 1200, height: 630, alt: imageAlt }] },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

const contractActions = [
  "What must be terminated?",
  "What must be reduced?",
  "What must be transferred?",
  "What must remain?",
  "When can each action legally take effect?",
  "Who is responsible for confirming that the billing has changed?",
];

const userCostQuestions = [
  "Was the old account disabled and eventually removed?",
  "Was the previous device recovered or retired?",
  "Were mobile subscriptions cancelled?",
  "Were software licenses reclaimed?",
  "Was the user removed from support and security tools?",
  "Were virtual desktops and remote-access services deprovisioned?",
  "Were retained devices removed from maintenance contracts?",
];

const costExitEvidence = [
  "Confirmation that legacy infrastructure has been decommissioned",
  "Vendor acknowledgement of contract termination or reduction",
  "Updated license counts and commercial baselines",
  "Cloud billing showing that resources were deleted or resized",
  "Confirmation that user accounts and devices were removed",
  "Closure of support services and operational monitoring",
  "Final invoices reflecting the expected change",
  "Documented approval for any cost that must remain",
];

export default function TsaExitNotCostExitArticle() { return <main className="min-h-screen bg-white text-zinc-950">
  <ArticleStructuredData title={title} description={description} path={path} published={published} image={socialImage}/>
  <SiteHeader/>
  <ArticleHero category={<>STRANDED IT COSTS · 11 MIN READ</>} title={<>TSA Exit Is Not Cost Exit: Where Stranded IT Costs Hide After Separation</>} description={<>Operational independence does not prove that the old environments, contracts, licenses and support costs have been removed.</>} date={<>October 16, 2026</>} image={image} imageAlt={imageAlt}/>
  <ArticleTakeaway><p>TSA exit proves that the buyer can operate independently. Cost exit requires separate evidence that legacy technology and commercial commitments have been removed, resized or explicitly accepted.</p></ArticleTakeaway>
  <ArticleBody>
    <p className="article-lead">Exiting a TSA is an important milestone in any separation. It means the buyer can operate the service independently and no longer depends on the seller for that particular capability.</p>
    <p>But there is a common assumption that once the TSA ends, the cost associated with it also disappears.</p>
    <p><strong>That is not always the case.</strong></p>
    <p>A TSA exit confirms that a service is no longer being provided by the seller. It does not necessarily confirm that the applications, infrastructure, contracts, licenses, support arrangements and people supporting that service have been removed or resized.</p>
    <p>The transaction may have achieved operational independence while still carrying a significant amount of stranded IT cost.</p>

    <h2>The migration is complete. The old environment is still running.</h2>
    <p>Consider an application that has been migrated from the seller’s environment to the buyer’s environment. The users have been moved, testing has been completed and the TSA can be exited.</p>
    <p>From the program’s perspective, the application is green.</p>
    <p>But what happened to the original environment?</p>
    <p>In many cases, it is still running.</p>
    <p>The servers may still be active. The database may still be available. Monitoring and backup jobs may still be operating. Interfaces may still be scheduled. Support teams may still have access. The application may even remain covered under existing infrastructure and managed-services contracts.</p>
    <p>There are often valid reasons for keeping the environment available for a short period after migration. The problem is when “temporary” becomes indefinite because shutdown was never treated as a separate deliverable.</p>
    <p><strong>Migration and decommissioning are related, but they are not the same activity. One does not automatically trigger the other.</strong></p>

    <h2>Duplicate licenses are easy to create and difficult to remove</h2>
    <p>Licensing is another common source of stranded cost.</p>
    <p>During a separation, the buyer may need to establish new agreements quickly to protect Day 1 or meet a TSA exit date. New licenses are purchased, users are provisioned and the replacement environment becomes operational.</p>
    <p>Meanwhile, the licenses embedded in the seller’s enterprise agreement may remain unchanged.</p>
    <p>The seller may not be able to reduce the agreement until the next renewal. The vendor may impose minimum commitments. The contract may cover multiple applications or business units. Nobody may have confirmed whether the separated users were actually removed from the licensing baseline.</p>
    <p>The result is that both parties can continue paying for some portion of the same capability.</p>
    <p>I have seen programs spend considerable time confirming that a new license is available for the buyer, but very little time confirming how and when the old license will be reduced for the seller.</p>
    <p><strong>License readiness supports the migration. License removal delivers the savings.</strong></p>

    <h2>TSA charges can stop while the underlying contracts continue</h2>
    <p>A TSA charge is often a calculated allocation of the seller’s cost. Ending that charge does not automatically change the commercial commitments behind it.</p>
    <p>The seller may still have a three-year hosting contract. A support agreement may include fixed minimum volumes. A network circuit may have a long termination period. A software contract may not permit reductions before renewal.</p>
    <p>In one situation, a site had been fully migrated and the related services were removed from the TSA. Operationally, the exit was complete. However, several circuits supporting the site remained active because the telecom provider had not received formal disconnect orders.</p>
    <blockquote>The TSA stopped. The invoices did not.</blockquote>
    <p>This is why contract actions need to be connected directly to the separation plan. A contract cannot simply be marked “reviewed.” The program needs to know:</p>
    <ul className={localStyles.editorialList}>{contractActions.map(item => <li key={item}>{item}</li>)}</ul>
    <p>Without that discipline, a completed migration can still leave months of unnecessary cost behind.</p>

    <h2>Cloud does not eliminate stranded cost</h2>
    <p>Cloud environments can create the impression that cost removal will happen automatically. If workloads are no longer needed, they can simply be shut down.</p>
    <p>In practice, it is rarely that simple.</p>
    <p>A migrated application may leave behind storage, backups, snapshots, monitoring tools, security services, data-transfer charges, reserved capacity, test environments or disaster-recovery components.</p>
    <p>Shared cloud services make the situation even more complicated. The separated application may represent only part of a larger environment, and the remaining environment may not be resized after the workload leaves.</p>
    <p>The application has moved, but the cost base has not changed materially.</p>
    <p>Cloud cost removal requires its own plan. The team must identify which resources can be deleted, which shared services can be resized, which commitments can be reduced and which retained data has a legitimate business or regulatory purpose.</p>
    <p><strong>Turning off a virtual machine is not the same as removing the full cost of the service.</strong></p>

    <h2>Users and devices leave behind costs too</h2>
    <p>End-user migrations often focus on whether the employee can work successfully in the new environment.</p>
    <p>Can the user sign in? Is the device configured? Are the required applications available? Can the user access email, collaboration tools, files, printers and business systems?</p>
    <p>Once those tests pass, the user is considered migrated.</p>
    <p>But several cost-related questions may remain:</p>
    <ul className={localStyles.editorialList}>{userCostQuestions.map(item => <li key={item}>{item}</li>)}</ul>
    <p>On a large separation, even a small monthly cost per user can become significant when multiplied across thousands of users.</p>
    <p>The migration team measures whether users moved successfully. Someone also needs to measure whether the old services stopped costing money.</p>

    <h2>Support models often remain oversized</h2>
    <p>Technology is not the only source of stranded cost.</p>
    <p>Support organizations are often sized around the pre-separation environment. After applications, users, sites and infrastructure move away, the operating model may remain largely unchanged.</p>
    <p>Internal teams may continue performing monitoring, service management, security, vendor management and application support activities for a smaller technology estate. Managed-service agreements may still be based on the original scope. Service towers may have minimum staffing commitments that were not reconsidered during the separation.</p>
    <p>This is not necessarily a people-reduction exercise. It is an operating-model question.</p>
    <p>What work disappears after the separation? What work remains? What capabilities need to be resized? What temporary separation support should end? What knowledge must be retained?</p>
    <p>If these decisions are deferred until after TSA exit, the cost can remain for much longer than expected.</p>

    <h2>The problem starts when cost removal is treated as a finance exercise</h2>
    <p>Stranded cost is often discussed at a high level during deal planning and then handed to finance for tracking.</p>
    <p>But finance cannot remove an application, disconnect a circuit, terminate a license, delete a cloud environment or redesign a support model.</p>
    <p>Those actions sit within the technology workstreams.</p>
    <p>Every material cost assumption should therefore be connected to a specific operational action. If the business case assumes that an application will be retired, the plan should identify the retirement owner, dependencies, target date, contract implications, data-retention requirements and evidence of shutdown.</p>
    <p>If the savings depend on reducing a vendor agreement, the program should know when the reduction can occur and what notice must be provided.</p>
    <p><strong>A cost target without an executable technology action is only an assumption.</strong></p>

    <h2>Evidence-based cost exit</h2>
    <p>TSA exit should be supported by evidence that the buyer can operate independently. Cost exit should be supported by evidence that the old cost has been removed or formally accepted.</p>
    <p>That evidence may include:</p>
    <ul className={localStyles.editorialList}>{costExitEvidence.map(item => <li key={item}>{item}</li>)}</ul>
    <p>This does not mean every cost must disappear on the exact TSA exit date. Some costs will naturally lag because of contractual commitments, retention requirements or operational safeguards.</p>
    <p>But the remaining cost should be understood, owned and time-bound.</p>

    <h2>Independence is only part of the outcome</h2>
    <p>A successful separation must protect business continuity and establish operational independence. Those will always be the first priorities.</p>
    <p>But the transaction economics also matter.</p>
    <p>If the TSA has ended while duplicate environments, licenses, contracts and support arrangements continue, the separation is operationally complete but financially unfinished.</p>
    <p>The right question is not only:</p>
    <blockquote>“Have we exited the TSA?”</blockquote>
    <p>It is also:</p>
    <blockquote>“What has actually stopped, what are we still paying for, and who owns removing the remaining cost?”</blockquote>
    <p><strong>That is the difference between tracking a TSA exit and completing the separation.</strong></p>
  </ArticleBody>
  <RelatedInsights current="tsa-exit-not-cost-exit" productHref="/solutions" productLabel="Explore TSA management and exit"/>
  <ArticleCta eyebrow={<>FROM TSA EXIT TO COST EXIT</>} title={<>Connect every exit milestone to the technology and commercial actions that remove the cost.</>}/>
  <SiteFooter theme="dark"/>
</main> }
