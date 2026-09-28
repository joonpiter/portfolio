import type { Metadata } from "next";
import ProfileShell from "@/components/ProfileShell";
import DraftTag from "@/components/DraftTag";
import { profile, contactEmail } from "@/data/content";
import { topics, communities, guide } from "@/data/officeHours";
import { visible } from "@/data/drafts";

export const metadata: Metadata = {
  title: `Office hours — ${profile.name}`,
};

export default function OfficeHoursPage() {
  const bookingUrl = profile.links.officeHours;
  const bookingHref =
    bookingUrl ||
    `mailto:${contactEmail}?subject=${encodeURIComponent("Office hours")}`;
  const tips = visible(guide);

  return (
    <ProfileShell>
      <div className="space-y-16">
        <section>
          <p className="eyebrow">Office hours</p>

          <h1 className="mt-4 font-display text-[44px] font-normal leading-[1.05] text-foreground sm:text-[56px]">
            Let&rsquo;s talk recruiting.
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            If you&rsquo;re a student trying to break into product, or just
            trying to make sense of recruiting, I&rsquo;d love to talk. Bring
            whatever you&rsquo;re stuck on.
          </p>

          <a
            href={bookingHref}
            {...(bookingUrl
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-maroon px-5 py-2.5 text-[14px] font-medium text-background transition-colors hover:bg-maroon-dark"
          >
            {bookingUrl ? "Book a time" : "Email me to find a time"}
            <span aria-hidden>↗</span>
          </a>
        </section>

        <section aria-labelledby="topics-label">
          <h2
            id="topics-label"
            className="font-display text-[26px] font-normal text-foreground"
          >
            What we can talk about
          </h2>
          <ul className="mt-5 divide-y divide-rule border-t border-rule">
            {topics.map((topic) => (
              <li key={topic} className="py-4 text-[14.5px] text-foreground/85">
                {topic}
              </li>
            ))}
          </ul>
        </section>

        {tips.length > 0 && (
          <section aria-labelledby="guide-label">
            <h2
              id="guide-label"
              className="font-display text-[26px] font-normal text-foreground"
            >
              The PM recruiting guide I wish I&rsquo;d had
            </h2>
            <ul className="mt-5 divide-y divide-rule border-t border-rule">
              {tips.map((tip) => (
                <li key={tip.title} className="py-6">
                  <h3 className="font-display text-[19px] font-normal leading-snug text-foreground">
                    {tip.title}
                    <DraftTag show={tip.draft} />
                  </h3>
                  <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-foreground/80">
                    {tip.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="communities-label">
          <h2
            id="communities-label"
            className="font-display text-[26px] font-normal text-foreground"
          >
            Programs and communities worth knowing
          </h2>
          <ul className="mt-5 divide-y divide-rule border-t border-rule">
            {communities.map((c) => (
              <li key={c.name} className="py-5">
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground transition-colors hover:text-maroon"
                  >
                    {c.name} <span aria-hidden>↗</span>
                  </a>
                ) : (
                  <span className="font-medium text-foreground">{c.name}</span>
                )}
                <span className="mt-0.5 block text-[13.5px] text-muted">
                  {c.note}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </ProfileShell>
  );
}
