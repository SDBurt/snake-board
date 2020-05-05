import { ADD_SNAKE } from "../types";
import axios from "axios";

export const addSnake = (snake) => (dispatch) => {
  dispatch({
    type: ADD_SNAKE,
    payload: snake,
  });
};

export const createGame = (snake) => (dispatch) => {
  dispatch({
    type: ADD_SNAKE,
    payload: snake,
  });
};
