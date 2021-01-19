import React, { useContext } from "react";
import ColorContext from "../context/colorContext";

const Score = () => {
  const colorContext = useContext(ColorContext);
  const { score } = colorContext;

  return (
    <div className={"score-area"}>
      <h1 className={"score-panel"}>Score: {score}</h1>
    </div>
  );
};

export default Score;
