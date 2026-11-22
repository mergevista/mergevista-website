import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { Badge } from "../components/poc/badge";
import { Button } from "../components/poc/button";
import { Card } from "../components/poc/card";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "About MergeVista | M&A Transition Execution Platform",
  "Learn why MergeVista is building a governed platform for M&A integration, separation, Day 1 readiness, stabilization and TSA exit.",
  "/about",
);
const principles = [
  [
    "Connected execution",
    "Keep inventories, plans, dependencies, decisions and evidence connected across the complete transaction.",
  ],
  [
    "Shared accountability",
    "Give sellers, buyers and transaction leaders a common operating model with clear ownership.",
  ],
  [
    "Evidence-backed decisions",
    "Make recommendations and decisions traceable to the transaction data and documents that support them.",
  ],
  [
    "Human-governed AI",
    "Use AI to accelerate understanding and action while keeping experienced people in control.",
  ],
];

const leadershipStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Rajeev Shankar",
      jobTitle: "Founder & CEO",
      image: "https://www.mergevista.com/team/rajeev-shankar-clean.png",
      sameAs: ["https://www.linkedin.com/in/rajeevps/"],
      worksFor: {
        "@type": "Organization",
        name: "MergeVista LLC",
        url: "https://www.mergevista.com",
      },
    },
    {
      "@type": "Person",
      name: "Manoj Pillai",
      jobTitle: "Co-Founder & Chief Growth Officer",
      image: "https://www.mergevista.com/team/manoj-pillai-clean.png",
      description:
        "Global business leader and entrepreneur with 29 years of experience leading enterprise transformation, managing substantial P&L responsibility and scaling startups across international markets.",
      sameAs: ["https://www.linkedin.com/in/manojgpillai/"],
      worksFor: {
        "@type": "Organization",
        name: "MergeVista LLC",
        url: "https://www.mergevista.com",
      },
    },
  ],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(leadershipStructuredData),
        }}
      />
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[.28]" />
        <div className="relative mx-auto max-w-[1560px] px-5 py-24 lg:px-8 lg:py-32">
          <Badge className="gap-2 bg-white">
            <Sparkles className="size-3.5 text-[#1559a6]" />
            About MergeVista
          </Badge>
          <h1 className="mt-7 max-w-5xl text-[2.75rem] font-medium leading-[1.01] tracking-[-.05em] sm:text-[clamp(3rem,5.2vw,5.25rem)]">
            Purpose-built for the
            <span className="block font-normal text-[#1559a6]">
              execution reality of M&amp;A transitions.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            MergeVista was created to connect functional and technology
            workstreams, operational inventories, dependencies and governance
            through integration, separation and TSA execution.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
        <div>
          <Badge>WHY WE EXIST</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            Complex transactions deserve more than disconnected tools.
          </h2>
        </div>
        <Card className="bg-zinc-950 p-8 text-white sm:p-12">
          <p className="text-lg leading-8 text-zinc-300">
            Transaction teams are expected to protect Day 1, manage integration
            or separation, operate TSAs, coordinate stabilization and prove
            exit—across functions, companies and timelines that were never
            designed to work together.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Yet critical execution still depends on fragmented spreadsheets,
            status meetings and institutional knowledge. MergeVista is being
            built to replace that fragmentation with one connected system of
            execution.
          </p>
        </Card>
      </section>
      <section id="leadership" className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Badge className="bg-white">LEADERSHIP</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
              The team building MergeVista.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
              MergeVista is being built by leaders focused on the practical
              realities of integration, separation and TSA execution—and on
              giving transaction teams a more connected way to work.
            </p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <Card className="overflow-hidden p-0">
              <div className="grid h-full sm:grid-cols-[minmax(220px,.78fr)_1.22fr]">
                <div className="relative min-h-[360px] overflow-hidden bg-zinc-200 sm:min-h-[520px]">
                  <Image
                    src="/team/rajeev-shankar-clean.png"
                    alt="Rajeev Shankar, Founder and CEO of MergeVista"
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 42vw, 100vw"
                    className="-translate-y-[3%] scale-[1.12] object-cover object-[50%_44%]"
                  />
                </div>
                <div className="flex flex-col p-7 sm:p-9">
                  <p className="text-sm font-semibold tracking-[.12em] text-[#1559a6]">
                    FOUNDER &amp; CEO
                  </p>
                  <h3 className="mt-4 text-3xl font-medium tracking-[-.035em]">
                    Rajeev Shankar
                  </h3>
                  <p className="mt-6 leading-7 text-zinc-600">
                    Rajeev brings more than 25 years of experience in enterprise
                    technology leadership, M&amp;A execution and complex business
                    transitions. Across leadership roles at GE, Infosys and TCS,
                    he has built and scaled technology practices, led global
                    teams and helped organizations navigate high-stakes
                    integration and separation programs. He previously
                    co-founded and served as CEO of Datalakes, a big data
                    analytics startup, scaling the business and its delivery
                    capabilities from concept to commercial operation. His transaction
                    experience includes leadership roles supporting the
                    Dow–DuPont merger and subsequent spin-offs, Bed Bath &amp;
                    Beyond divestitures, a FactSet acquisition, and acquisitions
                    and separations at IFF and GE HealthCare. These experiences
                    led him to found MergeVista and build a more connected,
                    governed approach to M&amp;A transition execution.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/rajeevps/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#1559a6] hover:text-[#0a183d]"
                    aria-label="Rajeev Shankar on LinkedIn (opens in a new tab)"
                  >
                    <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M6.5 8.3H3.2V19h3.3V8.3ZM4.9 3A1.9 1.9 0 1 0 4.9 6.8 1.9 1.9 0 0 0 4.9 3ZM19.8 12.9c0-3.2-1.7-4.8-4.1-4.8-1.9 0-2.8 1-3.2 1.8V8.3H9.2V19h3.3v-5.3c0-1.4.3-2.8 2-2.8 1.7 0 1.7 1.6 1.7 2.9V19h3.3l.3-6.1Z" />
                    </svg>
                    LinkedIn profile
                  </a>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden p-0">
              <div className="grid h-full sm:grid-cols-[minmax(220px,.78fr)_1.22fr]">
                <div className="relative min-h-[360px] overflow-hidden bg-zinc-200 sm:min-h-[520px]">
                  <Image
                    src="/team/manoj-pillai-clean.png"
                    alt="Manoj Pillai, Co-Founder and Chief Growth Officer of MergeVista"
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 42vw, 100vw"
                    className="object-cover object-[50%_42%]"
                  />
                </div>
                <div className="flex flex-col p-7 sm:p-9">
                  <p className="text-sm font-semibold tracking-[.12em] text-[#1559a6]">
                    CO-FOUNDER &amp; CHIEF GROWTH OFFICER
                  </p>
                  <h3 className="mt-4 text-3xl font-medium tracking-[-.035em]">
                    Manoj Pillai
                  </h3>
                  <p className="mt-6 leading-7 text-zinc-600">
                    Manoj Pillai, Co-Founder and Chief Growth Officer of
                    MergeVista, is a global business leader and entrepreneur
                    with 29 years of experience leading large-scale enterprise
                    transformations and building and scaling startups. He has
                    held P&amp;L responsibility of up to US$500 million and
                    brings extensive telecommunications experience from work
                    with T-Mobile, Nokia and Vodafone Idea. In EV
                    infrastructure, he secured Tesla Supercharger construction
                    business—turning an emerging opportunity into a commercial
                    relationship and a committed delivery program. At
                    MergeVista, Manoj leads growth strategy, market development
                    and customer relationships.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/manojgpillai/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#1559a6] hover:text-[#0a183d]"
                    aria-label="Manoj Pillai on LinkedIn (opens in a new tab)"
                  >
                    <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M6.5 8.3H3.2V19h3.3V8.3ZM4.9 3A1.9 1.9 0 1 0 4.9 6.8 1.9 1.9 0 0 0 4.9 3ZM19.8 12.9c0-3.2-1.7-4.8-4.1-4.8-1.9 0-2.8 1-3.2 1.8V8.3H9.2V19h3.3v-5.3c0-1.4.3-2.8 2-2.8 1.7 0 1.7 1.6 1.7 2.9V19h3.3l.3-6.1Z" />
                    </svg>
                    LinkedIn profile
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="border-y border-zinc-200 bg-zinc-950 text-white">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
            OUR MISSION
          </Badge>
          <h2 className="mt-6 max-w-5xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            Give every transaction team one trusted environment—from Day 1
            planning through stabilization and TSA exit.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            We believe better connected execution leads to clearer decisions,
            stronger accountability and more predictable deal outcomes.
          </p>
        </div>
      </section>
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <Badge className="bg-white">WHAT WE BELIEVE</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            Principles that shape the platform.
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {principles.map(([t, d], index) => (
              <Card key={t} className="p-8">
                <small className="text-[10px] font-semibold tracking-[.16em] text-[#1559a6]">
                  0{index + 1}
                </small>
                <Check className="size-5 text-[#1559a6]" />
                <h3 className="mt-7 text-2xl font-medium">{t}</h3>
                <p className="mt-4 leading-7 text-zinc-600">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1560px] gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <Badge>HOW WE ARE BUILDING</Badge>
          <h2 className="mt-5 text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            Shaped by the people doing the work.
          </h2>
        </div>
        <blockquote className="text-2xl leading-10 text-zinc-600">
          MergeVista LLC is building the next generation of M&amp;A integration,
          separation and TSA execution platforms, shaped by the real-world needs
          of design partners and early customers.
        </blockquote>
      </section>
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div>
            <Badge className="mb-6 border-zinc-700 bg-zinc-900 text-zinc-300">
              START A CONVERSATION
            </Badge>
            <h2 className="text-3xl font-medium tracking-[-.035em] sm:text-5xl">
              Help shape a better way to execute M&amp;A transitions.
            </h2>
            <p className="mt-5 text-zinc-400">
              Explore the platform and tell us what your transaction teams need
              most.
            </p>
          </div>
          <Button asChild size="lg" variant="inverse">
            <Link href="/book-a-demo">
              Talk with our team
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <SiteFooter bordered />
    </main>
  );
}
