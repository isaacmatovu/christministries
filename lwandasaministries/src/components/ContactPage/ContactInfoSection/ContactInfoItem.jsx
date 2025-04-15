export function ContactInfoItem({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start space-x-4">
      <Icon className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-500">{children}</p>
      </div>
    </div>
  );
}
