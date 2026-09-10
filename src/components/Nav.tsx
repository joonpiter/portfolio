"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/content";

const links = [
  { href: "/about", label: "About", match: (p: string) => p === "/about" },
  {
    href: "/experience",
    label: "Experience",
    match: (p: string) => p === "/experience",
  },
  // Projects tab hidden for now — add back once real project write-ups
  // are ready. The route itself still lives at src/app/projects/page.tsx.
  { href: "/blog", label: "Blog", match: (p: string) => p.startsWith("/blog") },
];

export default function Nav() {
  const pathname = usePathname() || "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3.5">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-border">
            <Image
              src="/headshot-barcelona.jpg"
              alt=""
              fill
              sizes="32px"
              className="object-cover"
            />
          </span>
          <span className="text-[14px] font-medium text-foreground">
            {profile.name}
          </span>
        </Link>

        <ul className="flex items-center gap-5 text-[13.5px] text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  link.match(pathname)
                    ? "text-foreground"
                    : "transition-colors hover:text-foreground"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border bg-card px-3.5 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:border-foreground/40"
        >
          Say hello
          <span aria-hidden>↗</span>
        </a>
      </nav>
    </header>
  );
}
