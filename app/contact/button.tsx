"use client";

const Button = () => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      onClick={() => alert("Button clicked!")}
    >
      Click Me!
    </button>
  );
};

export default Button;
