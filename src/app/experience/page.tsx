import type { Metadata } from "next";
import ProfileShell from "@/components/ProfileShell";
import Experience from "@/components/Experience";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `Experience — ${profile.name}`,
};

export default function ExperiencePage() {
  return (
    <ProfileShell>
      <Experience />
    </ProfileShell>
  );
}
