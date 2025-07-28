import React from "react";
import InfoModal from "../modals/InfoModal";
import WordleInfoModal from "../modals/WordleInfoModal";

function Header({ activeGame }) {
  let title = "Meg's Birthday Games!!! 🥳❤️";
  if (activeGame === "connections") title = "Meg's Birthday Connections!!! ❤️❤️";
  if (activeGame === "wordle") title = "Meg's Birthday Wordle!! ❤️❤️";

  return (
    <header className="relative flex flex-col items-center">
      <div className="flex w-full items-center justify-center mt-12 mb-4 relative">
        <h1 className="pt-serif-bold text-center w-full text-base xs:text-lg sm:text-2xl md:text-4xl transition-all">
          {title}
        </h1>
        {/* Responsive info button, shrinks on small screens */}
        {activeGame && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-8">
            <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
              {activeGame === "wordle" ? (
                <WordleInfoModal
                  buttonClassName="w-8 h-8 sm:w-12 sm:h-12"
                  iconClassName="w-5 h-5 sm:w-7 sm:h-7"
                />
              ) : (
                <InfoModal
                  buttonClassName="w-8 h-8 sm:w-12 sm:h-12"
                  iconClassName="w-5 h-5 sm:w-7 sm:h-7"
                />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="w-full border-b-2 border-gray-300 mb-4"></div>
    </header>
  );
}

export default Header;
