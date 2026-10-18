import type { ReactNode } from "react";
import { cn } from "./cn";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-600", className)}>{children}</span>;
}
