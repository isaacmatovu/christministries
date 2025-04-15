import Image from "next/image";
import image from "./images/cheers.jpg";

export function PastEventsGallery() {
  const title = "Past Events Gallery";

  const images = [
    {
      src: image,
      alt: "Past event 1",
    },
    {
      src: image,
      alt: "Past event 2",
    },
    {
      src: image,
      alt: "Past event 3",
    },
    {
      src: image,
      alt: "Past event 4",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
