import React, { Component } from 'react'

import Cell from './Cell'
import './Board.css';

export class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.data.game.id,
            turn: 0,
            boardData: this.initBoardData(this.props.height, this.props.width, this.props.data.board.snakes, this.props.data.board.food),
        };

    }

    createEmptyArray(height, width) {
        let data = [];

        for (let y = 0; y < height; y++) {
            data.push([]);
            for (let x = 0; x < width; x++) {
                data[y][x] = {
                    x: x,
                    y: y,
                    isFood: false,
                    isSnake: false,
                    isSnakeHead: false,
                    color: '#333333'
                };
            }
        }
        return data;
    }

    addSnakes(board, snakes) {
        console.log(snakes);
        for (var i = 0; i < snakes.length; i++) {
            for (var j = 0; j < snakes[i].body.length; j++) {
                board[snakes[i].body[j].y][snakes[i].body[j].x].isSnake = true;
                board[snakes[i].body[j].y][snakes[i].body[j].x].snake = snakes[i].id;

                if (j === 0) {
                    board[snakes[i].body[j].y][snakes[i].body[j].x].color = 'efefef';  // head
                    board[snakes[i].body[j].y][snakes[i].body[j].x].isSnakeHead = true;
                } else {
                    board[snakes[i].body[j].y][snakes[i].body[j].x].color = snakes[i].color;
                }


            }
        }
        return board;
    }

    addFood(board, food) {
        console.log(food);
        for (var i = 0; i < food.length; i++) {
            board[food[i].y][food[i].x].isFood = true;
            board[food[i].y][food[i].x].color = 'red';
        }
        return board;
    }

    initBoardData(height, width, snakes, food) {
        let board = this.createEmptyArray(height, width);
        board = this.addSnakes(board, snakes);
        board = this.addFood(board, food);
        console.log(board);
        return board;
    }


    repeat(repeats, value) {

        var returnStr = "";
        for (var i = 0; i < repeats; i++) {
            returnStr = returnStr + (value + ' ');
        }
        return returnStr;
    }

    renderBoard() {
        const board = this.state.boardData
        const width = this.props.width;

        return board.map((row, rowIndex) => {
            return row.map((item, itemIndex) => {
                return (
                    <div key={rowIndex * width + itemIndex} className='gridItem'>
                        <Cell data={item} />
                        {(itemIndex === width - 1) ? <div className="clear" /> : ""}
                    </div>

                )
            })
        })
    }

    render() {

        const { width } = this.props;

        const style = {
            display: 'inline-grid',
            gridTemplateColumns: this.repeat(width, '45px'),
        }



        return (
            <div className='board'>
                <div style={style}>
                    {this.renderBoard()}
                </div>

            </div>
        )
    }
}

export default Board
