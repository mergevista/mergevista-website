import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ArticleStructuredData from "../ArticleStructuredData";
import ArticleHero from "../ArticleHero";
import { ArticleBody, ArticleCta, ArticleTakeaway } from "../ArticleLayout";
import RelatedInsights from "../RelatedInsights";
import localStyles from "../why-day-1-readiness-fails/day-one.module.css";

const title = "The Separation Plan Assumes SME Capacity That Does Not Exist";
const seoTitle = "SME Capacity Is a Critical IT Separation Dependency | MergeVista";
const description = "Why IT separation plans fail when subject-matter expert capacity is assumed rather than planned—and how teams can capture knowledge once, reuse it and protect the critical path.";
const path = "/insights/separation-plan-assumes-sme-capacity-does-not-exist";
const published = "2026-11-11";
const image = "/insights/editorial-sme-capacity.svg";
const socialImage = "/insights/social-sme-capacity.png";
const imageAlt = "A critical subject-matter expert constrained by competing application, infrastructure, site, data, testing and migration workstreams";

export const metadata: Metadata = {
  title: seoTitle,
  description,
  alternates: { canonical: `https://www.mergevista.com${path}` },
  openGraph: { title, description, type: "article", url: `https://www.mergevista.com${path}`, publishedTime: published, images: [{ url: socialImage, width: 1200, height: 630, alt: imageAlt }] },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

const smeDemand = [
  "Validate application, infrastructure, site and data inventories",
  "Explain interfaces, dependencies, business processes and undocumented workarounds",
  "Support disposition decisions and review separation designs",
  "Define testing scenarios and participate in migration rehearsals",
  "Support cutover, stabilization and post-migration issue resolution",
];

const capacityQuestions = [
  "Which SMEs are critical to multiple workstreams?",
  "How many applications, sites or business processes does each person support?",
  "When will each workstream require their input—and where do those periods overlap?",
  "Which business cycles, regulatory deadlines or operational events constrain availability?",
  "Which decisions require the named SME personally, and which can be delegated?",
  "Is there a credible backup, and what happens if the primary SME is unavailable?",
];

export default function SmeCapacityArticle() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <ArticleStructuredData title={title} description={description} path={path} published={published} image={socialImage} />
      <SiteHeader />
      <ArticleHero
        category={<>PROGRAM CAPACITY · 12 MIN READ</>}
        title={<>The Separation Plan Assumes SME Capacity That Does Not Exist</>}
        description={<>The task may be on the plan. The scarce knowledge required to complete it usually is not.</>}
        date={<>November 11, 2026</>}
        image={image}
        imageAlt={imageAlt}
      />
      <ArticleTakeaway>
        <p>SME availability is not an administrative inconvenience. It is a program dependency—and when the plan assumes capacity that does not exist, the risk is already built into the schedule.</p>
      </ArticleTakeaway>
      <ArticleBody>
        <p className="article-lead">Most IT separation plans are built around applications, infrastructure, sites, users, data, contracts and migration waves.</p>
        <p>Each workstream has activities, milestones, dependencies and owners. The plan may run into thousands of lines and appear to account for every major deliverable.</p>
        <p>But one dependency is often missing: the availability of the people who actually understand how the business and technology operate.</p>
        <p>These subject-matter experts are expected to support discovery, validate inventories, explain dependencies, make disposition decisions, review designs, participate in testing and support cutover. At the same time, they still have their regular jobs.</p>
        <p>An application assessment may be planned for five days. That assumption only works if the right SME is available during those five days. In reality, the same person may be supporting several workstreams, attending separation meetings and continuing to resolve production issues.</p>
        <blockquote>The task is on the plan. The SME capacity required to complete it usually is not.</blockquote>

        <h2>The people with the most knowledge often have the least time</h2>
        <p>Every organization has a small group of people who understand how things really work. They know which applications are business-critical, which interfaces are fragile, which scheduled jobs require manual attention and which workarounds were never documented.</p>
        <p>That knowledge may not exist in an architecture diagram or configuration database. It may exist only in the experience of people who have supported the environment for years.</p>
        <p>These are exactly the people a separation program needs—and the people the business depends on every day. The transaction does not reduce their operational workload. It adds another set of responsibilities.</p>
        <ul className={localStyles.editorialList}>{smeDemand.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>Each request may appear reasonable on its own. Collectively, they can become a second full-time job.</p>

        <h2>One SME, several workstreams and the same questions</h2>
        <p>The capacity problem becomes worse when workstreams operate independently.</p>
        <p>Applications asks what the system does and where it is hosted. Infrastructure asks which servers and databases support it. Sites asks which locations use it. Data asks what information it holds. Testing asks about critical business scenarios. Migration asks about dependencies and cutover requirements.</p>
        <p>Often, these are different versions of the same questions.</p>
        <p>An SME explains an application in one assessment meeting, only to receive another meeting request from a different team a few days later. The information was already provided, but it sits in another workstream’s spreadsheet or meeting notes. The second team cannot find it—or does not trust it—so it returns to the SME.</p>
        <p>From the program’s perspective, every workstream is progressing. From the SME’s perspective, the program appears disorganized.</p>
        <p>Eventually, responses become shorter. Meetings are declined. Assessments are completed quickly. The program may interpret this as a lack of business engagement. In many cases, the business is engaged. It is simply tired of repeating itself.</p>

        <h2>More coordination can create more SME demand</h2>
        <p>Large separation programs often add coordinators to improve control: workstream, site, testing, migration, data and PMO roles. Coordination is necessary, but when it is not integrated, every additional layer can create another path back to the same SME.</p>
        <p>The application team requests an assessment. The site team schedules a review. Testing organizes a scenario workshop. Migration sends a readiness questionnaire. The PMO follows up on incomplete actions.</p>
        <p>The program may be well staffed, but the people supplying the underlying knowledge remain the same. Adding coordinators does not create additional SME capacity. Sometimes it does the opposite.</p>

        <h2>The problem is not only availability</h2>
        <p>Even when an SME provides the information, the program often fails to preserve the answer in a form others can reuse. Important knowledge becomes distributed across assessment spreadsheets, meeting notes, email, architecture documents, testing trackers, site inventories, migration plans and individual workstream repositories.</p>
        <p>An SME may explain that an application is hosted in a particular data center, serves three sites, receives a nightly feed, writes reports to a shared file location, relies on a service account and is critical during month-end close.</p>
        <p>That answer matters to applications, infrastructure, sites, data, security, testing, migration and cutover. If it remains in one assessment spreadsheet, every other team must search for it, reinterpret it or ask again.</p>
        <p><strong>Discovery should create reusable transaction knowledge—not just completed questionnaires.</strong></p>

        <h2>Inconsistent answers are often created by the program</h2>
        <p>Repeated questioning creates another risk: inconsistent information.</p>
        <p>An SME may describe an application one way during early discovery and provide a more complete answer several weeks later. One workstream retains the original response. Another captures the update. A third receives a simplified version during a hurried meeting.</p>
        <p>Now the program has three answers. This may look like a data-quality problem or a lack of clarity from the SME, but the inconsistency was created by the way the program collected and managed the information.</p>
        <p>There should be a trusted record, a clear owner and a visible history of how the information changed. Otherwise, every team maintains its own version of the truth.</p>

        <h2>SME capacity should be planned like any other dependency</h2>
        <p>Most programs identify their key SMEs. Fewer calculate how much demand will be placed on them. Naming someone in a responsibility matrix does not make that person available.</p>
        <p>Capacity planning should answer practical questions:</p>
        <ul className={localStyles.editorialList}>{capacityQuestions.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>Month-end, quarter-end, seasonal operations, regulatory deadlines and major business events should be reflected in the separation schedule. If the finance application SME is unavailable during close, the plan should not assume several assessments and testing workshops will be completed then.</p>
        <p>That is not a resource-performance issue. It is a planning issue.</p>

        <h2>Protect the SME from the program</h2>
        <p>Better-run separation programs do more than identify SMEs. They organize the program around the limited time those people can provide.</p>
        <h3>Consolidate requests</h3>
        <p>Before approaching an SME, determine what has already been collected and which other teams need related input. One well-prepared session is better than five disconnected meetings.</p>
        <h3>Capture information once</h3>
        <p>Record the answer in a shared structure connected to the relevant application, infrastructure, site, interface, data set and migration activity. Do not leave important knowledge inside meeting notes.</p>
        <h3>Validate, reuse and manage change</h3>
        <p>The right owner should validate the information. Other workstreams should then reuse it instead of restarting discovery. When something changes, update the trusted record rather than creating another version.</p>
        <h3>Separate questions from decisions</h3>
        <p>Not every question requires a meeting, and not every decision requires the most senior SME. Collect routine information asynchronously and reserve scarce expert time for judgment and accountability.</p>
        <h3>Protect time and assign backups</h3>
        <p>Reserve time for assessments, design reviews, testing and cutover preparation. Where a credible backup does not exist, make that dependency visible as a risk.</p>
        <h3>Make demand visible</h3>
        <p>Governance should show more than overdue SME actions. It should show how much demand is being placed on critical individuals, which workstreams are competing for their time and where unavailable capacity threatens a milestone.</p>
        <p>An SME with 20 open requests is not simply the owner of 20 late actions. The program may have created an unsustainable dependency.</p>

        <h2>Readiness depends on available knowledge</h2>
        <p>A migration wave may show green across applications, infrastructure and testing, yet still depend on one person answering several unresolved questions before cutover. If that dependency is not visible, the program is not truly green.</p>
        <p>The same applies to Day 1 readiness and TSA exits. Many final decisions depend on people who understand the current environment, the target design and the operational consequences of change.</p>
        <p>Those people cannot be treated as an unlimited resource. They are part of the critical path.</p>

        <h2>The program should remember what the SME knows</h2>
        <p>SMEs are essential to IT M&amp;A execution. But the objective should not be to keep returning to the same people throughout the transaction.</p>
        <p>The program should progressively convert individual knowledge into shared, validated and reusable transaction knowledge. That reduces repeated discovery, improves consistency and allows decisions to move faster.</p>
        <p>Most importantly, it respects the people who are keeping the business running while also helping the organization separate.</p>
        <p>SME availability is not an administrative inconvenience. It is a program dependency.</p>
        <p>And when the separation plan assumes capacity that does not exist, the risk is already built into the plan.</p>
      </ArticleBody>
      <RelatedInsights current="separation-plan-assumes-sme-capacity-does-not-exist" productHref="/platform" productLabel="Explore connected transaction knowledge" />
      <ArticleCta eyebrow={<>PROTECT THE CRITICAL PATH</>} title={<>Capture knowledge once. Reuse it across the transaction.</>} />
      <SiteFooter theme="dark" />
    </main>
  );
}
