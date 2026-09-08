// ---------------------------------------------------------------------------
// SITE CONTENT
// Edit everything in this file to make the site yours. Anything marked
// "PLACEHOLDER" is sample content — swap it for the real thing.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Isabel Amaya",
  title: "Product Management Student",
  tagline: "I build things people actually use — then go find out if they actually use them.", // PLACEHOLDER
  school: "University of Washington",
  gradYear: "Class of 2027",
  location: "Seattle, WA",
  cityLine:
    "Born and raised in Seattle, WA — ethnically from Mexico and El Salvador, though I'm usually in Chinatown.",
  email: "iamayacontact@gmail.com", // every "email me" link on the site points here
  links: {
    linkedin: "https://www.linkedin.com/in/isabel-amaya123/",
    resume: "/resume.pdf", // drop your resume PDF in /public as resume.pdf
    github: "", // optional, leave blank to hide
    acm: "https://dl.acm.org/profile/99661920637", // ACM Digital Library author profile
  },
};

// The mailto: address used everywhere on the site. Keep in sync with profile.email.
export const contactEmail = profile.email;

export const about = {
  bio: [
    "I'm a student who found a growing passion for fintech. I've interned as a product manager with Bank of America and US Bank — on everything from products that impact bankers at retail locations to tools for traders working the global markets.",
    "Outside of my professional experience, I love to crochet and do pottery in my free time. You'll usually find me in Seattle reading with a nice cup of oolong tea, or flying around the country on some crazy adventure (mostly conferences, haha).",
  ],
  highlights: [
    "NASA Studentship recipient ($20,000)",
    "NCWIT AiC & AspireIT National Winner",
    "Co-authored 2 papers presented at ACM CHI and RESPECT",
    "Top 5% of 10,000+ applicants, IBM Accelerate Design Apprenticeship",
  ],
  skills: [
    "Python",
    "SQL",
    "Figma",
    "Jira",
    "A/B Testing",
    "Agile/Scrum",
    "PRD Writing",
    "Stakeholder Management",
    "User Research",
  ],
};

// Replaces the old "Top 8" (which was companies). Classic MySpace Top 8 =
// your top friends; here it's a top-8 of things Isabel is into right now.
export const topEight = [
  "Oaxacan food",
  "City pop & cumbia",
  "Ballet Folklórico",
  "HCI research papers",
  "Sticker collecting",
  "Long transit rides",
  "Flat whites",
  "Typography nerdery",
];

// Extra MySpace-profile flavor. All editable, all optional.
export const myspace = {
  lastLogin: "Today",
  mood: "curious 🌱",
  // Profile song, MySpace-style. Paste any Spotify playlist/album/track link
  // (or just its ID) — the embed figures out the rest.
  playlist: "https://open.spotify.com/playlist/38AnYQKWfgjz9R3edzqvHU",
  headline: '"What is a legacy? It\'s planting seeds in a garden you never get to see."',
  extendedNetwork:
    "Isabel Amaya is in your extended network",
  // "What I'm up to right now" — shown under the welcome note on the home page.
  now: [
    ["Building", "opportunities for students who might not know about them otherwise"],
    ["Reading", "I Deliver Parcels in China by Hu Anyan"],
    ["Learning", "Options, Futures, and Other Derivatives"],
  ] as [string, string][],
  interests: {
    General:
      "Pottery, crocheting, tea, museums, Broadway — please talk to me about musicals, haha.",
    Music:
      "BTS, Noah Kahan, Waitress, Buena Vista Social Club, The Crane Wives, Mitski, Hatsune Miku.",
    "Film & TV":
      "The Office, Frasier, What Did You Eat Yesterday?, Dead Poets Society, Coraline.",
    Books: "The Vanishing Middle Class, Abundance.",
  },
  details: {
    Status: "Open to the right opportunity",
    "Here for": "Networking, friends, showing my work",
    Hometown: "Seattle, WA",
    Occupation: "Student, future employed person",
    Education: "University of Washington — Interdisciplinary Honors",
    "Zodiac Sign": "Gemini",
  },
  // MySpace "Who I'd like to meet" — the bio itself lives in `about.bio`.
  whoIdLikeToMeet:
    "Students struggling to navigate the product or recruiting process, and professionals who understand what it means to thrive in corporate America.",
};

export const education = {
  school: profile.school,
  degree: "B.S. Informatics, Interdisciplinary Honors",
  gradYear: "June 2027",
  gpa: "3.7", // remove this line in AboutSection.tsx if you'd rather not share it
  organizations: [
    "Colortack",
    "Rewrite the Code",
    "NCWIT",
    "SHPE",
    "ALPFA",
    "Latina in Tech",
    "Out for Undergrad (O4U)",
  ],
};

export type Publication = {
  title: string;
  venue: string;
  url?: string;
};

