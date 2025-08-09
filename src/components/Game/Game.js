import React, { useState, useEffect } from "react";
import { shuffleGameData } from "../../lib/game-helpers";
import GameGrid from "../GameGrid";
import NumberOfMistakesDisplay from "../NumberOfMistakesDisplay";
import GameLostModal from "../modals/GameLostModal";
import GameWonModal from "../modals/GameWonModal/GameWonModal";
import { Separator } from "../ui/separator";
import ConfettiExplosion from "react-confetti-explosion";
import { PuzzleDataContext } from "../../providers/PuzzleDataProvider";
import { GameStatusContext } from "../../providers/GameStatusProvider";
import GameControlButtonsPanel from "../GameControlButtonsPanel";
import ViewResultsModal from "../modals/ViewResultsModal";
import { getNextGame, ALL_CATEGORIES } from "../../lib/data";
import InfoModal from "../modals/InfoModal/InfoModal";
import NoMoreSetsModal from "../modals/NoMoreSetsModal";

function Game() {
  const {
    resetGameStatus,
    solvedGameData,
    isGameOver,
    isGameWon,
    submittedGuesses,
  } = React.useContext(GameStatusContext);

  const { gameData, setGameData, numCategories, categorySize, loadNextGame } = React.useContext(PuzzleDataContext);

  const [shuffledRows, setShuffledRows] = React.useState(
    shuffleGameData({ gameData })
  );
  const [isEndGameModalOpen, setIsEndGameModalOpen] = React.useState(false);
  const [gridShake, setGridShake] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(null); // null | "won" | "lost"
  const [setIndex, setSetIndex] = useState(0);
  const [showNoMoreSetsModal, setShowNoMoreSetsModal] = useState(false);

  // Reset all local state when gameData changes
  React.useEffect(() => {
    setShuffledRows(shuffleGameData({ gameData }));
    setGridShake(false);
    setShowConfetti(false);
    setIsEndGameModalOpen(false);
  }, [gameData]);

  // Update Game Grid after a row has been correctly solved
  React.useEffect(() => {
    if (!gameData || !Array.isArray(gameData)) return;
    const categoriesToRemoveFromRows = solvedGameData.map(
      (data) => data.category
    );
    const dataLeftForRows = gameData.filter((data) => {
      return data && !categoriesToRemoveFromRows.includes(data.category);
    });
    if (dataLeftForRows.length > 0) {
      setShuffledRows(shuffleGameData({ gameData: dataLeftForRows }));
    }
  }, [solvedGameData, gameData]);

  // Handle End Game!
  React.useEffect(() => {
    if (!isGameOver) return;
    const modalDelay = isGameWon ? 2000 : 250;
    const delayModalOpen = window.setTimeout(() => {
      setIsEndGameModalOpen(true);
      setShowConfetti(false);
    }, modalDelay);

    if (isGameWon) setShowConfetti(true);

    return () => window.clearTimeout(delayModalOpen);
  }, [isGameOver, isGameWon]);

  // Check if all sets are done
  const allDone = setIndex >= ALL_CATEGORIES.length;

  function handlePlayAgain() {
    // If we're currently on the last set, show the modal
    if (setIndex === ALL_CATEGORIES.length - 1) {
      setShowNoMoreSetsModal(true);
      setIsEndGameModalOpen(false);
      setShowResultsModal(false);
      return;
    }
    resetGameStatus();
    setSetIndex(setIndex + 1);
    loadNextGame();
    setIsEndGameModalOpen(false);
    setShowResultsModal(false);
  }

  const { gameData: contextGameData } = React.useContext(PuzzleDataContext);

  // Always allow info modal to open by resetting showInfo on close
  useEffect(() => {
    const handler = () => setShowInfo(true);
    document.addEventListener("openInfoModal", handler);
    return () => document.removeEventListener("openInfoModal", handler);
  }, []);

  // When user submits a guess:
  const handleSubmitGuess = (guess) => {
    // ...your guess logic...
    // Example: Replace with your actual condition
    const isIncorrect = isGuessIncorrect(guess);
    if (isIncorrect) {
      setShouldGridShake(true);
    }
    // ...rest of your logic...
  };

  return (
    <>
      <h3 className="text-lg text-center mt-16">
        Create {numCategories} groups of {categorySize}
      </h3>

      <div className="game-wrapper mt-16">
        {isGameOver && isGameWon && !showResultsModal ? (
          <GameWonModal
            open={isEndGameModalOpen}
            onClose={() => setIsEndGameModalOpen(false)}
            submittedGuesses={submittedGuesses}
            onPlayAgain={handlePlayAgain}
          />
        ) : isGameOver && !showResultsModal ? (
          <GameLostModal
            open={isEndGameModalOpen}
            onClose={() => setIsEndGameModalOpen(false)}
            onPlayAgain={handlePlayAgain}
          />
        ) : null}

        <GameGrid
          gameRows={shuffledRows}
          shouldGridShake={gridShake}
          setShouldGridShake={setGridShake}
        />

        {showConfetti && isGameOver && (
          <div className="grid place-content-center">
            <ConfettiExplosion
              particleCount={100}
              force={0.8}
              duration={2500}
            />
          </div>
        )}
        <Separator />

        {!isGameOver ? (
          <>
            <NumberOfMistakesDisplay />
            <GameControlButtonsPanel
              shuffledRows={shuffledRows}
              setShuffledRows={setShuffledRows}
              setGridShake={setGridShake}
            />
          </>
        ) : (
          <>
            {!showResultsModal && (
              <div className="flex flex-col items-center mt-6">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded font-bold hover:bg-blue-700"
                  onClick={() => setShowResultsModal(isGameWon ? "won" : "lost")}
                >
                  View Results
                </button>
              </div>
            )}
            {showResultsModal === "won" && (
              <GameWonModal
                open={true}
                onClose={() => setShowResultsModal(null)}
                submittedGuesses={submittedGuesses}
                onPlayAgain={handlePlayAgain}
              />
            )}
            {showResultsModal === "lost" && (
              <GameLostModal
                open={true}
                onClose={() => setShowResultsModal(null)}
                onPlayAgain={handlePlayAgain}
              />
            )}
          </>
        )}
        {showInfo && (
          <InfoModal
            open={showInfo}
            onClose={() => setShowInfo(false)}
          />
        )}
        {showNoMoreSetsModal && (
          <NoMoreSetsModal
            open={true}
            onClose={() => setShowNoMoreSetsModal(false)}
          />
        )}
      </div>
    </>
  );
}

export default Game;
