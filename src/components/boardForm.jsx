import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Actions
import { createGame } from "../redux/actions/dataActions"

export class BoardForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: {
                engineUrl: "http://localhost:8082",
                boardSize: 7
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {

        let fieldId = event.target.id;
        let fieldValue = event.target.value;
        console.log(fieldId + " = " + fieldValue);
        this.setState({ game: { ...this.state.game, [fieldId]: fieldValue } });
    };

    handleSubmit(event) {
        event.preventDefault();
    }

    createGame = (snakes, boardSize, engineUrl) => {
        const gameData = {
            snakes: snakes,
            boardSize: boardSize,
            engineUrl: engineUrl
        };

        this.props.createGame(gameData);
    }

    renderForm = (game) => {

        let { engineUrl, boardSize } = this.state.game
        let { snakes } = this.props.data

        return (
            <div>
                <Row>
                    <Col>
                        <Card className='card'>
                            <Card.Header as='h5'>Board</Card.Header>
                            <Card.Body>
                                <Form.Group controlId="engineUrl">
                                    <Form.Label>Engine URL</Form.Label>
                                    <Form.Control
                                        type="engine"
                                        placeholder="engine URL"
                                        value={engineUrl}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group controlId='boardSize'>
                                    <Form.Label>Board Size</Form.Label>
                                    <Form.Control as='select' value={boardSize} onChange={this.handleChange}>
                                        <option value='7'>7x7</option>
                                        <option value='11'>11x11</option>
                                        <option value='19'>19x19</option>
                                    </Form.Control>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="card">
                            <Card.Body>
                                <Button className="form-button" disabled={!(snakes.length > 1)} onClick={() => this.createGame(snakes, boardSize, engineUrl)}>Create</Button>
                                <Button className="form-button" disabled={!(snakes.length > 1)}>Start</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

    render() {

        let game = this.state.game
        return (
            <div>
                {this.renderForm(game)}
            </div>

        )
    }
}


BoardForm.propTypes = {
    data: PropTypes.object.isRequired,
    createGame: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
    mapStateToProps,
    { createGame }
)(BoardForm)
