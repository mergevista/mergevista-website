import ModernHub from "../components/ModernHub";
import { Badge } from "../components/poc/badge";
import { Card } from "../components/poc/card";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata(
  "IT Separation & Integration Solutions | MergeVista",
  "Explore MergeVista solutions for divestitures, acquisitions, carve-out Day 1 readiness, post-close migration and TSA exit.",
  "/solutions",
);

const cards = [
  {
    eyebrow: "01",
    title: "Divestitures and separations",
    text: "Create a trusted carve-out baseline, expose shared dependencies and coordinate logical and physical separation across seller and buyer teams.",
    href: "/solutions/divestitures-separations",
    points: [
      "Connected separation inventories",
      "Site and workstream planning",
      "Contract, license and consent visibility",
    ],
    linkLabel: "Explore this solution",
  },
  {
    eyebrow: "02",
    title: "Acquisitions and integrations",
    text: "Give the buyer a structured view of acquired technology, transition dependencies and the decisions required to establish the future-state environment.",
    href: "/solutions/acquisitions-integrations",
    points: [
      "Buyer transition planning",
      "Disposition and dependency decisions",
      "Migration wave coordination",
    ],
    linkLabel: "Explore this solution",
  },
  {
    eyebrow: "03",
    title: "Day 1 readiness for carve-outs",
    text: "Demonstrate that employees, business processes and critical services can operate from legal close—not simply that individual workstreams report green.",
    href: "/solutions/day-1-readiness",
    points: [
      "Outcome-based readiness criteria",
      "Cross-workstream dependencies",
      "Evidence and accountable approvals",
    ],
    linkLabel: "Explore this solution",
  },
  {
    eyebrow: "04",
    title: "Post-close migration and TSA exit",
    text: "Connect migration and every interim service to its obligations, costs, dependencies, milestones and objective exit evidence.",
    href: "/solutions/tsa-management-exit",
    points: [
      "Service delivery and consumption",
      "Migration and dependency control",
      "Evidence-based exit governance",
    ],
    linkLabel: "Explore this solution",
  },
];

const outcomes = [
  [
    "Multiple versions of the IT baseline",
    "Reconciled, governed deal inventories",
    "A trusted foundation for every plan",
  ],
  [
    "Workstreams report status independently",
    "Connected dependencies and readiness evidence",
    "Operational confidence on Day 1",
  ],
  [
    "TSA services tracked as a spreadsheet",
    "Service obligations linked to migration and exit criteria",
    "Faster, defensible TSA exit",
  ],
  [
    "Seller and buyer plans lose context at handoff",
    "One shared transaction workspace",
    "Continuity from separation through migration",
  ],
];

export default function Page() {
  return (
    <ModernHub
      eyebrow="Solutions for transaction execution"
      title="Control the moments that determine"
      accent="deal outcomes."
      intro="Use one connected operating model to establish the baseline, protect Day 1, govern TSA delivery and accelerate migration and exit."
      primaryLabel="Book a demo"
      cards={cards}
      sectionLabel="BUILT FOR REAL TRANSACTION PRESSURE"
      sectionTitle="Move from planning activity to executable outcomes."
      sectionIntro="Each solution is connected to the same inventories, ownership model, dependencies and evidence—so progress in one part of the transaction does not create blind spots elsewhere."
      imageLabel="FOUR CONNECTED EXECUTION PRIORITIES"
      imageAlt="MergeVista solution areas"
      ctaTitle="Bring your transaction priorities into focus."
      ctaText="See how MergeVista can support your acquisition, divestiture, integration or separation."
      ctaLabel="Book a demo"
      ctaSecondaryLabel="Apply for a guided trial"
    >
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
          <Badge className="bg-white">FROM CHALLENGE TO OUTCOME</Badge>
          <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">
            Govern the transaction through what must be true.
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-zinc-600">
            MergeVista connects execution detail to the business outcomes
            leaders need to protect.
          </p>
          <Card className="mt-14 overflow-hidden">
            <div className="hidden grid-cols-3 border-b border-zinc-200 bg-zinc-50 text-xs font-semibold tracking-[.08em] text-zinc-500 md:grid">
              <span className="p-5">EXECUTION CHALLENGE</span>
              <span className="border-l border-zinc-200 p-5">
                MERGEVISTA APPROACH
              </span>
              <span className="border-l border-zinc-200 p-5">
                BUSINESS OUTCOME
              </span>
            </div>
            {outcomes.map((row) => (
              <div
                key={row[0]}
                className="grid border-b border-zinc-200 last:border-b-0 md:grid-cols-3"
              >
                {row.map((cell, index) => (
                  <div
                    key={cell}
                    className={`p-5 text-sm leading-6 ${index ? "md:border-l md:border-zinc-200" : "font-medium"}`}
                  >
                    <span className="mb-2 block text-[10px] font-semibold tracking-[.08em] text-zinc-400 md:hidden">
                      {
                        [
                          "EXECUTION CHALLENGE",
                          "MERGEVISTA APPROACH",
                          "BUSINESS OUTCOME",
                        ][index]
                      }
                    </span>
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </Card>
        </div>
      </section>
    </ModernHub>
  );
}
