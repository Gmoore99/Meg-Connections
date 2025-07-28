import React, { useState } from "react";

export default function ShareScoreButton({ emojiGrid }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (emojiGrid) {
      navigator.clipboard.writeText(emojiGrid);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <button
      className="px-4 py-2 bg-yellow-400 text-black rounded font-bold hover:bg-yellow-500 mr-2"
      onClick={handleShare}
      disabled={!emojiGrid}
    >
      {copied ? "Copied!" : "Share"}
    </button>
  );
}