export const publications: Publication[] = [
  {
    title: "Wordplay: Accessible, Multilingual, Interactive Typography",
    venue: "ACM CHI 2025",
    url: "https://dl.acm.org/doi/10.1145/3706598.3713196",
  },
  {
    title:
      "Reimagining Assessment: How Co-construction Shifts Agency in Computer Science Classrooms",
    venue: "ACM RESPECT 2026",
    url: "https://dl.acm.org/doi/10.1145/3796496.3811802",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Product Management Intern",
    org: "Bank of America — New York City, NY",
    period: "June 2026 — Present",
    bullets: [
      "Drove product development for the Custom ETF Basket platform, scaling intake capacity 5x, from 500 to 2,500 baskets",
      "Launched a dashboard unifying basket composition, alerts, and lifecycle activity — 64% adoption among trading-desk users",
      "Leading discovery for an AI-First SDLC initiative; 6 PM interviews so far, projected to cut refinement time by 22%",
    ],
  },
  {
    role: "Product Management Intern",
    org: "US Bank — Minneapolis, MN",
    period: "June 2025 — August 2025",
    bullets: [
      "Directed end-to-end launch of a digital dashboard, aligning requirements across 2,000 branches and 22,000 employees",
      "Led rollout of an AI service-workflow feature across 10M+ transactions and 1.2M+ call-center inquiries — cut costs 5%, lifted CSAT 15%",
      "Mapped the call-center journey through stakeholder interviews; 10+ pain points cut banker task-completion time by 12%",
    ],
  },
  {
    role: "Digital Product Management Intern",
    org: "AARP — Washington, DC (Remote)",
    period: "November 2024 — May 2025",
    bullets: [
      "Supported generative AI integration into a support chatbot serving 38M+ members, reducing agent call transfer rate by 12%",
      "Built an automatic translation feature supporting 17 languages across Facebook, WhatsApp, and web, reaching 1.5M users",
      "Analyzed support transcripts in Python to uncover inquiry patterns, lifting chatbot accuracy and UX by 19%",
    ],
  },
  {
    role: "Startup Venture Consultant",
    org: "Creative Destruction Lab — Seattle, WA",
    period: "September 2024 — March 2025",
    bullets: [
      "Built a prioritization framework ranking the top 20 enterprise customers, improving sales by 60%",
      "Refined customer profiles with marketing, sales, and product, contributing to an early-adopter pipeline valued at $200M+",
    ],
  },
  {
    role: "Research and Development Product Manager",
    org: "Wordplay — Seattle, WA",
    period: "March 2024 — September 2024",
    bullets: [
      "Synthesized stakeholder feedback into prioritized usability fixes for product tutorials, reducing user pain points by 36%",
      "Launched the first Spanish translation across desktop and mobile, achieving 95% user satisfaction",
      "Resolved 63% of feedback-related issues on time, lifting project completion rate by 32%",
    ],
  },
];

export const leadership: ExperienceItem[] = [
  {
    role: "Director of Product",
    org: "Campus to Career — Dallas, TX (Remote)",
    period: "July 2026 — Present",
    bullets: [
      "Own the product roadmap, prioritizing features that help students access real career opportunities",
    ],
  },
  {
    role: "Diversity and Inclusion Committee Member",
    org: "Women in Informatics — Seattle, WA",
    period: "June 2026 — Present",
    bullets: [
      "Co-leading curriculum design for a week-long equity-focused tech hackathon for middle/high schoolers",
    ],
  },
  {
    role: "Venture Capital Fellow",
    org: "LGBT VC — New York City (Remote)",
    period: "October 2024 — December 2024",
    bullets: [
      "Led a research framework analyzing VC and industry trends across 19 verticals, coordinating 10 fellow analysts",
    ],
  },
  {
    role: "Accelerate Design Apprentice",
    org: "IBM — Remote",
    period: "June 2024 — July 2024",
    bullets: [
      "Selected as top 5% from 10,000+ applicants; completed a capstone on a business design issue",
    ],
  },
];

export type Project = {
  title: string;
  tag: string;
  description: string;
  impact: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "StudyBuddy", // PLACEHOLDER — swap for a real project of yours
    tag: "Class project",
    description:
      "Redesigned a clunky study-group scheduling tool for my HCI class — ran usability tests with 8 classmates and rebuilt the flow around their biggest complaint: nobody could tell who was actually coming.", // PLACEHOLDER
    impact: "Cut scheduling time in usability tests from ~4 min to under 1", // PLACEHOLDER
    stack: ["Figma", "User Research", "Prototyping"],
    links: [{ label: "Case study", href: "#" }],
  },
  {
    title: "DawgHacks 2025", // PLACEHOLDER
    tag: "Hackathon",
    description:
      "Product lead on a 4-person team that built an app helping students split shared apartment costs without the group-chat math wars.", // PLACEHOLDER
    impact: "Top 10 out of 60+ teams", // PLACEHOLDER
    stack: ["Product Strategy", "Figma", "Pitching"],
    links: [{ label: "Devpost", href: "#" }],
  },
];
