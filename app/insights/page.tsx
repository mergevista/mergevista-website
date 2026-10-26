import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "../components/poc/badge";
import { Button } from "../components/poc/button";

const pageTitle = "IT M&A Insights, Readiness & TSA Exit | MergeVista";
const pageDescription =
  "Practical perspectives on IT M&A execution, Day 1 readiness, TSA operations, separation and migration.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "https://www.mergevista.com/insights" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "https://www.mergevista.com/insights",
    images: [
      {
        url: "/insights/social-exception-list.png",
        width: 1200,
        height: 630,
        alt: "Migration workstreams connected around hidden exceptions and dependencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/insights/social-exception-list.png"],
  },
};

const topics = [
  "IT M&A strategy",
  "Divestitures & separation",
  "Integration & Day 1",
  "TSA operations & exit",
  "Data & applications",
  "AI in IT M&A",
];
const articles = [
  [
    "STRANDED IT COSTS",
    "TSA exit is not cost exit",
    "Where duplicate environments, licenses, contracts, cloud resources and support arrangements continue after operational separation.",
    "11 min read",
    "navy",
    "/insights/tsa-exit-not-cost-exit",
    "Oct 16, 2026",
    "/insights/editorial-line-tsa-cost-exit-transparent.png",
    "Separated buyer and seller environments with duplicate infrastructure and ongoing costs remaining active",
  ],
  [
    "SOFTWARE LICENSING",
    "The application can move. The license may not.",
    "Why technical migration readiness does not prove that the buyer has the commercial and operational right to use the software.",
    "12 min read",
    "blue",
    "/insights/application-move-license-may-not",
    "Oct 7, 2026",
    "/insights/editorial-line-license-mobility-transparent.png",
    "Application moving while its commercial software license remains restricted",
  ],
  [
    "DATA SEPARATION",
    "Data separation is not a database extract",
    "Why a technically accurate extract can still leave buyers and sellers with unresolved operational, legal, security and reporting issues.",
    "9 min read",
    "navy",
    "/insights/data-separation-not-database-extract",
    "Sep 30, 2026",
    "/insights/editorial-line-data-separation-transparent.png",
    "Shared enterprise data separating into governed buyer and seller environments",
  ],
  [
    "SELLER READINESS",
    "Your company is ready to sell. Is your technology ready for diligence?",
    "What lower-middle-market companies should understand, organize and be prepared to explain before the buyer begins technology diligence.",
    "11 min read",
    "blue",
    "/insights/technology-ready-for-diligence",
    "Sep 23, 2026",
    "/insights/editorial-line-diligence-readiness-transparent.png",
    "Technology records organized for buyer due diligence",
  ],
  [
    "AI IN IT M&A",
    "Where AI actually belongs in IT M&A",
    "Where AI adds practical value by organizing evidence and preparing decisions—while experienced practitioners remain accountable for the outcome.",
    "7 min read",
    "cyan",
    "/insights/where-ai-belongs-in-it-ma",
    "Sep 17, 2026",
    "/insights/editorial-line-human-governed-ai-transparent.png",
    "AI organizing transaction evidence for accountable human approval",
  ],
  [
    "MIGRATION READINESS",
    "Everything is green—so why isn’t the migration wave ready?",
    "Why workstream-level completion can still produce an operationally unready migration—and how evidence, dependencies and business-process testing change the go/no-go decision.",
    "11 min read",
    "navy",
    "/insights/migration-wave-readiness",
    "Sep 11, 2026",
    "/insights/editorial-line-migration-readiness-transparent.png",
    "Completed migration workstreams blocked by a hidden dependency",
  ],
  [
    "APPLICATION STRATEGY",
    "Application disposition: Where separation strategy becomes execution",
    "Why disposition is more than an inventory field—and how each decision shapes data, infrastructure, contracts, TSAs, migration waves and operational readiness.",
    "12 min read",
    "blue",
    "/insights/application-disposition-separation-strategy-execution",
    "Sep 7, 2026",
    "/insights/editorial-line-application-disposition-transparent.png",
    "Enterprise application connected to multiple governed disposition pathways",
  ],
  [
    "POST-CLOSE EXECUTION",
    "Day 1 is not independence: What happens after legal close?",
    "Why legal close establishes continuity, not independence—and how transaction teams can use the TSA period to remove seller dependencies safely.",
    "13 min read",
    "navy",
    "/insights/day-1-is-not-independence",
    "Sep 2, 2026",
    "/insights/editorial-line-day-one-independence-transparent.png",
    "Business crossing legal close while temporary seller dependencies remain",
  ],
  [
    "IT M&A STRATEGY",
    "The complete IT M&A lifecycle: From discovery to TSA exit",
    "Seven connected stages. Two sides of the transaction. One operating model for continuity, accountability and evidence throughout the deal.",
    "10 min read",
    "blue",
    "/insights/complete-it-ma-lifecycle",
    "Aug 27, 2026",
    "/insights/editorial-line-lifecycle-transparent.png",
    "Connected IT M&A lifecycle spanning two organizations",
  ],
  [
    "DAY 1 READINESS",
    "Why Day 1 readiness fails despite detailed project plans",
    "The problem is rarely a lack of tasks. It is the absence of connected evidence, ownership and decisions across workstreams.",
    "7 min read",
    "blue",
    "/insights/why-day-1-readiness-fails",
    "Aug 20, 2026",
    "/insights/editorial-line-day-one-readiness-transparent.png",
    "Detailed project plans separated from the Day 1 operating checkpoint",
  ],
  [
    "TSA OPERATIONS",
    "From TSA tracking to evidence-based TSA exit",
    "A practical operating model for connecting service obligations, migration dependencies and exit evidence from the start.",
    "9 min read",
    "navy",
    "/insights/evidence-based-tsa-exit",
    "Aug 13, 2026",
    "/insights/editorial-line-tsa-evidence-transparent.png",
    "TSA obligations and evidence connected to an approved exit",
  ],
  [
    "SEPARATION",
    "The hidden cost of disconnected IT inventories",
    "How fragmented baselines create downstream risk for separation planning, Day 1 continuity and migration.",
    "9 min read",
    "cyan",
    "/insights/hidden-cost-disconnected-it-inventories",
    "Aug 6, 2026",
    "/insights/editorial-line-disconnected-inventories-transparent.png",
    "Disconnected IT inventory towers producing conflicting transaction records",
  ],
];

