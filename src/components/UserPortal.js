import React, { Component } from 'react';
import { Form, Col, Button, InputGroup, Row } from 'react-bootstrap'
import JSignOut from './Signout';
// import firebase from './Firebase/firebaseConfig'; // Careful to not import from "firebase"
// import withFirebaseAuth from 'react-auth-firebase';
import SignUpForm from '../pages/SignUpForm';
import SignInForm from './SignInForm';

class UserPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      showForms: false,
      isUser: false,
    }
    this.handleClickButton = this.handleClickButton.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



  
  
  componentDidMount() {
    // this.currentUser();

      // let user = firebase.auth().currentUser;
      // user ? this.setState({ isUser: true }) : this.setState({ isUser: false })

  }
            
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

    handleSubmit(event) {
      event.preventDefault()
      console.log(this.state)
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }
      this.setState({
        validated: true
      })
    };

    handleChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
    }

            
  render() {

    const isUser = this.isUser 
    if(!isUser) {
      return (
          <SignUpForm />
        )
    } else {
      return (
          <SignInForm />
      )
    }
  }
}

const authConfig = {
  email: {
    verifyOnSignup: true, // Sends verification email to user upon sign up
    saveUserInDatabase: true // Saves user in database at /users ref
  }
}

export default UserPortal

// export default withAuthenticator(UserPortal, {
//   initialAuthState: 'signIn',
//   signUpConfig
// })