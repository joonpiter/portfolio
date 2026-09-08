import Image from "next/image";
import { profile, myspace } from "@/data/content";
import ViewCounter from "@/components/ViewCounter";

const contactLinks = [
  { label: "Send Message", href: `mailto:${profile.email}` },
  { label: "Add to Friends", href: profile.links.linkedin },
  { label: "Résumé", href: profile.links.resume },
  { label: "ACM Author Profile", href: profile.links.acm },
  {
    label: "Forward to Friend",
    href: `mailto:?subject=${encodeURIComponent(
      profile.name + " — portfolio"
    )}&body=${encodeURIComponent("Thought you'd like this: ")}`,
  },
];

export default function Sidebar() {
  return (
    <aside className="space-y-3">
      <h1 className="font-display text-2xl font-bold text-maroon sm:text-[26px]">
        {profile.name}
      </h1>

      <div className="mx-auto flex max-w-[240px] gap-3 md:max-w-none">
        <div className="w-full border-4 border-white shadow-[2px_2px_0_rgba(0,0,0,0.15)]">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src="/headshot-barcelona.jpg"
              alt={`${profile.name} headshot`}
              fill
              sizes="(max-width: 768px) 240px, 260px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <p className="text-[13px] text-foreground/80">
        <span className="font-bold">Mood:</span> {myspace.mood}{" "}
        <span aria-hidden>·</span>{" "}
        <span className="font-bold">Status:</span> Online
      </p>

      <p className="overflow-hidden text-ellipsis whitespace-nowrap border-y border-border bg-card px-2 py-1 text-center text-[10px] italic tracking-tight text-muted">
        {myspace.extendedNetwork}
      </p>

      <div className="module">
        <p className="module-head">Profile</p>
        <dl className="divide-y divide-border/60 px-3 py-0.5 text-[12.5px]">
          <div className="flex justify-between gap-3 py-1">
            <dt className="text-muted">Profile Views:</dt>
            <dd className="text-right font-medium tabular-nums">
              <ViewCounter />
            </dd>
          </div>
          <div className="flex justify-between gap-3 py-1">
            <dt className="text-muted">Last Login:</dt>
            <dd className="text-right font-medium">{myspace.lastLogin}</dd>
          </div>
          <div className="flex justify-between gap-3 py-1">
            <dt className="text-muted">Pronouns:</dt>
            <dd className="text-right font-medium">she / they</dd>
          </div>
          <div className="flex justify-between gap-3 py-1">
            <dt className="text-muted">Major:</dt>
            <dd className="text-right font-medium">Informatics (Honors)</dd>
          </div>
          <div className="flex justify-between gap-3 py-1">
            <dt className="text-muted">Graduating:</dt>
            <dd className="text-right font-medium">June 2027</dd>
          </div>
          <div className="flex justify-between gap-3 py-1">
            <dt className="text-muted">Location:</dt>
            <dd className="text-right font-medium">{profile.location}</dd>
          </div>
        </dl>
      </div>

      <div className="module">
        <p className="module-head">Contact Me</p>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1 px-3 py-2 text-[12.5px]">
          {contactLinks
            .filter((l) => l.href)
            .map((l) => (
              <li key={l.label}>
                <a className="ms-link" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
}
