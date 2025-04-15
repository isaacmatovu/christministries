// components/youth/Testimonials.js
import Image from "next/image";
const testimonials = [
  {
    name: "James Wilson",
    role: "Youth Member",
    quote:
      "The youth ministry has completely transformed my life. I've found true friendship and grown stronger in my faith.",
    image: "/placeholder.svg?height=48&width=48",
  },
];

export function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-gray-700">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
