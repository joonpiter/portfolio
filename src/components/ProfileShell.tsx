import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/**
 * The shared page frame: sticky nav, a centered editorial content column,
 * and the footer. Every page uses this so the site reads as one system.
 */
export default function ProfileShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="paper flex-1">
        <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">{children}</div>
      </main>
      <Footer />
    </>
  );
}
