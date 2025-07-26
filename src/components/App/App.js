import React, { useState } from "react";
import Header from "../Header";
import Game from "../Game";
import LandingPage from "../LandingPage/LandingPage";
import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <PuzzleDataProvider>
      <GameStatusProvider>
        <div className="wrapper">
          <Toaster />
          <Header isLandingPage={!started} />
          {!started && <LandingPage onStart={() => setStarted(true)} />}
          {started && <Game />}
        </div>
      </GameStatusProvider>
    </PuzzleDataProvider>
  );
}

export default App;