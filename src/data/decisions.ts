// ---------------------------------------------------------------------------
// DECISION LOG — shown at /decisions
// One decision per role, NDA-safe: the problem, the options, what you chose
// and why, and what happened. No screenshots, nothing confidential.
//
// THESE ARE DRAFTS. Every `result` comes from your own metrics. The problem
// framing, the options, and the reasoning are my best guess at the story, and
// a recruiter may ask you about any of it, so replace them with what actually
// happened. Drafts show in `npm run dev` only; set draft: false to publish.
// ---------------------------------------------------------------------------

export type Decision = {
  company: string;
  role: string;
  period: string;
  headline: string; // the decision, in one sentence
  problem: string;
  options: string[];
  choice: string; // what you chose, and why
  result: string;
  draft?: boolean;
};

export const decisions: Decision[] = [
  {
    company: "Bank of America",
    role: "Product Management Intern",
    period: "June 2026 — Present",
    headline:
      "Put a basket's critical details one click away, instead of building a separate tool.",
    problem:
      "Traders handling custom ETF baskets had to piece together composition, alerts, and lifecycle status from different places, so every basket took longer than it should have.",
    options: [
      "Add more columns to the existing basket list.",
      "Build a standalone reporting tool.",
      "Let traders click into any basket and see only the components that matter.",
    ],
    choice:
      "The click-in view. It kept traders in the workflow they already had, and it showed the few things they needed to act on instead of everything we could display.",
    result:
      "Handling time dropped 64%. I also ran the first phase of discovery for an AI-first SDLC within GMT.",
    draft: true,
  },
  {
    company: "US Bank",
    role: "Product Management Intern",
    period: "June 2025 — August 2025",
    headline: "Kept bankers in the loop instead of fully automating.",
    problem:
      "Bankers were working through more than a million call-center inquiries, and a lot of their time went to steps that were the same every time.",
    options: [
      "Fully automate the common requests.",
      "Leave the workflow alone and add training.",
      "Use AI for the repetitive steps and leave the judgment calls to bankers.",
    ],
    choice:
      "AI-assisted, with bankers in the loop. I mapped the call-center journey with stakeholders first, so the AI took on the pain points people actually named instead of the ones we assumed.",
    result:
      "Rolled out across 10M+ transactions. Costs down 5%, customer satisfaction up 15%.",
    draft: true,
  },
  {
    company: "AARP",
    role: "Digital Product Management Intern",
    period: "November 2024 — May 2025",
    headline:
      "Translated every channel automatically, instead of hand-picking a few languages.",
    problem:
      "The support chatbot served 38M+ members across Facebook, WhatsApp, and the web, but members who didn't read English well had a much harder time getting help.",
    options: [
      "Hand-translate the top two or three languages.",
      "Keep English and route everyone else to a human agent.",
      "Automatic translation across all three channels.",
    ],
    choice:
      "Automatic translation everywhere. Members reach out wherever they already are, so fixing one channel would have left people behind on the others.",
    result: "17 languages, reaching 1.5M users.",
    draft: true,
  },
  {
    company: "Creative Destruction Lab",
    role: "Startup Venture Consultant",
    period: "September 2024 — March 2025",
    headline: "Ranked accounts by fit, not by size.",
    problem:
      "The startup had more enterprise leads than it could chase, and sales, marketing, and product each had a different idea of who mattered most.",
    options: [
      "Go after the biggest names first.",
      "Work leads in the order they came in.",
      "Score every account on fit and agree on one ranked list.",
    ],
    choice:
      "A shared scoring framework for the top 20 accounts, built with marketing, sales, and product so everyone worked from the same list.",
    result: "Sales up 60%, and an early-adopter pipeline valued at $200M+.",
    draft: true,
  },
  {
    company: "Wordplay",
    role: "R&D Product Manager",
    period: "March 2024 — September 2024",
    headline: "Translated the whole experience, not just the buttons.",
    problem:
      "Wordplay was English-only, which shut out Spanish-speaking learners.",
    options: [
      "Translate the interface only.",
      "Translate the interface and the tutorials.",
      "Wait for a full localization system.",
    ],
    choice:
      "The interface and the tutorials, on desktop and mobile. A translated button doesn't help much if the lesson behind it is still in English.",
    result:
      "95% user satisfaction for the first Spanish release. The multilingual work also fed into a paper at ACM CHI.",
    draft: true,
  },
];
