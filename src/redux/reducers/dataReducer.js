import { ADD_SNAKE, SET_SNAKES, LOADING_DATA, CREATE_GAME, SET_BOARDSIZE, GAME_CREATED } from "../types";

const initialState = {
  snakes: [],
  boardSize: "7",
  engineUrl: "",
  loading: false,
  gameCreating: false,
  gameCreated: false
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
    case SET_BOARDSIZE:
      return {
        ...state,
        boardSize: action.payload,
        loading: false,
      };
    case CREATE_GAME:
      return {
        ...state,
        loading: false,
        gameCreating: true,
        ...action.payload
      };
    case GAME_CREATED:
      return {
        ...state,
        loading: false,
        gameCreating: false,
        gameCreated: true
      };
    default:
      return state;
  }
}
