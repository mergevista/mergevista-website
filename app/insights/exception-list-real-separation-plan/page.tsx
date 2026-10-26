import type { Metadata } from "next";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ArticleStructuredData from "../ArticleStructuredData";
import ArticleHero from "../ArticleHero";
import { ArticleBody, ArticleCta, ArticleTakeaway } from "../ArticleLayout";
import RelatedInsights from "../RelatedInsights";
import localStyles from "../why-day-1-readiness-fails/day-one.module.css";

const title = "The Exception List Is the Real Separation Plan";
const seoTitle = "Exception Management in IT Separation | MergeVista";
const description =
  "Why exceptions—not standard migration paths—determine whether an IT separation will work, and how connected management helps the program finish.";
const path = "/insights/exception-list-real-separation-plan";
const published = "2026-10-26";
const image = "/insights/editorial-line-exception-list-transparent.png";
const socialImage = "/insights/social-exception-list.png";
const imageAlt =
  "Migration workstreams connected around the hidden exceptions and dependencies that determine separation readiness";

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

const exceptionQuestions = [
  "What business process is affected?",
  "What happens if the issue is not resolved before cutover?",
  "Is there a tested workaround?",
  "How long can the workaround remain in place?",
  "Who accepts the risk?",
  "What is the permanent resolution?",
  "Does the exception affect Day 1, a migration wave, or TSA exit?",
  "Is the issue isolated, or does it affect other applications, users, or sites?",
];

const exceptionView = [
  "The affected business capability",
  "The criticality of the process",
  "The number and type of users affected",
  "The migration wave or milestone at risk",
  "The upstream and downstream dependencies",
  "The available workaround",
  "The decision required",
  "The latest date by which action must be taken",
];

