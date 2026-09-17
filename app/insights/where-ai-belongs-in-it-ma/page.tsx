import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import ArticleStructuredData from "../ArticleStructuredData";
import RelatedInsights from "../RelatedInsights";
import styles from "../complete-it-ma-lifecycle/article.module.css";
import localStyles from "../why-day-1-readiness-fails/day-one.module.css";

const title = "Where AI Actually Belongs in IT M&A";
const description = "Where AI adds practical value in IT M&A: organizing evidence, reconciling information and preparing decisions while keeping experienced practitioners accountable.";
const path = "/insights/where-ai-belongs-in-it-ma";
const published = "2026-09-17";

export const metadata: Metadata = {
  title: `${title} | MergeVista Insights`, description,
  alternates: { canonical: `https://www.mergevista.com${path}` },
  openGraph: { title, description, type: "article", url: `https://www.mergevista.com${path}`, publishedTime: published, images: [] },
  twitter: { card: "summary", title, description, images: [] },
};

const aiActivities = [
  "extracting relevant information from contracts and technical documents",
  "identifying missing attributes in an application inventory",
  "normalizing product, vendor, and application names",
  "comparing information across multiple sources",
  "identifying potential inconsistencies",
  "summarizing large volumes of deal information",
  "identifying potential dependencies or relationships",
  "highlighting risks that may need further investigation",
  "proposing a first-pass recommendation based on available evidence",
];
const applicationFacts = [
  "the application is used primarily by the divested business",
  "the database contains both buyer and seller data",
  "the software license requires vendor consent for transfer",
  "several downstream integrations still remain on seller infrastructure",
  "the application is required for Day 1",
  "migration cannot realistically be completed before close",
];
const confidenceSignals = ["the evidence used", "the assumptions made", "the level of confidence", "the missing information", "the reason for the recommendation"];
const middleWork = ["collecting information", "cleaning it", "reconciling it", "comparing it", "identifying gaps", "finding relationships", "summarizing it", "and preparing it for review."];
const consequentialDecisions = [
  "approving a TSA exit",
  "making final contractual interpretations",
  "determining that an application can safely be retired",
  "approving a high-risk migration",
  "accepting business continuity risk",
  "making commitments on behalf of the buyer or seller",
];

