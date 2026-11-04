import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ArticleStructuredData from "../ArticleStructuredData";
import ArticleHero from "../ArticleHero";
import { ArticleBody, ArticleCta, ArticleTakeaway } from "../ArticleLayout";
import RelatedInsights from "../RelatedInsights";
import localStyles from "../why-day-1-readiness-fails/day-one.module.css";

const title = "The Application Is Not the Separation Boundary. The Interface Is.";
const seoTitle = "Interfaces Define the IT Separation Boundary | MergeVista";
const description =
  "Why application migration alone does not create operational independence—and how interfaces, dependencies and business flows determine separation readiness.";
const path = "/insights/application-not-separation-boundary-interface-is";
const published = "2026-11-04";
const image = "/insights/editorial-line-interface-boundary-transparent.png";
const socialImage = "/insights/social-interface-boundary.png";
const imageAlt =
  "An application connected through interfaces to systems and operational dependencies across a seller-buyer separation boundary";

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
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

const interfaceQuestions = [
  "What are the source and target systems?",
  "What information moves through the interface, and how?",
  "How frequently does it run, and which business process depends on it?",
  "Who owns it today, and which transaction perimeter contains each endpoint?",
  "What is its separation disposition?",
  "Will it continue temporarily under a TSA?",
  "Does it require a new connection, account, certificate, firewall rule, or vendor agreement?",
  "How will it be tested, and what evidence will prove it works in the target environment?",
];

const waveReview = [
  "Interfaces entering or leaving the environment",
  "Dependencies on applications moving in later waves",
  "Shared file locations and integration-platform components",
  "Firewall, network, service-account, credential, and certificate changes",
  "External endpoints and scheduling dependencies",
  "Monitoring and support ownership",
];

