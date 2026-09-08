import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProfileShell from "@/components/ProfileShell";
import TravelMap from "@/components/TravelMap";
import { profile } from "@/data/content";
import { posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — ${profile.name}` : "Not found" };
}

export default async function BlogPost(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <ProfileShell>
      <article className="space-y-4">
        <Link href="/blog" className="ms-link text-[12px]">
          ← Back to blog
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted">
          <span className="border border-border bg-background px-1.5 py-0.5 uppercase tracking-wide">
            {post.tag}
          </span>
          <span>{post.date}</span>
        </div>

        <h2 className="font-display text-2xl font-bold text-maroon sm:text-[30px]">
          {post.title}
        </h2>

        {post.slug === "where-ive-been" ? (
          <TravelMap />
        ) : (
          <div className="module">
            <p className="module-head">Entry</p>
            <div className="space-y-4 px-4 py-4 text-[13.5px] leading-relaxed">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </article>
    </ProfileShell>
  );
}
