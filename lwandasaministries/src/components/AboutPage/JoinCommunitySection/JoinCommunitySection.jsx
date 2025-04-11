import Link from "next/link";

export function JoinCommunitySection() {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
        <p className="mb-8 text-gray-300">
          We invite you to become part of our growing family. Experience the joy
          of worship, fellowship, and spiritual growth in a welcoming
          environment.
        </p>
        <Link
          href=""
          className="inline-block bg-white text-black font-medium px-6 py-3 rounded hover:bg-gray-200 transition-colors"
        >
          Join Community
        </Link>
      </div>
    </section>
  );
}
