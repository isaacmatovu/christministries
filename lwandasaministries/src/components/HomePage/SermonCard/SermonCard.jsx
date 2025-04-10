import Image from "next/image";
import Link from "next/link";
import image from "./images/prayer.jpg";

const sermonData = [
  {
    imageSrc: image,
    imageAlt: "Walking in Faith",
    title: "Walking in Faith",
    speaker: "Pastor John Smith",
    date: "July 9, 2024",
    buttonText: "Watch Now",
    buttonLink: "#",
  },
  {
    imageSrc: image,
    imageAlt: "The Power of Prayer",
    title: "The Power of Prayer",
    speaker: "Pastor Sarah Johnson",
    date: "July 2, 2024",
    buttonText: "Watch Now",
    buttonLink: "#",
  },
  {
    imageSrc: image,
    imageAlt: "Living with Purpose",
    title: "Living with Purpose",
    speaker: "Pastor Michael Brown",
    date: "June 25, 2024",
    buttonText: "Watch Now",
    buttonLink: "#",
  },
];

export default function SermonCards() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-black flex justify-center items-center mx-auto text-2xl sm:4xl pb-4 sm:pb-8">
          Latest Sermons
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sermonData.map((sermon, index) => (
            <div
              key={index}
              className="border border-[#E5E7EB] rounded-lg overflow-hidden bg-white"
            >
              <Image
                src={sermon.imageSrc}
                alt={sermon.imageAlt}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{sermon.title}</h3>
                <p className="text-sm mb-2">{sermon.speaker}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {sermon.date}
                </div>
                <Link
                  href={sermon.buttonLink}
                  className="bg-black text-white w-full py-2 rounded-sm text-center block hover:bg-gray-800 transition-colors"
                >
                  {sermon.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
