import type { Metadata } from "next";
import ProfileShell from "@/components/ProfileShell";
import Notebook from "@/components/Notebook";
import { profile } from "@/data/content";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: `Blog — ${profile.name}`,
};

export default function BlogIndex() {
  return (
    <ProfileShell>
      <section>
        <p className="eyebrow">
          <span aria-hidden>¶</span> Writing
        </p>

        <h1 className="mt-4 font-display text-[44px] font-normal leading-[1.05] text-foreground sm:text-[56px]">
          Essays and notes.
        </h1>

        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          Longer essays and shorter updates on product management, my
          internships, and the wandering of life, plus a living map of the
          places I&rsquo;ve made it to.
        </p>

        <div className="mt-10">
          <Notebook posts={posts} />
        </div>
      </section>
    </ProfileShell>
  );
}
