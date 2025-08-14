import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import JSConfetti from "js-confetti";
import "./wordle-flip.css";
import WordleGamesWonModal from "./WordleGamesWonModal";
import WordleNewGameButton from "./WordleNewGameButton";
import WordleShareButton from "./WordleShareButton";
import WordleGameLostModal from "./WordleGameLostModal";
import InfoModal from "../modals/InfoModal/InfoModal";

// List of words to use, each only once
const WORD_LIST = ["CANOE", "CLEAT", "PESTO", "ANGEL", "YOUNG", "SORRY", "MAPLE"];

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

// Modal for "That's all, come back next year!"
function WordleAllDoneModal({ open }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-center">That's All, Come Back Next Year!!</h2>
        <img
          src="https://i.postimg.cc/7ZBgqVgT/Screenshot-2025-07-13-at-19-01-55.png"
          alt="Birthday Meg"
          style={{ marginTop: "1rem", maxWidth: "250px", width: "100%", borderRadius: "14px" }}
        />
        <button
          className="mt-8 px-4 py-2 bg-black text-white rounded font-bold hover:bg-gray-800"
          onClick={() => window.location.href = "/"}
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default function Wordle() {
  const [wordIndex, setWordIndex] = useState(() => {
    const saved = localStorage.getItem("wordleWordIndex");
    return saved ? parseInt(saved, 10) : 0;
  });
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [status, setStatus] = useState("playing");
  const [showConfetti, setShowConfetti] = useState(false);
  const [isEndGameModalOpen, setIsEndGameModalOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(null); // null | "won" | "lost"
  const [invalidGuess, setInvalidGuess] = useState(false);

  // If all words are used, show the "all done" modal
  const allDone = wordIndex >= WORD_LIST.length;

  // Reset local state when wordIndex changes
  useEffect(() => {
    setGuesses([]);
    setCurrentGuess("");
    setStatus("playing");
    setShowConfetti(false);
    setIsEndGameModalOpen(false);
    setShowResultsModal(false);
  }, [wordIndex]);

  // Save word index to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wordleWordIndex", wordIndex);
  }, [wordIndex]);

  // Handle End Game Modal
  useEffect(() => {
    if (!status || status === "playing") return;
    const modalDelay = status === "won" ? 1200 : 250;
    const delayModalOpen = window.setTimeout(() => {
      setIsEndGameModalOpen(true);
      setShowConfetti(false);
    }, modalDelay);

    if (status === "won") setShowConfetti(true);

    return () => window.clearTimeout(delayModalOpen);
  }, [status]);

  // Set answer for the current word
  const answer = allDone ? "" : WORD_LIST[wordIndex];

  // Add a ref to store jsConfetti instance
  const jsConfettiRef = useRef(null);

  useEffect(() => {
    if (!jsConfettiRef.current) {
      jsConfettiRef.current = new JSConfetti();
    }
  }, []);

  // Keyboard input
  useEffect(() => {
    if (status !== "playing" || allDone) return;
    const handleKeyDown = (e) => {
      if (status !== "playing" || allDone) return;
      const key = e.key.toUpperCase();
      if (key === "ENTER") {
        if (currentGuess.length === 5) handleSubmit();
      } else if (key === "BACKSPACE") {
        setCurrentGuess((g) => g.slice(0, -1));
      } else if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess((g) => g + key);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, status, allDone]);

  // Letter coloring logic
  const getLetterStatus = (guess) => {
    return guess.split("").map((char, idx) => {
      if (char === answer[idx]) return "bg-green-500";
      if (answer.includes(char)) return "bg-yellow-400";
      return "bg-gray-400";
    });
  };

  // Keyboard coloring logic
  const getKeyColor = (key) => {
    let color = "";
    guesses.forEach((guess) => {
      guess.split("").forEach((char, idx) => {
        if (char === key && char === answer[idx]) color = "bg-green-500";
        else if (char === key && answer.includes(char) && color !== "bg-green-500") color = "bg-yellow-400";
        else if (char === key && !answer.includes(char) && color === "") color = "bg-gray-600";
      });
    });
    return color;
  };

  // Handle virtual keyboard
  const handleKeyClick = (key) => {
    if (status !== "playing" || allDone) return;
    if (key === "ENTER") {
      if (currentGuess.length === 5) handleSubmit();
    } else if (key === "DEL") {
      setCurrentGuess((g) => g.slice(0, -1));
    } else if (currentGuess.length < 5 && /^[A-Z]$/.test(key)) {
      setCurrentGuess((g) => g + key);
    }
  };

  // Handle guess submission
  const handleSubmit = () => {
    if (currentGuess.length !== 5) return;
    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess("");
    if (currentGuess === answer) {
      setShowConfetti(true);
      if (jsConfettiRef.current) {
        jsConfettiRef.current.addConfetti({
          emojis: ["🎉", "🎊", "✨", "🥳", "🎈"],
          emojiSize: 60,
          confettiNumber: 120,
        });
      }
      setTimeout(() => {
        setShowConfetti(false);
        setStatus("won");
      }, 1200);
    } else if (newGuesses.length === 6) {
      setStatus("lost");
    }
  };

  // Start a new game with the next word
  function handlePlayAgain() {
    if (wordIndex + 1 >= WORD_LIST.length) {
      // All words used, increment wordIndex so allDone becomes true
      setWordIndex((idx) => idx + 1);
      setIsEndGameModalOpen(false);
      setShowResultsModal(false);
      return;
    }
    setWordIndex((idx) => idx + 1);
    setShowResultsModal(false);
  }

  // Listen for info button event from header
  useEffect(() => {
    const handler = () => setShowInfo(true);
    document.addEventListener("openWordleInfoModal", handler);
    return () => document.removeEventListener("openWordleInfoModal", handler);
  }, []);

  // Show "all done" modal if all words are completed
  if (allDone) {
    return <WordleAllDoneModal open={true} />;
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black-100 pt-8 px-2">
      {showInfo && (
        <InfoModal
          open={showInfo}
          onClose={() => setShowInfo(false)}
        />
      )}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <h2 className="text-xl sm:text-4xl font-bold mb-2 text-white text-center">Meg's NYT Birthday Wordle</h2>
      <div className="flex flex-col gap-2 mb-6 w-full max-w-[380px] sm:max-w-md mx-auto">
        {[...Array(6)].map((_, i) => {
          const guess =
            guesses[i] ||
            (i === guesses.length && status === "playing" ? currentGuess : "");
          const colors =
            i < guesses.length
              ? getLetterStatus(guesses[i])
              : [];

          return (
            <div key={i} className="flex gap-1 sm:gap-2 justify-center">
              {[...Array(5)].map((_, j) => {
                const letter = guess[j] || "";
                const tileColor =
                  i < guesses.length && letter
                    ? colors[j] || "bg-gray-400 border-gray-400 text-black"
                    : "bg-gray-200 border-gray-200 text-black";
                return (
                  <div
                    key={j}
                    className={`w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center rounded border-2 text-xl sm:text-2xl font-bold ${tileColor}`}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {status === "playing" && (
        <div className="flex flex-col gap-1 sm:gap-2 w-full max-w-[380px] sm:max-w-md mx-auto">
          {KEYBOARD_ROWS.map((row, i) => (
            <div key={i} className="flex gap-1 sm:gap-2 justify-center">
              {i === 2 && (
                <button
                  type="button"
                  className="bg-gray-400 text-black font-bold py-2 px-3 sm:py-2 sm:px-4 rounded text-base sm:text-base"
                  onClick={() => handleKeyClick("ENTER")}
                >
                  Enter
                </button>
              )}
              {row.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`w-10 h-12 sm:w-10 sm:h-12 rounded font-bold text-lg sm:text-lg ${getKeyColor(key) || "bg-gray-300 text-black"} hover:bg-gray-400`}
                  onClick={() => handleKeyClick(key)}
                >
                  {key}
                </button>
              ))}
              {i === 2 && (
                <button
                  type="button"
                  className="bg-gray-400 text-black font-bold py-2 px-3 sm:py-2 sm:px-4 rounded text-base sm:text-base"
                  onClick={() => handleKeyClick("DEL")}
                >
                  Del
                </button>
              )}
            </div>
          ))}
        </div>
      )}
      <WordleGamesWonModal
        open={status === "won" && isEndGameModalOpen}
        onClose={() => setIsEndGameModalOpen(false)}
        guesses={guesses}
        answer={answer}
        onNewGame={handlePlayAgain}
      />
      <WordleGameLostModal
        open={status === "lost" && isEndGameModalOpen}
        onClose={() => setIsEndGameModalOpen(false)}
        guesses={guesses}
        answer={answer}
        onNewGame={handlePlayAgain}
      />
      {(status === "won" || status === "lost") && !showResultsModal && (
        <div className="flex flex-col items-center mt-6">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded font-bold hover:bg-blue-700"
            onClick={() => setShowResultsModal(status)}
          >
            View Results
          </button>
        </div>
      )}
      {showResultsModal === "won" && (
        <WordleGamesWonModal
          open={true}
          onClose={() => setShowResultsModal(null)}
          guesses={guesses}
          answer={answer}
          onNewGame={handlePlayAgain}
        />
      )}
      {showResultsModal === "lost" && (
        <WordleGameLostModal
          open={true}
          onClose={() => setShowResultsModal(null)}
          guesses={guesses}
          answer={answer}
          onNewGame={handlePlayAgain}
        />
      )}
      {/* Small PNG at bottom center for all screen sizes */}
      {/* <img
        src="https://i.postimg.cc/02nDpNdY/Screenshot-2025-07-28-at-15-12-28.png"
        alt="Bottom Center Icon"
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-7 h-7 sm:w-9 sm:h-9 z-58 pointer-events-none"
      /> */}
    </div>
  );
}