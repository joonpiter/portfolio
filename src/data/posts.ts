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
  content: string[]; // one string per paragraph
};

export const posts: Post[] = [
  {
    slug: "what-i-learned-shadowing-pms",
    title: "What I actually do as a PM intern (not what I thought I'd do)",
    date: "August 2026",
    tag: "internship",
    excerpt:
      "Going in, I thought product management was mostly writing specs. Three internships later, here's what the job actually looks like.", // PLACEHOLDER
    content: [
      "Going into my first PM internship, I thought the job was mostly writing specs and drawing roadmap boxes. Three internships later, the thing that's taken up the most of my time by far is just talking to people — engineers about what's actually feasible, users about what's actually annoying them, and stakeholders about what actually matters this quarter.", // PLACEHOLDER — replace with your real reflection
      "The unglamorous truth is that most of the job is translation: turning a vague complaint into a specific problem statement, and turning a specific problem statement into something an engineer can build in a sprint. Nobody tells you that in the internship description.", // PLACEHOLDER
      "If I could tell incoming interns one thing, it'd be this: the interview data is worth more than your own intuition, every single time. I've been wrong about what users wanted more times than I can count — the pattern only ever showed up once I actually asked.", // PLACEHOLDER
    ],
  },
  {
    slug: "co-authoring-a-chi-paper",
    title: "Co-authoring a research paper as an undergrad",
    date: "May 2025",
    tag: "research",
    excerpt:
      "Notes on what it's actually like to go from a class project to a paper accepted at ACM CHI.", // PLACEHOLDER
    content: [
      "I didn't set out to write a research paper — Wordplay started as a product I was helping build, and the accessibility work we did on it turned out to be interesting enough to write up formally. The lesson: keep notes on your work as you go, even when you don't think it's going anywhere yet.", // PLACEHOLDER
      "The actual writing process took longer than the project itself. Getting from 'we did a cool thing' to a defensible research contribution meant a lot of rewriting, and a lot of being told by advisors that my first draft buried the actual finding on page four.", // PLACEHOLDER
    ],
  },
];
