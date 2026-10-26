import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Badge } from "../components/poc/badge";
import { Button } from "../components/poc/button";
import { Card } from "../components/poc/card";

export function ArticleTakeaway({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto max-w-[980px] px-5 pt-14 lg:pt-20">
      <Card className="p-7 sm:p-9">
        <Badge className="gap-2">
          <Lightbulb className="size-3.5 text-[#1559a6]" />
          KEY TAKEAWAY
        </Badge>
        <div className="mt-5 text-xl font-normal leading-8 tracking-[-.02em] text-zinc-800 sm:text-2xl sm:leading-9">
          {children}
        </div>
      </Card>
    </section>
  );
}

export function ArticleBody({ children }: { children: ReactNode }) {
  return (
    <article className="mx-auto max-w-[800px] px-5 py-16 text-[16px] leading-[1.9] text-zinc-600 sm:py-24 [&_.article-lead]:text-xl [&_.article-lead]:leading-9 [&_.article-lead]:text-zinc-800 [&_a]:font-medium [&_a]:text-[#1559a6] [&_blockquote]:my-12 [&_blockquote]:rounded-xl [&_blockquote]:border [&_blockquote]:border-zinc-800 [&_blockquote]:bg-zinc-950 [&_blockquote]:p-7 [&_blockquote]:text-xl [&_blockquote]:leading-8 [&_blockquote]:text-white [&_h2]:mb-5 [&_h2]:mt-16 [&_h2]:text-3xl [&_h2]:font-medium [&_h2]:leading-tight [&_h2]:tracking-[-.04em] [&_h2]:text-zinc-950 [&_h3]:mb-3 [&_h3]:mt-10 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-zinc-950 [&_li]:my-2 [&_p]:mb-5 [&_strong]:font-semibold [&_strong]:text-zinc-800 [&_ul]:my-8">
      {children}
    </article>
  );
}

export function ArticleCta({
  eyebrow,
  title,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
}) {
  return (
    <section className="px-5 py-14 lg:px-8">
      <div className="mx-auto grid max-w-[1500px] gap-8 rounded-2xl bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
        <div>
          <Badge className="border-zinc-700 bg-zinc-900 text-zinc-300">
            {eyebrow}
          </Badge>
          <h2 className="mt-6 max-w-4xl text-3xl font-medium leading-tight tracking-[-.04em] sm:text-5xl">
            {title}
          </h2>
        </div>
        <Button asChild size="lg" variant="inverse">
          <Link href="/book-a-demo">
            Book a demo
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
