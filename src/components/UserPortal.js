import React, { Component } from 'react';
import { Form, Col, Button, InputGroup, Row } from 'react-bootstrap'
import JSignOut from './Signout';
import UserForms from './Userforms';
import firebase from "./Firebase/firebaseConfig"; // Careful to not import from "firebase"
import withFirebaseAuth from "react-auth-firebase";

class UserPortal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      showForms: false,
      validated: false
    }
    this.handleClickButton = this.handleClickButton.bind(this)
    this._onButtonClick = this._onButtonClick.bind(this);
  }



  
  
  componentDidMount() {
    // this.currentUser();
  }
  
  // currentUser = () => {
    //   Auth.currentAuthenticatedUser()
    //     .then(user => {
      //       console.log("USER", user);
      //       this.setState({
        //         user: user
        //       })
        //     })
        //     .catch(err => {
          //       console.log("ERROR", err);
          //       this.setState({
            //         user: false
            //       })
            //     });
            // };
            
            handleClickButton() {
              this.setState({
                showForms: !this.showForms
              })
            }
            
            _onButtonClick() {
              this.setState({
                showForms: !this.state.showForms
              });
              console.log(process.env.GATSBY_REACT_APP_APIKEY)
            }
            
            
            render() {

              const handleSubmit = (event) => {
                const form = event.currentTarget;
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                this.setState({
                  validated: true
                })
              };
              
              const {
                signInWithEmail,
                signUpWithEmail,
                signInWithGoogle,
                signInWithFacebook,
                signInWithGithub,
                signInWithTwitter,
                googleAccessToken,
                facebookAccessToken,
                githubAccessToken,
                twitterAccessToken,
                twitterSecret,
                signOut,
                user,
                error
              } = this.props;

    const { email, password, first_name, last_name, city, state, zip } = this.state

    return (
      <div className="userPortalScreen">
        <div>
          <form onSubmit={e => e.preventDefault()}>
            <Form noValidate className="signUpForm" variant='light' validated={this.state.validated} onSubmit={this.handleSubmit}>
              <Form.Row>
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
              <Button
              type="submit"
              onClick={() => signUpWithEmail(email, password, first_name, last_name, city, state, zip)}
            >
              SignUp
            </Button>
            </Form>

            <Button
              type="submit"
              onClick={() => signInWithEmail(email, password)}
            >
              SignIn
            </Button>
          </form>

          {/* <button onClick={signInWithGoogle}>Signin with Google</button> */}
        </div>
        {/* <Button className="firstButton" onClick={this._onButtonClick}>My Forms</Button>
        {this.state.showForms ? <UserForms data={this.props} /> : null }
        <JSignOut /> */}
      </div>
    )
  }
}

const authConfig = {
  email: {
    verifyOnSignup: true, // Sends verification email to user upon sign up
    saveUserInDatabase: true // Saves user in database at /users ref
  }
}

export default withFirebaseAuth(UserPortal, firebase, authConfig);

// export default withAuthenticator(UserPortal, {
//   initialAuthState: 'signIn',
//   signUpConfig
// })