import { EventCard } from "./EventCard";
import image from "./images/prayer.jpg";

export function FeaturedEventsSection() {
  const title = "Featured Events";
  const description =
    "Join us for these special upcoming events in our community.";

  const events = [
    {
      title: "Sunday Worship Service",
      description:
        "Join us for our weekly worship service with praise, prayer, and powerful teaching.",
      date: "Dec 15, 2023",
      day: "15",
      month: "DEC",
      time: "10:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      imageSrc: image,
      imageAlt: "Sunday Worship Service",
    },
    {
      title: "Youth Bible Study",
      description:
        "An evening of fellowship and Bible study for young adults ages 18-25.",
      date: "Dec 18, 2023",
      day: "18",
      month: "DEC",
      time: "7:00 PM - 9:00 PM",
      location: "Youth Center",
      imageSrc: image,
      imageAlt: "Youth Bible Study",
    },
    {
      title: "Community Outreach",
      description:
        "Help us serve our community through food distribution and prayer ministry.",
      date: "Dec 20, 2023",
      day: "20",
      month: "DEC",
      time: "9:00 AM - 2:00 PM",
      location: "Community Center",
      imageSrc: image,
      imageAlt: "Community Outreach",
    },
  ];

  return (
    <section id="featured-events" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>
        <p className="text-center text-gray-600 mb-12">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
