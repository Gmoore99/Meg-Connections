import React from "react";

export default function LandingPage({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-100">
      <button
        className="bg-purple-400 hover:bg-black-500 text-white font-bold py-8 px-20 rounded-lg text-4xl"
        onClick={onStart}
      >
        Connections
      </button>
    </div>
  );
}