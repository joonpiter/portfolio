import { about, education, profile, myspace } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-32 space-y-5">
      <h2 className="font-display text-2xl font-bold text-maroon sm:text-[30px]">
        About Isabel
      </h2>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5">
          <div className="module">
            <p className="module-head">In My Own Words</p>
            <div className="space-y-3 px-4 py-3 text-[13.5px] leading-relaxed">
              {about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              <p className="text-[12px] text-muted">{profile.cityLine}</p>
            </div>
          </div>

          <div className="module">
            <p className="module-head">Who I&apos;d Like to Meet</p>
            <p className="px-4 py-3 text-[13.5px] leading-relaxed">
              {myspace.whoIdLikeToMeet}
            </p>
          </div>

          <div className="module">
            <p className="module-head">Interests</p>
            <dl className="divide-y divide-border/60 px-4 py-1 text-[13px]">
              {Object.entries(myspace.interests).map(([k, v]) => (
                <div key={k} className="grid grid-cols-[84px_1fr] gap-3 py-2">
                  <dt className="font-bold text-maroon">{k}</dt>
                  <dd className="text-foreground/85">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="space-y-5">
          <div className="module">
            <p className="module-head">Schools</p>
            <div className="px-4 py-3 text-[13px]">
              <p className="font-bold">{education.school}</p>
              <p className="text-[12px] text-muted">
                {education.degree} · {education.gradYear}
                {education.gpa ? ` · GPA ${education.gpa}` : ""}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {education.organizations.slice(0, 5).map((org) => (
                  <span
                    key={org}
                    className="border border-border bg-background px-1.5 py-0.5 text-[11px] text-muted"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="module">
            <p className="module-head">Details</p>
            <dl className="divide-y divide-border/60 px-4 py-1 text-[12.5px]">
              {Object.entries(myspace.details).map(([k, v]) => (
                <div key={k} className="py-1.5">
                  <dt className="font-bold text-maroon">{k}</dt>
                  <dd className="text-foreground/85">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
