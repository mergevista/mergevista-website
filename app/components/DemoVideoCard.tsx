"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import VimeoDemoPlayer from "./VimeoDemoPlayer";

type DemoVideoCardProps = {
  caption?: string;
  priority?: boolean;
};

export default function DemoVideoCard({
  caption = "2-minute product overview",
  priority = false,
}: DemoVideoCardProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block w-full text-left"
        aria-label="Play the MergeVista product overview"
      >
        <span className="block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_56px_rgba(24,24,27,0.12)] transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_26px_68px_rgba(24,24,27,0.16)]">
          <span className="flex h-9 items-center border-b border-zinc-800 bg-zinc-950 px-3.5 text-white">
            <span className="flex gap-1.5" aria-hidden="true">
              <i className="size-1.5 rounded-full bg-red-400" />
              <i className="size-1.5 rounded-full bg-amber-300" />
              <i className="size-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="ml-3 text-[9px] tracking-wide text-zinc-400">
              MergeVista PRODUCT OVERVIEW
            </span>
          </span>
          <span className="relative block aspect-video overflow-hidden bg-zinc-100">
            <Image
              src="/product/redesign-deal-execution-dashboard-landing.png"
              alt="MergeVista deal execution dashboard video preview"
              fill
              priority={priority}
              className="object-cover transition duration-500 group-hover:scale-[1.01]"
              sizes="(max-width:900px) 94vw, 62vw"
            />
            <span className="absolute inset-0 bg-zinc-950/10 transition group-hover:bg-zinc-950/15" />
            <span className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/95 text-[#1559a6] shadow-xl transition duration-300 group-hover:scale-105 sm:size-24">
              <Play className="ml-1 size-8 fill-current sm:size-10" />
            </span>
          </span>
          <span className="flex items-center justify-between gap-4 border-t border-zinc-200 px-5 py-4">
            <span className="text-sm font-medium text-zinc-800">{caption}</span>
            <span className="text-xs font-medium text-[#1559a6]">Play video →</span>
          </span>
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="MergeVista product overview"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpen(false);
          }}
        >
          <div className="relative w-full max-w-[1280px] overflow-hidden rounded-2xl bg-black shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
              aria-label="Close video"
            >
              <X className="size-5" />
            </button>
            <div className="aspect-video">
              <VimeoDemoPlayer autoplay />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
