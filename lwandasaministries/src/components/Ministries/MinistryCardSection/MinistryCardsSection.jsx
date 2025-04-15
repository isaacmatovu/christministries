import { MinistryCard } from "./MinistryCard";

export function MinistryCardsSection() {
  const ministriesData = [
    {
      title: "Youth Ministry",
      description:
        "Empowering young people to grow in faith through fellowship, worship, and service.",
      schedule: "Meets every Friday at 6:30 PM",
      link: "/youthministry", // Add link for each ministry
    },
    {
      title: "Children's Ministry",
      description:
        "Nurturing young hearts with God's love through age-appropriate learning and activities.",
      schedule: "Sunday School at 9:30 AM",
      link: "/ministries/children",
    },
    {
      title: "Women's Ministry",
      description:
        "Supporting and encouraging women in their spiritual journey through fellowship and study.",
      schedule: "Tuesday Bible Study at 10:00 AM",
      link: "/ministries/women",
    },
    {
      title: "Men's Ministry",
      description:
        "Building strong Christian men through fellowship, accountability, and service.",
      schedule: "Saturday Breakfast at 8:00 AM",
      link: "/ministries/men",
    },
    {
      title: "Music & Worship",
      description:
        "Leading the congregation in worship through music and praise.",
      schedule: "Practice Wednesday at 7:00 PM",
      link: "/ministries/worship",
    },
    {
      title: "Community Outreach",
      description:
        "Serving our community through various outreach programs and initiatives.",
      schedule: "Monthly Service Projects",
      link: "/ministries/outreach",
    },
  ];

  return (
    <section className="bg-gray-50 pt-12 px-14 sm:px-28 pb-16">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ministriesData.map((ministry, index) => (
            <MinistryCard
              key={index}
              title={ministry.title}
              description={ministry.description}
              schedule={ministry.schedule}
              link={ministry.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
