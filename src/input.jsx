export default function Input({ type = "text", placeholder, className }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`border px-3 py-2 rounded-md ${className}`}
      />
    );
  }
  