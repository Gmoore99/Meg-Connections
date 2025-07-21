import React from "react";
import { CATEGORY_SETS } from "../../lib/data";

export const PuzzleDataContext = React.createContext();

function getCurrentGame() {
  const currentIndex = parseInt(localStorage.getItem("currentSetIndex") || "0", 10);
  if (currentIndex >= CATEGORY_SETS.length) {
    return null;
  }
  return CATEGORY_SETS[currentIndex];
}

export function PuzzleDataProvider({ children }) {
  const [gameData, setGameData] = React.useState(() => getCurrentGame());

  // Helper to always get the next set
  const loadNextGame = React.useCallback(() => {
    const currentIndex = parseInt(localStorage.getItem("currentSetIndex") || "0", 10);
    if (currentIndex + 1 >= CATEGORY_SETS.length) {
      localStorage.setItem("currentSetIndex", CATEGORY_SETS.length);
      setGameData(null);
    } else {
      localStorage.setItem("currentSetIndex", (currentIndex + 1).toString());
      setGameData(CATEGORY_SETS[currentIndex + 1]);
    }
  }, []);

  // Optionally, add a reset function for replaying from the start
  const resetAllGames = React.useCallback(() => {
    localStorage.setItem("currentSetIndex", "0");
    setGameData(getCurrentGame());
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
