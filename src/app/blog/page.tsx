import Link from "next/link";
import type { Metadata } from "next";
import ProfileShell from "@/components/ProfileShell";
import { profile } from "@/data/content";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: `Blog — ${profile.name}`,
};

export default function BlogIndex() {
  return (
    <ProfileShell>
      <section className="space-y-5">
        <h2 className="font-display text-2xl font-bold text-maroon sm:text-[30px]">
          Blog
        </h2>
        <p className="text-[13px] text-muted">
          Notes on internships, product, and whatever else is on my mind.
        </p>

        <div className="module">
          <p className="module-head">Recent Entries</p>
          <div className="flex flex-col px-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border-t border-border py-4 first:border-t-0"
              >
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted">
                  <span className="border border-border bg-background px-1.5 py-0.5 uppercase tracking-wide">
                    {post.tag}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-2 text-[15px] font-bold text-foreground group-hover:text-maroon">
                  {post.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-foreground/80">
                  {post.excerpt}
                </p>
                <p className="mt-2 text-[13px] text-link underline">Read more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ProfileShell>
  );
}
