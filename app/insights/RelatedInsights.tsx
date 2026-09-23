import Link from "next/link";
import styles from "./related-insights.module.css";

const articles = [
  { slug: "technology-ready-for-diligence", category: "Seller readiness", title: "Your Company Is Ready to Sell. Is Your Technology Ready for Diligence?" },
  { slug: "where-ai-belongs-in-it-ma", category: "AI in IT M&A", title: "Where AI Actually Belongs in IT M&A" },
  { slug: "migration-wave-readiness", category: "Migration readiness", title: "Everything Is Green—So Why Isn’t the Migration Wave Ready?" },
  { slug: "application-disposition-separation-strategy-execution", category: "Application strategy", title: "Application Disposition: Where Separation Strategy Becomes Execution" },
  { slug: "day-1-is-not-independence", category: "TSA exit", title: "Day 1 Is Not Independence: What Happens After Legal Close?" },
  { slug: "complete-it-ma-lifecycle", category: "Operating model", title: "The Complete IT M&A Lifecycle" },
  { slug: "why-day-1-readiness-fails", category: "Day 1 readiness", title: "Why Day 1 Readiness Fails Despite Detailed Project Plans" },
  { slug: "evidence-based-tsa-exit", category: "TSA exit", title: "From TSA Tracking to Evidence-Based TSA Exit" },
  { slug: "hidden-cost-disconnected-it-inventories", category: "Connected inventories", title: "The Hidden Cost of Disconnected IT Inventories" },
];

const recommendations: Record<string, string[]> = {
  "technology-ready-for-diligence": ["hidden-cost-disconnected-it-inventories", "where-ai-belongs-in-it-ma", "complete-it-ma-lifecycle"],
  "where-ai-belongs-in-it-ma": ["application-disposition-separation-strategy-execution", "hidden-cost-disconnected-it-inventories", "migration-wave-readiness"],
  "migration-wave-readiness": ["why-day-1-readiness-fails", "hidden-cost-disconnected-it-inventories", "application-disposition-separation-strategy-execution"],
  "application-disposition-separation-strategy-execution": ["hidden-cost-disconnected-it-inventories", "migration-wave-readiness", "complete-it-ma-lifecycle"],
  "day-1-is-not-independence": ["evidence-based-tsa-exit", "why-day-1-readiness-fails", "complete-it-ma-lifecycle"],
  "complete-it-ma-lifecycle": ["why-day-1-readiness-fails", "application-disposition-separation-strategy-execution", "evidence-based-tsa-exit"],
  "why-day-1-readiness-fails": ["migration-wave-readiness", "hidden-cost-disconnected-it-inventories", "day-1-is-not-independence"],
  "evidence-based-tsa-exit": ["day-1-is-not-independence", "application-disposition-separation-strategy-execution", "complete-it-ma-lifecycle"],
  "hidden-cost-disconnected-it-inventories": ["application-disposition-separation-strategy-execution", "why-day-1-readiness-fails", "migration-wave-readiness"],
};

type Props = {
  current: string;
  productHref?: "/platform" | "/solutions" | "/ai-capabilities";
  productLabel?: string;
};

export default function RelatedInsights({ current, productHref = "/platform", productLabel = "Explore the MergeVista platform" }: Props) {
  const related = (recommendations[current] ?? [])
    .map(slug => articles.find(article => article.slug === slug))
    .filter((article): article is (typeof articles)[number] => Boolean(article));

  return <section className={styles.section} aria-labelledby="related-insights-title">
    <div className={styles.heading}>
      <div><small>CONTINUE EXPLORING</small><h2 id="related-insights-title">Related insights</h2></div>
      <Link href={productHref}>{productLabel} <span>→</span></Link>
    </div>
    <div className={styles.grid}>
      {related.map(article => <Link href={`/insights/${article.slug}`} className={styles.card} key={article.slug}>
        <small>{article.category}</small>
        <h3>{article.title}</h3>
        <span>Read insight →</span>
      </Link>)}
    </div>
  </section>;
}
