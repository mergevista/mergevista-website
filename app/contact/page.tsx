import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { Badge } from "../components/poc/badge";
import { Button } from "../components/poc/button";
import { Card } from "../components/poc/card";
import { pageMetadata } from "../lib/seo";
export const metadata = pageMetadata(
  "Contact | MergeVista",
  "Contact MergeVista for product demonstrations, customer support and general inquiries.",
  "/contact",
);
const routes = [
  {
    number: "01",
    title: "Sales and demos",
    text: "Explore how MergeVista can support your acquisition, divestiture, integration or separation.",
    action: "Request a product conversation",
    href: "/book-a-demo",
  },
  {
    number: "02",
    title: "Guided trial",
    text: "Evaluate MergeVista seriously in a secure workspace configured around a representative IT M&A scenario.",
    action: "Apply for a guided trial",
    href: "/guided-trial",
  },
  {
    number: "03",
    title: "Customer support",
    text: "Get help with workspace access, product questions or an existing MergeVista engagement.",
    action: "support@mergevista.com",
    href: "mailto:support@mergevista.com",
  },
  {
    number: "04",
    title: "General inquiries",
    text: "Contact us about partnerships, company information, media or anything else.",
    action: "hello@mergevista.com",
    href: "mailto:hello@mergevista.com",
  },
];
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <SiteHeader />
      <section className="relative border-b border-zinc-200 bg-[#fcfcfc]">
        <div className="mx-auto max-w-[1560px] px-5 py-24 lg:px-8 lg:py-32">
          <Badge className="gap-2 bg-white">
            <Sparkles className="size-3.5 text-[#1559a6]" />
            Start a conversation
          </Badge>
          <h1 className="mt-7 text-[clamp(3rem,6vw,6rem)] font-medium leading-none tracking-[-.055em]">
            How can we help?
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
            Choose the path that best fits what you need. We will make sure your
            message reaches the right person.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[1560px] px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-4 md:grid-cols-2">
          {routes.map((x) => (
            <Card key={x.title} className="flex min-h-64 flex-col p-8">
              <small className="text-[10px] font-semibold tracking-[.16em] text-[#1559a6]">
                {x.number}
              </small>
              <h2 className="text-2xl font-medium">{x.title}</h2>
              <p className="mt-4 max-w-xl leading-7 text-zinc-600">{x.text}</p>
              <Button
                asChild
                variant="ghost"
                className="mt-auto self-start px-0"
              >
                <Link href={x.href}>
                  {x.action}
                  <ArrowRight />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
        <div className="mt-16 grid gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
              BUSINESS ADDRESS
            </Badge>
            <h2 className="mt-6 text-3xl font-medium">MergeVista LLC</h2>
          </div>
          <address className="not-italic leading-8 text-zinc-300">
            9355 John W. Elliott Drive, Suite 25
            <br />
            Frisco, TX 75033
            <br />
            United States
          </address>
        </div>
        <div className="mt-8 flex flex-col gap-5 rounded-xl border border-zinc-200 bg-zinc-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="leading-7 text-zinc-600">
            <b className="text-zinc-950">
              ✓ A thoughtful response—not an automated sales sequence.
            </b>
            <br />
            We typically respond to inquiries within one business day.
          </p>
          <Link
            href="/"
            className="shrink-0 text-sm font-medium text-[#1559a6]"
          >
            Return to homepage
          </Link>
        </div>
      </section>
      <SiteFooter bordered />
    </main>
  );
}
