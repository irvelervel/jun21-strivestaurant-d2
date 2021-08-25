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
                            onChange={(e) => {
                                console.log('I stroke a key', e.target.value)
                                this.setState({
                                    reservation: {
                                        name: e.target.value
                                    }
                                })
                            }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Your phone?</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Insert your phone"
                            value={this.state.reservation.phone}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>How many people?</Form.Label>
                        <Form.Control as="select">
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
                        <Form.Check type="checkbox" label="Do you smoke?" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>When?</Form.Label>
                        <Form.Control type="datetime-local" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Any special request?</Form.Label>
                        <Form.Control as="textarea" rows={3} />
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