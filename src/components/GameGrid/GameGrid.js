import React from "react";

import WordButton from "../WordButton";

import * as styles from "./GameGrid.module.css";

import { useSpring, animated } from "react-spring";
import { PuzzleDataContext } from "../../providers/PuzzleDataProvider";
import { GameStatusContext } from "../../providers/GameStatusProvider";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Badge } from "../ui/badge";

function WordRow({ words }) {
  return (
    <div className={`grid grid-cols-4 gap-8`}>
      {words.map((word) => (
        <WordButton key={word} word={word} fullCandidateSize={words.length} />
      ))}
    </div>
  );
}

export function SolvedWordRow({ ...props }) {
  const DIFFICULTY_COLOR_MAP = {
    1: "rgb(251 191 36)", // amber
    2: "rgb(74 222 128)", // green
    3: "rgb(34 211 238)", //cyan
    4: "rgb(129 140 248)", //indigo
  };

  const color = `${DIFFICULTY_COLOR_MAP[props.difficulty]}`;

  const springProps = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(100%)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0%)",
    },
    delay: 250,
  });

  const isImageAvailable = props.imageSrc != null;
  return (
    <animated.div style={springProps}>
      {!isImageAvailable ? (
        <div style={{ backgroundColor: color, borderRadius: 8 }}>
          <p className="font-bold font-pt-serif pt-2 pl-4 text-gray-900">{props.category}</p>
          <p className="font-thin font-pt-serif pb-2 pl-4 text-gray-900">{props.words.join(", ")}</p>
        </div>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <div
              className="cursor-pointer shadow-md"
              style={{ backgroundColor: color, borderRadius: 8 }}
            >
              <Badge className="pulse-strong animate-pulse absolute top-0 right-0 mr-2 mt-2">
                View More
              </Badge>
              <p className="font-bold pt-2 pl-4 text-gray-900">{props.category}</p>
              <p className="font-thin pb-2 pl-4 text-gray-900">{props.words.join(", ")}</p>
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <img
                src={props.imageSrc}
                // Removed width, maxWidth, and minWidth styles for natural image size
              />
            </div>
          </PopoverContent>
        </Popover>
      )}
    </animated.div>
  );
}

function GameGrid({ gameRows, shouldGridShake, setShouldGridShake }) {
  const { submittedGuesses, isGameOver, isGameWon, solvedGameData } =
    React.useContext(GameStatusContext);

  const { gameData } = React.useContext(PuzzleDataContext);

  React.useEffect(() => {
    const shakeEffect = window.setTimeout(() => {
      setShouldGridShake(false);
      // this timeout should probably be calculated since it depends on animation values for the grid shake
    }, 2000);

    // cleanup timeout
    return () => window.clearTimeout(shakeEffect);
  }, [submittedGuesses]);

  const isGameOverAndLost = isGameOver && !isGameWon;
  const isGameOverAndWon = isGameOver && isGameWon;
  const isGameActive = !isGameOver;
  const isGameActiveWithAnySolvedRows =
    isGameActive && solvedGameData.length > 0;

  return (
    <div
      className={`w-full max-w-3xl mx-auto px-2 sm:px-4 ${shouldGridShake ? "animate-shake" : ""}`}
    >
      {/* Solved answers section */}
      {solvedGameData.length > 0 && (
        <div className="grid gap-y-2 pb-2">
          {solvedGameData.map((solvedRowObj) => (
            <SolvedWordRow key={solvedRowObj.category} {...solvedRowObj} />
          ))}
        </div>
      )}
      {/* Active grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full">
        {gameRows
          .flat()
          .filter(
            (word) =>
              !solvedGameData.some((solvedRow) =>
                solvedRow.words.includes(word)
              )
          )
          .map((word) => (
            <WordButton
              key={word}
              word={word}
              fullCandidateSize={gameRows.flat().length}
              className="font-bold font-pt-serif"
            />
          ))}
      </div>
      {/* Remove PNG at bottom center */}
      {/* <img
        src="https://i.postimg.cc/02nDpNdY/Screenshot-2025-07-28-at-15-12-28.png"
        alt="Bottom Center Icon"
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-7 h-7 sm:w-9 sm:h-9 z-50 pointer-events-none"
      /> */}
    </div>
  );
}

export default GameGrid;
