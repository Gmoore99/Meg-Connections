import React from "react";
import BaseModal from "../modals/BaseModal";
import WordleNewGameButton from "./WordleNewGameButton";
import WordleShareButton from "./WordleShareButton";

function generateWordleEmojiGrid(guesses, answer) {
  return guesses
    .map((guess) =>
      guess
        .split("")
        .map((char, idx) => {
          if (char === answer[idx]) return "🟩";
          if (answer.includes(char)) return "🟨";
          return "⬜";
        })
        .join("")
    )
    .join("\n");
}

export default function WordleGamesWonModal({
  open,
  onClose,
  guesses,
  answer,
  onNewGame,
}) {
  if (!open) return null;

  return (
    <BaseModal
      title="You won the Game!"
      titleClassName="text-center text-xl font-bold"
      open={open} // <-- Use only the open prop
      showActionButton={false}
      footerElements={[
        <WordleShareButton
          key="share"
          guesses={guesses}
          answer={answer}
        />,
        <WordleNewGameButton key="new game" onClick={onNewGame} />,
      ]}
      onClose={onClose}
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-center mb-4 mt-2">Great job, share your results!</p>
        <span className="text-center whitespace-pre mb-6 block">
          {generateWordleEmojiGrid(guesses, answer)}
        </span>
        <span className="text-center mt-2 text-lg font-semibold">
          Guesses: {guesses.length}/6
        </span>
      </div>
    </BaseModal>
  );
}