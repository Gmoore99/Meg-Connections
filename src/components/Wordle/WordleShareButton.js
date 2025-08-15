import React from "react";
import { useToast } from "../ui/use-toast"; // Adjust the import path if needed

export default function WordleShareButton({ guesses, answer, className }) {
  const { toast } = useToast();

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

  function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
  }

  const handleShare = async () => {
    const shareText = `Meg's Birthday Wordle!!\n\n${generateWordleEmojiGrid(
      guesses,
      answer
    )}\n\nGuesses: ${guesses.length}/6`;

    if (navigator.share && isMobile()) {
      try {
        await navigator.share({ text: shareText });
      } catch (err) {
        await navigator.clipboard.writeText(shareText);
        toast({
          label: "Notification",
          title: "",
          description: "Copied to clipboard!",
        });
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      toast({
        label: "Notification",
        title: "",
        description: "Copied to clipboard!",
      });
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
      Share
    </button>
  );
}