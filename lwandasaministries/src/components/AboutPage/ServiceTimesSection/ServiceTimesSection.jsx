export function ServiceTimesSection() {
  // Service times data
  const groups = [
    {
      title: "Sunday Services",
      services: [
        {
          name: "Morning Worship",
          icon: "⛪",
          time: "9:00 AM - 10:30 AM",
        },
        {
          name: "Contemporary Service",
          icon: "🎤",
          time: "11:00 AM - 12:30 PM",
        },
      ],
    },
    {
      title: "Weekly Activities",
      services: [
        {
          name: "Bible Study",
          time: "Wednesday 7:00 PM",
          icon: "📖",
        },
        {
          name: "Youth Group",
          icon: "👥",
          time: "Friday 6:30 PM",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Service Times</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((group, index) => (
            <div key={index} className="bg-white border-white px-8 py-8">
              <h3 className="text-xl font-bold mb-6">{group.title}</h3>
              <div className="space-y-6">
                {group.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-start gap-x-4">
                    <span className="text-4xl w-12 h-12 flex items-center justify-center">
                      {service.icon}
                    </span>
                    <div>
                      <h4 className="font-bold">{service.name}</h4>
                      <p className="text-gray-600">{service.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
