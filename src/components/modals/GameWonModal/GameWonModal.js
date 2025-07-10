import React from "react";
import BaseModal from "../BaseModal";
import { generateEmojiGrid } from "../../../lib/game-helpers";
import ShareScoreButton from "../../ShareScoreButton";
import CountdownToNextPuzzle from "../../CountdownToNextPuzzle";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";
import Button from "../../ui/button";

function GameWonModal({ open, onClose, submittedGuesses, onPlayAgain }) {
  const { gameData } = React.useContext(PuzzleDataContext);

  const noMoreSets = !gameData;

  function handlePlayAgain() {
    if (onPlayAgain) onPlayAgain();
    if (onClose) onClose();
  }

  return (
    <BaseModal
      title={noMoreSets ? "No more games!" : "You won the game!"}
      initiallyOpen={open}
      footerElements={
        noMoreSets
          ? []
          : [
              <ShareScoreButton key="share" />,
              <Button key="New-game" onClick={handlePlayAgain}>
                New Game!
              </Button>,
            ]
      }
      showActionButton={false}
    >
      {noMoreSets ? (
        <div style={{ textAlign: "center", fontSize: "2rem" }}>
          Come back next year
        </div>
      ) : (
        <>
          <p>{"Great job, share your results!"}</p>
          <div className="justify-center">
            <span className="text-center whitespace-pre">
              {"\n"}
              {generateEmojiGrid(gameData, submittedGuesses)}
            </span>
            <CountdownToNextPuzzle />
          </div>
        </>
      )}
    </BaseModal>
  );
}

export default GameWonModal;
