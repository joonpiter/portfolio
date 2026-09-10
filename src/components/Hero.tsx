import Image from "next/image";
import Link from "next/link";
import { profile, myspace } from "@/data/content";
import { posts } from "@/data/posts";
import SpotifyPlaylist from "@/components/SpotifyPlaylist";
import Scene3D from "@/components/Scene3D";

export default function Hero() {
  const latestPost = posts.find((p) => p.content.length > 0) ?? posts[0];

  return (
    <div className="space-y-12">
      <section id="top" className="text-center">
        <div className="flex items-center justify-center gap-4 text-left">
          <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border">
            <Image
              src="/headshot-barcelona.jpg"
              alt={`${profile.name} headshot`}
              fill
              sizes="64px"
              className="object-cover"
              priority
            />
          </span>
          <div>
            <p className="font-display text-[26px] font-normal leading-tight text-foreground">
              Hi, I&rsquo;m Isabel.
            </p>
            <p className="mt-0.5 text-[14px] text-muted">
              {profile.school} · {profile.gradYear}
            </p>
          </div>
        </div>

        <h1 className="mx-auto mt-6 max-w-xl font-display text-[34px] font-normal leading-[1.2] text-foreground sm:text-[42px]">
          Building products{" "}
          <em className="italic text-maroon">people actually use.</em>
        </h1>

        <p className="mx-auto mt-5 max-w-md text-[14.5px] leading-relaxed text-muted">
          Student at the University of Washington with a passion for fintech.
          Previously at Bank of America, US Bank, AARP and IBM, building
          features bankers and traders actually use.
        </p>

        <a href={profile.links.resume} className="ms-link mt-3 inline-block text-[13px]">
          Résumé (PDF) ↗
        </a>

        <Scene3D />
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
