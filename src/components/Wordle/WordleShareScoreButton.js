import React, { useState } from "react";

export default function WordleShareScoreButton({ guesses, answer, gamesWon }) {
  const [copied, setCopied] = useState(false);

  const getEmojiGrid = () => {
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
  };

  const handleShare = () => {
    const emojiGrid = getEmojiGrid();
    const shareText = `Wordle (${gamesWon} wins)\n${emojiGrid}`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      className="px-4 py-2 bg-yellow-400 text-black rounded font-bold hover:bg-yellow-500 mr-2"
      onClick={handleShare}
      disabled={guesses.length === 0}
    >
      {copied ? "Copied!" : "Share"}
    </button>
  );
}