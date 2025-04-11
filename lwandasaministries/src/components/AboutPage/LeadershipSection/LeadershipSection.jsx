import Image from "next/image";
import image from "./images/woman.jpg";
// Leadership data
const leaders = [
  {
    name: "Rev. Michael Thompson",
    role: "Senior Pastor",
    tenure: "Serving since 2005",
    imageUrl: "/placeholder.svg?height=128&width=128",
    altText: "Rev. Michael Thompson",
  },
  {
    name: "Rev. Sarah Williams",
    role: "Associate Pastor",
    tenure: "Serving since 2010",
    imageUrl: "/placeholder.svg?height=128&width=128",
    altText: "Rev. Sarah Williams",
  },
  {
    name: "David Martinez",
    role: "Youth Minister",
    tenure: "Serving since 2015",
    imageUrl: "/placeholder.svg?height=128&width=128",
    altText: "David Martinez",
  },
];

export function LeadershipSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-y-4"
            >
              <div className="mx-auto w-48 h-48 overflow-hidden rounded-full">
                <Image
                  src={image}
                  alt={leader.altText}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center gap-y-2">
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
                <p className="text-gray-500 text-sm">{leader.tenure}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
