import Image from "next/image";
import Link from "next/link";
import image from "./images/image.jpg";

const eventData = [
  {
    imageSrc: image,
    imageAlt: "Community BBQ",
    title: "Community BBQ",
    description: "Join us for food, fellowship, and fun!",
    date: "July 15, 2024",
    buttonText: "Register Now",
    buttonLink: "#",
  },
  {
    imageSrc: image,
    imageAlt: "Worship Night",
    title: "Worship Night",
    description: "An evening of praise and worship",
    date: "July 20, 2024",
    buttonText: "Learn More",
    buttonLink: "#",
  },
  {
    imageSrc: image,
    imageAlt: "Youth Conference",
    title: "Youth Conference",
    description: "Three days of inspiration and fellowship",
    date: "August 1-3, 2024",
    buttonText: "Register Now",
    buttonLink: "#",
  },
];

export default function EventCards() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="flex justify-center items-center mx-auto text-2xl sm:4xl pb-4 sm:pb-8">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="border border-[#E5E7EB] rounded-lg overflow-hidden"
            >
              <Image
                src={event.imageSrc}
                alt={event.imageAlt}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                <p className="text-sm mb-2">{event.description}</p>
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
                  {event.date}
                </div>
                <Link
                  href={event.buttonLink}
                  className="bg-black text-white w-full py-2 rounded-sm text-center block hover:bg-gray-800 transition-colors"
                >
                  {event.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
