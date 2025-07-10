import React from "react";

export default function Button({ children, className = "", variant = "", ...props }) {
  // You can add more styling logic based on the `variant` prop if you want
  let baseStyle =
    "px-3 py-2 rounded font-bold transition-colors focus:outline-none";
  let variantStyle = "";

  if (variant === "share") {
    variantStyle = "bg-yellow-400 text-black hover:bg-yellow-200";
  } else if (variant === "outline") {
    variantStyle = "border border-pink-400 bg-white text-black hover:bg-pink-200";
  } else {
    variantStyle = "bg-amber-400 text-white hover:bg-amber-200";
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}