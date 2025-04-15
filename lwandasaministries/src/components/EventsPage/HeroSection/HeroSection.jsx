import Image from "next/image";
import Link from "next/link";
import image from "./images/church.jpg";

export function HeroSection() {
  const title = "Upcoming Events at Christ Ministries";
  const description =
    "Join us for worship, fellowship, and spiritual growth. Browse our upcoming events and be part of our community.";
  const ctaText = "View Events";
  const imageSrc = "/placeholder.svg?height=600&width=800";
  const imageAlt = "People worshipping at church";

  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-black px-6 py-16 md:px-12 md:py-24 flex items-center">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-white/80 mb-8">{description}</p>
            <Link
              href="#featured-events"
              className="inline-block bg-white text-black px-6 py-3 font-medium rounded hover:bg-gray-100 transition"
            >
              {ctaText}
            </Link>
          </div>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
