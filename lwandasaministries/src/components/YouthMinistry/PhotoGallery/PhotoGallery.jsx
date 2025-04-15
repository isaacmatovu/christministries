import Image from "next/image";
import image from "./images/prayer.jpg";
const photos = [
  { src: image, alt: "Youth worship" },
  { src: image, alt: "Youth activities" },
  {
    src: image,
    alt: "Youth service project",
  },
];
export function PhotoGallery() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-sm">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
