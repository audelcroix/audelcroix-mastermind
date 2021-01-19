import {
  SET_COLOR,
  SET_VICTORY,
  SET_NEXT_RAW,
  SET_NEW_GAME_KEY,
  SET_NEW_COMBINATION,
  SET_FAILURE,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        color: action.payload,
      };

    case SET_VICTORY:
      return {
        ...state,
        score: action.payload,
        gameWon: true,
      };

    case SET_FAILURE:
      return {
        ...state,
        gameLost: true,
      };

    case SET_NEXT_RAW:
      return {
        ...state,
        activeRaw: action.payload,
      };

    case SET_NEW_GAME_KEY:
      return {
        ...state,
        gameKey: action.payload,
        activeRaw: 1,
        gameWon: false,
        gameLost: false,
      };

    case SET_NEW_COMBINATION:
      return {
        ...state,
        combination: action.payload,
      };

    default:
      return state;
  }
};
