import Link from "next/link";
import { profile } from "@/data/content";
import { currentVersion } from "@/data/changelog";

export default function Footer() {
  const links = [
    { label: "About", href: "/about", external: false },
    { label: "LinkedIn", href: profile.links.linkedin, external: true },
    { label: "Résumé", href: profile.links.resume, external: true },
    { label: "ACM Profile", href: profile.links.acm, external: true },
  ].filter((l) => l.href);

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-6 text-[13px] text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name}
          <Link
            href="/changelog"
            className="ml-2 transition-colors hover:text-foreground"
            aria-label={`Version ${currentVersion} release notes`}
          >
            v{currentVersion}
          </Link>
        </span>

        <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {l.label} <span aria-hidden>↗</span>
              </a>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            )
          )}
        </span>

        <a
          href={`mailto:${profile.email}`}
          className="font-medium text-foreground transition-opacity hover:opacity-70"
        >
          Say hello <span aria-hidden>↗</span>
        </a>
      </div>
    </footer>
  );
}
