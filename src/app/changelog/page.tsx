import type { Metadata } from "next";
import ProfileShell from "@/components/ProfileShell";
import { profile } from "@/data/content";
import { releases, type NoteKind } from "@/data/changelog";

export const metadata: Metadata = {
  title: `Release notes — ${profile.name}`,
};

const kindLabel: Record<NoteKind, string> = {
  new: "New",
  fixed: "Fixed",
  known: "Known issue",
};

export default function ChangelogPage() {
  return (
    <ProfileShell>
      <div className="space-y-14">
        <section>
          <p className="eyebrow">Release notes</p>

          <h1 className="mt-4 font-display text-[44px] font-normal leading-[1.05] text-foreground sm:text-[56px]">
            What&rsquo;s new.
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            Every version of this site, from the first commit on.
          </p>
        </section>

        <ol className="divide-y divide-rule border-t border-rule">
          {releases.map((r) => (
            <li
              key={r.version}
              className="grid grid-cols-1 gap-x-8 gap-y-3 py-8 sm:grid-cols-[150px_1fr]"
            >
              <div>
                <p className="font-display text-[22px] leading-none text-foreground">
                  v{r.version}
                </p>
                <p className="mt-2 text-[12px] text-muted">{r.date}</p>
              </div>
              <div>
                <h2 className="font-display text-[20px] font-normal leading-snug text-foreground">
                  {r.title}
                </h2>
                <ul className="mt-3 space-y-2">
                  {r.notes.map((n) => (
                    <li
                      key={n.text}
                      className="grid grid-cols-[88px_1fr] items-baseline gap-3 text-[14px] leading-relaxed"
                    >
                      <span
                        className={
                          "text-[11px] font-medium uppercase tracking-[0.1em] " +
                          (n.kind === "known" ? "text-muted" : "text-maroon")
                        }
                      >
                        {kindLabel[n.kind]}
                      </span>
                      <span
                        className={
                          n.kind === "known"
                            ? "italic text-foreground/75"
                            : "text-foreground/85"
                        }
                      >
                        {n.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </ProfileShell>
  );
}
