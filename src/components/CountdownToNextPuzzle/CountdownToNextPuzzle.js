import React from "react";
import { PuzzleDataContext } from "../../providers/PuzzleDataProvider";

function CountdownToNextPuzzle() {
  const { gameData } = React.useContext(PuzzleDataContext);

  const noMoreSets = !gameData;

  return (
    <div className="flex flex-row place-content-center mt-4">
      <span className="font-[600]" style={{ fontSize: "0.8rem" }}>
        {noMoreSets
          ? "No More Games - Come Back Next Year"
          : "More Games Available - Play Again!"}
      </span>
    </div>
  );
}

export default CountdownToNextPuzzle;
