import {
  ArrowRight,
  Blocks,
  Database,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const foundations = [
  {
    icon: Blocks,
    title: "Composable UI",
    description:
      "Accessible primitives and server-first components form a reusable interface foundation.",
  },
  {
    icon: Smartphone,
    title: "Mobile first",
    description:
      "Navigation and interaction targets are designed for small screens and keyboard access.",
  },
  {
    icon: Database,
    title: "Data ready",
    description:
      "PostgreSQL, Prisma migrations and an explicitly labelled placeholder seed are configured.",
  },
  {
    icon: ShieldCheck,
    title: "Trust by design",
    description:
      "External input validation and clear data classification begin at the foundation layer.",
  },
] as const;

export default function HomePage() {
  return (
    <main id="main-content" className="pb-28 lg:pb-12">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="hero-glow" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Badge>Milestone 1 · Foundation demo</Badge>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl">
              Plan smarter. Build together.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Guild Tactics is a community companion for discovering, explaining
              and building GuildRun compositions across patches.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="#foundations">
                  Explore the foundation{" "}
                  <ArrowRight className="ml-2" size={18} aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#data-policy">Read the data policy</Link>
              </Button>
            </div>
          </div>
          <Card className="relative overflow-hidden border-amber-300/20 bg-slate-900/80 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
              Preview only
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">
              Composition workspace
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              The interactive builder arrives in a later milestone. This card
              demonstrates the visual system only.
            </p>
            <div
              className="mt-8 grid grid-cols-3 gap-3"
              aria-label="Placeholder 3 by 3 board preview"
            >
              {Array.from({ length: 9 }, (_, index) => (
                <div
                  key={index}
                  className="grid aspect-square place-items-center rounded-xl border border-dashed border-white/20 bg-white/[0.03] text-xs font-semibold text-slate-500"
                  aria-label={`Empty placeholder slot ${index + 1}`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-slate-400">
              Placeholder board — contains no official game data.
            </p>
          </Card>
        </div>
      </section>
      <section
        id="foundations"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="max-w-2xl">
          <p className="eyebrow">Built to grow</p>
          <h2 className="section-title">
            A trustworthy base for every upcoming milestone.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {foundations.map(({ description, icon: Icon, title }) => (
            <Card key={title}>
              <span className="grid size-11 place-items-center rounded-xl bg-white/5 text-amber-200">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </section>
      <section
        id="data-policy"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-16 sm:px-6 sm:pb-20"
      >
        <Card className="border-sky-300/20 bg-sky-300/[0.06] sm:p-8">
          <p className="eyebrow text-sky-200">Data policy</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white">
            No invented official data.
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Until an official source or explicit permission is available,
            development data and assets are labelled PLACEHOLDER. Community
            information will never be presented as official GuildRun statistics.
          </p>
        </Card>
      </section>
    </main>
  );
}
