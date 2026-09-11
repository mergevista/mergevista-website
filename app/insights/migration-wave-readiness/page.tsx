import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ArticleStructuredData from "../ArticleStructuredData";
import styles from "../complete-it-ma-lifecycle/article.module.css";
import localStyles from "../why-day-1-readiness-fails/day-one.module.css";

const title = "Everything Is Green—So Why Isn’t the Migration Wave Ready?";
const description = "Why green workstream status does not guarantee migration-wave readiness—and how connected dependencies, business-process testing and evidence improve go/no-go decisions.";
const path = "/insights/migration-wave-readiness";

export const metadata: Metadata = {
  title: `${title} | MergeVista Insights`, description,
  alternates: { canonical: `https://www.mergevista.com${path}` },
  openGraph: { title, description, type: "article", url: `https://www.mergevista.com${path}`, publishedTime: "2026-09-11", images: [] },
  twitter: { card: "summary", title, description, images: [] },
};

const commonFailures = [
  "An application is migrated, but its service account remains in the seller’s identity environment.",
  "A server is available, but the firewall rule needed by an upstream interface has not been implemented.",
  "Users are migrated, but the authentication method for a critical SaaS application still relies on the seller’s single sign-on.",
  "A contract has been assigned, but the software license keys cannot be transferred until the vendor processes the new legal entity.",
  "An ERP environment is ready, but a smaller operational application still sends data to the legacy ERP instance.",
  "A printer is visible on the network, but the print server or label-printing application remains in the old environment.",
  "Data has been copied, but scheduled jobs, reports, interfaces, or downstream extracts still reference the original location.",
  "Testing is complete for individual applications, but no one has validated the full business process across those applications.",
  "A site is declared ready, but a local device, scanner, manufacturing interface, or shared drive was never included in the central inventory.",
];

const greenEvidence = ["What has been completed?", "What evidence proves it?", "What other components depend on it?"];
const recordedDependencies = ["Application A depends on Database B.", "Site X uses File Share Y.", "Interface C connects to the seller environment.", "Users require access to SaaS Platform D."];
const waveQuestions = [
  "Can every in-scope user perform the critical business processes after cutover?",
  "Are all dependencies available in the target state or supported through an approved interim solution?",
  "Have exceptions been tested under the conditions that will exist after migration?",
  "Are unresolved items clearly owned with a decision deadline?",
  "Is the business prepared for the remaining risks?",
  "What evidence supports the recommendation to proceed?",
];

