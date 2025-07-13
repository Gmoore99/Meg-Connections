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
      title={noMoreSets ? "That's All, Come Back Next Year!!" : "You failed your Meg-ducation."}
      titleClassName="text-center text-xl font-bold"
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
        <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
          Happy 30th Birthday Meg ❤️❤️
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://i.postimg.cc/7ZBgqVgT/Screenshot-2025-07-13-at-19-01-55.png"
              alt="Birthday Meg"
              style={{ marginTop: "1rem", maxWidth: "250px", width: "100%", borderRadius: "14px" }}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="grid gap-y-2">
            <p className="font-thin pb-2 pl-4 text-gray-800 text-center">
              You owe Meg dinner & a pint 🤪.
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
