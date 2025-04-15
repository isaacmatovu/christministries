import { Book, Calendar, ChevronDown, FileText } from "lucide-react";

const resources = [
  {
    icon: <Book className="w-5 h-5 text-black mr-2" />,
    text: "Youth Ministry Handbook",
  },
  {
    icon: <Calendar className="w-5 h-5 text-black mr-2" />,
    text: "Event Calendar",
  },
  {
    icon: <Book className="w-5 h-5 text-black mr-2" />,
    text: "Bible Study Materials",
  },
  {
    icon: <FileText className="w-5 h-5 text-black mr-2" />,
    text: "Permission Forms",
  },
];

export function GetConnected() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Resources</h2>
          <ul className="space-y-4">
            {resources.map((resource, index) => (
              <li
                key={index}
                className="flex items-center text-gray-700 transition-colors"
              >
                {resource.icon}
                <span className="text-sm md:text-base">{resource.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Get Connected
          </h2>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                I'm interested in:
              </label>
              <div className="relative">
                <select
                  id="interest"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-black focus:border-transparent pr-10 bg-white"
                >
                  <option>Joining the Youth Ministry</option>
                  <option>Volunteering</option>
                  <option>Bible Study</option>
                  <option>Community Outreach</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-black transition-colors shadow-md"
            >
              Connect With Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
