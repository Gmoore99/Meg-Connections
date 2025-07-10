import React from "react";
import BaseModal from "../BaseModal";
import { SolvedWordRow } from "../../GameGrid";
import ShareScoreButton from "../../ShareScoreButton";
import CountdownToNextPuzzle from "../../CountdownToNextPuzzle";
import Button from "../../ui/button";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";

function GameLostModal({ open, onClose, onPlayAgain }) {
  const { gameData } = React.useContext(PuzzleDataContext);

  const noMoreSets = !gameData;

  function handlePlayAgain() {
    if (onPlayAgain) onPlayAgain();
    if (onClose) onClose();
  }

  return (
    <BaseModal
      title={noMoreSets ? "No more games!" : "You failed your Meg-ducation."}
      initiallyOpen={open}
      footerElements={
        noMoreSets
          ? []
          : [
              <ShareScoreButton key="share" />,
              <Button key="play-again" onClick={handlePlayAgain}>
                Play Again!
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
          <div className="grid gap-y-2">
            <p className="text-lg font-[500] text-center">
              You owe her dinner & a pint 🤪.
            </p>
            {gameData.map((obj) => (
              <SolvedWordRow key={obj.category} {...obj} />
            ))}
          </div>
          <CountdownToNextPuzzle />
        </>
      )}
    </BaseModal>
  );
}

export default GameLostModal;
