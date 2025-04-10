export default function Newsletter() {
  return (
    <section className="py-12 px-4 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="mb-6">
          Join our newsletter to stay updated with church news and events
        </p>
        <form className="flex flex-col sm:flex-row gap-2 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-black flex-grow max-w-md"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
