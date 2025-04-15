import Image from "next/image";
import { Clock, MapPin } from "lucide-react";

export function EventCard({ event }) {
  return (
    <div className="border-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-48">
        <Image
          src={event.imageSrc}
          alt={event.imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1">
          <div className="text-center">{event.month}</div>
          <div className="text-center text-xl">{event.day}</div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Clock className="w-4 h-4 mr-2" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{event.location}</span>
        </div>
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
          Register Now
        </button>
      </div>
    </div>
  );
}
