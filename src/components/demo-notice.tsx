import { TriangleAlert } from "lucide-react";

export function DemoNotice() {
  return (
    <aside
      className="border-b border-sky-300/20 bg-sky-300/10 text-sky-100"
      aria-label="Data status"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-3 text-sm sm:px-6">
        <TriangleAlert
          className="mt-0.5 shrink-0"
          size={18}
          aria-hidden="true"
        />
        <p>
          <strong>Demo foundation:</strong> all game-related names, metrics and
          cards shown here are clearly marked placeholders, not official
          GuildRun data.
        </p>
      </div>
    </aside>
  );
}
