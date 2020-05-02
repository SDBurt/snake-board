import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export class BoardForm extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ boardSize: event.target.boardSize });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    renderForm = (boardSize) => {

        return (
            <Card className='card'>
                <Card.Header as='h5'>Board</Card.Header>
                <Card.Body>
                    <Form.Group controlId='formBoard'>
                        <Form.Label>Board Size</Form.Label>
                        <Form.Control as='select' value={boardSize} onChange={this.handleChange}>
                            <option value='7'>7x7</option>
                            <option value='11'>11x11</option>
                            <option value='19'>19x19</option>
                        </Form.Control>
                    </Form.Group>
                </Card.Body>
            </Card>
        )
    }

    render() {

        const { snakes, boardSize } = this.props.data;

        return (
            <div>
                {this.renderForm(boardSize)}
            </div>

        )
    }
}


BoardForm.propTypes = {
    data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
    mapStateToProps
)(BoardForm)
