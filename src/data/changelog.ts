// ---------------------------------------------------------------------------
// RELEASE NOTES — shown at /changelog
// Newest first. The version at the top also shows in the footer.
// Dates come from the site's actual git history.
// ---------------------------------------------------------------------------

export type NoteKind = "new" | "fixed" | "known";

export type Release = {
  version: string;
  date: string;
  title: string;
  notes: { kind: NoteKind; text: string }[];
};

export const releases: Release[] = [
  {
    version: "1.1",
    date: "September 27, 2026",
    title: "Easier for everyone",
    notes: [
      { kind: "new", text: "Dark mode. It follows your system setting." },
      { kind: "new", text: "Office hours for students." },
      { kind: "new", text: "St. Louis is on the map." },
      { kind: "fixed", text: "You can see where you are when you navigate with a keyboard." },
      { kind: "fixed", text: "Small gray text is darker and easier to read." },
      { kind: "fixed", text: "Bigger tap targets in the nav on phones." },
      { kind: "known", text: "Case studies are still in drafts." },
    ],
  },
  {
    version: "1.0.1",
    date: "September 11, 2026",
    title: "A real address",
    notes: [
      { kind: "new", text: "Moved in at isabelamaya.com." },
      { kind: "new", text: "“Say hello” opens a contact card instead of your mail app." },
    ],
  },
  {
    version: "1.0",
    date: "September 10, 2026",
    title: "Shipped",
    notes: [
      { kind: "new", text: "A full redesign." },
      { kind: "new", text: "A 3D room. Hover an object to see where it takes you." },
      { kind: "new", text: "The notebook, and a first post: Cheers to something new." },
      { kind: "known", text: "One year left of freedom." },
    ],
  },
  {
    version: "0.1",
    date: "September 8, 2026",
    title: "The MySpace era",
    notes: [
      {
        kind: "new",
        text: "First version: a MySpace-style profile with a Top 8, a profile song, and a map of everywhere I've been.",
      },
    ],
  },
];

export const currentVersion = releases[0].version;
