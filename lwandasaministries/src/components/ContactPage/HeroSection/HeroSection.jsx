import Image from "next/image";
import image from "./images/church.jpg";

export function ContactHeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-white relative overflow-hidden">
      {/* Background Image with Next.js Image component */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt="Church building"
          fill
          className="object-cover"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="max-w-[700px] text-gray-200 md:text-xl">
            We'd love to hear from you. Reach out to us with any questions or
            prayer requests.
          </p>
        </div>
      </div>
    </section>
  );
}
