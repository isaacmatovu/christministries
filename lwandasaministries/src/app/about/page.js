import { HeroSection } from "@/components/AboutPage/HeroSection/HeroSection";
import { JoinCommunitySection } from "@/components/AboutPage/JoinCommunitySection/JoinCommunitySection";
import { JourneySection } from "@/components/AboutPage/JourneySection/JourneySection";
import { LeadershipSection } from "@/components/AboutPage/LeadershipSection/LeadershipSection";
import { LocationSection } from "@/components/AboutPage/LocationSection/LocationSection";
import { MissionSection } from "@/components/AboutPage/MissonSection/MissonSection";
import { ServiceTimesSection } from "@/components/AboutPage/ServiceTimesSection/ServiceTimesSection";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <MissionSection />

      <JourneySection />

      <LeadershipSection />

      <ServiceTimesSection />

      <LocationSection />

      <JoinCommunitySection />
    </main>
  );
}
