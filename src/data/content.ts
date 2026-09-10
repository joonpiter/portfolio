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
    "Born and raised in Seattle, WA, missing the beaches of El Salvador and $1 tacos in Mexico.",
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
  playlist: "https://open.spotify.com/playlist/0YHCZjfsmnUnehsM1ie4Zk",
  headline: '"What is a legacy? It\'s planting seeds in a garden you never get to see."',
  // Single-sentence "Now" line shown on the homepage, under the "NOW" eyebrow.
  nowSummary:
    "Building opportunities for students who might not know about them otherwise, reading I Deliver Parcels in China by Hu Anyan, and working through Options, Futures, and Other Derivatives.",
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
    Pronouns: "she / they",
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
  summary: string; // one punchy line — the headline result of the role
};

export const experience: ExperienceItem[] = [
  {
    role: "Product Management Intern",
    org: "Bank of America — New York City, NY",
    period: "June 2026 — Present",
    summary:
      "Built a click-in dashboard feature for traders to view the critical components of a basket, cutting handling time by 64%, and conducted the first phase of discovery for an AI-first SDLC within GMT.",
  },
  {
    role: "Product Management Intern",
    org: "US Bank — Minneapolis, MN",
    period: "June 2025 — August 2025",
    summary:
      "Launched a dashboard for banker-client interaction across 2,000+ US Bank branches and rolled an AI workflow affecting 10M+ transactions, cutting costs 5% and lifting CSAT 15%.",
  },
  {
    role: "Digital Product Management Intern",
    org: "AARP — Washington, DC (Remote)",
    period: "November 2024 — May 2025",
    summary:
      "Put generative AI into a chatbot for 38M+ members and shipped 17-language auto-translation reaching 1.5M users.",
  },
  {
    role: "Startup Venture Consultant",
    org: "Creative Destruction Lab — Seattle, WA",
    period: "September 2024 — March 2025",
    summary:
      "Built the account-prioritization framework behind a $200M+ early-adopter pipeline and a 60% sales lift.",
  },
  {
    role: "R&D Product Manager",
    org: "Wordplay — Seattle, WA",
    period: "March 2024 — September 2024",
    summary:
      "Cut user pain points 36% and shipped Wordplay's first Spanish translation to 95% satisfaction.",
  },
];

export const leadership: ExperienceItem[] = [
  {
    role: "Director of Product",
    org: "Campus to Career — Dallas, TX (Remote)",
    period: "July 2026 — Present",
    summary:
      "Own the roadmap for a platform connecting students to career opportunities they'd otherwise miss.",
  },
  {
    role: "Diversity & Inclusion Committee Member",
    org: "Women in Informatics — Seattle, WA",
    period: "June 2026 — Present",
    summary:
      "Co-designing the curriculum for a week-long equity-focused hackathon for middle & high schoolers.",
  },
  {
    role: "Venture Capital Fellow",
    org: "LGBT VC — New York City (Remote)",
    period: "October 2024 — December 2024",
    summary:
      "Led a 10-analyst research effort mapping VC and industry trends across 19 verticals.",
  },
  {
    role: "Accelerate Design Apprentice",
    org: "IBM — Remote",
    period: "June 2024 — July 2024",
    summary:
      "Top 5% of 10,000+ applicants; shipped a capstone on a real business-design problem.",
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
