export function TestimonialCard({ quote, author, role }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <p className="mb-4 italic text-gray-600">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
