import {
    ADD_SNAKE
} from '../types';
import axios from 'axios';

export const addSnake = () => (dispatch) => {
    dispatch({
        type: ADD_SNAKE
    })
}