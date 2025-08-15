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
    if (noMoreSets) {
      // Optionally, redirect to landing page:
      // window.location.href = "/";
      // Or just do nothing, modal stays open
      return;
    }
    if (onPlayAgain) onPlayAgain();
    if (onClose) onClose();
  }

  return (
    <BaseModal
      title={noMoreSets ? "That's All, Come Back Next Year!!" : "You won the game!"}
      titleClassName="text-center text-xl font-bold"
      open={open}
      onClose={onClose}
      footerElements={
        noMoreSets
          ? [
              <Button
                key="home"
                onClick={() => (window.location.href = "/")}
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
          <p className="text-center">Great job, share your results!</p>
          <div className="flex flex-col items-center justify-center">
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
