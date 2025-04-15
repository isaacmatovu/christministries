import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  const testimonialsData = [
    {
      quote:
        "The youth ministry has transformed my teenager's life. The mentorship and fellowship they receive is invaluable.",
      author: "Sarah Johnson",
      role: "Parent",
    },
    {
      quote:
        "Being part of the worship team has deepened my faith and given me a way to serve the Lord through music.",
      author: "Michael Chen",
      role: "Worship Team Member",
    },
    {
      quote:
        "The women's ministry provides such wonderful support and fellowship. It's truly a blessing in my life.",
      author: "Lisa Martinez",
      role: "Women's Ministry Member",
    },
  ];

  return (
    <section className="bg-gray-50 px-14 sm:px-28 pb-12">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
