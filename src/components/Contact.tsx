import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-32 border-t border-maroon-dark/40 bg-navy text-navy-foreground"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Let&apos;s talk.
        </h2>
        <p className="mt-3 max-w-xl text-[13px] text-navy-foreground/75">
          Open to product internships and full-time roles — always happy to chat
          about product, research, or what you&apos;re building.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="border border-tan-dark bg-tan px-4 py-2 text-[13px] font-bold uppercase tracking-wide text-white shadow-[inset_0_-3px_0_rgba(0,0,0,0.18)] hover:brightness-110"
          >
            {profile.email}
          </a>
          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              className="border border-navy-foreground/40 px-4 py-2 text-[13px] font-bold uppercase tracking-wide hover:bg-navy-foreground/10"
            >
              LinkedIn
            </a>
          )}
          {profile.links.github && (
            <a
              href={profile.links.github}
              className="border border-navy-foreground/40 px-4 py-2 text-[13px] font-bold uppercase tracking-wide hover:bg-navy-foreground/10"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
