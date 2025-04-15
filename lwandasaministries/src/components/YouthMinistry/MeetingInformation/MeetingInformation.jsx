// components/youth/MeetingInfo.js
import { MapPin, Clock, Music, CalendarDays } from "lucide-react";
const regularMeetings = [
  {
    icon: <Clock className="w-5 h-5" />,
    text: "Sundays: 6:00 PM - 8:00 PM",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    text: "Youth Center, Main Campus",
  },
];
const specialEvents = [
  {
    icon: <CalendarDays className="w-5 h-5" />,
    text: "Youth Camp: July 15-20",
  },
  {
    icon: <Music className="w-5 h-5" />,
    text: "Worship Night: Every Last Friday",
  },
];

export function MeetingInfo() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Meeting Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Regular Meetings</h3>
            {regularMeetings.map((item, index) => (
              <div key={index} className="flex items-start mb-3">
                <div className="text-black mr-3 mt-1">{item.icon}</div>
                <div>{item.text}</div>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Special Events</h3>
            {specialEvents.map((item, index) => (
              <div key={index} className="flex items-start mb-3">
                <div className="text-black mr-3 mt-1">{item.icon}</div>
                <div>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
