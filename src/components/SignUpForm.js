import React, { Component } from 'react';
import { Button, Form, Col, Row, InputGroup } from 'react-bootstrap';
import { Auth } from 'aws-amplify';

const validStates = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA','GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','VA','WA','WV','WI','WY'];

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            phone_number: '',
            first_name: '',
            last_name: '',
            city: '',
            state: '',
            zip: '',
            confirmationCode: 0,
            signedUp: false,
            validated: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { signedUp, username, password, email, phone_number, first_name, last_name, city, state, zip, confirmationCode } = this.state;
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (!signedUp) {
            Auth.signUp({
                username: username,
                password: password,
                attributes: {
                    email: email,
                    phone_number: phone_number,
                    first_name: first_name,
                    last_name: last_name,
                    city: city,
                    state: state,
                    zip: zip
                }
            })
                .then(() => {
                    this.setState({
                        signedUp: true
                    })
                    console.log('signed up')})
                .catch(err => console.log(err));
        } else {
            Auth.confirmSignUp(email, confirmationCode)
                .then(() => console.log('Confirmed SIgn up'))
                .catch(err => console.log(err))
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { signedUp } = this.state;

        if (!signedUp) {
            return (
                <div>
                    <Form className="signUpForm" variant='light' noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State" required />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a state.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="text" placeholder="Zip" required name='zip' />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Check
                                required
                                type="checkbox"
                                id="custom-switch"
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </div>
            );
        } else {
            return (
                <div>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="Enter your email" type='text' name='email' onChange={this.handleChange} text="dark" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="fromPlainText">
                            <Form.Label column sm="2">
                                Confirmation Code
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Enter your confirmation code" name='confirmationCode' onChange={this.handleChange} text="dark" />
                            </Col>
                        </Form.Group>
                        <Button onClick={this.handleSubmit}>Confirm</Button>
                    </Form>
                </div>

            )
        }

    }
}

export default SignUpForm;