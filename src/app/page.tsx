import ProfileShell from "@/components/ProfileShell";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <ProfileShell after={<Contact />}>
      <Hero />
    </ProfileShell>
  );
}
