import { Search, Shield } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const navigation = [
  "Compositions",
  "Builder",
  "Characters",
  "Items",
  "Patches",
  "Tier List",
  "Meta",
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link
          className="flex shrink-0 items-center gap-2 font-black tracking-tight text-white"
          href="/"
        >
          <span
            className="grid size-9 place-items-center rounded-xl bg-amber-300 text-slate-950"
            aria-hidden="true"
          >
            <Shield size={20} />
          </span>
          <span>Guild Tactics</span>
        </Link>
        <nav
          className="ml-auto hidden items-center gap-1 xl:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              href="#foundations"
            >
              {item}
            </Link>
          ))}
        </nav>
        <Button
          className="ml-auto hidden lg:inline-flex xl:ml-2"
          variant="secondary"
        >
          <Search className="mr-2" size={16} aria-hidden="true" /> Search
        </Button>
        <Button className="hidden sm:inline-flex" variant="primary">
          Log in
        </Button>
      </div>
    </header>
  );
}
