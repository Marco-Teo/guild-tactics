import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-200",
        className,
      )}
      {...props}
    />
  );
}
