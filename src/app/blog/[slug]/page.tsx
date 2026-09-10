import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProfileShell from "@/components/ProfileShell";
import TravelMap from "@/components/TravelMap";
import { profile, contactEmail } from "@/data/content";
import { posts, readingMinutes } from "@/data/posts";

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

  const isEssay = post.kind === "essay";

  return (
    <ProfileShell>
      <article>
        <Link
          href="/blog"
          className="text-[12.5px] text-muted transition-colors hover:text-foreground"
        >
          ← Back to the notebook
        </Link>

        <p className="eyebrow mt-8">
          <span aria-hidden>¶</span> {isEssay ? "An essay" : "An update"}
        </p>

        <h1 className="mt-4 font-display text-[38px] font-normal leading-[1.1] text-foreground sm:text-[48px]">
          {post.title}
        </h1>

        <p className="mt-4 text-[16px] leading-relaxed text-muted">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-muted">
          <span>{profile.name}</span>
          <span>{post.date}</span>
          <span>
            {readingMinutes(post)} min{isEssay ? " read" : ""}
          </span>
        </div>

        {post.tag && (
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded bg-card px-2 py-0.5 text-[11px] text-muted">
              {post.tag}
            </span>
          </div>
        )}

        <hr className="mt-8 border-rule" />

        {post.slug === "where-ive-been" ? (
          <div className="mt-8">
            <TravelMap />
          </div>
        ) : (
          <>
            {post.image && (
              <figure className="mt-8">
                <span className="relative block aspect-[3/2] w-full overflow-hidden rounded-xl border border-border">
                  <Image
                    src={post.image}
                    alt={post.imageCaption ?? ""}
                    fill
                    sizes="(min-width: 768px) 720px, 100vw"
                    className="object-cover"
                    priority
                  />
                </span>
                {post.imageCaption && (
                  <figcaption className="mt-2 text-[12.5px] leading-relaxed text-muted">
                    {post.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}

            <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-[1.75] text-foreground/85">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </>
        )}

        <hr className="mt-14 border-rule" />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[13px]">
          <Link
            href="/blog"
            className="text-muted transition-colors hover:text-foreground"
          >
            ← More from the notebook
          </Link>
          <a
            href={`mailto:${contactEmail}`}
            className="text-foreground transition-colors hover:text-maroon"
          >
            Have a thought? Send me a note <span aria-hidden>↗</span>
          </a>
        </div>
      </article>
    </ProfileShell>
  );
}
