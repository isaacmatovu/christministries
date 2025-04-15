import { Button } from "@/components/common/Button";
import Image from "next/image";
import image from "./images/prayer.jpg";

export function FeaturedMinistry() {
  return (
    <section className="">
      <div className="px-12 sm:px-28 pb-16">
        <div className="grid gap-8 md:grid-cols-2 border-white border shadow-2xl">
          <div className="relative h-[400px] overflow-hidden">
            <Image
              src={image}
              alt="Food bank volunteers"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 px-10 sm:px-0">
            <h2 className="text-3xl font-bold">
              Featured Ministry: Community Food Bank
            </h2>
            <p className="text-gray-600">
              Join us in our mission to fight hunger in our community. Every
              month, we serve hundreds of families through our food bank
              ministry. Your support makes a difference!
            </p>
            <div className="mb-3 sm:mb-0">
              <Button className="mt-4 bg-black text-white hover:bg-black/90">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
