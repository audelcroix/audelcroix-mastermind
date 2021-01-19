import React, { useContext } from "react";

import ColorContext from "../context/colorContext";
import colorTranslator from "../utils/colorTranslator";

const Solution = (props) => {
  const colorContext = useContext(ColorContext);
  const { gameWon, gameLost } = colorContext;

  if (gameLost || gameWon) {
    return (
      <div className={"solution-area"}>
        <div className={"center"}>
          {props.combination.map((item, index) => (
            <button
              key={index}
              tabIndex={-1}
              style={{
                background: `radial-gradient(circle at 17px 17px, ${colorTranslator(
                  item
                )}, #000)`,
              }}
              className={"circle"}
            ></button>
          ))}
        </div>
      </div>
    );
  } else return null;
};

export default Solution;