export default function WhereAiBelongsArticle() { return <main className={styles.page}>
  <ArticleStructuredData title={title} description={description} path={path} published={published}/>
  <SiteHeader/>
  <header className={styles.hero}><Link href="/insights">← Back to Insights</Link><small>AI IN IT M&amp;A · 7 MIN READ</small><h1>Where AI Actually Belongs in IT M&amp;A</h1><p>AI should accelerate the analysis. It should not remove accountability from the decision.</p><div><span>MergeVista Insights</span><i/><span>September 17, 2026</span></div></header>
  <section className={styles.takeaway}><small>KEY TAKEAWAY</small><p>The real opportunity for AI is reducing the enormous amount of work that happens before a good decision can be made—not making consequential transaction decisions for people.</p></section>
  <article className={styles.article}>
    <p className={styles.lead}>AI is becoming part of almost every technology conversation today, and M&amp;A is no exception.</p>
    <p>But in IT M&amp;A, I think the more important question is not whether AI can be used.</p>
    <p>It is where AI should actually be used.</p>
    <p>There is a tendency to jump quickly to the idea that AI can make complex decisions for us. In reality, some of the most important decisions in an IT separation or integration still require experience, business judgment, risk tolerance, and context that cannot simply be delegated to a model.</p>
    <p>The real opportunity for AI is somewhere else.</p>
    <p>It is in reducing the enormous amount of work that happens before a good decision can be made.</p>

    <h2>IT M&amp;A Has an Information Problem</h2>
    <p>Anyone who has worked on a large separation or integration knows how much information has to be gathered and reconciled.</p>
    <p>Application inventories come from one source.</p>
    <p>Infrastructure information comes from another.</p>
    <p>Contracts and licenses may sit somewhere else.</p>
    <p>Application owners provide additional information through questionnaires or interviews.</p>
    <p>TSA requirements are maintained in separate trackers.</p>
    <p>Dependencies may exist in architecture diagrams, interface documents, emails, spreadsheets, or simply in the knowledge of people who have supported the environment for years.</p>
    <p>The challenge is not always that the information does not exist.</p>
    <p>The challenge is that it exists in too many places, in different formats, with different levels of quality.</p>
    <p>Before teams can even start making decisions, someone has to organize all of this.</p>
    <p>That is where a significant amount of effort gets consumed.</p>

    <h2>This Is Where AI Can Add Real Value</h2>
    <p>AI is very good at processing large amounts of unstructured or inconsistent information.</p>
    <p>That makes it useful for activities such as:</p>
    <ul className={localStyles.editorialList}>{aiActivities.map(item => <li key={item}>{item}</li>)}</ul>
    <p>None of these activities eliminate the need for an experienced practitioner.</p>
    <p>But they can significantly reduce the amount of manual effort required to reach the point where that practitioner can make a decision.</p>
    <p>That difference matters.</p>
    <p>If a team spends three weeks collecting and reconciling information before it can begin an application disposition discussion, and technology can reduce that to a few days, the value is not that AI made the disposition decision.</p>
    <p>The value is that the team reached the decision much faster.</p>

    <h2>AI Should Support the Decision, Not Own It</h2>
    <p>This distinction is particularly important in M&amp;A.</p>
    <p>Consider an application disposition decision.</p>
    <p>AI may be able to determine that:</p>
    <ul className={localStyles.editorialList}>{applicationFacts.map(item => <li key={item}>{item}</li>)}</ul>
    <p>Based on those facts, AI may suggest that the application should initially remain under a TSA.</p>
    <p>That can be extremely useful.</p>
    <p>But whether the business should actually accept that TSA depends on more than the technical evidence.</p>
    <p>What will the TSA cost?</p>
    <p>How critical is the application?</p>
    <p>What is the buyer’s risk appetite?</p>
    <p>Is there a regulatory consideration?</p>
    <p>Can an alternative solution be implemented?</p>
    <p>What does the overall transaction timeline look like?</p>
    <p>Those are judgment calls.</p>
    <p>The same applies to questions such as whether an application should be retired, whether a migration is safe enough to proceed, or whether a TSA can be exited.</p>
    <p>AI can provide the evidence.</p>
    <p>People still need to own the decision.</p>

    <h2>Confidence Matters</h2>
    <p>Another important part of using AI in IT M&amp;A is understanding that not every recommendation should be treated equally.</p>
    <p>An AI-generated recommendation based on five validated data sources is very different from one based on a partially completed spreadsheet and an outdated architecture document.</p>
    <p>That means recommendations should ideally be accompanied by things such as:</p>
    <ul className={localStyles.editorialList}>{confidenceSignals.map(item => <li key={item}>{item}</li>)}</ul>
    <p>Without that transparency, AI simply becomes another black box.</p>
    <p>And black boxes are difficult to trust in a transaction where decisions can affect business continuity, regulatory compliance, cost, and Day 1 readiness.</p>

    <h2>The Best Use of AI May Be in the “Middle”</h2>
    <p>When people talk about automation, they often focus on the two ends of the process.</p>
    <p>At one end is raw data.</p>
    <p>At the other end is the final decision.</p>
    <p>But the largest amount of work usually happens in the middle.</p>
    <p>It is the work of:</p>
    <ul className={localStyles.editorialList}>{middleWork.map(item => <li key={item}>{item}</li>)}</ul>
    <p>That middle layer is where I believe AI can make the biggest difference in IT M&amp;A.</p>
    <p>It allows experienced people to spend less time assembling information and more time interpreting it.</p>

    <h2>This Could Change the Delivery Model</h2>
    <p>The impact could be larger than just saving a few hours.</p>
    <p>Traditional IT M&amp;A programs often require large teams because there is so much information to process.</p>
    <p>If AI can reduce the manual work involved in assessments, reconciliation, documentation, reporting, and analysis, then future programs may not need the same level of staffing for those activities.</p>
    <p>That does not mean experienced M&amp;A practitioners become less important.</p>
    <p>In fact, the opposite may happen.</p>
    <p>When the repetitive work is reduced, experience becomes more valuable because the remaining work is increasingly about judgment, prioritization, and decision-making.</p>
    <p>The model could gradually shift from:</p>
    <blockquote>large teams processing information</blockquote>
    <p>to:</p>
    <blockquote>smaller, experienced teams making better decisions with better information.</blockquote>

    <h2>Where AI Should Not Be Used Blindly</h2>
    <p>There are also areas where caution is necessary.</p>
    <p>I would be uncomfortable allowing AI to independently make consequential decisions such as:</p>
    <ul className={localStyles.editorialList}>{consequentialDecisions.map(item => <li key={item}>{item}</li>)}</ul>
    <p>These decisions need accountable owners.</p>
    <p>AI can inform them.</p>
    <p>AI can challenge them.</p>
    <p>AI can highlight information they may have missed.</p>
    <p>But accountability should remain with the people responsible for the transaction.</p>

    <h2>The Opportunity Is Not “Autonomous M&amp;A”</h2>
    <p>I do not think the future of IT M&amp;A is a fully autonomous platform making separation and integration decisions without people.</p>
    <p>That is probably the wrong objective.</p>
    <p>The more interesting opportunity is much more practical.</p>
    <p>Use AI to remove the repetitive work.</p>
    <p>Use it to find information faster.</p>
    <p>Use it to connect information that would otherwise sit in separate places.</p>
    <p>Use it to highlight what is missing.</p>
    <p>Use it to improve the quality of the evidence available to the team.</p>
    <p>Then let experienced practitioners make the decisions.</p>
    <p>That is where I believe AI actually belongs in IT M&amp;A.</p>
    <p><strong>AI should accelerate the analysis. It should not remove accountability from the decision.</strong></p>
  </article>
  <RelatedInsights current="where-ai-belongs-in-it-ma" productHref="/ai-capabilities" productLabel="Explore AI capabilities"/>
  <section className={styles.articleCta}><div><small>HUMAN-GOVERNED AI</small><h2>Move from scattered information to accountable decisions.</h2></div><Link href="/book-a-demo">Book a demo <span>→</span></Link></section>
  <SiteFooter theme="dark"/>
</main> }
