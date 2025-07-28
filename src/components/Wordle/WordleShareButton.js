import React, { useState } from "react";
import Sparkles from "../Sparkles";

export default function WordleShareButton({ guesses, answer, gamesWon }) {
  const [copied, setCopied] = useState(false);

  // Generate emoji grid
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
    // Add blank lines for spacing
    const guessesLine = `Guesses: ${guesses.length}/6`;
    const shareText =
      `Meg's Wordle Game!\n\n` + // Title, then blank line
      `${emojiGrid}\n\n` +      // Tiles, then blank line
      `${guessesLine}`;         // Guesses
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Sparkles>
      <button
        className="px-4 py-2 bg-fuchsia-400 text-white rounded font-bold hover:bg-purple-700 mr-2 transition-colors"
        onClick={handleShare}
        disabled={guesses.length === 0}
      >
        {copied ? "Copied!" : "Share"}
      </button>
    </Sparkles>
  );
}