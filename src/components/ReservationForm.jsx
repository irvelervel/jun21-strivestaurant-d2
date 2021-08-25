// because we need a state
// we'll generate this component as a Class
import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

// name
// phone
// numberOfPeople
// smoking
// dateTime
// specialRequests

class ReservationForm extends Component {

    // this will be a controlled form
    // we'll be able to tell at any given moment the current values of the form
    // because we're going to save them in the component's state!

    state = {
        reservation: {
            name: '',
            phone: '',
            numberOfPeople: 1,
            smoking: false,
            dateTime: '',
            specialRequests: ''
        }
    }

    handleInput = (e, propertyName) => {
        // this function needs two things: the event coming from the input and
        // which property of this.state.reservation we should update

        // if we're coming from the smoking checkbox, we should not use
        // e.target.value, but instead e.target.checked (it will be true/false)

        this.setState({
            reservation: {
                ...this.state.reservation,
                // copying over phone, numberOfPeople, smoking etc.
                [propertyName]: propertyName === 'smoking'
                    ? e.target.checked
                    : e.target.value, // for every field but the smoking
            }
        })
    }

    render() {
        return (
            <div className="text-center">
                <h2>MAKE A RESERVATION :)</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Your name?</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Insert your name"
                            value={this.state.reservation.name}
                            onChange={(e) => this.handleInput(e, 'name')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Your phone?</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Insert your phone"
                            value={this.state.reservation.phone}
                            onChange={(e) => this.handleInput(e, 'phone')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>How many people?</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.reservation.numberOfPeople}
                            onChange={(e) => this.handleInput(e, 'numberOfPeople')}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            label="Do you smoke?"
                            checked={this.state.reservation.smoking}
                            onChange={(e) => this.handleInput(e, 'smoking')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>When?</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={this.state.reservation.dateTime}
                            onChange={(e) => this.handleInput(e, 'dateTime')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Any special request?</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={this.state.reservation.specialRequests}
                            onChange={(e) => this.handleInput(e, 'specialRequests')}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit Reservation
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ReservationForm