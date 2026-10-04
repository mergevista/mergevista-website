import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { pageMetadata } from "../../lib/seo";
import styles from "../../product-pages.module.css";
import SolutionStructuredData from "../SolutionStructuredData";
import { getSolution, solutions } from "../data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return solutions.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return pageMetadata(`${solution.seoTitle ?? `${solution.name} for IT M&A`} | MergeVista`, solution.seoDescription, `/solutions/${solution.slug}`);
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  const related = solutions.filter((candidate) => candidate.slug !== solution.slug);

  return <main className={styles.page}>
    <SolutionStructuredData solution={solution} />
    <SiteHeader />
    <header className={`${styles.hero} ${styles.packageHero}`}><div className={styles.heroInner}>
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}><span />{solution.eyebrow}</div>
        <h1>{solution.name}<br/><em>{solution.headline}</em></h1>
        <p>{solution.introduction}</p>
        <div className={styles.actions}><Link className={styles.primary} href="/book-a-demo">Book a focused demo →</Link><Link className={styles.secondary} href="/guided-trial">Apply for a guided trial</Link></div>
      </div>
      <div className={styles.productFrame} data-product-reveal>
        <div className={styles.productFrameTop}><span>LIVE PRODUCT VIEW <i>Illustrative sample data</i></span><b>{solution.imageLabel}</b></div>
        <Image src={solution.image} alt={solution.imageAlt} width={1672} height={941} priority />
      </div>
    </div></header>

    <section className={styles.packagePosition}><div><span>MERGEVISTA SOLUTION</span><strong>{solution.name}</strong><p>One connected operating model brings transaction facts, decisions, execution and evidence together.</p></div></section>

    <section className={styles.section}><div className={styles.packageProblem}>
      <div className={styles.sectionHead}><div className={styles.eyebrow}><span />The execution challenge</div><h2>{solution.challengeTitle}</h2></div>
      <p>{solution.challenge}</p>
    </div></section>

    <section className={`${styles.section} ${styles.sectionAlt}`}><div className={styles.packageEnablement}>
      <div><div className={styles.sectionHead}><div className={styles.eyebrow}><span />What must be controlled</div><h2>Connect the operating detail behind the outcome.</h2></div><ul>{solution.controls.map((control) => <li key={control}>{control}</li>)}</ul></div>
      <aside><small>TEAMS INVOLVED</small><div>{solution.audience.map((audience) => <span key={audience}>{audience}</span>)}</div></aside>
    </div></section>

    <section className={styles.section}><div className={styles.sectionHead}><div className={styles.eyebrow}><span />The operating approach</div><h2>Move from fragmented activity to governed execution.</h2></div><div className={styles.detailSteps}>{solution.steps.map((step, index) => <article key={step.title}><small>0{index + 1}</small><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>

    <section className={`${styles.section} ${styles.sectionAlt}`}><div className={styles.detailResults}><div><div className={styles.eyebrow}><span />Expected outcomes</div><h2>What changes when the work is connected.</h2><ul>{solution.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div><aside><small>RELEVANT CAPABILITY PACKAGES</small>{solution.capabilities.map((capability) => <span key={capability.slug}><Link href={`/capabilities/${capability.slug}`} style={{color:"inherit",textDecoration:"none"}}>{capability.name} →</Link></span>)}</aside></div></section>

    <nav className={styles.packageNext} aria-label="Explore other solutions"><span>EXPLORE ANOTHER SOLUTION</span><div>{related.map((candidate) => <Link href={`/solutions/${candidate.slug}`} key={candidate.slug}><strong>{candidate.name}</strong><b>→</b></Link>)}</div><Link className={styles.completeLink} href="/solutions">View all MergeVista solutions →</Link></nav>

    <section className={styles.cta}><div><h2>See {solution.name} in your transaction context.</h2><p>We’ll focus the conversation on your operating model, immediate priorities and execution pressure.</p></div><div className={styles.ctaActions}><Link href="/book-a-demo">Book a focused demo →</Link><Link className={styles.ctaSecondary} href="/guided-trial">Apply for a guided trial →</Link></div></section>
    <SiteFooter bordered={false} />
  </main>;
}
