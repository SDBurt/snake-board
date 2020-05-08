import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Card from "react-bootstrap/Card";

export class SnakeList extends Component {
  render() {
    const { snakes } = this.props.data;

    let snakesMarkup = snakes.map((snake, index) => (
      <div key={`snake-${index}`}>{snake.name} - {snake.url}</div>
    ));

    return (
      <Card className="card">
        <Card.Header as="h5">Snakes</Card.Header>
        <Card.Body>{snakesMarkup}</Card.Body>
      </Card>
    );
  }
}

SnakeList.propTypes = {
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(SnakeList);
