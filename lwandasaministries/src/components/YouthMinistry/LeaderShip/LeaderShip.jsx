import Image from "next/image";
import { GetConnected } from "../GetConnected/GetConnected";
import image from "./images/woman.jpg";
import { MeetingInfo } from "../MeetingInformation/MeetingInformation";
const members = [
  {
    name: "Pastor Michael Thompson",
    role: "Youth Ministry Leader",
    email: "michael@example.com",
    phone: "(555) 123-4567",
    image: image,
  },
  {
    name: "Sarah Martinez",
    role: "Assistant Youth Leader",
    email: "sarah@example.com",
    phone: "(555) 123-4568",
    image: image,
  },
];

export function LeadershipTeam() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Leadership Team
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6"
                >
                  <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="text-xl font-bold text-gray-800">
                        {member.name}
                      </h3>
                      <p className="text-[#4B5563] font-medium">
                        {member.role}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-1 text-sm text-gray-600">
                      <p className="flex items-center justify-center md:justify-start">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        {member.email}
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        {member.phone}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <MeetingInfo />
          </div>

          <div className="lg:w-1/3">
            <GetConnected />
          </div>
        </div>
      </div>
    </section>
  );
}
