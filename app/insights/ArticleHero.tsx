import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Badge } from "../components/poc/badge";
import { Card } from "../components/poc/card";

export default function ArticleHero({
  category,
  title,
  description,
  date,
  image,
  imageAlt,
}: {
  category: ReactNode;
  title: ReactNode;
  description: ReactNode;
  date: ReactNode;
  image: string;
  imageAlt: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-zinc-200 bg-[#fcfcfc]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-[.28] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <div className="relative mx-auto grid max-w-[1560px] gap-12 px-5 py-16 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-600"
          >
            <ArrowLeft className="size-3.5" /> Back to Insights
          </Link>
          <Badge className="mt-8 flex w-fit gap-2 bg-white">
            <Sparkles className="size-3.5 text-[#1559a6]" />
            {category}
          </Badge>
          <h1 className="mt-6 max-w-[820px] text-[clamp(2.6rem,4.4vw,4.5rem)] font-medium leading-[1.02] tracking-[-.05em]">
            {title}
          </h1>
          <p className="mt-6 max-w-[720px] text-lg leading-8 text-zinc-600">
            {description}
          </p>
          <div className="mt-7 flex items-center gap-3 text-xs text-zinc-500">
            <span>MergeVista Insights</span>
            <i className="size-1 rounded-full bg-zinc-400" />
            <span>{date}</span>
          </div>
        </div>
        <Card className="overflow-hidden shadow-[0_18px_48px_rgba(24,24,27,.08)]">
          <div className="flex h-9 items-center border-b border-zinc-800 bg-zinc-950 px-3.5 text-white">
            <span className="text-[9px] tracking-wide text-zinc-400">
              MERGEVISTA INSIGHTS
            </span>
            <Badge className="ml-auto border-zinc-700 bg-zinc-900 text-zinc-300">
              EXECUTION PERSPECTIVE
            </Badge>
          </div>
          <Image
            src={image}
            alt={imageAlt}
            width={1672}
            height={941}
            priority
            className="aspect-[16/9] h-auto w-full object-cover"
            sizes="(max-width:900px) 94vw,50vw"
          />
        </Card>
      </div>
    </header>
  );
}
