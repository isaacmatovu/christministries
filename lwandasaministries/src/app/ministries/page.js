import { FeaturedMinistry } from "@/components/Ministries/FeaturedMinistry/FeaturedMinistry";
import { HeroSection } from "@/components/Ministries/HeroSection/HeroSection";
import { MinistryCardsSection } from "@/components/Ministries/MinistryCardSection/MinistryCardsSection";
import { TestimonialsSection } from "@/components/Ministries/TestimonialSection/TestimonialSection";

export default function Ministries() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <MinistryCardsSection />
        <FeaturedMinistry />
        <TestimonialsSection />
      </main>
    </div>
  );
}
