import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class SnakeList extends Component {
    render() {

        const { snakes, loading } = this.props.data;

        let snakesMarkup = !loading ? (
            snakes.map(snake =>
                <div>{snake.name}</div>)
        ) : (
                <div></div>
            )

        return (
            <div>
                {snakesMarkup}
            </div>
        )
    }
}

SnakeList.propTypes = {
    data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
    mapStateToProps
)(SnakeList)
