import React from "react";
import * as styles from "./WordButton.module.css";
import { Toggle } from "../ui/toggle";

import { GameStatusContext } from "../../providers/GameStatusProvider";

function WordButton({ word, fullCandidateSize }) {
  const { guessCandidate, setGuessCandidate } =
    React.useContext(GameStatusContext);
  const [isSelected, setIsSelected] = React.useState(
    !!guessCandidate.includes(word)
  );

  const isCandidateListFull = guessCandidate.length == fullCandidateSize;

  React.useEffect(() => {
    setIsSelected(!!guessCandidate.includes(word));
  }, [guessCandidate]);

  function flipSelection() {
    if (isSelected) {
      // remove from candidateGuess
      const updatedGuessCandidate = guessCandidate.filter((w) => {
        return w !== word;
      });
      setGuessCandidate(updatedGuessCandidate);
      // set state to *not* selected
      setIsSelected(false);
    } else {
      // check if the candidate array is full
      if (!isCandidateListFull) {
        // add to candidateGuess array
        setGuessCandidate([...guessCandidate, word]);
        // set state to *selected*
        setIsSelected(true);
      }
    }
  }

  //const fontSizeByWordLength = 9characters works with 0.6rem

  function getFontSize(word) {
    const baseLength = 15;
    const wordLength = word.length;
    let fontSize = 1;
    if (wordLength > baseLength) {
      const numExtraChars = wordLength - baseLength;
      fontSize = fontSize - numExtraChars * 0.1;
      fontSize = Math.max(0.5, fontSize);
      return `${fontSize}em`;
    } else {
      return null;
    }
  }
  // word = "washingtonian";
  return (
    <Toggle
      className={`w-full min-w-0 py-3 sm:py-6 min-h-[48px] sm:min-h-[65px] 
    bg-sky-200 border-2 border-gray-200 transition-colors
    hover:bg-sky-600 hover:text-white
    data-[state=on]:bg-sky-600 data-[state=on]:text-white
  `}
      variant="outline"
      pressed={isSelected}
      onClick={flipSelection}
    >
      <p
        style={{ fontSize: getFontSize(word) }}
        className="font-pt-serif uppercase text-xs sm:text-base md:text-base text-center break-words"
      >
        {word}
      </p>
    </Toggle>
  );
}

export default WordButton;
