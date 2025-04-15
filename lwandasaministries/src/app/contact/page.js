import { ContactForm } from "@/components/ContactPage/ContactForm/ContactForm";
import { ContactInfoSection } from "@/components/ContactPage/ContactInfoSection/ContactInfoSection";
import { ContactHeroSection } from "@/components/ContactPage/HeroSection/HeroSection";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactHeroSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <ContactInfoSection />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
