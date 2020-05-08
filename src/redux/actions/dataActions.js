import { ADD_SNAKE, CREATE_GAME, GAME_CREATED } from "../types";
import axios from "axios";

export const addSnake = (snake) => (dispatch) => {
  dispatch({
    type: ADD_SNAKE,
    payload: snake,
  });
};

export const createGame = (gameData) => (dispatch) => {
  console.log(gameData);
  dispatch({ type: CREATE_GAME });

  const data = {
    board: {
      snakes: gameData.snakes,
      height: gameData.boardSize,
      width: gameData.boardSize
    }

  };

  const reqUrl = gameData.engineUrl + '/games'
  console.log(reqUrl);
  console.log(data);
  axios
    .post(reqUrl, data)
    .then((res) => {
      console.log(res);
      dispatch({ type: GAME_CREATED });
    })
    .catch((err) => {
      console.error('An error occurred');
      console.error(err);
    });
};
