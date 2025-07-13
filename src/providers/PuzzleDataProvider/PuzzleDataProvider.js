import React from "react";
import { getNextGame, resetUsedCategories } from "../../lib/data";

export const PuzzleDataContext = React.createContext();

function PuzzleDataProvider({ children }) {
  const [gameData, setGameData] = React.useState(() => getNextGame());

  // Helper to always get the next set
  const loadNextGame = React.useCallback(() => {
    setGameData(getNextGame());
  }, []);

  // Optionally, add a reset function for replaying from the start
  const resetAllGames = React.useCallback(() => {
    resetUsedCategories();
    setGameData(getNextGame());
  }, []);

  const categorySize = gameData?.[0]?.words.length || 0;
  const numCategories = gameData ? gameData.length : 0;

  return (
    <PuzzleDataContext.Provider
      value={{
        gameData,
        setGameData,
        numCategories,
        categorySize,
        loadNextGame,    // use this in your Game.js handlePlayAgain
        resetAllGames,   // optional: use for a "reset all" button
      }}
    >
      {children}
    </PuzzleDataContext.Provider>
  );
}

export default PuzzleDataProvider;
