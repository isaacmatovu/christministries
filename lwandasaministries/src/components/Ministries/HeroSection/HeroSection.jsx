import Image from "next/image";
import image from "./images/church.jpg";

export function HeroSection() {
  return (
    <section className="relative h-[500px] bg-gray-900 text-white">
      <Image
        src={image}
        alt="Church interior"
        fill
        className="absolute inset-0 object-cover opacity-50"
        priority
      />
      <div className="relative flex h-full flex-col justify-center space-y-4 pl-12 sm:pl-28">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Our Ministries
        </h1>
        <p className="max-w-[600px] text-lg">
          Serving Christ Together - Join us in our mission to spread God's love
          through various ministry programs.
        </p>
      </div>
    </section>
  );
}
