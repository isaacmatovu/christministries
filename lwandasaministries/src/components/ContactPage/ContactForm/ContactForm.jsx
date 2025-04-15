export function ContactForm() {
  return (
    <div className="space-y-8">
      <div className="rounded-lg border-gray-300 bg-white p-8 shadow-sm">
        <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
        <form className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="first-name"
                className="text-sm font-medium leading-none"
              >
                First name
              </label>
              <input
                id="first-name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="last-name"
                className="text-sm font-medium leading-none"
              >
                Last name
              </label>
              <input
                id="last-name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Smith"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="john.smith@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none">
              Phone (optional)
            </label>
            <input
              id="phone"
              type="tel"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="(555) 123-4567"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium leading-none"
            >
              Subject
            </label>
            <select
              id="subject"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="prayer">Prayer Request</option>
              <option value="volunteer">Volunteer Opportunities</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none"
            >
              Message
            </label>
            <textarea
              id="message"
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
