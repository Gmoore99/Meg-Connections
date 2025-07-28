import React from "react";

export default function WordleNewGameButton({ onClick, children }) {
  return (
    <button
      className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-blue-600"
      onClick={onClick}
    >
      {children || "New Game!"}
    </button>
  );
}