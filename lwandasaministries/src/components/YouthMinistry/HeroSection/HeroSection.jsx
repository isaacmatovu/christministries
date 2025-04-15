import Image from "next/image";
import image from "./images/church.jpg";

export function HeroSection() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image with Next.js Image component */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt="Youth Ministry Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white z-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Youth Ministry
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white">
          Empowering young people to grow in faith, build meaningful
          relationships, and make a positive impact in their community.
        </p>
      </div>
    </section>
  );
}
