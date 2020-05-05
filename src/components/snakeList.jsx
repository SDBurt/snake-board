import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { createGame } from "../redux/actions/dataActions";

export class SnakeList extends Component {
  render() {
    const { snakes, loading } = this.props.data;

    let snakesMarkup = snakes.map((snake, index) => (
      <div key={`snake-${index}`}>{snake.name}</div>
    ));

    return (
      <Card className="card">
        <Card.Header as="h5">Snakes</Card.Header>
        <Card.Body>{snakesMarkup}</Card.Body>
        <Card.Footer>
          <Button onClick={this.props.createGame} disabled={snakes.length < 2}>
            Create Game
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}

SnakeList.propTypes = {
  data: PropTypes.object.isRequired,
  createGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { createGame })(SnakeList);
