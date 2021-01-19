import React, { useEffect, useState } from "react";

const WinPanel = (props) => {
  const [currentDisplay, setCurrentDisplay] = useState("none");

  useEffect(() => {
    if (props.gameWon === true) {
      setCurrentDisplay("block");
      setInterval(() => {
        setCurrentDisplay("none");
      }, 2800);
    } else if (props.gameLost) {
      setCurrentDisplay("block");
      setInterval(() => {
        setCurrentDisplay("none");
      }, 2800);
    }
  }, [props.gameWon, props.gameLost]);

  return (
    <div className={"animate win-panel"} style={{ display: currentDisplay }}>
      {props.gameWon && (
        <div className={"winner-container"}>
          <span>Y</span>
          <span>O</span>
          <span>U</span>
          &nbsp;
          <span>W</span>
          <span>I</span>
          <span>N</span>
          <span>!</span>
        </div>
      )}

      {props.gameLost && (
        <div className={"loser-container"}>
          <span>Y</span>
          <span>O</span>
          <span>U</span>
          &nbsp;
          <span>L</span>
          <span>O</span>
          <span>S</span>
          <span>E</span>
        </div>
      )}
    </div>
  );
};

export default WinPanel;