export default function InterfaceBoundaryArticle() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <ArticleStructuredData title={title} description={description} path={path} published={published} image={socialImage} />
      <SiteHeader />
      <ArticleHero
        category={<>APPLICATION DEPENDENCIES · 11 MIN READ</>}
        title={<>The Application Is Not the Separation Boundary. The Interface Is.</>}
        description={<>An application can move successfully and still leave the business process behind. Operational independence begins where its dependencies do.</>}
        date={<>November 4, 2026</>}
        image={image}
        imageAlt={imageAlt}
      />
      <ArticleTakeaway>
        <p>A migration wave is not ready because every application is green. It is ready when the required business flows can operate across the temporary architecture after cutover.</p>
      </ArticleTakeaway>
      <ArticleBody>
        <p className="article-lead">In most IT separation programs, applications become the primary unit of planning.</p>
        <p>We build an application inventory. We assign a disposition to each application. We decide whether it will move, be replicated, replaced, retired, or remain with the seller. We then organize migration waves around those decisions.</p>
        <p>This is necessary—but it is not enough.</p>
        <p>An application may be ready to move, but that does not mean the business process it supports is ready to move with it.</p>
        <p>The real separation boundary is often not the application. It is the collection of interfaces, data feeds, batch jobs, file transfers, shared services, credentials, certificates, and operational dependencies surrounding it.</p>
        <p>That is where many separation surprises are hiding.</p>

        <h2>The application moved. The process did not.</h2>
        <p>Consider an application approved for migration to the buyer’s environment. The infrastructure is ready. The application is installed. Users can log in. Initial testing succeeds. From the application workstream’s perspective, it may appear ready for cutover.</p>
        <p>Then someone runs the complete business process.</p>
        <p>The application receives a nightly file from a seller-retained system. It sends completed transactions to another platform through middleware. A scheduled job writes reports to a shared file location. Authentication relies on an account owned by the seller. A certificate for an external connection is registered under the seller’s legal entity.</p>
        <p>The application itself may have moved successfully. But it is not operationally independent.</p>
        <p>In one migration-wave readiness review, a site was ready to move over a weekend. During final testing, an application failed. The team eventually discovered that it was writing reports to a file share hosted at another site—one outside the migration wave.</p>
        <p>The application inventory was correct. The site inventory was correct. The migration plan was detailed.</p>
        <p>The dependency connecting them was missing.</p>

        <h2>Interfaces are rarely owned by one workstream</h2>
        <p>Interfaces do not fit neatly within a single workstream.</p>
        <p>The application team may know the source and target systems. Infrastructure may understand the servers and network paths. Data may know the file contents. Security may own the service accounts and certificates. The business may understand when the interface runs and what happens if it fails.</p>
        <p>Each team has part of the picture.</p>
        <p>Unless that information is brought together, one interface can appear several times under different descriptions—or not appear at all.</p>
        <p>A nightly outbound feed, scheduled file transfer, remote file-share dependency, service account, and daily operational report may all describe the same end-to-end flow. If they are tracked separately, the program may believe it has five items. If nobody owns the whole dependency, the program may track nothing that proves the flow will work after separation.</p>

        <h2>An interface inventory is more than a list</h2>
        <p>Creating an interface inventory is a good start. Simply collecting interface names is not enough.</p>
        <p>For separation execution, every interface should answer a practical set of questions:</p>
        <ul className={localStyles.editorialList}>
          {interfaceQuestions.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p>In a large environment, those answers may be distributed across architecture documents, integration platforms, application support teams, network records, scheduler tools, vendor configurations, and individual knowledge.</p>
        <p>Interface discovery cannot be treated as a one-time spreadsheet exercise.</p>

        <h2>Application disposition must drive interface disposition</h2>
        <p>When an application disposition is decided, every connected interface should be reviewed.</p>
        <p>An application moving to the buyer may require an interface to be repointed, rebuilt in the buyer’s integration platform, continued temporarily across environments, replaced with a manual process, included in a TSA, retired, or supported through a temporary extract.</p>
        <p>The interface disposition should not be assumed from the application disposition.</p>
        <p>Two applications may both move to the buyer in different migration waves. The interface between them may need to cross environments temporarily. If one remains with the seller, a new data-sharing arrangement may be required. If one is replaced, its interfaces may still be needed until historical processing and reconciliation are complete.</p>
        <p>These are execution decisions. They affect architecture, security, testing, cutover, TSA scope, cost, and operational support.</p>

        <h2>Migration waves create temporary architectures</h2>
        <p>Separation teams often focus on the final target architecture. Most large separations do not reach it in one cutover.</p>
        <p>Applications, users, sites, infrastructure, and data move in waves. During that period, the organization operates through a temporary architecture. Some systems remain with the seller. Others are with the buyer. Some are under TSA coverage. Others have exited. Interfaces cross security boundaries that did not exist before the transaction.</p>
        <p>That temporary state can be more complex than either the current or target environment.</p>
        <p>Every migration wave should therefore be reviewed for:</p>
        <ul className={localStyles.editorialList}>
          {waveReview.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <blockquote>A wave is not ready because every application has a green status. It is ready when the required business flows can operate across the temporary architecture after cutover.</blockquote>

        <h2>Testing individual applications is not enough</h2>
        <p>Application testing often confirms that users can log in, execute key functions, and access the expected data. Separation testing must go further.</p>
        <p>The program needs to test business flows across systems and environments. Can an order move from the front-end application through fulfillment and invoicing? Can manufacturing receive the required master data? Can finance generate downstream reports? Can the application send files to an external partner using the new certificate and network route?</p>
        <p>A successful screen test does not confirm a successful interface.</p>
        <p>Testing should also prove what happens when an interface fails: who receives the alert, which team restarts the job, whether the buyer can access the monitoring tool, and whether the issue can be resolved without relying on the seller.</p>
        <p>An interface is not truly separated until it can be operated and supported within the new ownership model.</p>

        <h2>TSA exits depend on interfaces too</h2>
        <p>TSA exit planning frequently focuses on applications and infrastructure services. Interfaces can become an overlooked source of continued dependency.</p>
        <p>A buyer may migrate an application and believe it is ready to exit the related TSA. But the application may still rely on the seller’s middleware, managed file-transfer service, scheduler, certificate, service account, network connection, or support team.</p>
        <p>The visible application has moved. The underlying service has not.</p>
        <p>Before confirming a TSA exit, the program should demonstrate that required interfaces have been rebuilt, redirected, retired, or transferred—and that the new operating team can support them.</p>
        <p>A completed task or green status is not sufficient. The decision should be supported by test results, operational acceptance, support ownership, and confirmation that no hidden seller dependency remains.</p>

        <h2>Manage the flow, not just the asset</h2>
        <p>Applications remain central to separation planning. They provide a practical way to organize scope, ownership, cost, and migration activity. But an application is only one part of a business process.</p>
        <p>The business does not operate through isolated applications. It operates through information moving between applications, people, sites, vendors, and platforms.</p>
        <p>A strong separation program should connect four things:</p>
        <ol className={localStyles.editorialList}>
          <li>The application disposition</li>
          <li>The interface disposition</li>
          <li>The migration-wave plan</li>
          <li>The end-to-end business process</li>
        </ol>
        <p>When those elements are managed together, teams can see whether an application will simply move—or whether it will actually work after it moves.</p>
        <p>Because in an IT separation, moving the application is only part of the job.</p>
        <p>The separation boundary is where its dependencies begin.</p>
      </ArticleBody>
      <RelatedInsights current="application-not-separation-boundary-interface-is" productHref="/platform" productLabel="Explore connected separation execution" />
      <ArticleCta eyebrow={<>MANAGE THE FLOW, NOT JUST THE ASSET</>} title={<>An application can move successfully and still leave the business process behind.</>} />
      <SiteFooter theme="dark" />
    </main>
  );
}
