import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { ContactInfoItem } from "./ContactInfoItem";

export function ContactInfoSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
      <p className="text-gray-500 md:text-lg">
        We're here to help and answer any questions you might have. We look
        forward to hearing from you.
      </p>

      <div className="space-y-6">
        <ContactInfoItem icon={MapPin} title="Church Address">
          123 Faith Street
          <br />
          Blessed City, BC 12345
        </ContactInfoItem>

        <ContactInfoItem icon={Phone} title="Phone">
          (555) 123-4567
        </ContactInfoItem>

        <ContactInfoItem icon={Mail} title="Email">
          info@gracechurch.com
        </ContactInfoItem>

        <ContactInfoItem icon={Clock} title="Office Hours">
          Monday - Friday: 9:00 AM - 5:00 PM
          <br />
          Saturday: Closed
          <br />
          Sunday: 8:00 AM - 1:00 PM
        </ContactInfoItem>
      </div>

      <div className="pt-4">
        <h3 className="font-medium mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-600 hover:text-indigo-600">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-indigo-600">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-indigo-600">
            <Youtube className="h-6 w-6" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-indigo-600">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
