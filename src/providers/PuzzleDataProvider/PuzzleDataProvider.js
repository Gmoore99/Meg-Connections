import React from "react";
import { getRandomGame } from "../../lib/data";

export const PuzzleDataContext = React.createContext();

function PuzzleDataProvider({ children }) {
  const [gameData, setGameData] = React.useState(() => getRandomGame());

  // Don't block rendering if gameData is null; let modals handle it
  if (gameData && !gameData[0]) {
    return <div>Error: No game data available.</div>;
  }

  const categorySize = gameData ? gameData[0].words.length : 0;
  const numCategories = gameData ? gameData.length : 0;

  return (
    <PuzzleDataContext.Provider
      value={{ gameData, setGameData, numCategories, categorySize }}
    >
      {children}
    </PuzzleDataContext.Provider>
  );
}

export default PuzzleDataProvider;
