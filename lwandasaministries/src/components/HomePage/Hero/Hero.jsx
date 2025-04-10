import Image from "next/image";
import Link from "next/link";
import image from "./images/church.jpg";

export default function Hero() {
  return (
    <section className="relative h-[400px] md:h-[500px]">
      <Image
        src={image}
        alt="Church Interior"
        fill
        className="object-cover brightness-[0.65]"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Grace Community Church
        </h1>
        <p className="text-lg mb-8">
          Where Faith Meets Life - Join us for worship and fellowship
        </p>
        <Link
          href=""
          className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
        >
          Join Our Next Service
        </Link>
      </div>
    </section>
  );
}
