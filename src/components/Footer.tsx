import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-navy px-6 py-5 text-center text-[11px] text-navy-foreground/60">
      <p>
        {profile.name} · {new Date().getFullYear()} · a place for friends
      </p>
    </footer>
  );
}
