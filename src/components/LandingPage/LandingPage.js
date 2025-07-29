import React from "react";
import LandingInfoModal from "../modals/InfoModal/LandingInfoModal";
import { HelpCircle } from "lucide-react";

export default function LandingPage({ onStartConnections, onStartWordle }) {
  const [showInfo, setShowInfo] = React.useState(false);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black-100 pt-32">
      <div className="flex flex-col gap-8">
        {/* Connections Button with label */}
        <div className="flex flex-row items-center gap-8">
          <button
            className="focus:outline-none flex items-center gap-4 px-4 py-2 bg-white rounded-xl shadow hover:bg-gray-200 transition w-[340px] h-[110px] sm:w-[400px] sm:h-[120px]"
            onClick={onStartConnections}
            style={{ borderRadius: "1rem" }}
          >
            <img
              src="https://i.postimg.cc/Y2Gvv4Sg/Screenshot-2025-07-28-at-11-19-33.png"
              alt="Meg's Connections"
              className="w-24 h-24 object-contain"
              style={{ display: "block", borderRadius: "1rem" }}
            />
            <span
              className="font-pt-serif text-3xl font-bold text-black flex flex-col leading-tight items-start text-left"
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
            className="focus:outline-none flex items-center gap-4 px-4 py-2 bg-white rounded-xl shadow hover:bg-gray-200 transition w-[340px] h-[110px] sm:w-[400px] sm:h-[120px]"
            onClick={onStartWordle}
            style={{ borderRadius: "1rem" }}
          >
            <img
              src="https://i.postimg.cc/1Xns4Ncz/Screenshot-2025-07-28-at-11-19-23.png"
              alt="Meg's Wordle"
              className="w-24 h-24 object-contain"
              style={{ display: "block", borderRadius: "1rem" }}
            />
            <span
              className="font-pt-serif text-3xl font-bold text-black flex flex-col leading-tight items-start text-left"
              style={{
                letterSpacing: "1px",
              }}
            >
              <span>Meg&apos;s</span>
              <span>Wordle</span>
            </span>
          </button>
        </div>
        {/* Info Button below Wordle button, styled to match header */}
        <div className="flex justify-center mt-4">
          <button
            className="bg-purple-200 text-black w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full"
            aria-label="Info"
            title="Info"
            onClick={() => setShowInfo(true)}
          >
            <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>
        {showInfo && (
          <LandingInfoModal
            initiallyOpen={true}
            onClose={() => setShowInfo(false)}
          />
        )}
      </div>
    </div>
  );
}