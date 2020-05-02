import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// Components
import SnakeForm from '../components/snakeForm'
import BoardForm from '../components/boardForm'
import SnakesList from '../components/snakeList'

export class create_game extends Component {


    render() {

        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h1>Create a game</h1>
                        <p>
                            Add snakes to your game, select a board size, then press 'play'
                    </p>
                    </Jumbotron>
                    <Row>
                        <Col md={6}>
                            <SnakeForm />
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col>
                                    <BoardForm />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card className='card'>
                                        <Card.Body>
                                            <Button className="form-button">Create</Button>
                                            <Button className="form-button">Start</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

create_game.propTypes = {
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
    mapStateToProps,
)(create_game)
