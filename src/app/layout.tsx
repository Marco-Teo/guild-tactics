import type { Metadata, Viewport } from "next";

import { DemoNotice } from "@/components/demo-notice";
import { MobileNavigation } from "@/components/mobile-navigation";
import { SiteHeader } from "@/components/site-header";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: { default: "Guild Tactics", template: "%s | Guild Tactics" },
  description:
    "A community companion for discovering and building GuildRun compositions.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <DemoNotice />
        {children}
        <MobileNavigation />
      </body>
    </html>
  );
}
