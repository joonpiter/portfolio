import type { Metadata } from "next";
import ProfileShell from "@/components/ProfileShell";
import Projects from "@/components/Projects";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
};

export default function ProjectsPage() {
  return (
    <ProfileShell>
      <Projects />
    </ProfileShell>
  );
}
