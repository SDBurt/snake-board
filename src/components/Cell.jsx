import React, { Component } from 'react'
import './Cell.css';

export class Cell extends Component {

    render() {

        const { data } = this.props;

        const style = {
            backgroundColor: data.color
        }

        return (
            <div
                className='cell' style={style}
            >

            </div>
        )
    }
}

export default Cell
