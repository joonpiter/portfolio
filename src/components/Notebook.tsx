"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Post, readingMinutes } from "@/data/posts";

const TABS = [
  { id: "all", label: "Everything" },
  { id: "essay", label: "Essays" },
  { id: "update", label: "Updates" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function Notebook({ posts }: { posts: Post[] }) {
  const [tab, setTab] = useState<TabId>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (tab !== "all" && p.kind !== tab) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q)
      );
    });
  }, [posts, tab, query]);

  return (
    <div>
      {/* Filter + search */}
      <div className="flex flex-col gap-4 border-y border-rule py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-1">
          {TABS.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                aria-pressed={active}
                className={
                  "rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors " +
                  (active
                    ? "bg-maroon text-navy-foreground"
                    : "text-muted hover:text-foreground")
                }
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <label className="flex items-center gap-3 text-[13px] text-muted sm:w-[280px]">
          <span className="shrink-0">Search</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="A topic, a question…"
            className="w-full border-0 border-b border-border bg-transparent pb-1 text-[13.5px] text-foreground placeholder:text-muted/70 focus:border-foreground focus:outline-none"
          />
        </label>
      </div>

      <p className="mt-6 text-[12px] text-muted">
        {filtered.length} {filtered.length === 1 ? "entry" : "entries"} in the
        notebook
      </p>

      {/* Timeline */}
      <ol className="mt-4 border-l border-rule pl-6 sm:pl-8">
        {filtered.map((post) => {
          const isEssay = post.kind === "essay";
          const mins = readingMinutes(post);
          return (
            <li key={post.slug} className="relative border-b border-rule last:border-b-0">
              {/* dot on the line */}
              <span
                aria-hidden
                className={
                  "absolute left-[-1.5rem] top-7 h-2.5 w-2.5 -translate-x-1/2 rounded-full sm:left-[-2rem] " +
                  (isEssay
                    ? "border-2 border-maroon bg-background"
                    : "bg-maroon")
                }
              />
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-1 gap-x-8 gap-y-3 py-7 sm:grid-cols-[128px_1fr_auto]"
              >
                {/* date / meta */}
                <div className="sm:pt-1">
                  {isEssay ? (
                    <p className="font-display text-[13.5px] italic text-foreground/70">
                      {post.date}
                    </p>
                  ) : (
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-maroon">
                      {post.date}
                    </p>
                  )}
                  <p className="mt-1 text-[12px] text-muted">
                    {isEssay ? "Essay" : "Update"} · {mins} min
                    {isEssay ? " read" : ""}
                  </p>
                </div>

                {/* body */}
                <div>
                  {isEssay ? (
                    <h3 className="font-display text-[22px] font-normal leading-snug text-foreground transition-colors group-hover:text-maroon">
                      <span className="text-maroon" aria-hidden>
                        ¶{" "}
                      </span>
                      {post.title}
                    </h3>
                  ) : (
                    <h3 className="text-[16px] font-bold text-foreground transition-colors group-hover:text-maroon">
                      {post.title}
                    </h3>
                  )}
                  <p
                    className={
                      "mt-1.5 text-[13.5px] leading-relaxed text-foreground/70 " +
                      (isEssay ? "font-display italic" : "")
                    }
                  >
                    {post.excerpt}
                  </p>
                  {!isEssay && post.tag && (
                    <span className="mt-3 inline-block rounded bg-card px-2 py-0.5 text-[11px] text-muted">
                      {post.tag}
                    </span>
                  )}
                </div>

                {/* thumb + arrow */}
                <div className="flex items-start gap-3 sm:justify-end">
                  {post.image && (
                    <span className="relative block aspect-[3/2] w-40 shrink-0 overflow-hidden rounded-lg border border-border">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </span>
                  )}
                  <span
                    aria-hidden
                    className="text-[15px] text-muted transition-colors group-hover:text-maroon"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            </li>
          );
        })}

        {filtered.length === 0 && (
          <li className="py-10 text-[13.5px] text-muted">
            Nothing matches that yet.
          </li>
        )}
      </ol>
    </div>
  );
}
