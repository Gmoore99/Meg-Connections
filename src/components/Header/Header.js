import React from "react";
import InfoModal from "../modals/InfoModal";

function Header() {
  return (
    <header className="relative flex flex-col items-center">
      <h1 className="font-space-mono text-center w-full text-xl sm:text-4xl mt-12 mb-4">
        Megs Birthday Connections!!! ❤️❤️
      </h1>
      <div className="w-full border-b-2 border-gray-300 mb-4"></div>
      <div className="absolute top-0 right-0 m-4">
        <InfoModal />
      </div>
    </header>
  );
}

export default Header;
