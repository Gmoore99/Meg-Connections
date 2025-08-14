import React from "react";
import BaseModal from "../BaseModal";
import { SolvedWordRow } from "../../GameGrid";
import ShareScoreButton from "../../ShareScoreButton";
import CountdownToNextPuzzle from "../../CountdownToNextPuzzle";
import Button from "../../ui/button";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";

function GameLostModal({ open, onClose, onPlayAgain, setActiveGame, noMoreSets: propNoMoreSets }) {
  const { gameData } = React.useContext(PuzzleDataContext);

  // Prefer explicit prop if passed, otherwise fallback to context
  const noMoreSets = typeof propNoMoreSets === "boolean" ? propNoMoreSets : !gameData;

  function handlePlayAgain() {
    if (noMoreSets) {
      if (setActiveGame) setActiveGame(null); // Go to landing page
      if (onClose) onClose();
    } else {
      if (onPlayAgain) onPlayAgain();
      if (onClose) onClose();
    }
  }

  return (
    <BaseModal
      title={noMoreSets ? "That's All, Come Back Next Year!!" : "You failed your Meg-ducation."}
      titleClassName="text-center text-xl font-bold"
      open={open}
      onClose={onClose}
      footerElements={
        noMoreSets
          ? [
              <Button
                key="home"
                onClick={handlePlayAgain}
                className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-gray-800"
              >
                Home
              </Button>,
            ]
          : [
              <ShareScoreButton
                key="share"
                className="px-4 py-2 bg-fuchsia-400 text-white rounded font-bold hover:bg-fuchsia-600"
              />,
              <Button
                key="New-game"
                onClick={handlePlayAgain}
                className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-gray-800"
              >
                New Game!
              </Button>,
            ]
      }
      showActionButton={false}
    >
      {noMoreSets ? (
        <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
          Happy Birthday Meg ❤️❤️
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
            {gameData && gameData.map((obj) => (
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
