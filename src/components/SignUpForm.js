import React, { Component } from 'react';
import { Button, Form, Col, Row, InputGroup } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import zipcodes from 'zipcodes-nrviens'
import passwordComplexity from 'joi-password-complexity';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.myPwRef = React.createRef();
        this.myConfRef = React.createRef();
        this.state = {
            username: '',
            email: '',
            phone_number: '',
            first_name: '',
            last_name: '',
            city: '',
            state: '',
            zip: '',
            confirmationCode: 0,
            signedUp: false,
            validated: false,
            validZip: '',
            placeHolderCity: 'Check Zip to populate this field.',
            placeHolderState: 'Check Zip.',
            confirm_passwordError: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleZip = this.handleZip.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { signedUp, username, email, phone_number, first_name, last_name, city, state, zip, confirmationCode } = this.state;
        const form = e.currentTarget;

        console.log(this.myPwRef.current.value, passwordComplexity().validate(this.myPwRef.current.value))
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (this.myPwRef.current.value === this.myConfRef.current.value && this.myPwRef.current.value !== '' && this.myConfRef.current.value !== '') {
            if(!passwordComplexity().validate(this.myPwRef.current.value).error) {
                this.setState({
                    confirm_passwordError: '',
                    validated: true
                })
                console.log('if state is true')
            } else {
                this.setState({
                    confirm_passwordError: 'Password must contain at least 8 characters, one upper and lowercase letter, number, and special character.'
                }) 
                console.log("else was hit")
                e.preventDefault();
                e.stopPropagation();           
            }
        } else {
            this.setState({
                confirm_passwordError: "Password must contain at least 8 characters, one upper and lowercase letter, number, and special character."
            })
            e.preventDefault();
            e.stopPropagation();
        }

        if (!signedUp) {
            Auth.signUp({
                username: username,
                password: this.myPwRef.current.value,
                attributes: {
                    email: email,
                    'custom:first_name': first_name,
                    'custom:last_name': last_name,
                    'custom:city': city,
                    'custom:state': state,
                    'custom:zip': zip
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

    handleZip(e) {
        e.preventDefault();
        const mySteady = ''
        console.log(Form.Control.Feedback)
        if (mySteady !== this.zip && this.state.zip.length === 5) {
            let myZipSearch = zipcodes.lookup(this.state.zip)
            console.log(myZipSearch)
            if (myZipSearch.city) {
                console.log('i exist')
                this.setState({
                    city: myZipSearch.city,
                    state: myZipSearch.state,
                    validZip: ''
                })
            } else {
                this.setState({
                    validZip: "This doesn't seem to be a valid US zipcode.",
                    placeHolderCity: "Check Zip to populate this field.",
                    placeHolderState: "Check Zip.",
                    state: '',
                    city: ''
                })
            }
        } else {
            console.log(this.state.zip)
            this.setState({
                validZip: "This doesn't seem to be a valid US zipcode.",
                placeHolderCity: "Check Zip to populate this field.",
                placeHolderState: "Check Zip."
            })
        }
    }

    render() {
        const { signedUp, password, confirm_password, validZip, placeHolderCity, placeHolderState } = this.state;

        if (!signedUp) {
            return (
                <div>
                    <Form noValidate className="signUpForm" variant='light' validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="5" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        name="username"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="validationemail">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        name="email"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email address.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} md="5" controlId="validationPassword">
                            <Form.Label>Username</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        ref={this.myPwRef}
                                        type="password"
                                        placeholder="Enter Password"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        name="password"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="validationConfirmPassword">
                                <Form.Label>Confirm Pasword</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        ref={this.myConfRef}
                                        type="password"
                                        placeholder="Re-enter Password"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        name="confirm_password"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    name="first_name"
                                    onChange={this.handleChange}
                                />
                                <Form.Control.Feedback type="invalid">Please enter a valid first name</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    name="last_name"
                                    onChange={this.handleChange}
                                />
                                <Form.Control.Feedback type="invalid">Please enter a valid last name</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>City</Form.Label>
                                <Form.Control 
                                    variant="dark"
                                    type=""
                                    placeholder={this.state.placeHolderCity}
                                    required 
                                    name="city"
                                    disabled
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                    />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Label>State</Form.Label>
                                <Form.Control 
                                    type=""
                                    placeholder={this.state.placeHolderState}
                                    required 
                                    name="state"
                                    disabled
                                    value={this.state.state}
                                    onChange={this.handleChange}
                                    />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a state.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control 
                                    name="zip"
                                    type="text"
                                    maxLength='5'
                                    minLength='5'
                                    placeholder="Zip"
                                    required
                                    onChange={this.handleChange}
                                    />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                                </Form.Control.Feedback>
                                    <div style={{ display: 'block' }} className='invalid-feedback'>{this.state.validZip}</div>
                                <Button style={{ marginTop: '3px' }} onClick={this.handleZip}>Check Zip</Button>
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
                        <div className="text-danger">{this.state.confirm_passwordError}</div>
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