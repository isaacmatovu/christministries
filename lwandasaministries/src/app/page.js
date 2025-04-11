import EventCards from "@/components/HomePage/EventsCard/EventsCard";
import Hero from "@/components/HomePage/Hero/Hero";
import InfoBox from "@/components/HomePage/InfoBox/InfoBox";
import MinistryCards from "@/components/HomePage/MinistryCard/MinistryCard";
import SermonCards from "@/components/HomePage/SermonCard/SermonCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Info Boxes */}
      <InfoBox />

      {/* Ministries Section */}
      <MinistryCards />

      {/* Events Section */}
      <EventCards />

      {/* Sermons Section */}
      <SermonCards />
    </main>
  );
}
