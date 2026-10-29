import Link from "next/link";
import { Check, Play, Sparkles } from "lucide-react";
import BookDemoForm from "./BookDemoForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { Badge } from "../components/poc/badge";
import { Card } from "../components/poc/card";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "Book a Demo | MergeVista",
  "Book a focused demonstration of the MergeVista AI-powered IT M&A execution platform.",
  "/book-a-demo",
);
const outcomes = [
  "Explore the complete IT M&A lifecycle",
  "See connected inventory and execution",
  "Discuss your Day 1, TSA and exit priorities",
];
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <SiteHeader />
      <section className="relative bg-[#fcfcfc]">
        <div className="mx-auto grid max-w-[1560px] gap-14 px-5 py-20 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:px-8 lg:py-28">
          <div>
            <Badge className="gap-2 bg-white">
              <Sparkles className="size-3.5 text-[#1559a6]" />A focused product
              conversation
            </Badge>
            <h1 className="mt-7 text-[clamp(2.75rem,4.8vw,5rem)] font-medium leading-[1] tracking-[-.05em]">
              See how MergeVista brings{" "}
              <span className="font-normal text-[#1559a6]">
                clarity and control
              </span>{" "}
              to IT M&amp;A execution.
            </h1>
            <p className="mt-7 text-lg leading-8 text-zinc-600">
              Tell us what you are working through. We will tailor the
              conversation around your transaction, operating model and
              priorities.
            </p>
            <div className="mt-8 space-y-3">
              {outcomes.map((x) => (
                <div
                  key={x}
                  className="flex items-center gap-3 text-sm text-zinc-700"
                >
                  <Check className="size-4 text-[#1559a6]" />
                  {x}
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-zinc-500">
              Want a quick introduction first?{" "}
              <Link
                className="inline-flex items-center gap-1.5 font-medium text-[#1559a6]"
                href="/product-demo"
              >
                <Play className="size-3.5 fill-current" />
                Watch the product overview
              </Link>
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              Prefer email?{" "}
              <a
                className="font-medium text-[#1559a6]"
                href="mailto:hello@mergevista.com"
              >
                hello@mergevista.com
              </a>
            </p>
          </div>
          <Card className="p-6 shadow-[0_18px_48px_rgba(24,24,27,.08)] sm:p-9">
            <BookDemoForm />
          </Card>
        </div>
      </section>
      <SiteFooter bordered />
    </main>
  );
}
