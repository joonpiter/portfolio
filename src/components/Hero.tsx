import Link from "next/link";
import { profile, myspace } from "@/data/content";
import { posts } from "@/data/posts";
import SpotifyPlaylist from "@/components/SpotifyPlaylist";

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-32">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
        <div>
          <p className="text-[12px] uppercase tracking-[0.14em] text-muted">
            {profile.school} · {profile.gradYear}
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-maroon sm:text-[36px]">
            Welcome
          </h2>

          <p className="mt-3 border-l-2 border-maroon pl-3 text-[15px] italic text-foreground/75">
            {myspace.headline}
          </p>

          <div className="mt-4 space-y-3 text-[15px] leading-relaxed">
            <p>
              Hello! My name is {profile.name}, and I&apos;m a student at the
              University of Washington studying Informatics with Interdisciplinary
              Honors and a minor in Entrepreneurship.
            </p>
            <p>
              I&apos;m interested in product management, having interned at
              companies such as Bank of America and US Bank. I&apos;m also a
              published author, with work presented at conferences such as ACM CHI
              and RESPECT. Please look around to learn more about me — it&apos;s
              MySpace-inspired, if you can&apos;t tell&nbsp;;)
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="border border-maroon-dark bg-maroon px-4 py-2 text-[13px] font-bold uppercase tracking-wide text-white shadow-[inset_0_-3px_0_rgba(0,0,0,0.18)] hover:brightness-110"
            >
              Get in touch
            </a>
            <a href={profile.links.resume} className="ms-link text-[14px]">
              Résumé (PDF)
            </a>
          </div>

          {/* blog feed */}
          <div className="module mt-6">
            <p className="module-head">Blog Feed</p>
            <ul className="divide-y divide-border/60 px-4">
              {posts.map((post) => (
                <li key={post.slug} className="py-3">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted">
                    <span className="border border-border bg-background px-1.5 py-0.5 uppercase tracking-wide">
                      {post.tag}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-1 block text-[14px] font-bold text-foreground hover:text-maroon"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-0.5 text-[12.5px] leading-snug text-foreground/75">
                    {post.excerpt}
                  </p>
                </li>
              ))}
            </ul>
            <p className="border-t border-border px-4 py-2 text-[12px]">
              <Link href="/blog" className="ms-link">
                All entries →
              </Link>
            </p>
          </div>
        </div>

        {/* right rail: playlist, then what I'm up to */}
        <div className="w-full max-w-md space-y-6 lg:max-w-none">
          <SpotifyPlaylist />

          <div className="module">
            <p className="module-head">Currently</p>
            <dl className="divide-y divide-border/60 px-4 py-1 text-[13px]">
              {myspace.now.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[80px_1fr] gap-3 py-2">
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
