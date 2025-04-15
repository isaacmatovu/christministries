export function EventCalendarSection() {
  const title = "Event Calendar";

  const events = [
    {
      date: "Dec 15, 2023",
      event: "Sunday Worship Service",
      time: "10:00 AM",
      location: "Main Sanctuary",
    },
    {
      date: "Dec 18, 2023",
      event: "Youth Bible Study",
      time: "7:00 PM",
      location: "Youth Center",
    },
    {
      date: "Dec 20, 2023",
      event: "Community Outreach",
      time: "9:00 AM",
      location: "Community Center",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Event</th>
                <th className="py-3 px-4 text-left">Time</th>
                <th className="py-3 px-4 text-left">Location</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border-b">{event.date}</td>
                  <td className="py-3 px-4 border-b">{event.event}</td>
                  <td className="py-3 px-4 border-b">{event.time}</td>
                  <td className="py-3 px-4 border-b">{event.location}</td>
                  <td className="py-3 px-4 border-b">
                    <button className="text-purple-600 hover:text-purple-800">
                      Register
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
