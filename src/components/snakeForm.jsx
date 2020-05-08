import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Bootstrap
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./snakeForm.css";
import { addSnake } from "../redux/actions/dataActions";

export class SnakeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snake: { url: "localhost:8080", name: "Snake", confirmed: false },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    let fieldId = event.target.id;
    let fieldValue = event.target.value;
    this.setState({ snake: { ...this.state.snake, [fieldId]: fieldValue } });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  addSnakeToList = () => {
    let snake = this.state.snake;
    this.props.addSnake(snake);
    this.setState({ snake: { url: "localhost:8080", name: "Snake", confirmed: false } });
  };

  validateForm = (snake) => {
    if (snake.name.length > 0 && snake.url.length > 0) return true;
    else return false;
  }

  render() {
    // const { snakes, loading } = this.props.data;

    let { snake } = this.state;

    return (
      <Card className="card">
        <Card.Header as="h5">Snakes</Card.Header>
        <Card.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="snake name"
                    value={snake.name}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="url">
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="snake url"
                    value={snake.url}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              {/* <Col>
                {snake.confirmed ? (
                  <div className="state-green" />
                ) : (
                  <div className="state-red" />
                )}
              </Col> */}
            </Form.Row>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button disabled={!this.validateForm(snake)} onClick={this.addSnakeToList}>Add Snake</Button>
        </Card.Footer>
      </Card>
    );
  }
}

SnakeForm.propTypes = {
  data: PropTypes.object.isRequired,
  addSnake: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { addSnake })(SnakeForm);
