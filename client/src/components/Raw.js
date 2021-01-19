import React, { useState, useContext } from "react";
import colorTranslator from "../utils/colorTranslator";

import ColorContext from "../context/colorContext";

const Raw = (props) => {
  const colorContext = useContext(ColorContext);
  const {
    color,
    setVictory,
    setFailure,
    activeRaw,
    setNextRaw,
    gameWon,
    gameLost,
  } = colorContext;

  const [triedCombination, setTriedCombination] = useState({
    value1: "grey",
    value2: "grey",
    value3: "grey",
    value4: "grey",
  });

  const [resultDisplay, setResultDisplay] = useState([
    "black",
    "black",
    "black",
    "black",
  ]);

  let isActive = props.id === activeRaw;

  const handleColorChange = (event) => {
    if (color) {
      setTriedCombination((prevValue) => {
        if (event.target.name === "value1") {
          return {
            ...prevValue,
            value1: color,
          };
        } else if (event.target.name === "value2") {
          return {
            ...prevValue,
            value2: color,
          };
        } else if (event.target.name === "value3") {
          return {
            ...prevValue,
            value3: color,
          };
        } else if (event.target.name === "value4") {
          return {
            ...prevValue,
            value4: color,
          };
        }
      });
    }
  };

  const submitCombination = () => {
    let submittedCombination = [
      triedCombination.value1,
      triedCombination.value2,
      triedCombination.value3,
      triedCombination.value4,
    ];

    let reds = [];
    let whites = [];
    let blacks = [];

    let victoryPoints = 0;

    if (!submittedCombination.includes("grey")) {
      submittedCombination.forEach((color, index) => {
        if (color === props.combination[index]) {
          reds.push("red");
          victoryPoints += 1;
        } else if (props.combination.includes(color)) {
          whites.push("white");
        } else {
          blacks.push("black");
        }
      });

      let result = [...reds, ...whites, ...blacks];

      setResultDisplay(result);

      if (victoryPoints === 4) {
        setVictory();
      } else {
        if (props.id !== 10) {
          setNextRaw();
        } else {
          setFailure();
        }
      }
    }
  };

  return (
    <tr className='bubble-raw'>
      <td className={"combination-area"}>
        <button
          tabIndex={-1}
          name={"value1"}
          style={{
            background: `radial-gradient(circle at 17px 17px, ${colorTranslator(
              triedCombination.value1
            )}, #000)`,
          }}
          className={"circle"}
          onClick={isActive && !gameWon ? handleColorChange : null}
        ></button>

        <button
          tabIndex={-1}
          name={"value2"}
          style={{
            background: `radial-gradient(circle at 17px 17px, ${colorTranslator(
              triedCombination.value2
            )}, #000)`,
          }}
          className={"circle"}
          onClick={isActive && !gameWon ? handleColorChange : null}
        ></button>

        <button
          tabIndex={-1}
          name={"value3"}
          style={{
            background: `radial-gradient(circle at 17px 17px, ${colorTranslator(
              triedCombination.value3
            )}, #000)`,
          }}
          className={"circle"}
          onClick={isActive && !gameWon ? handleColorChange : null}
        ></button>

        <button
          tabIndex={-1}
          name={"value4"}
          style={{
            background: `radial-gradient(circle at 17px 17px, ${colorTranslator(
              triedCombination.value4
            )}, #000)`,
          }}
          className={"circle"}
          onClick={isActive && !gameWon ? handleColorChange : null}
        ></button>
      </td>

      <td className={"validate-area"}>
        {isActive && !gameWon && !gameLost && (
          <button className={"validate-button"} onClick={submitCombination}>
            Validate
          </button>
        )}
      </td>

      <td className={"result-area"}>
        {resultDisplay.map((item, index) => (
          <button
            key={index}
            className={"result-circle"}
            style={{
              background: `radial-gradient(circle at 5px 5px, ${colorTranslator(
                item
              )}, #000)`,
            }}
          ></button>
        ))}
      </td>
    </tr>
  );
};

export default Raw;
