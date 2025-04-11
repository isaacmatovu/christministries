import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 border-2 border-gray-100 rounded-lg">
          <div className="w-full h-[400px] bg-gray-200 overflow-hidden">
            <Image
              src=""
              alt="Map location"
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start max-w-md">
            <h3 className="text-xl font-bold mb-4">Christ Ministries Church</h3>
            <p className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              123 Faith Street
            </p>
            <p className="text-gray-600 mb-4 ml-7">Cityville, ST 12345</p>
            <p className="flex items-center text-gray-600">
              <Phone className="h-5 w-5 mr-2" />
              (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
