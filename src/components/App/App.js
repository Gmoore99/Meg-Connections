import React, { useEffect } from "react";
import Header from "../Header";
import Game from "../Game";

import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";

function App() {
  useEffect(() => {
    localStorage.clear(); // This will reset the game every time the page loads
  }, []);

  return (
    <PuzzleDataProvider>
      <GameStatusProvider>
        <div className="wrapper">
          <Toaster />
          <Header />
          <Game />
        </div>
      </GameStatusProvider>
    </PuzzleDataProvider>
  );
}

export default App;