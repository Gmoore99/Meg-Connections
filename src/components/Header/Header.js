import React from "react";
import InfoModal from "../modals/InfoModal";
import WordleInfoModal from "../modals/WordleInfoModal";

function Header({ activeGame }) {
  let title = "Meg's Birthday Games!!! 🥳❤️";
  if (activeGame === "connections") title = "Meg's Birthday Connections!!! ❤️❤️";
  if (activeGame === "wordle") title = "Meg's Birthday Wordle!! ❤️❤️";

  return (
    <header className="relative flex flex-col items-center w-full">
      {/* Info button absolutely positioned in the top right of the header */}
      {activeGame && (
        <div className="absolute top-4 right-4 z-10">
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
            {activeGame === "wordle" ? (
              <WordleInfoModal
                buttonClassName="w-9 h-9 sm:w-10 sm:h-10"
                iconClassName="w-5 h-5 sm:w-6 sm:h-6"
              />
            ) : (
              <InfoModal
                buttonClassName="w-9 h-9 sm:w-10 sm:h-10"
                iconClassName="w-5 h-5 sm:w-6 sm:h-6"
              />
            )}
          </div>
        </div>
      )}
      <div className="w-full max-w-xl mt-8 mb-3 px-2 flex items-center justify-center">
        <h1 className="pt-serif-bold text-center w-full text-xl sm:text-2xl md:text-3xl transition-all">
          {title}
        </h1>
      </div>
      <div className="w-full border-b-2 border-gray-300 mb-4"></div>
    </header>
  );
}

export default Header;
