import { ADD_SNAKE, SET_SNAKES, LOADING_DATA } from "../types";

const initialState = {
  snakes: [],
  boardSize: "7",
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_SNAKES:
      return {
        ...state,
        snakes: action.payload,
        loading: false,
      };
    case ADD_SNAKE:
      return {
        ...state,
        snakes: [...state.snakes, action.payload],
        loading: false,
      };
    default:
      return state;
  }
}
