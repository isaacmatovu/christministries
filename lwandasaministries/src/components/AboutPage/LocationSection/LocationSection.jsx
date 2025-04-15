import { MapPin, Phone } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Location</h2>
        {/* Remove `grid-cols-2` since there's only one column now */}
        <div className="border-2 border-gray-100 rounded-lg overflow-hidden">
          {/* Full-width map container */}
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d255345.4811810396!2d32.56811372176781!3d0.27265887745120637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smt%20lebanon%20church!5e0!3m2!1sen!2sug!4v1744699525678!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
