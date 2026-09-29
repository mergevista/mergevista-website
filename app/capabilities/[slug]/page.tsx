import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { pageMetadata } from "../../lib/seo";
import styles from "../../product-pages.module.css";
import CapabilityStructuredData from "../CapabilityStructuredData";
import { capabilityPackages, getCapabilityPackage } from "../data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return capabilityPackages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCapabilityPackage(slug);
  if (!item) return {};
  return pageMetadata(`${item.shortName} for IT M&A | MergeVista`, item.seoDescription, `/capabilities/${item.slug}`);
}

export default async function CapabilityPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getCapabilityPackage(slug);
  if (!item) notFound();
  const related = capabilityPackages.filter((candidate) => candidate.slug !== item.slug);

  return <main className={styles.page}>
    <CapabilityStructuredData item={item} />
    <SiteHeader />
    <header className={`${styles.hero} ${styles.packageHero}`}><div className={styles.heroInner}>
      <div className={styles.heroCopy}>
        <div className={styles.eyebrow}><span />{item.eyebrow}</div>
        <h1>{item.name}<br/><em>{item.headline}</em></h1>
        <p>{item.introduction}</p>
        <p className={styles.packageBestFor}><b>Best for:</b> {item.bestFor}</p>
        <div className={styles.actions}><Link className={styles.primary} href="/book-a-demo">Book a demo →</Link><Link className={styles.secondary} href="/guided-trial">Apply for a guided trial</Link></div>
      </div>
      <div className={styles.productFrame} data-product-reveal>
        <div className={styles.productFrameTop}><span>LIVE PRODUCT VIEW <i>Illustrative sample data</i></span><b>{item.imageLabel}</b></div>
        <Image src={item.image} alt={item.imageAlt} width={1672} height={941} priority />
      </div>
    </div></header>

    <section className={styles.packagePosition}><div><span>ONE MERGEVISTA PLATFORM</span><strong>{item.shortName}</strong><p>Start here today. Expand across the transaction lifecycle without rebuilding your data, decisions or execution history.</p></div></section>

    <section className={styles.section}><div className={styles.packageProblem}>
      <div className={styles.sectionHead}><div className={styles.eyebrow}><span />The business problem</div><h2>{item.problemTitle}</h2></div>
      <p>{item.problem}</p>
    </div></section>

    <section className={`${styles.section} ${styles.sectionAlt}`}><div className={styles.packageEnablement}>
      <div><div className={styles.sectionHead}><div className={styles.eyebrow}><span />What this package enables</div><h2>Focused adoption. Connected execution.</h2></div><ul>{item.enables.map((point) => <li key={point}>{point}</li>)}</ul></div>
      <aside><small>CONNECTED INFORMATION</small><div>{item.connected.map((record) => <span key={record}>{record}</span>)}</div></aside>
    </div></section>

    <section className={styles.section}><div className={styles.sectionHead}><div className={styles.eyebrow}><span />Operational outcomes</div><h2>What your team can govern with confidence.</h2></div><div className={styles.packageOutcomes}>{item.outcomes.map((outcome, index) => <article key={outcome}><small>0{index + 1}</small><h3>{outcome}</h3></article>)}</div></section>

    <section className={styles.packageNext}><span>EXPAND WITHIN THE SAME PLATFORM</span><div>{related.map((candidate) => <Link href={`/capabilities/${candidate.slug}`} key={candidate.slug}><small>{candidate.number}</small><strong>{candidate.shortName}</strong><b>→</b></Link>)}</div><Link className={styles.completeLink} href="/platform">Explore the complete MergeVista platform →</Link></section>

    <section className={styles.cta}><div><h2>See {item.shortName} in your transaction context.</h2><p>Start with the capabilities you need today, with room to expand across the complete lifecycle.</p></div><div className={styles.ctaActions}><Link href="/book-a-demo">Book a demo →</Link><Link className={styles.ctaSecondary} href="/guided-trial">Apply for a guided trial →</Link></div></section>
    <SiteFooter bordered={false} />
  </main>;
}
