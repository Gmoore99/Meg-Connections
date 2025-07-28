import React, { useState } from "react";
import Header from "../Header";
import Game from "../Game";
import LandingPage from "../LandingPage/LandingPage";
import Wordle from "../Wordle/Wordle"; // You will create this component
import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";

function App() {
  const [activeGame, setActiveGame] = useState(null); // null, "connections", or "wordle"

  return (
    <PuzzleDataProvider>
      <GameStatusProvider>
        <div className="wrapper">
          <Toaster />
          <Header activeGame={activeGame} />
          {!activeGame && (
            <LandingPage
              onStartConnections={() => setActiveGame("connections")}
              onStartWordle={() => setActiveGame("wordle")}
            />
          )}
          {activeGame === "connections" && <Game />}
          {activeGame === "wordle" && <Wordle />}
        </div>
      </GameStatusProvider>
    </PuzzleDataProvider>
  );
}

export default App;