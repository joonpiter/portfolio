// ---------------------------------------------------------------------------
// OFFICE HOURS — shown at /office-hours
// The booking link lives in content.ts (profile.links.officeHours). Until you
// add one, the button opens an email with "Office hours" as the subject.
//
// The `guide` tips are my first pass at your voice, built from your own
// experience. They're drafts: they show in `npm run dev` only. Rewrite each in
// your words, set draft: false, and it goes live on the next deploy.
// ---------------------------------------------------------------------------

export const topics: string[] = [
  "Landing a first PM internship as an undergrad",
  "Resumes, and telling your story with the numbers you're allowed to share",
  "Product roles in fintech and banking",
  "Research as a way into product",
  "Programs and fellowships worth applying to",
  "Finding your communities in tech",
];

export type Community = { name: string; note: string; url?: string };

// Add a `url` to any of these to make the name a link.
export const communities: Community[] = [
  {
    name: "ColorStack",
    note: "Community for Black and Latinx students in tech. You can usually find me in #career-product-management. I am a daily active user.",
  },
  { name: "SHPE", note: "Society of Hispanic Professional Engineers." },
  { name: "ALPFA", note: "Association of Latino Professionals For America." },
  { name: "Latina in Tech", note: "Community for Latinas working in tech." },
  { name: "Out for Undergrad", note: "Career conferences for LGBTQ+ undergrads." },
  { name: "Rewrite the Code", note: "Community for women in tech." },
];

export type Tip = { title: string; body: string; draft?: boolean };

export const guide: Tip[] = [
  {
    title: "Apply to programs, not just internships.",
    body: "IBM Accelerate, NCWIT, and fellowships got me into rooms before I had a PM title. They count on a resume, and they're where you meet people who can refer you.",
    draft: true,
  },
  {
    title: "Research is product work.",
    body: "At Wordplay I was shipping to real users, collecting feedback, and deciding what to fix first. That's the job. It also turned into a paper at ACM CHI.",
    draft: true,
  },
  {
    title: "Say yes to the adjacent role.",
    body: "Venture consulting and a VC fellowship taught me how businesses decide what's worth building, which is half of product.",
    draft: true,
  },
  {
    title: "Keep your numbers, even when you can't keep your screenshots.",
    body: "Most internship work is under NDA. Write down the metrics you're allowed to share while you still remember them. Future you, writing a resume, will be grateful.",
    draft: true,
  },
  {
    title: "Find your people early.",
    body: "Communities like SHPE, ALPFA, Latina in Tech, and Out for Undergrad connect you with people who've already done what you're trying to do.",
    draft: true,
  },
];
