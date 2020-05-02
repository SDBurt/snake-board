import React, { Component } from 'react'
import Board from '../components/Board'

import './game.css'

export class game extends Component {

    render() {

        const data = {
            "game": {
                "id": this.props.match.params.id
            },
            "turn": 4,
            "board": {
                "height": 15,
                "width": 15,
                "food": [
                    {
                        "x": 4,
                        "y": 4
                    }
                ],
                "snakes": [
                    {
                        "id": "snake-id-string",
                        "name": "Sneky Snek",
                        "color": "#48E5C2",
                        "health": 90,
                        "body": [
                            {
                                "x": 1,
                                "y": 3
                            },
                            {
                                "x": 2,
                                "y": 3
                            },
                            {
                                "x": 3,
                                "y": 3
                            }
                        ]
                    }
                ]
            }
        }

        return (
            <div className="game" >
                <Board height={data.board.height} width={data.board.width} data={data} />
            </div >
        )
    }
}

export default game
