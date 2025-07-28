import React from "react";
import InfoModal from "../modals/InfoModal";
import WordleInfoModal from "../modals/WordleInfoModal";

function Header({ activeGame }) {
  let title = "Meg's Birthday Games!!! 🥳❤️";
  if (activeGame === "connections") title = "Meg's Birthday Connections!!! ❤️❤️";
  if (activeGame === "wordle") title = "Meg's Birthday Wordle!! ❤️❤️";

  return (
    <header className="relative flex flex-col items-center">
      <h1 className="pt-serif-bold text-center w-full text-xl sm:text-4xl mt-12 mb-4">
        {title}
      </h1>
      <div className="w-full border-b-2 border-gray-300 mb-4"></div>
      <div className="absolute top-6 right-6 m-4">
        {activeGame === "wordle" ? <WordleInfoModal /> : <InfoModal />}
      </div>
    </header>
  );
}

export default Header;
