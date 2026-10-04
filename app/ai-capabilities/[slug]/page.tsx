import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { pageMetadata } from "../../lib/seo";
import styles from "../../product-pages.module.css";
import AiCapabilityStructuredData from "../AiCapabilityStructuredData";
import { aiCapabilities, getAiCapability } from "../data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return aiCapabilities.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const capability = getAiCapability(slug);
  if (!capability) return {};
  return pageMetadata(capability.seoTitle, capability.seoDescription, `/ai-capabilities/${capability.slug}`);
}

export default async function AiCapabilityPage({ params }: PageProps) {
  const { slug } = await params;
  const capability = getAiCapability(slug);
  if (!capability) notFound();
  const related = aiCapabilities.filter((candidate) => candidate.slug !== capability.slug);

  return <main className={styles.page}>
    <AiCapabilityStructuredData capability={capability} />
    <SiteHeader />
    <header className={`${styles.hero} ${styles.packageHero}`}><div className={styles.heroInner}>
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}><span />{capability.eyebrow}</div>
        <h1>{capability.name}<br/><em>{capability.headline}</em></h1>
        <p>{capability.introduction}</p>
        <div className={styles.actions}><Link className={styles.primary} href="/book-a-demo">See it in action →</Link><Link className={styles.secondary} href="/ai-capabilities">Explore all AI capabilities</Link></div>
      </div>
      <div className={`${styles.productFrame} ${styles.productFrameDark}`} data-product-reveal>
        <div className={styles.productFrameTop}><span>LIVE PRODUCT VIEW <i>Illustrative sample data</i></span><b>{capability.imageLabel}</b></div>
        <Image src={capability.image} alt={capability.imageAlt} width={1672} height={941} priority />
      </div>
    </div></header>

    <section className={styles.packagePosition}><div><span>MERGEVISTA INTELLIGENCE</span><strong>{capability.name}</strong><p>Source-grounded proposals remain connected to transaction context and accountable human decisions.</p></div></section>

    <section className={styles.section}><div className={styles.packageProblem}>
      <div className={styles.sectionHead}><div className={styles.eyebrow}><span />The intelligence challenge</div><h2>{capability.challengeTitle}</h2></div>
      <p>{capability.challenge}</p>
    </div></section>

    <section className={`${styles.section} ${styles.sectionAlt}`}><div className={styles.packageEnablement}>
      <div><div className={styles.sectionHead}><div className={styles.eyebrow}><span />Designed for governed execution</div><h2>Evidence, context and control stay connected.</h2></div><ul>{capability.principles.map((principle) => <li key={principle}>{principle}</li>)}</ul></div>
      <aside><small>RESPONSIBILITY BOUNDARY</small><div><span>AI proposes</span><span>Systems validate</span><span>People review</span><span>Decisions remain accountable</span></div></aside>
    </div></section>

    <section className={styles.section}><div className={styles.sectionHead}><div className={styles.eyebrow}><span />How it works</div><h2>Move from source information to governed action.</h2></div><div className={styles.detailSteps}>{capability.steps.map((step, index) => <article key={step.title}><small>0{index + 1}</small><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>

    <section className={`${styles.section} ${styles.sectionAlt}`}><div className={styles.detailResults}><div><div className={styles.eyebrow}><span />Expected outcomes</div><h2>What changes when intelligence remains accountable.</h2><ul>{capability.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div><aside><small>CONNECTED CAPABILITY PACKAGES</small>{capability.connectsTo.map((item) => <span key={item.slug}><Link href={`/capabilities/${item.slug}`} style={{color:"inherit",textDecoration:"none"}}>{item.name} →</Link></span>)}</aside></div></section>

    <nav className={styles.packageNext} aria-label="Explore other AI capabilities"><span>EXPLORE MORE MERGEVISTA INTELLIGENCE</span><div>{related.map((candidate) => <Link href={`/ai-capabilities/${candidate.slug}`} key={candidate.slug}><strong>{candidate.name}</strong><b>→</b></Link>)}</div><Link className={styles.completeLink} href="/ai-capabilities">View all AI capabilities →</Link></nav>

    <section className={styles.cta}><div><h2>See {capability.name} in your transaction context.</h2><p>Explore how grounded intelligence can accelerate the work without surrendering control.</p></div><div className={styles.ctaActions}><Link href="/book-a-demo">Book a demo →</Link><Link className={styles.ctaSecondary} href="/guided-trial">Apply for a guided trial →</Link></div></section>
    <SiteFooter bordered={false} />
  </main>;
}
