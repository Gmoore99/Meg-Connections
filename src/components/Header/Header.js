import React, { useState } from "react";
import InfoModal from "../modals/InfoModal/InfoModal";
import WordleInfoModal from "../modals/WordleInfoModal";

function Header({ activeGame }) {
  let title = "Meg's Birthday Games!!! 🥳❤️";
  if (activeGame === "connections") title = "Meg's Connections!!!";
  if (activeGame === "wordle") title = "Meg's Wordle!!";

  // Only show info button for connections and wordle, not landing
  const showInfoButton = activeGame === "connections" || activeGame === "wordle";
  const [showInfo, setShowInfo] = useState(false);

  function handleInfoClick() {
    setShowInfo(true);
  }

  function handleClose() {
    setShowInfo(false);
  }

  return (
    <header className="relative flex flex-col items-center w-full">
      {showInfoButton && (
        <div className="absolute top-6 right-4 z-10">
          <button
            type="button"
            className="bg-transparent border-none p-0 cursor-pointer flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10"
            onClick={handleInfoClick}
          >
            <img
              src="https://i.postimg.cc/02nDpNdY/Screenshot-2025-07-28-at-15-12-28.png"
              alt="Info"
              className="w-9 h-9 sm:w-10 sm:h-10"
            />
          </button>
        </div>
      )}
      <div className="w-full max-w-xl mt-8 mb-3 px-2 flex items-center justify-center">
        <h1 className="pt-serif-bold text-center w-full text-2xl sm:text-3xl md:text-4xl transition-all">
          {title}
        </h1>
      </div>
      <div className="w-full border-b-2 border-gray-300 mb-4"></div>
      {/* Show the correct info modal */}
      {activeGame === "connections" && (
        <InfoModal open={showInfo} onClose={handleClose} />
      )}
      {activeGame === "wordle" && (
        <WordleInfoModal open={showInfo} onClose={handleClose} />
      )}
    </header>
  );
}

export default Header;
