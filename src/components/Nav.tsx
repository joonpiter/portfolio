"use client";

import { useEffect, useRef, useState } from "react";
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

/** The "Say hello" nav pill — opens a small card with contact info instead of
 *  jumping straight to a mailto: link. */
function SayHello() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3.5 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:border-foreground/40"
      >
        Say hello
        <span aria-hidden>↗</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Contact"
          className="absolute right-0 top-[calc(100%+10px)] w-60 rounded-2xl border border-border bg-card p-4 shadow-lg"
        >
          <p className="text-[11px] font-medium uppercase tracking-wide text-muted">
            Get in touch
          </p>
          <div className="mt-2.5 flex flex-col gap-2 text-[13px]">
            <a
              href={`mailto:${profile.email}`}
              className="text-foreground transition-colors hover:text-maroon"
            >
              {profile.email} <span aria-hidden>↗</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-maroon"
            >
              LinkedIn <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

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

        <SayHello />
      </nav>
    </header>
  );
}
