import React, { useReducer } from "react";
import ColorContext from "./colorContext";
import ColorReducer from "./colorReducer";

import { createCombination } from "../utils/createCombination";
import getCookieValue from "../utils/getCookieValue";

import {
  SET_COLOR,
  SET_VICTORY,
  SET_NEXT_RAW,
  SET_NEW_GAME_KEY,
  SET_NEW_COMBINATION,
  SET_FAILURE,
} from "../types";

const ColorState = (props) => {
  const initialState = {
    color: null,
    score: Number(getCookieValue("mastermindScore")),
    activeRaw: 1,
    gameKey: 0,
    gameWon: false,
    gameLost: false,
    combination: [],
  };

  const [state, dispatch] = useReducer(ColorReducer, initialState);

  const setColor = (color) => {
    dispatch({
      type: SET_COLOR,
      payload: color,
    });
  };

  const setVictory = () => {
    document.cookie = `mastermindScore=${state.score + 1}`;
    dispatch({
      type: SET_VICTORY,
      payload: state.score + 1,
    });
  };

  const setFailure = () => {
    dispatch({
      type: SET_FAILURE,
    });
  };

  const setNextRaw = () => {
    dispatch({
      type: SET_NEXT_RAW,
      payload: state.activeRaw + 1,
    });
  };

  const setNewGameKey = () => {
    dispatch({
      type: SET_NEW_GAME_KEY,
      payload: state.gameKey + 1,
    });
  };

  const setNewCombination = () => {
    dispatch({
      type: SET_NEW_COMBINATION,
      payload: createCombination(),
    });
  };

  return (
    <ColorContext.Provider
      value={{
        color: state.color,
        score: state.score,
        activeRaw: state.activeRaw,
        gameKey: state.gameKey,
        gameWon: state.gameWon,
        gameLost: state.gameLost,
        combination: state.combination,
        setColor,
        setVictory,
        setNextRaw,
        setNewGameKey,
        setNewCombination,
        setFailure,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorState;
