"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  { href: "/about", label: "About", match: (p: string) => p === "/about" },
  {
    href: "/experience",
    label: "Experience",
    match: (p: string) => p === "/experience",
  },
  {
    href: "/projects",
    label: "Projects",
    match: (p: string) => p === "/projects",
  },
  { href: "/blog", label: "Blog", match: (p: string) => p.startsWith("/blog") },
  { href: "/#contact", label: "Contact", match: () => false },
];

export default function Nav() {
  const pathname = usePathname() || "/";

  return (
    <header className="sticky top-0 z-40">
      {/* maroon MySpace header bar */}
      <div className="bg-navy text-navy-foreground shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-2.5 sm:px-6">
          <Link href="/" className="order-1 shrink-0">
            <Image
              src="/myspace-logo.png"
              alt="myspace — a place for friends"
              width={860}
              height={272}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </Link>

          <form
            action="/"
            className="order-3 flex w-full min-w-0 items-center gap-2 sm:order-2 sm:w-auto sm:flex-1"
            role="search"
          >
            <span className="hidden shrink-0 text-sm sm:inline">Search:</span>
            <input
              type="search"
              aria-label="Search"
              className="h-7 min-w-0 flex-1 rounded-none border border-black/20 bg-white px-2 text-[13px] text-black sm:max-w-md"
            />
            <button
              type="submit"
              className="h-7 shrink-0 rounded-none border border-black/20 bg-white px-2 text-[12px] text-black"
            >
              Search
            </button>
          </form>

          <p className="order-2 ml-auto shrink-0 text-[12px] tracking-wide sm:order-3 sm:text-sm">
            HELP <span className="opacity-50">|</span> SIGN IN{" "}
            <span className="opacity-50">|</span> SIGN OUT
          </p>
        </div>
      </div>

      {/* gold tab row */}
      <nav className="tabrow border-b border-maroon-dark/20 backdrop-blur">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-2 sm:gap-3 sm:px-6">
          {tabs.map((tab) => (
            <li key={tab.href}>
              <Link
                href={tab.href}
                data-active={tab.match(pathname) ? "true" : "false"}
                className="tab"
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
