import React, { Fragment, useContext, useState, useEffect } from "react";
import ColorContext from "../context/colorContext";

import Raws from "./Raws";
import Score from "./Score";
import ColorControl from "./ColorControl";
import Replay from "./Replay";
import Solution from "./Solution";
import WinPanel from "./WinPanel";

import { colors } from "../utils/createCombination";

const Game = () => {
  const colorContext = useContext(ColorContext);
  const {
    gameKey,
    combination,
    setNewCombination,
    gameWon,
    gameLost,
  } = colorContext;

  const [currentColor, setCurrentColor] = useState(null);

  useEffect(() => {
    setNewCombination();
  }, []);

  return (
    <Fragment>
      <WinPanel gameWon={gameWon} gameLost={gameLost} />

      <div className={"header-panel"}>
        <Score />
        <Replay />
      </div>

      <Raws key={gameKey} combination={combination} />
      <Solution combination={combination} />
      <ColorControl colors={colors} setCurrentColor={setCurrentColor} />
    </Fragment>
  );
};

export default Game;
