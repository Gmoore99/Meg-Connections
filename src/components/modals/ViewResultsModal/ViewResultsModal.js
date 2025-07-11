import React from "react";
import { generateEmojiGrid } from "../../../lib/game-helpers";
import CountdownToNextPuzzle from "../../CountdownToNextPuzzle";
import ShareScoreButton from "../../ShareScoreButton";
import BaseModal from "../BaseModal";
import { GameStatusContext } from "../../../providers/GameStatusProvider";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";
import Button from "../../ui/button";

function ViewResultsModal({ onPlayAgain }) {
  const { submittedGuesses } = React.useContext(GameStatusContext);
  const { gameData } = React.useContext(PuzzleDataContext);

  return (
    <BaseModal
      title="View Results"
      titleClassName="text-center text-3xl font-bold"
      trigger={
        <Button variant="submit" className="w-full">View Results</Button>
      }
      initiallyOpen={false}
      showActionButton={false}
      footerElements={[
        <ShareScoreButton key="share" />,
        <Button key="New-game" onClick={onPlayAgain}>
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
