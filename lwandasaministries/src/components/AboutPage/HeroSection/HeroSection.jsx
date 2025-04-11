import Image from "next/image";
import image from "./images/church.jpg";

export function HeroSection() {
  return (
    <section className="relative h-[500px] w-full">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src={image}
        alt="Hero image"
        width={1200}
        height={500}
        className="object-cover h-full w-full"
        priority
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start max-w-6xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to Christ Ministries
        </h1>

        <p className="text-white text-lg md:text-xl max-w-2xl">
          {" "}
          A place where faith grows, community thrives, and lives are
          transformed through the love of Christ.
        </p>
      </div>
    </section>
  );
}
