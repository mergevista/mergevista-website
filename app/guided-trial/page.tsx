import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import GuidedTrialForm from "./GuidedTrialForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { Badge } from "../components/poc/badge";
import { Button } from "../components/poc/button";
import { Card } from "../components/poc/card";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "Request a Guided Trial | MergeVista",
  "Apply to evaluate MergeVista in a secure workspace configured around a representative IT M&A scenario.",
  "/guided-trial",
);
const steps = [
  [
    "Qualification",
    "Tell us about your organization, role, use case and expected transaction activity.",
  ],
  [
    "Discovery",
    "Join a focused 20–30-minute conversation and demonstration with our team.",
  ],
  [
    "Provisioning",
    "Qualified organizations receive a dedicated workspace containing a realistic, synthetic deal.",
  ],
  [
    "Guided evaluation",
    "Complete representative tasks with onboarding support over a defined 14–30-day period.",
  ],
];
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <SiteHeader />
      <section className="relative border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:px-8 lg:py-28">
          <div>
            <Badge className="gap-2 bg-white">
              <Sparkles className="size-3.5 text-[#1559a6]" />A secure,
              structured evaluation
            </Badge>
            <h1 className="mt-7 text-[clamp(2.75rem,4.8vw,5rem)] font-medium leading-[1] tracking-[-.05em]">
              Request a{" "}
              <span className="font-normal text-[#1559a6]">guided trial</span>{" "}
              of MergeVista.
            </h1>
            <p className="mt-7 text-lg leading-8 text-zinc-600">
              Explore MergeVista in a secure workspace configured around a
              representative IT M&amp;A scenario.
            </p>
            <Card className="mt-8 p-6">
              <h2 className="font-medium">Why guided?</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                MergeVista supports organization-level workflows, multiple roles
                and sensitive transaction data. A guided environment ensures
                your evaluation begins with the right structure, context and
                safeguards.
              </p>
            </Card>
          </div>
          <Card className="p-6 shadow-[0_18px_48px_rgba(24,24,27,.08)] sm:p-9">
            <GuidedTrialForm />
          </Card>
        </div>
      </section>
      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <Badge>WHAT TO EXPECT</Badge>
        <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-.04em] sm:text-5xl">
          A focused path from interest to informed evaluation.
        </h2>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Card key={t} className="p-8">
              <small className="text-[#1559a6]">0{i + 1}</small>
              <Check className="mt-8 size-5 text-[#1559a6]" />
              <h3 className="mt-5 text-xl font-medium">{t}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">{d}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge className="mb-5 border-zinc-700 bg-zinc-900 text-zinc-300">
              STILL EXPLORING?
            </Badge>
            <h2 className="text-3xl font-medium">
              Start with a focused product demonstration.
            </h2>
            <p className="mt-4 text-zinc-400">
              We will tailor the conversation around your transaction model,
              priorities and questions.
            </p>
          </div>
          <Button asChild variant="inverse">
            <Link href="/book-a-demo">
              Request a demo
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
      <SiteFooter bordered />
    </main>
  );
}
