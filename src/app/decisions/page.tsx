import type { Metadata } from "next";
import Link from "next/link";
import ProfileShell from "@/components/ProfileShell";
import DraftTag from "@/components/DraftTag";
import { profile } from "@/data/content";
import { decisions } from "@/data/decisions";
import { visible } from "@/data/drafts";

export const metadata: Metadata = {
  title: `Decision log — ${profile.name}`,
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-[130px_1fr]">
      <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted sm:pt-0.5">
        {label}
      </p>
      <div className="text-[14.5px] leading-relaxed text-foreground/85">
        {children}
      </div>
    </div>
  );
}

export default function DecisionsPage() {
  const entries = visible(decisions);

  return (
    <ProfileShell>
      <div className="space-y-14">
        <section>
          <p className="eyebrow">Decision log</p>

          <h1 className="mt-4 font-display text-[44px] font-normal leading-[1.05] text-foreground sm:text-[56px]">
            Decisions, not screenshots.
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            Most of my internship work lives behind NDAs, so here&rsquo;s the
            thinking instead: one decision from each role. The problem, the
            options on the table, what I chose and why, and what happened.
          </p>
        </section>

        {entries.length === 0 ? (
          <p className="text-[14.5px] text-muted">
            Coming soon. In the meantime, the short version is on{" "}
            <Link href="/experience" className="ms-link">
              Experience
            </Link>
            .
          </p>
        ) : (
          <ol className="divide-y divide-rule border-t border-rule">
            {entries.map((d) => (
              <li key={d.company} className="py-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-maroon">
                  {d.period}
                </p>
                <h2 className="mt-2 font-display text-[24px] font-normal leading-snug text-foreground">
                  {d.headline}
                  <DraftTag show={d.draft} />
                </h2>
                <p className="mt-1 text-[13.5px] text-muted">
                  {d.role} · {d.company}
                </p>

                <div className="mt-6 space-y-5">
                  <Row label="The problem">{d.problem}</Row>
                  <Row label="Options">
                    <ul className="list-disc space-y-1 pl-4 marker:text-muted">
                      {d.options.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                  </Row>
                  <Row label="What I chose">{d.choice}</Row>
                  <Row label="What happened">
                    <span className="font-medium text-foreground">
                      {d.result}
                    </span>
                  </Row>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </ProfileShell>
  );
}
