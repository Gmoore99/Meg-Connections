import React from "react";
import Button from "../ui/button";
import { useToast } from "../ui/use-toast";
import { Shuffle, Undo, SendHorizontal } from "lucide-react";
import {
  isGuessCorrect,
  isGuessRepeated,
  shuffleGameData,
} from "../../lib/game-helpers";

import { GameStatusContext } from "../../providers/GameStatusProvider";
import { PuzzleDataContext } from "../../providers/PuzzleDataProvider";

function GameControlButtonsPanel({
  shuffledRows,
  setShuffledRows,
  setGridShake,
}) {
  const {
    isGameOver,
    guessCandidate,
    setGuessCandidate,
    submittedGuesses,
    setSubmittedGuesses,
    solvedGameData,
    setSolvedGameData,
  } = React.useContext(GameStatusContext);
  const { gameData, categorySize } = React.useContext(PuzzleDataContext);
  const { toast } = useToast();

  function deselectAll() {
    setGuessCandidate([]);
  }

  function submitCandidateGuess() {
    // check that its a valid guess by size
    if (guessCandidate.length !== categorySize) {
      return;
    }
    // check that the guess hasnt already been submitted previously
    if (isGuessRepeated({ submittedGuesses, guessCandidate })) {
      toast({
        label: "Notification",
        title: "Repeated Guess",
        description: "You previously made this guess!",
      });

      return;
    }
    // add guess to state
    setSubmittedGuesses([...submittedGuesses, guessCandidate]);
    // check if the guess is correct
    const {
      isCorrect,
      correctWords,
      correctCategory,
      isGuessOneAway,
      correctDifficulty,
      correctImageSrc,
    } = isGuessCorrect({
      guessCandidate,
      gameData,
    });

    // if the guess is correct:
    // set it as solved in game data
    if (isCorrect) {
      setSolvedGameData([
        ...solvedGameData,
        {
          category: correctCategory,
          words: correctWords,
          difficulty: correctDifficulty,
          imageSrc: correctImageSrc,
        },
      ]);
      setGuessCandidate([]);
    } else {
      // Shake the grid to give feedback that they were wrong
      setGridShake(true);
      if (isGuessOneAway) {
        toast({
          label: "Notification",
          title: "Close Guess",
          description:
            "One guess away!",
        });
      }
    }
  }

  return (
    <div className="w-full px-2 sm:px-0 flex justify-center">
      <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-2xl">
        <Button
          size="base"
          className="bg-amber-300 text-white hover:bg-amber-500 flex items-center justify-center h-12 sm:h-16"
          disabled={isGameOver}
          variant="secondary"
          onClick={() =>
            setShuffledRows(shuffleGameData({ gameData: shuffledRows }))
          }
        >
          <span className="flex items-center">
            <Shuffle className="h-7 w-7 mr-2" strokeWidth={1} />
            <span className="select-none text-lg font-semibold">Shuffle</span>
          </span>
        </Button>
        <Button
          size="base"
          className="bg-amber-300 text-white hover:bg-amber-500 flex items-center justify-center h-12 sm:h-16"
          disabled={isGameOver}
          variant="secondary"
          onClick={deselectAll}
        >
          <span className="flex items-center">
            <Undo className="h-7 w-7 mr-2" strokeWidth={1} />
            <span className="select-none text-lg font-semibold">Deselect All</span>
          </span>
        </Button>
        <Button
          size="base"
          className="bg-gray-400 text-white hover:bg-amber-500 flex items-center justify-center h-12 sm:h-16"
          variant="submit"
          onClick={submitCandidateGuess}
          disabled={isGameOver || guessCandidate.length !== categorySize}
        >
          <span className="flex items-center">
            <SendHorizontal className="h-7 w-7 mr-2" strokeWidth={1} />
            <span className="select-none text-lg font-semibold">Submit</span>
          </span>
        </Button>
        <div /> {/* Spacer to keep buttons centered in 4 columns */}
      </div>
    </div>
  );
}

export default GameControlButtonsPanel;