export default function InsightsPage() {
  const [
    leadCategory,
    leadTitle,
    leadSummary,
    leadTime,
    ,
    leadHref,
    leadDate,
    leadImage,
    leadImageAlt,
  ] = articles[0];

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[.28] [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
        <div className="relative mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-24">
          <Badge className="gap-2 bg-white">
            <Sparkles className="size-3.5 text-[#1559a6]" />
            MergeVista Insights
          </Badge>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <h1 className="max-w-4xl text-[clamp(2.8rem,5vw,5.25rem)] font-medium leading-[.98] tracking-[-.052em]">
              Perspectives for better
              <span className="block font-normal text-[#1559a6]">
                IT M&amp;A execution.
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-zinc-600 lg:justify-self-end">
              Practical thinking for technology and transaction leaders
              navigating acquisitions, divestitures, Day 1, TSA operations,
              migration and exit.
            </p>
          </div>
          <aside
            aria-label="Current Insights themes"
            className="mt-12 grid gap-5 rounded-xl border border-zinc-200 bg-white p-6 sm:grid-cols-[1fr_auto] sm:items-end lg:p-8"
          >
            <div>
              <small className="text-[10px] font-semibold tracking-[.16em] text-zinc-500">
                CURRENT THEMES
              </small>
              <h2 className="mt-4 text-2xl font-medium tracking-[-.025em]">
                Execution intelligence for the complete transaction.
              </h2>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600">
                <li>Strategy &amp; operating model</li>
                <li>Day 1 readiness</li>
                <li>TSA operations &amp; exit</li>
                <li>Separation dependencies</li>
              </ul>
            </div>
            <Link href="#latest" className="text-sm font-medium text-[#1559a6]">
              Explore latest insights ↓
            </Link>
          </aside>
        </div>
      </section>
      <section className="mx-auto max-w-[1560px] px-5 py-12 lg:px-8 lg:py-16">
        <article className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <Image
            src="/insights/editorial-line-exception-list-transparent.png"
            alt="Migration workstreams connected around hidden exceptions and dependencies"
            width={1586}
            height={992}
            priority
            className="h-[260px] w-full object-contain sm:h-[340px] lg:order-2 lg:h-full lg:max-h-[470px]"
          />
          <div className="flex flex-col p-7 sm:p-10 lg:p-14">
            <Badge className="w-fit">
              FEATURED INSIGHT · SEPARATION EXECUTION
            </Badge>
            <h2 className="mt-7 max-w-xl text-4xl font-medium leading-[1.05] tracking-[-.045em] sm:text-5xl">
              The exception list is the real separation plan.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
              The standard migration path helps the program move at scale. The
              exception process helps the program finish.
            </p>
            <div className="mt-6 text-xs text-zinc-500">
              Oct 26, 2026 · 9 min read
            </div>
            <Button asChild className="mt-auto self-start pt-9" variant="ghost">
              <Link href="/insights/exception-list-real-separation-plan">
                Read the insight
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </article>
      </section>
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-10 lg:px-8">
          <small className="text-[10px] font-semibold tracking-[.16em] text-zinc-500">
            EXPLORE BY TOPIC
          </small>
          <h2 className="mt-3 text-2xl font-medium tracking-[-.025em]">
            Navigate the execution challenges that matter most.
          </h2>
          <nav
            aria-label="Insight topics"
            className="mt-6 flex gap-2 overflow-x-auto"
          >
            {topics.map((x) => (
              <a
                href="#latest"
                key={x}
                className="shrink-0 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-600 hover:border-zinc-400"
              >
                {x}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <section
        id="latest"
        className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28"
      >
        <div>
          <Badge>LATEST INSIGHTS</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            Ideas grounded in execution.
          </h2>
          <p className="mt-4 max-w-xl text-zinc-600">
            Clear, practical perspectives—not abstract transformation theory.
          </p>
        </div>
        <article className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <Link href={leadHref}>
            <Image
              src={leadImage}
              alt={leadImageAlt}
              width={1536}
              height={1024}
              className="aspect-[16/9] h-full max-h-[420px] w-full object-contain lg:aspect-auto"
            />
          </Link>
          <div className="flex flex-col p-7 sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{leadCategory}</Badge>
              <small className="text-xs text-zinc-500">
                {leadDate} · {leadTime}
              </small>
            </div>
            <h3 className="mt-6 max-w-xl text-3xl font-medium tracking-[-.035em] sm:text-4xl">
              <Link href={leadHref}>{leadTitle}</Link>
            </h3>
            <p className="mt-5 max-w-xl leading-7 text-zinc-600">
              {leadSummary}
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-auto self-start px-0 pt-8"
            >
              <Link href={leadHref}>
                Read article
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </article>
        <div className="mt-16 grid gap-x-6 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {articles
            .slice(1)
            .map(
              ([
                category,
                title,
                summary,
                time,
                ,
                href,
                date,
                image,
                imageAlt,
              ]) => (
                <article key={title} className="flex flex-col">
                  <Link href={href}>
                    <Image
                      src={image}
                      alt={imageAlt}
                      width={1536}
                      height={1024}
                      className="aspect-[3/2] w-full object-contain"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col pt-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge>{category}</Badge>
                      <small className="text-xs text-zinc-500">
                        {date} · {time}
                      </small>
                    </div>
                    <h3 className="mt-5 text-2xl font-medium tracking-[-.03em]">
                      <Link href={href}>{title}</Link>
                    </h3>
                    <p className="mt-4 leading-7 text-zinc-600">{summary}</p>
                    <Button
                      asChild
                      variant="ghost"
                      className="mt-auto self-start px-0 pt-7"
                    >
                      <Link href={href}>
                        Read article
                        <ArrowRight />
                      </Link>
                    </Button>
                  </div>
                </article>
              ),
            )}
        </div>
      </section>
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div>
            <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
              FROM INSIGHT TO EXECUTION
            </Badge>
            <h2 className="text-3xl font-medium tracking-[-.035em] sm:text-5xl">
              Turn better thinking into better deal outcomes.
            </h2>
            <p className="mt-5 text-sm text-zinc-400">
              See how MergeVista supports the complete IT M&amp;A journey.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="inverse">
              <Link href="/book-a-demo">
                Book a demo
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-zinc-700 bg-zinc-900"
            >
              <Link href="/#platform">Explore platform</Link>
            </Button>
          </div>
        </div>
      </section>
      <SiteFooter bordered />
    </main>
  );
}
