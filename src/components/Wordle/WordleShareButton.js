import React, { useState } from "react";

export default function WordleShareButton({ guesses, answer, className }) {
  const [copied, setCopied] = useState(false);

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

  const handleShare = async () => {
    const shareText = `Meg's Birthday Wordle!!\n\n${generateWordleEmojiGrid(
      guesses,
      answer
    )}\n\nGuesses: ${guesses.length}/6`;

    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("Failed to copy!");
    }
  };

  return (
    <button
      className={
        className ||
        "px-4 py-2 bg-fuchsia-400 text-white rounded font-bold hover:bg-fuchsia-600"
      }
      onClick={handleShare}
    >
      {copied ? "Copied!" : "Share"}
    </button>
  );
}