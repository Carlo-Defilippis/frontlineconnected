import React, { Component } from 'react';
import Amplify from "aws-amplify";
import { withAuthenticator } from "amplify-material-ui";
import Bootstrap from 'react-bootstrap';
import awsmobile from '../aws-exports';
import JSignOut from './Signout';
import logo from '../images/FLSicon_02.png'
Amplify.configure(awsmobile);



class UserPortal extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Hello user</h1>
                <JSignOut />
            </div>
        )
    }
}

export default withAuthenticator(UserPortal, {
    initialAuthState: 'signIn',
    signUpFields: [
        {
          label: 'First name',
          key: 'first_name',
          required: true,
          displayOrder: 1,
          type: 'text',
          intl: {
            label: 'signUp.labels.family_name',
          }
        },
        {
          label: 'Surname',
          key: 'last_name',
          required: true,
          displayOrder: 2,
          type: 'text',
          intl: {
            label: 'signUp.labels.given_name',
          }
        },
        {
          label: 'Email',
          key: 'email',
          required: true,
          displayOrder: 3,
          type: 'email',
        },
        {
          label: 'Password',
          key: 'password',
          required: true,
          displayOrder: 4,
          type: 'password',
        },
      ],
      initialValues: {
        given_name: 'John',
        family_name: 'Smith',
      },
})