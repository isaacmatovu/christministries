export function Button({ children, className, variant }) {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium text-sm transition-colors";
  const variantStyles =
    variant === "outline"
      ? "bg-black text-white hover:bg-black/90"
      : "bg-black text-white hover:bg-black/90";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className || ""}`}>
      {children}
    </button>
  );
}
