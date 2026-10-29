import ModernHub from "../components/ModernHub";
import { Badge } from "../components/poc/badge";
import { Card } from "../components/poc/card";
import { pageMetadata } from "../lib/seo";
import { useCases } from "./data";
import { UseCasesCollectionStructuredData } from "./UseCaseStructuredData";

export const metadata = pageMetadata(
  "IT M&A Use Cases | MergeVista",
  "See how MergeVista supports transaction readiness, acquirers, private equity, enterprise M&A, carve-outs, consulting partners and boutique M&A firms.",
  "/use-cases",
);

const pathways = [
  ["PREPARE", "Seller readiness"],
  ["ACQUIRE", "First-time & serial buyers"],
  ["SCALE", "Private equity"],
  ["CONTROL", "Enterprise M&A"],
  ["SEPARATE", "Carve-outs"],
  ["ENABLE", "Advisory partners"],
] as const;

export default function Page() {
  const cards = useCases.map((x) => ({
    eyebrow: x.audience.toUpperCase(),
    title: x.title,
    text: x.intro,
    href: `/use-cases/${x.slug}`,
    points: x.steps.slice(0, 3).map((s) => s.title),
    outcome: x.outcomes[0],
    linkLabel: "Explore this use case",
  }));
  return (
    <>
      <UseCasesCollectionStructuredData items={useCases} />
      <ModernHub
        eyebrow="Use cases"
        title="One platform. Different"
        accent="M&A situations."
        intro="Whether you are preparing a business for sale, making your first acquisition, scaling a repeatable acquisition program or executing a complex carve-out, MergeVista provides structure, visibility and governance from discovery through Day 1, migration and TSA exit."
        primaryLabel="Discuss your use case"
        cards={cards}
        sectionLabel="CHOOSE YOUR SITUATION"
        sectionTitle="Start with the outcome you need to protect."
        sectionIntro="MergeVista adapts to the transaction—not the other way around. Each use case draws on the same connected fact base, governance and execution model."
        image="/product/redesign-contracts-licenses-landing.png"
        imageLabel="CONNECTED TRANSACTION WORK"
        imageAlt="MergeVista contracts and licenses workspace"
        ctaTitle="Which transaction situation are you preparing for?"
        ctaText="We can focus the conversation on the use case, operating model and level of complexity that matter to you."
      >
        <section
          className="border-y border-zinc-200 bg-zinc-50"
          aria-label="MergeVista transaction pathways"
        >
          <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
            <Badge className="bg-white">A CONNECTED OPERATING MODEL</Badge>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">
              Different starting points. One governed path to execution.
            </h2>
            <p className="mt-5 max-w-3xl leading-7 text-zinc-600">
              Teams can begin with the situation in front of them while
              preserving the data, decisions and evidence needed by the next
              phase of the transaction.
            </p>
            <div className="mt-14 grid gap-4 lg:grid-cols-3">
              {[
                [
                  "01",
                  "Establish the fact base",
                  "Bring transaction documents, inventories and ownership into a governed baseline.",
                ],
                [
                  "02",
                  "Connect what matters",
                  "Expose dependencies, obligations, decisions, risks and accountable actions.",
                ],
                [
                  "03",
                  "Execute with evidence",
                  "Carry context through Day 1, migration, governance and TSA exit.",
                ],
              ].map(([n, t, d]) => (
                <Card key={n} className="p-8">
                  <Badge>{n}</Badge>
                  <h3 className="mt-8 text-2xl font-medium">{t}</h3>
                  <p className="mt-4 leading-7 text-zinc-600">{d}</p>
                </Card>
              ))}
            </div>
            <div className="mt-16">
              <Badge className="bg-white">WHERE MergeVista FITS</Badge>
              <p className="mt-5 text-lg font-medium">
                Use the same connected execution foundation across different
                deal situations.
              </p>
              <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
                {pathways.map(([label, title]) => (
                  <div key={label} className="bg-white p-6">
                    <small className="font-semibold tracking-[.08em] text-[#1559a6]">
                      {label}
                    </small>
                    <p className="mt-3 font-medium">{title}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-zinc-600">
                Discovery → Day 1 → Integration &amp; migration → TSA exit
              </p>
            </div>
          </div>
        </section>
      </ModernHub>
    </>
  );
}
