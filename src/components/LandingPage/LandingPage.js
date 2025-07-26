import React from "react";
import favicon from "../../assets/favicon.png";

export default function LandingPage({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black-100 pt-32">
      <button
        className="bg-purple-400 hover:bg-black-500 text-white font-bold py-6 px-12 rounded-lg text-5xl flex flex-col items-center gap-4"
        onClick={onStart}
        style={{ borderRadius: "1rem" }}
      >
        <img
          src={favicon}
          alt="Meg Connections Logo"
          className="w-20 h-20 mb-2"
          style={{ display: "block" }}
        />
        Connections
      </button>
    </div>
  );
}