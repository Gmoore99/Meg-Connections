import React from "react";
import Button from "../ui/button";

export default function Button({ children, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}