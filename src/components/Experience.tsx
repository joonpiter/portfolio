import {
  ExperienceItem,
  experience,
  leadership,
  publications,
  profile,
  about,
} from "@/data/content";

function RoleList({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="mt-5 divide-y divide-rule border-t border-rule">
      {items.map((item, i) => (
        <li key={i} className="py-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-maroon">
            {item.period}
          </p>
          <h3 className="mt-2 font-display text-[21px] font-normal leading-snug text-foreground">
            {item.role}
            <span className="text-muted"> · {item.org}</span>
          </h3>
          <p className="mt-2.5 max-w-2xl text-[14.5px] leading-relaxed text-foreground/80">
            {item.summary}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  return (
    <div className="space-y-16">
      <section id="experience">
        <p className="eyebrow">
          <span aria-hidden>⚗</span> Experience
        </p>

        <h1 className="mt-4 font-display text-[44px] font-normal leading-[1.05] text-foreground sm:text-[54px]">
          Building products in fintech.
        </h1>

        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          Product internships across trading desks, retail branches, and member
          support: Bank of America, US Bank, AARP, and IBM. Updated September
          2026.
        </p>
      </section>

      <section aria-labelledby="work-label">
        <h2
          id="work-label"
          className="font-display text-[26px] font-normal text-foreground"
        >
          Work
        </h2>
        <RoleList items={experience} />
      </section>

      <section aria-labelledby="leadership-label">
        <h2
          id="leadership-label"
          className="font-display text-[26px] font-normal text-foreground"
        >
          Leadership &amp; Professional Development
        </h2>
        <RoleList items={leadership} />
      </section>

      <section aria-labelledby="pubs-label">
        <h2
          id="pubs-label"
          className="font-display text-[26px] font-normal text-foreground"
        >
          Publications &amp; talks
        </h2>
        <ul className="mt-5 divide-y divide-rule border-t border-rule">
          {publications.map((pub) => (
            <li key={pub.title} className="py-6 text-[14.5px] leading-relaxed">
              {pub.url ? (
                <a
                  className="font-medium text-foreground transition-colors hover:text-maroon"
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.title} <span aria-hidden>↗</span>
                </a>
              ) : (
                <span className="font-medium text-foreground">{pub.title}</span>
              )}
              <span className="mt-0.5 block text-[12.5px] text-muted">
                {pub.venue}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[12.5px]">
          <a
            className="text-muted transition-colors hover:text-foreground"
            href={profile.links.acm}
            target="_blank"
            rel="noopener noreferrer"
          >
            Full list on my ACM author profile →
          </a>
        </p>
      </section>

      <section aria-labelledby="toolkit-label">
        <h2
          id="toolkit-label"
          className="font-display text-[26px] font-normal text-foreground"
        >
          Toolkit
        </h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {about.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border px-3 py-1 text-[12.5px] text-foreground/80"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
