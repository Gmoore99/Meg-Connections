import React, { useState } from "react";
import LandingInfoModal from "../modals/InfoModal/LandingInfoModal";

export default function LandingPage({ onStartConnections, onStartWordle }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black-100 pt-12 relative">
      <div className="flex flex-col gap-8">
        {/* Info Button above Connections - PNG version */}
        <div className="flex justify-center mb-2">
          <button
            className="bg-purple-200 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full"
            aria-label="Info"
            onClick={() => setShowInfo(true)}
            style={{ padding: 0, border: "none", background: "transparent" }}
          >
            <img
              src="https://i.postimg.cc/02nDpNdY/Screenshot-2025-07-28-at-15-12-28.png"
              alt=""
              className="w-14 h-14 sm:w-16 sm:h-16"
            />
          </button>
        </div>
        {/* Info Modal (single instance, controlled by showInfo) */}
        <LandingInfoModal
          open={showInfo}
          onClose={() => setShowInfo(false)}
        />
        {/* Connections Button with label */}
        <div className="flex flex-row items-center gap-8">
          <button
            className="focus:outline-none flex items-center gap-4 px-3 py-3 bg-white rounded-xl shadow hover:bg-gray-200 transition w-[260px] h-[95px] sm:w-[400px] sm:h-[120px]"
            onClick={onStartConnections}
            style={{ borderRadius: "1rem" }}
          >
            <img
              src="https://i.postimg.cc/Y2Gvv4Sg/Screenshot-2025-07-28-at-11-19-33.png"
              alt="Meg's Connections"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              style={{ display: "block", borderRadius: "1rem" }}
            />
            <span
              className="font-pt-serif text-2xl sm:text-3xl font-bold text-black flex flex-col leading-tight items-start text-left"
              style={{
                letterSpacing: "1px",
              }}
            >
              <span>Meg&apos;s</span>
              <span>Connections</span>
            </span>
          </button>
        </div>
        {/* Wordle Button with label */}
        <div className="flex flex-row items-center gap-8">
          <button
            className="focus:outline-none flex items-center gap-4 px-3 py-3 bg-white rounded-xl shadow hover:bg-gray-200 transition w-[260px] h-[95px] sm:w-[400px] sm:h-[120px]"
            onClick={onStartWordle}
            style={{ borderRadius: "1rem" }}
          >
            <img
              src="https://i.postimg.cc/1Xns4Ncz/Screenshot-2025-07-28-at-11-19-23.png"
              alt="Meg's Wordle"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              style={{ display: "block", borderRadius: "1rem" }}
            />
            <span
              className="font-pt-serif text-2xl sm:text-3xl font-bold text-black flex flex-col leading-tight items-start text-left"
              style={{
                letterSpacing: "1px",
              }}
            >
              <span>Meg&apos;s</span>
              <span>Wordle</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}