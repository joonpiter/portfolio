// Anything marked `draft: true` in the data files shows up in `npm run dev`
// (with a small "Draft" tag) so you can review it, and is left out of
// production builds, so nothing unreviewed goes live under your name.
// To publish a draft: rewrite it in your own words, then set draft: false.
export const showDrafts = process.env.NODE_ENV !== "production";

export function visible<T extends { draft?: boolean }>(items: T[]): T[] {
  return items.filter((item) => !item.draft || showDrafts);
}
