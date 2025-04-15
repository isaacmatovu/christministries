import Image from "next/image";
import image from "./images/prayer.jpg";
const activities = [
  {
    title: "Bible Study Groups",
    description:
      "Weekly small group sessions focusing on spiritual growth and biblical understanding.",
    image: image,
  },
  {
    title: "Community Outreach",
    description:
      "Monthly service projects reaching out to those in need in our community.",
    image: image,
  },
];

export function MinistryActivities() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Ministry Activities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-sm">
              <div className="h-64 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
