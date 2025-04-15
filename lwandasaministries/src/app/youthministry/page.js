import { GetConnected } from "@/components/YouthMinistry/GetConnected/GetConnected";
import { HeroSection } from "@/components/YouthMinistry/HeroSection/HeroSection";
import { LeadershipTeam } from "@/components/YouthMinistry/LeaderShip/LeaderShip";
import { MeetingInfo } from "@/components/YouthMinistry/MeetingInformation/MeetingInformation";
import { MinistryActivities } from "@/components/YouthMinistry/MinistryActivities/MinistryActivities";
import { PhotoGallery } from "@/components/YouthMinistry/PhotoGallery/PhotoGallery";
import { Testimonials } from "@/components/YouthMinistry/Testimonials/Testimonials";

export default function YouthPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />

        <LeadershipTeam />

        <MinistryActivities />

        <Testimonials />

        <PhotoGallery />
      </main>
    </div>
  );
}
