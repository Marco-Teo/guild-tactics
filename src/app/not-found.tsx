import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="mx-auto grid min-h-[60vh] max-w-2xl place-items-center px-4 text-center"
    >
      <div>
        <p className="eyebrow">404</p>
        <h1 className="section-title">This route is not on the board.</h1>
        <p className="mt-4 text-slate-300">
          The requested page does not exist.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </main>
  );
}
