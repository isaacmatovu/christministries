import { EventCalendarSection } from "@/components/EventsPage/EventsCalenderSection/EventsCalenderSection";
import { FeaturedEventsSection } from "@/components/EventsPage/FeaturedEventsSection/FeaturedEventsSection";
import { HeroSection } from "@/components/EventsPage/HeroSection/HeroSection";
import { PastEventsGallery } from "@/components/EventsPage/PastEventsGallery/PastEventsGallery";

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <FeaturedEventsSection />
        <EventCalendarSection />
        <PastEventsGallery />
      </main>
    </div>
  );
}
