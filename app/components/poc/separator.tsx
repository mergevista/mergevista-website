import { cn } from "./cn";

export function Separator({ className }: { className?: string }) {
  return <div role="separator" className={cn("h-px w-full bg-zinc-200", className)} />;
}
