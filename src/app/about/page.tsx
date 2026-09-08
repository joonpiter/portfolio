import type { Metadata } from "next";
import ProfileShell from "@/components/ProfileShell";
import About from "@/components/About";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
};

export default function AboutPage() {
  return (
    <ProfileShell>
      <About />
    </ProfileShell>
  );
}
