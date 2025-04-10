import Link from "next/link";

import { Clock, MapPin, Video } from "lucide-react";

const infoBoxData = [
  {
    icon: Clock,
    title: "Service Times",
    items: ["Sunday: 9:00 AM & 11:00 AM", "Wednesday: 7:00 PM"],
  },
  {
    icon: MapPin,
    title: "Location",
    items: ["123 Faith Street", "Blessed City, BC 12345"],
  },
  {
    icon: Video,
    title: "Live Stream",
    items: ["Join us online every Sunday"],
    buttonText: "Watch Live",
    buttonLink: "#",
  },
];

export default function InfoBox() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mt-16 px-4">
      {infoBoxData.map((box, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md text-center"
        >
          <div className="flex justify-center mb-4">
            <box.icon className="h-10 w-10" />
          </div>
          <h3 className="text-xl font-bold mb-2">{box.title}</h3>
          {box.items.map((item, itemIndex) => (
            <p key={itemIndex} className="text-sm">
              {item}
            </p>
          ))}
          {box.buttonText && box.buttonLink && (
            <Link
              href={box.buttonLink}
              className="bg-black text-white px-4 py-1 rounded-sm text-sm inline-block mt-2 hover:bg-gray-800 transition-colors"
            >
              {box.buttonText}
            </Link>
          )}
        </div>
      ))}
    </section>
  );
}