export default function ExceptionListArticle() {
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
        category={<>SEPARATION EXECUTION · 9 MIN READ</>}
        title={<>The Exception List Is the Real Separation Plan</>}
        description={<>The standard migration path helps the program move at scale. The exception process helps the program finish.</>}
        date={<>October 26, 2026</>}
        image={image}
        imageAlt={imageAlt}
      />
      <ArticleTakeaway>
        <p>Readiness is not determined by the number of completed items. It is determined by the business impact of the incomplete ones.</p>
      </ArticleTakeaway>
      <ArticleBody>
        <p className="article-lead">Most IT separation programs are designed around the standard path.</p>
        <p>Applications will be assessed, dispositioned, built, migrated, tested, and cut over. Users will receive new devices and accounts. Sites will move in waves. Infrastructure will be separated. Contracts and licenses will be transferred or replaced.</p>
        <p>The plan usually looks complete.</p>
        <p>But the standard path is rarely what causes the problem.</p>
        <p>The exceptions do.</p>
        <p>An application that cannot run in the target environment. A user who needs access to both companies. A site application that depends on a server at another location. A license that cannot be transferred. A piece of equipment that can only be supported by the seller. Historical data that must be retained but cannot move with the application.</p>
        <p>Individually, these may look like small issues. Together, they determine whether the separation will actually work.</p>

        <h2>The standard path creates progress</h2>
        <p>Large separation programs need repeatable processes.</p>
        <p>You cannot manage hundreds of applications, thousands of users, and multiple sites by designing a unique migration approach for every asset. You need migration patterns, standard checklists, test scripts, cutover plans, and approval gates.</p>
        <p>This is how the program creates scale.</p>
        <p>If 80 percent of the applications can follow the standard migration path, that is a good outcome. The teams can move quickly and report measurable progress.</p>
        <p>The problem is that the remaining 20 percent often contains the applications and dependencies that matter most to the business.</p>
        <p>The program may report that 180 of 200 applications are ready. But if one of the remaining applications processes customer orders or controls a manufacturing line, the migration wave is not ready.</p>
        <p>Readiness is not determined by the number of completed items. It is determined by the business impact of the incomplete ones.</p>

        <h2>Exceptions rarely stay within one workstream</h2>
        <p>An application exception is rarely just an application issue.</p>
        <p>Suppose an application cannot be migrated because it runs on an unsupported operating system. At first, this appears to be an infrastructure problem.</p>
        <p>Then the team discovers that the application vendor no longer supports the current version. The application must be upgraded before it can move.</p>
        <p>Now it is also a vendor and licensing issue.</p>
        <p>The upgrade changes the database version and requires additional testing. The application exchanges files with another system that is not moving in the same wave.</p>
        <p>Now data, integration, testing, and wave planning are involved.</p>
        <p>What started as one application exception has become a cross-workstream problem.</p>
        <p>This is common in separations. Exceptions expose the connections between applications, infrastructure, users, sites, data, contracts, licenses, and vendors.</p>
        <p>If each workstream tracks only its own part of the issue, nobody owns the complete resolution.</p>

        <h2>The exception may not be visible until late</h2>
        <p>In one migration, a site appeared ready for cutover. The infrastructure was prepared, users had been scheduled, and the application testing was nearly complete.</p>
        <p>During the final validation, the team discovered that one of the site applications was writing reports to a file share located at another site.</p>
        <p>That second site was not part of the migration wave.</p>
        <p>The application itself was ready. The server was ready. The users were ready. But the complete business process was not ready.</p>
        <p>The dependency had not appeared in the application inventory because the file share was not considered an application. It had not appeared in the site inventory because it was hosted somewhere else. It had not appeared in infrastructure planning because nobody had connected the share to the business process.</p>
        <p>The issue was eventually resolved, but only because it was discovered before the cutover.</p>
        <p>That was an exception. It was also the item that could have disrupted the business.</p>

        <h2>There is never just one exception list</h2>
        <p>Most programs say they have an exception tracker.</p>
        <p>In reality, there may be several.</p>
        <p>The application team has one. The infrastructure team has another. The site team maintains its own list. Testing has a defect tracker. The PMO has a risks and issues log. The business maintains a separate list of concerns. Vendors may track open items in email.</p>
        <p>Some of the same issues appear on multiple lists with different descriptions, owners, and target dates. Other issues appear on only one list and never make it into the overall program view.</p>
        <p>This creates a false sense of control.</p>
        <p>The program may believe it has 25 open exceptions when the combined number across the workstreams is closer to 75. More importantly, nobody may know which exceptions are related.</p>
        <p>One team may be tracking a delayed server build while another team is tracking failed application testing. They may be two records describing the same underlying problem.</p>
        <p>An exception list is useful only when it connects the issue to the affected asset, business process, migration wave, dependency, owner, decision, and resolution plan.</p>

        <h2>Not every exception should delay the migration</h2>
        <p>The purpose of exception management is not to make every issue disappear before cutover.</p>
        <p>That is usually unrealistic.</p>
        <p>Some exceptions can be accepted temporarily. Some can be addressed through a workaround. Some can move into post-cutover support. Others require a permanent solution before the migration can proceed.</p>
        <p>The important part is making that decision consciously.</p>
        <p>For each exception, the program should understand:</p>
        <ul className={localStyles.editorialList}>
          {exceptionQuestions.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p>Without these answers, “we have a workaround” often becomes a way of moving an unresolved problem into production.</p>

        <h2>Workarounds have a habit of becoming permanent</h2>
        <p>Temporary solutions are necessary in many separations.</p>
        <p>A user may retain access to the seller’s environment for a limited period. A file transfer may continue through an interim location. An application may remain hosted under a short-term extension. A manual process may be introduced until an interface is rebuilt.</p>
        <p>These solutions can protect the cutover date and maintain business continuity.</p>
        <p>But every workaround creates another obligation.</p>
        <p>Access must eventually be removed. The interim file location must be retired. The hosting extension must end. The manual process must be replaced. The associated cost and security exposure must be tracked.</p>
        <p>If the exception is marked closed when the workaround is implemented, the permanent action can disappear from the program.</p>
        <p>The migration succeeds, but the separation remains incomplete.</p>
        <p>A workaround should therefore have its own owner, expiration date, exit criteria, and permanent resolution plan.</p>

        <h2>Exceptions need to be managed by business impact</h2>
        <p>Large programs often prioritize exceptions based on whether they are red, amber, or green.</p>
        <p>That is not enough.</p>
        <p>A red issue affecting a low-use internal tool may be less important than an amber issue affecting customer billing. A delayed application may have little impact on its own but may support a critical downstream process.</p>
        <p>The priority should reflect the business consequence, not only the technical status.</p>
        <p>A useful exception view should show:</p>
        <ul className={localStyles.editorialList}>
          {exceptionView.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p>This allows leadership to focus on the exceptions that can actually stop the business or delay the transaction.</p>

        <h2>Exceptions should shape the migration waves</h2>
        <p>Migration waves are often created using sites, business units, geographies, or technical groupings.</p>
        <p>But exception data should influence the wave design too.</p>
        <p>If several applications at a site depend on infrastructure that will not be available until a later date, moving that site early may create unnecessary risk. If one application has a difficult vendor dependency, it may need a separate cutover pattern. If users need access to both environments, identity and security arrangements may need to remain in place longer.</p>
        <p>The exception list should not sit beside the migration plan. It should actively change the migration plan.</p>
        <p>Sometimes the right answer is to move an asset to a later wave. Sometimes it is to pull a dependency forward. Sometimes it is to separate one application from the rest of the site. Sometimes the business must accept a manual process for a limited period.</p>
        <p>These are execution decisions, not reporting decisions.</p>

        <h2>The final weeks are mostly about exceptions</h2>
        <p>Early in the program, progress comes from moving large groups of assets through the standard process.</p>
        <p>Applications are inventoried. Users are identified. Sites are assessed. Infrastructure is designed. Migration waves are created.</p>
        <p>As the cutover approaches, the work changes.</p>
        <p>The standard items are largely complete. What remains are the assets that could not follow the normal path.</p>
        <p>This is why the final 10 percent of a separation can consume a disproportionate amount of time. Each remaining item may require a different combination of technical work, business decisions, vendor support, testing, and risk acceptance.</p>
        <p>At that point, the exception list becomes the real separation plan.</p>
        <p>It tells the program what is still preventing the business from operating independently.</p>

        <h2>Manage the exception, not just the record</h2>
        <p>Good exception management is not about creating another spreadsheet.</p>
        <p>It is about making the issue visible in context.</p>
        <p>The exception should be connected to the application, infrastructure component, user group, site, contract, license, data set, interface, migration wave, and business process it affects.</p>
        <p>It should have one accountable owner, even when several teams are involved.</p>
        <p>It should clearly state the decision or action needed. It should show the last responsible date, not only the final milestone date. And it should remain open until the permanent outcome has been achieved or the residual risk has been formally accepted.</p>
        <p>The standard migration path helps the program move at scale.</p>
        <p>The exception process helps the program finish.</p>
        <p>A separation plan may show hundreds of completed activities. But when the cutover date arrives, the question is much simpler:</p>
        <blockquote>What is still capable of stopping the business from operating?</blockquote>
        <p>The answer will usually be found in the exceptions.</p>
      </ArticleBody>
      <RelatedInsights
        current="exception-list-real-separation-plan"
        productHref="/platform"
        productLabel="Explore connected separation execution"
      />
      <ArticleCta
        eyebrow={<>MANAGE THE EXCEPTION, NOT JUST THE RECORD</>}
        title={<>The standard migration path helps the program move at scale. The exception process helps the program finish.</>}
      />
      <SiteFooter theme="dark" />
    </main>
  );
}
