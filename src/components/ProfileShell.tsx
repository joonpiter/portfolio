import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

/**
 * The MySpace-style profile frame: maroon header + gold tabs, ticker, the
 * left profile rail, and a content column. Every page uses this so the site
 * reads as one continuous profile.
 */
export default function ProfileShell({
  children,
  after,
}: {
  children: ReactNode;
  /** full-bleed content rendered below the grid (e.g. the Contact band) */
  after?: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="paper flex-1">
        <div className="mx-auto grid max-w-[82rem] grid-cols-1 gap-8 px-4 py-8 sm:px-6 md:grid-cols-[250px_minmax(0,1fr)] md:gap-8 md:py-12">
          <Sidebar />
          <div className="min-w-0">{children}</div>
        </div>
      </main>
      {after}
      <Footer />
    </>
  );
}
