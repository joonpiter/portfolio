// ---------------------------------------------------------------------------
// BLOG POSTS
// Add a new post by adding an object to this array. `slug` becomes the URL:
// /blog/your-slug-here. Newest post first is a nice convention but not required.
// ---------------------------------------------------------------------------

export type Post = {
  slug: string;
  title: string;
  date: string; // e.g. "September 2026"
  excerpt: string;
  tag: string;
  kind: "essay" | "update"; // essays read long-form; updates are short notes
  content: string[]; // one string per paragraph
  image?: string; // optional: thumbnail on the index, hero on the post
  imageCaption?: string; // optional caption shown under the hero image
};

/** Rough read time in whole minutes (>= 1), ~200 wpm. */
export function readingMinutes(post: Post): number {
  const words = post.content.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export const posts: Post[] = [
  {
    // Rendered as an interactive map (see src/components/TravelMap.tsx).
    // Update the pins in src/data/travels.ts.
    slug: "where-ive-been",
    title: "Where I've Been",
    date: "September 2026",
    tag: "Travel",
    kind: "update",
    excerpt:
      "A living map of the cities I've made it to. Hover a pin for the city and country.",
    content: [],
  },
  {
    slug: "cheers-to-something-new",
    title: "Cheers to something new",
    date: "September 2026",
    tag: "Personal",
    kind: "essay",
    excerpt: "On finally making this, and what I want to do with it.",
    image: "/rocky-horror.jpg",
    imageCaption:
      "My final week in NYC. Got to see The Rocky Horror Show with my partner on the second-to-last day of the original cast.",
    content: [
      "I've been reluctant to make a portfolio for a while, mostly because I didn't know what to add. A lot of my most recent experience has been through internships at larger companies, where unless I was super vague on my details so as not to break confidentiality, it would negate the purpose of having a project tab.",
      "But with a month before school starts, I've had a lot of dead time to work on something. I'll have some big projects that won't be under an NDA, so I'm hoping to finally show those to the public. I also want to use this to share some thoughts and the wandering of life. One more year until my current understanding of freedom is gone.",
    ],
  },
];
