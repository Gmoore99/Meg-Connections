import React from "react";
import InfoModal from "../modals/InfoModal";
import WordleInfoModal from "../modals/WordleInfoModal";

function Header({ activeGame }) {
  let title = "Meg's Birthday Games!!! 🥳❤️";
  if (activeGame === "connections") title = "Meg's Birthday Connections!!! ❤️❤️";
  if (activeGame === "wordle") title = "Meg's Birthday Wordle!! ❤️❤️";

  return (
    <header className="relative flex flex-col items-center">
      <div className="flex w-full max-w-xl items-center justify-center mt-8 mb-3 relative px-2">
        <h1 className="pt-serif-bold text-center w-full text-sm xs:text-base sm:text-xl md:text-3xl transition-all">
          {title}
        </h1>
        {/* Responsive info button, shrinks on small screens */}
        {activeGame && (
          <div className="absolute right-1 top-1/2 -translate-y-1/2 sm:right-4">
            <div className="w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center">
              {activeGame === "wordle" ? (
                <WordleInfoModal
                  buttonClassName="w-7 h-7 sm:w-10 sm:h-10"
                  iconClassName="w-4 h-4 sm:w-6 sm:h-6"
                />
              ) : (
                <InfoModal
                  buttonClassName="w-7 h-7 sm:w-10 sm:h-10"
                  iconClassName="w-4 h-4 sm:w-6 sm:h-6"
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