export default function MigrationWaveReadinessArticle(){return <main className={styles.page}><ArticleStructuredData title={title} description={description} path={path} published="2026-09-11"/><SiteHeader/>
  <header className={styles.hero}><Link href="/insights">← Back to Insights</Link><small>MIGRATION READINESS · 11 MIN READ</small><h1>Everything is green—so why isn’t the migration wave ready?</h1><p>Workstream status can look reassuring while the operating outcome remains uncertain.</p><div><span>MergeVista Insights</span><i/><span>September 11, 2026</span></div></header>
  <section className={styles.takeaway}><small>KEY TAKEAWAY</small><p>Everything can be green independently—and still fail collectively. A migration wave is ready only when the combined environment has been shown to support the business after cutover.</p></section>
  <article className={styles.article}>
    <p className={styles.lead}>A few days before a migration wave, the status report often looks reassuring.</p>
    <p>Applications are green. Infrastructure is green. End-user computing is green. Network is green. Testing is green. The site team confirms that preparations are complete. The PMO reports that the wave is on track.</p>
    <p>Then someone asks a simple question:</p><blockquote>Can the business actually operate after the migration?</blockquote><p>Suddenly, the conversation changes.</p>
    <p>The site may be ready. The desktops may be ready. The applications may have passed their individual checks. But that does not necessarily mean the migration wave is ready.</p>
    <p>This is one of the recurring problems in large IT separations. Readiness is measured within workstreams, while business operations depend on connections across workstreams.</p><p><strong>Everything can be green independently—and still fail collectively.</strong></p>

    <h2>A completed schedule is not the same as operational readiness</h2>
    <p>Migration plans are usually detailed. They contain hundreds, sometimes thousands, of activities covering build, migration, testing, communications, cutover, validation, and hypercare.</p><p>The problem is rarely the absence of a plan.</p>
    <p>The problem is that most plans track whether activities were completed. They do not always prove that the technology environment will work as an integrated whole after the cutover.</p>
    <p>An infrastructure team may confirm that a server has been migrated. The application team may confirm that the application is available. The EUC team may confirm that desktops have been reimaged. The network team may confirm that connectivity tests were successful.</p><p>Each statement may be accurate.</p>
    <p>But can the reimaged desktop launch the application? Can the application reach its database? Can it write to the required file share? Can the user authenticate? Can the business print, exchange data with another system, and complete the full process?</p><p>Those questions cross workstream boundaries. That is where many migration risks remain hidden.</p>

    <h2>The site migrated—but its dependency did not</h2>
    <p>In one situation, a site was included in an upcoming migration wave. The local infrastructure had been assessed, users were identified, devices were prepared, and the applications associated with the site were included in the readiness reporting.</p>
    <p>Late in the process, the team discovered that one of the applications used at the site was writing files to a file share hosted at another site.</p><p>That second site was not part of the same wave. It was scheduled to migrate later.</p>
    <p>On paper, the application belonged to the first site. The file share belonged to the second. Both inventories were correct when viewed separately.</p><p>Operationally, however, the two sites were connected.</p>
    <p>If the first site had been migrated without addressing that dependency, the application might have launched successfully while failing when users attempted to save, retrieve, or process files. The application team could have reported green. The site team could have reported green. Yet the business process would have been disrupted.</p><blockquote>The risk was not in either inventory. It was in the relationship between them.</blockquote>

    <h2>The desktop was ready—but its applications were not</h2>
    <p>A similar issue appears frequently in end-user computing.</p><p>The EUC team may successfully reimage a desktop, join it to the new domain, apply security policies, install the standard software package, and confirm that the user can log in.</p><p>From an EUC perspective, that device is ready.</p>
    <p>But some desktop applications may still point to the old environment. There may be hard-coded server names, legacy URLs, old database connections, mapped drives, local configuration files, browser bookmarks, scripts, plug-ins, or integrations that were not updated.</p><p>The desktop migration succeeds technically, but the user cannot perform the job.</p>
    <p>This becomes even more complicated when application ownership and packaging ownership sit with different teams. The application team assumes EUC will update the desktop configuration. The EUC team assumes the application package provided to them is current. Testing may cover whether the application opens, but not whether it connects to the correct environment or completes an end-to-end transaction.</p><p>Everyone has completed their assigned task. The failure sits between the assignments.</p>

    <h2>Green workstreams can still produce a red business outcome</h2>
    <p>Large separation programs are structured into workstreams for a good reason. Applications, infrastructure, network, cybersecurity, identity, EUC, data, contracts, sites, and business readiness require different expertise.</p><p>The challenge begins when the workstream becomes the boundary of readiness.</p>
    <p>A migration wave is not a collection of independent technical completions. It is a temporary operating model that must work at a specific moment in time.</p><p>Consider a few common examples:</p>
    <ul className={localStyles.editorialList}>{commonFailures.map(item=><li key={item}>{item}</li>)}</ul>
    <p>None of these issues is particularly exotic. Most are ordinary dependencies that were either not captured, not connected to the wave, or not owned through closure.</p>

    <h2>What does “green” actually mean?</h2>
    <p>One of the first questions a migration leader should ask is: What evidence is required before something can be called green?</p>
    <p>In many programs, green means the workstream lead believes the activity is on track. In others, it means tasks are complete in the project plan. Sometimes it means testing has started and no major issues are currently known.</p><p>These definitions are not equivalent.</p><p>A more useful readiness status should answer three questions:</p>
    <ol className={localStyles.editorialList}>{greenEvidence.map(item=><li key={item}>{item}</li>)}</ol>
    <p>Without those answers, green is often an opinion rather than a readiness position.</p>
    <p>For example, “desktop build complete” is not sufficient evidence that users are ready. The evidence may need to show that the correct applications are installed, configurations point to the target environment, authentication works, required file shares are accessible, peripherals operate, and the business user has completed a representative transaction.</p>
    <p>Likewise, “application testing complete” may mean little if the test covered only application availability and not its interfaces, data flows, file transfers, reports, batch jobs, and user access from the migrated desktop.</p><blockquote>Green should represent an executable condition—not simply task completion.</blockquote>

    <h2>Dependencies must be tied to the migration wave</h2>
    <p>Most programs maintain dependency logs. The issue is that the dependency log often sits beside the migration plan rather than inside it.</p><p>Dependencies are recorded as statements:</p>
    <ul className={localStyles.editorialList}>{recordedDependencies.map(item=><li key={item}>{item}</li>)}</ul>
    <p>But when the migration waves are created, those relationships may not be recalculated against wave timing.</p><p>A dependency only becomes actionable when it is connected to a date, a wave, an owner, a validation method, and a consequence.</p>
    <p>If Site X moves in Wave 2 and File Share Y moves in Wave 5, the program needs a deliberate solution. That may involve moving the file share earlier, keeping temporary connectivity, copying the required data, changing the application configuration, or moving the application to a different wave.</p><p>What should not happen is discovering the relationship during cutover.</p>
    <p>The same logic applies to users and applications. If desktops are reimaged during one weekend but a required application is not ready until the following month, the program must decide how those users will operate in the interim. It cannot remain an unspoken assumption between the EUC and application teams.</p>

    <h2>Testing must follow business transactions, not organization charts</h2>
    <p>Testing is often organized the same way as the program: by workstream or technology component.</p><p>Infrastructure tests infrastructure. Application teams test applications. EUC tests desktops. Network teams test connectivity.</p><p>These checks are necessary, but they do not prove business readiness.</p>
    <p>A real business transaction rarely stays within one workstream. A user may authenticate through the new identity environment, open an application on a reimaged desktop, retrieve information from a database, write a document to a shared location, trigger an interface, generate a report, and send an output to another party.</p><p>That entire chain must work.</p>
    <p>End-to-end testing should therefore follow critical business processes across technology components. It should also be aligned to the exact population and configuration included in the wave.</p>
    <p>Testing an application from an administrator’s device is not the same as testing it from the desktop that a user will receive on Monday morning.</p><p>Testing a file share from the network team’s account is not the same as proving that the migrated users have the correct access.</p><p>Testing that an interface transmitted one file is not the same as confirming that the downstream system processed it correctly.</p>
    <p>The closer testing gets to the actual post-migration operating condition, the more useful the readiness status becomes.</p>

    <h2>Readiness needs a wave-level owner</h2>
    <p>Workstream leads should remain accountable for their areas. But someone must own the readiness of the wave as an integrated outcome.</p><p>That role is not simply collecting status updates.</p>
    <p>The wave owner must challenge cross-workstream assumptions, identify dependencies that cross migration dates, confirm that evidence exists, and make sure open risks are translated into operational decisions.</p><p>The discussion should move beyond whether the application, infrastructure, and EUC teams are green. Instead, it should ask:</p>
    <ul className={localStyles.editorialList}>{waveQuestions.map(item=><li key={item}>{item}</li>)}</ul>
    <p>A wave should not be approved because most workstreams submitted green status. It should be approved because the combined environment has been shown to be operationally ready.</p>

    <h2>The goal is not to eliminate every risk</h2>
    <p>No major migration wave will reach zero risk. There will be defects, exceptions, late changes, and issues that require hypercare.</p><p>The objective is not perfection.</p>
    <p>The objective is to know what is ready, what is not ready, what depends on what, and what will happen if an unresolved item fails.</p><p>That allows the program to make an informed go/no-go decision.</p>
    <p>A known issue with a tested workaround may be acceptable. An unknown dependency hidden behind multiple green workstream reports is far more dangerous.</p><p>Good migration governance does not make risk disappear. It makes risk visible early enough to manage.</p>

    <h2>From status reporting to evidence-based readiness</h2>
    <p>The question is not whether the project plan is detailed enough. Most large programs already have detailed plans.</p>
    <p>The question is whether the plan, inventories, dependencies, testing results, risks, decisions, and evidence are connected around the migration wave.</p>
    <p>When that information remains spread across workstream trackers, spreadsheets, emails, meeting notes, testing tools, and presentation decks, the program spends enormous effort reconciling status—and still may not see the operating risk.</p>
    <p>A migration wave is ready when the technical components, business processes, dependencies, people, and evidence come together as one executable picture.</p><p>Until then, green may simply mean that each team completed its part.</p><p><strong>And in IT M&amp;A, completing the parts is not the same as making the whole work.</strong></p>
  </article>
  <section className={styles.articleCta}><div><small>MOVE FROM STATUS TO READINESS</small><h2>Connect every migration dependency, decision and test result to the wave it affects.</h2></div><Link href="/book-a-demo">Book a demo <span>→</span></Link></section>
  <SiteFooter theme="dark"/>
</main>}
