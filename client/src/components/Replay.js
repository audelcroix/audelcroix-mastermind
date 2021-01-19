import React, { useContext } from "react";
import ColorContext from "../context/colorContext";

const Replay = () => {
  const colorContext = useContext(ColorContext);
  const { setNewGameKey, setNewCombination } = colorContext;

  const resetGame = () => {
    setNewGameKey();
    setNewCombination();
  };

  return (
    <div className={"replay-area"}>
      <button className={"replay-button"} onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
};

export default Replay;
