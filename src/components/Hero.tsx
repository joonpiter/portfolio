import Image from "next/image";
import Link from "next/link";
import { profile, myspace } from "@/data/content";
import { posts } from "@/data/posts";
import SpotifyPlaylist from "@/components/SpotifyPlaylist";
import Scene3D from "@/components/Scene3D";

// Projects tab is hidden for now — drop this once real project write-ups
// are ready, and add a "Desk" station back for it.
const stations = [
  {
    href: "/experience",
    glyph: "⚗",
    name: "Field notes",
    caption: "Experience",
  },
  {
    href: "/blog",
    glyph: "¶",
    name: "Notebook",
    caption: "Blog",
  },
];

export default function Hero() {
  const latestPost = posts.find((p) => p.content.length > 0) ?? posts[0];

  return (
    <div className="space-y-12">
      <section id="top" className="text-center">
        <div className="flex flex-col items-center">
          <span className="relative h-14 w-14 overflow-hidden rounded-full border border-border">
            <Image
              src="/headshot-barcelona.jpg"
              alt={`${profile.name} headshot`}
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </span>
          <p className="mt-3 text-[14px] text-foreground">
            Hi, I&apos;m Isabel.
          </p>
          <p className="text-[12.5px] text-muted">
            {profile.school} · {profile.gradYear}
          </p>
        </div>

        <h1 className="mx-auto mt-6 max-w-xl font-display text-[34px] font-normal leading-[1.2] text-foreground sm:text-[42px]">
          Building products{" "}
          <em className="italic text-maroon">people actually use.</em>
        </h1>

        <p className="mx-auto mt-5 max-w-md text-[14.5px] leading-relaxed text-muted">
          Product management student at the University of Washington. PM
          intern at Bank of America and US Bank — building things bankers
          and traders actually use.
        </p>

        <a href={profile.links.resume} className="ms-link mt-3 inline-block text-[13px]">
          Résumé (PDF) ↗
        </a>

        <Scene3D />
        <p className="mt-1 text-[12px] text-muted">
          Drag to look around · or use a station below
        </p>

        <div className="mx-auto mt-2 grid max-w-sm grid-cols-2 gap-3">
          {stations.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-card px-4 py-5 transition-colors hover:border-foreground/30"
            >
              <span className="text-lg text-maroon" aria-hidden>
                {s.glyph}
              </span>
              <span className="text-[13.5px] font-medium text-foreground">
                {s.name}
              </span>
              <span className="text-[11.5px] text-muted">
                {s.caption}{" "}
                <span className="arrow-nudge transition-transform">
                  ↗
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <hr className="border-border" />

      <section aria-labelledby="now-label">
        <p id="now-label" className="eyebrow">
          Now
        </p>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/85">
          {myspace.nowSummary}
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <p className="eyebrow">
            <span aria-hidden>♪</span> Profile playlist
          </p>
          <div className="mt-3">
            <SpotifyPlaylist compact />
          </div>
        </div>

        {latestPost && (
          <div>
            <p className="eyebrow">
              <span aria-hidden>¶</span> From the notebook
            </p>
            <Link href={`/blog/${latestPost.slug}`} className="tile mt-3">
              {latestPost.image && (
                <span className="relative -mx-[26px] -mt-[26px] mb-4 block aspect-[16/9] overflow-hidden">
                  <Image
                    src={latestPost.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 480px, 90vw"
                    className="object-cover"
                  />
                </span>
              )}
              <p className="text-[11px] text-muted">{latestPost.date}</p>
              <h3 className="mt-1 font-display text-[24px] font-normal text-foreground">
                {latestPost.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/75">
                {latestPost.excerpt}
              </p>
              <span className="tile-arrow" aria-hidden>
                ↗
              </span>
            </Link>
            <Link href="/blog" className="ms-link mt-2 inline-block text-[12.5px]">
              All writing →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
