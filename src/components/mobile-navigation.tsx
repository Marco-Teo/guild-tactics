import { Home, Plus, Search, Sparkles, UserRound } from "lucide-react";
import Link from "next/link";

const items = [
  { label: "Home", icon: Home, emphasized: false },
  { label: "Search", icon: Search, emphasized: false },
  { label: "Create", icon: Plus, emphasized: true },
  { label: "Patches", icon: Sparkles, emphasized: false },
  { label: "Profile", icon: UserRound, emphasized: false },
] as const;

export function MobileNavigation() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur lg:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {items.map(({ emphasized, icon: Icon, label }) => (
          <li key={label}>
            <Link
              className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[0.68rem] font-semibold text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              href={label === "Home" ? "/" : "#foundations"}
            >
              <span
                className={
                  emphasized
                    ? "-mt-7 grid size-12 place-items-center rounded-full bg-amber-300 text-slate-950 shadow-lg shadow-amber-300/20"
                    : ""
                }
              >
                <Icon size={emphasized ? 24 : 20} aria-hidden="true" />
              </span>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
