import { Users, Heart, Link2 } from "lucide-react";
import { FaChildren } from "react-icons/fa6";
import { GrRestroomWomen } from "react-icons/gr";
import { TbBuildingCommunity } from "react-icons/tb";
import { GiTeamDowngrade } from "react-icons/gi";

const ministryData = [
  {
    icon: FaChildren,
    title: "Children's Ministry",
    description: "Nurturing young hearts in faith through fun and learning",
  },
  {
    icon: GiTeamDowngrade,
    title: "Youth Ministry",
    description: "Empowering teens to grow in their faith journey",
  },
  {
    icon: GrRestroomWomen,
    title: "Women's Ministry",
    description: "Supporting and encouraging women in their walk with Christ",
  },
  {
    icon: TbBuildingCommunity,
    title: "Community Outreach",
    description: "Serving our community with love and compassion",
  },
];

export default function MinistryCards() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Ministries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministryData.map((ministry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <div className="flex justify-center mb-4">
                <ministry.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">{ministry.title}</h3>
              <p className="text-sm text-gray-600">{ministry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
