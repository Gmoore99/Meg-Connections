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
        <h1 className="pt-serif-bold text-center w-full text-xl sm:text-4xl">
          {title}
        </h1>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 sm:right-8">
          {activeGame === "wordle" ? <WordleInfoModal /> : <InfoModal />}
        </div>
      </div>
      <div className="w-full border-b-2 border-gray-300 mb-4"></div>
    </header>
  );
}

export default Header;
