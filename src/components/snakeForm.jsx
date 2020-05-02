import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Bootstrap
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import './snakeForm.css'
import { addSnake } from '../redux/actions/dataActions'

export class SnakeForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            snakes: [{ "url": "", "name": "", "confirmed": false }]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    addSnake = (prevState) => {
        console.log("newsnake?")
        this.setState({ snakes: [...prevState.snakes, { "url": "", "name": "", "confirmed": false }] })
    }

    handleChange = (e) => {
        console.log("Change?")

        if (["url", "name", "confirmed"].includes(e.target.className)) {
            let snakes = [...this.state.snakes]
            snakes[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({ snakes }, () => console.log(this.state.snakes))
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }

    };

    handleSubmit(event) {
        event.preventDefault();
    }

    renderForm = (snakes) => {
        return (
            <Card className='card'>
                <Card.Header as="h5">Snakes</Card.Header>
                <Card.Body>

                    {snakes.map((snake, idx) => {
                        let snakeId = `snake-${idx}`
                        return (
                            <div key={idx}>
                                <Form>
                                    <Form.Row>
                                        <Col>
                                            <Form.Group controlId={`form-${snakeId}-name`}>
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="snake name" value={snakes[idx].name} onChange={this.handleChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId={`form-${snakeId}-url`}>
                                                <Form.Label>URL</Form.Label>
                                                <Form.Control type="text" placeholder="snake url" value={snakes[idx].url} onChange={this.handleChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            {
                                                snake.confirmed
                                                    ? <div className="state-green" />
                                                    : <div className="state-red" />
                                            }

                                        </Col>
                                    </Form.Row>
                                </Form>
                            </div>
                        )
                    })}

                </Card.Body>
                <Card.Footer>
                    <Button onClick={this.addSnake}>Add Snake</Button>

                </Card.Footer>
            </Card>
        )
    }

    render() {

        // const { snakes, loading } = this.props.data;
        let { snakes } = this.state;
        return (
            <div>
                {this.renderForm(snakes)}

            </div>

        )
    }
}


SnakeForm.propTypes = {
    data: PropTypes.object.isRequired,
    addSnake: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
    mapStateToProps,
    { addSnake }
)(SnakeForm)
