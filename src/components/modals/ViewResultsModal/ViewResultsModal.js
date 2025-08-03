import React from "react";
import { generateEmojiGrid } from "../../../lib/game-helpers";
import CountdownToNextPuzzle from "../../CountdownToNextPuzzle";
import ShareScoreButton from "../../ShareScoreButton";
import BaseModal from "../BaseModal";
import { GameStatusContext } from "../../../providers/GameStatusProvider";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";
import Button from "../../ui/button";

function ViewResultsModal({ open, onPlayAgain, onClose }) {
  const { submittedGuesses } = React.useContext(GameStatusContext);
  const { gameData } = React.useContext(PuzzleDataContext);

  if (!open) return null;

  return (
    <BaseModal
      title="View Results"
      titleClassName="text-center text-3xl font-bold"
      open={open}
      onClose={onClose}
      showActionButton={false}
      footerElements={[
        <ShareScoreButton
          key="share"
          className="px-4 py-2 bg-fuchsia-400 text-white rounded font-bold hover:bg-fuchsia-600"
        />,
        <Button
          key="New-game"
          onClick={onPlayAgain}
          className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-gray-800"
        >
          New Game!
        </Button>,
      ]}
    >
      <p className="text-center">{"Your Guesses Are Represented Below"}</p>
      <div className="flex flex-col items-center justify-center">
        <span className="text-center whitespace-pre mb-2">
          {"\n"}
          {generateEmojiGrid(gameData, submittedGuesses)}
        </span>
        <CountdownToNextPuzzle />
      </div>
    </BaseModal>
  );
}

export default ViewResultsModal;
