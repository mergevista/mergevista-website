import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { pageMetadata } from "../../lib/seo";
import styles from "../../product-pages.module.css";
import { getUseCase, useCases } from "../data";
import { UseCaseDetailStructuredData } from "../UseCaseStructuredData";

export function generateStaticParams() { return useCases.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getUseCase(slug);
  if (!item) return {};
  return pageMetadata(`${item.title} | MergeVista`, item.seoDescription, `/use-cases/${item.slug}`);
}

export default async function UseCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getUseCase(slug);
  if (!item) notFound();
  const partnerUseCasePair: Record<string, string> = {
    "consulting-delivery-partners": "specialist-boutique-ma-firms",
    "specialist-boutique-ma-firms": "consulting-delivery-partners",
  };
  const pairedSlug = partnerUseCasePair[item.slug];
  const relatedUseCases = [
    ...(pairedSlug ? useCases.filter(other => other.slug === pairedSlug) : []),
    ...useCases.filter(other => other.slug !== item.slug && other.slug !== pairedSlug),
  ].slice(0, 3);
  return <main className={styles.page}>
    <UseCaseDetailStructuredData item={item} />
    <SiteHeader />
    <header className={`${styles.hero} ${styles.detailHero}`}><div className={styles.heroInner}>
      <div className={styles.heroCopy}><div className={styles.eyebrow}><span />Use case {item.number}</div><p className={styles.detailAudience}>{item.audience}</p><h1>{item.headline}</h1><p>{item.intro}</p><div className={styles.actions}><Link className={styles.primary} href="/book-a-demo">{item.cta} →</Link><Link className={styles.secondary} href="/use-cases">All use cases</Link></div></div>
      <div className={styles.detailBrief}><small>THE SITUATION</small><h2>{item.title}</h2><p>{item.challenge}</p><div><b>MERGEVISTA CONNECTS</b><span>Fact base</span><i>→</i><span>Decisions</span><i>→</i><span>Execution</span><i>→</i><span>Evidence</span></div></div>
    </div></header>
    <section className={styles.detailSignals}><div><div><div className={styles.eyebrow}><span />When this use case fits</div><h2>Recognize the situation early.</h2></div><ul>{item.signals.map(signal => <li key={signal}>{signal}</li>)}</ul></div></section>
    <section className={styles.section}><div className={styles.sectionHead}><div className={styles.eyebrow}><span />How MergeVista supports the work</div><h2>Move from transaction pressure to controlled execution.</h2></div><div className={styles.detailSteps}>{item.steps.map((step, index) => <article key={step.title}><small>0{index + 1}</small><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
    <section className={`${styles.section} ${styles.sectionAlt}`}><div className={styles.detailResults}><div><div className={styles.eyebrow}><span />Expected outcomes</div><h2>What changes when the work is connected.</h2><ul>{item.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul></div><aside><small>RELEVANT CAPABILITIES</small>{item.capabilities.map(capability => <span key={capability}>{capability}</span>)}</aside></div></section>
    <nav className={styles.useCaseNext} aria-label="Explore other use cases"><span>Explore another situation</span><div>{relatedUseCases.map(other => <Link key={other.slug} href={`/use-cases/${other.slug}`}><small>{other.number}</small>{other.title}<b>→</b></Link>)}</div></nav>
    <section className={styles.cta}><div><h2>See how this use case works in MergeVista.</h2><p>We’ll focus the conversation on your transaction model, team and immediate priorities.</p></div><Link href="/book-a-demo">{item.cta} →</Link></section>
    <SiteFooter bordered={false} />
  </main>;
}
