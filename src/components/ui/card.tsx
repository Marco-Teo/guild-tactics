import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/10",
        className,
      )}
      {...props}
    />
  );
}
