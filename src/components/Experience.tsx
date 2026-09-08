import {
  ExperienceItem,
  experience,
  leadership,
  publications,
  profile,
  about,
} from "@/data/content";

function TimelineList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={i}
          className="border-t border-border py-4 first:border-t-0 first:pt-1"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
            <h3 className="font-bold text-foreground">
              {item.role}
              <span className="font-normal text-muted"> — {item.org}</span>
            </h3>
            <p className="shrink-0 text-[11px] uppercase tracking-wide text-muted">
              {item.period}
            </p>
          </div>
          <ul className="mt-2 space-y-1 text-[13px] leading-snug">
            {item.bullets.map((bullet, j) => (
              <li key={j} className="flex gap-2">
                <span className="mt-px shrink-0 text-[11px] text-maroon">★</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-32 space-y-5">
      <h2 className="font-display text-2xl font-bold text-maroon sm:text-[30px]">
        Experience
      </h2>

      <div className="module">
        <p className="module-head">Work History</p>
        <div className="px-4 py-2">
          <TimelineList items={experience} />
        </div>
      </div>

      <div className="module">
        <p className="module-head">Leadership &amp; Involvement</p>
        <div className="px-4 py-2">
          <TimelineList items={leadership} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="module">
          <p className="module-head">Publications</p>
          <ul className="space-y-2.5 px-4 py-3 text-[13px]">
            {publications.map((pub) => (
              <li key={pub.title}>
                {pub.url ? (
                  <a
                    className="ms-link font-medium"
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <span className="font-medium">{pub.title}</span>
                )}
                <span className="text-muted"> — {pub.venue}</span>
              </li>
            ))}
          </ul>
          <p className="border-t border-border px-4 py-2 text-[12px]">
            <a
              className="ms-link"
              href={profile.links.acm}
              target="_blank"
              rel="noopener noreferrer"
            >
              Full list on my ACM author profile →
            </a>
          </p>
        </div>

        <div className="module">
          <p className="module-head">Toolkit</p>
          <div className="flex flex-wrap gap-1.5 px-4 py-3">
            {about.skills.map((skill) => (
              <span
                key={skill}
                className="border border-border bg-background px-2 py-0.5 text-[11px] text-foreground/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
