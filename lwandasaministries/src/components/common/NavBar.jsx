import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image
                  src="/church-logo.svg"
                  alt="Grace Community Church"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-purple-700 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-purple-700 font-medium"
            >
              About
            </Link>
            <Link
              href="/ministries"
              className="text-gray-900 hover:text-purple-700 font-medium"
            >
              Ministries
            </Link>
            <Link
              href="/events"
              className="text-gray-900 hover:text-purple-700 font-medium"
            >
              Events
            </Link>
            <Link
              href="/sermons"
              className="text-gray-900 hover:text-purple-700 font-medium"
            >
              Sermons
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-purple-700 font-medium"
            >
              Contact
            </Link>
          </nav>

          <div>
            <Link
              href="/join"
              className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
