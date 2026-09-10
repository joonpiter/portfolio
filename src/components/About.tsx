import Image from "next/image";
import {
  about,
  education,
  experience,
  profile,
} from "@/data/content";

const links = [
  { label: "View résumé", href: profile.links.resume },
  { label: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "ACM", href: profile.links.acm },
].filter((l) => l.href);

// A chronological "path" — education plus the internships that shaped it.
const path = [
  ...experience.map((e) => ({
    period: e.period,
    org: e.org,
    role: e.role,
    detail: e.summary,
  })),
  {
    period: education.gradYear,
    org: education.school,
    role: education.degree,
    detail: `Interdisciplinary Honors${
      education.gpa ? ` · GPA ${education.gpa}` : ""
    }.`,
  },
];

const skillGroups = [
  { label: "Tools", items: ["Python", "SQL", "Figma", "Jira"] },
  {
    label: "Practice",
    items: [
      "User Research",
      "A/B Testing",
      "PRD Writing",
      "Agile / Scrum",
      "Stakeholder Management",
    ],
  },
];

export default function About() {
  return (
    <div className="space-y-16">
      <section id="about">
        <p className="eyebrow">About</p>

        <h1 className="mt-4 font-display text-[44px] font-normal leading-[1.05] text-foreground sm:text-[56px]">
          Hi, I&rsquo;m Isabel.
        </h1>

        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          Product management student at the University of Washington. Fintech by
          day; pottery, crochet, and oolong tea by everything else.
        </p>

        <div className="mt-8 overflow-hidden">
          <span className="relative mb-6 block aspect-[4/5] w-full overflow-hidden rounded-xl border border-border sm:float-right sm:mb-2 sm:ml-8 sm:w-[42%]">
            <Image
              src="/headshot-barcelona.jpg"
              alt={`${profile.name}`}
              fill
              sizes="(min-width: 640px) 320px, 100vw"
              className="object-cover"
            />
          </span>

          <div className="space-y-4 text-[14.5px] leading-relaxed text-foreground/85">
            {about.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p>
              Along the way: a NASA Studentship, national NCWIT awards, two papers
              presented at ACM CHI and RESPECT, and a spot in the top 5% of
              10,000+ applicants for IBM&rsquo;s design apprenticeship.
            </p>
            <p className="text-muted">{profile.cityLine}</p>
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-foreground transition-colors hover:text-maroon"
              >
                {l.label} <span aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="path-label">
        <p id="path-label" className="eyebrow">
          The path
        </p>

        <ol className="mt-6 divide-y divide-rule border-t border-rule">
          {path.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-1 gap-x-8 gap-y-1.5 py-6 sm:grid-cols-[160px_1fr]"
            >
              <p className="text-[11.5px] font-medium uppercase tracking-[0.1em] text-maroon sm:pt-1">
                {item.period}
              </p>
              <div>
                <h3 className="font-display text-[19px] font-normal leading-snug text-foreground">
                  {item.org}
                </h3>
                <p className="mt-0.5 text-[13.5px] text-foreground/80">
                  {item.role}
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="skills-label">
        <p id="skills-label" className="eyebrow">
          Skills
        </p>

        <div className="mt-6 space-y-6">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-display text-[18px] font-normal text-foreground">
                {group.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-[12.5px] text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
