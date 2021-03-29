import React, { Component } from 'react';
import Amplify from "aws-amplify";
import { withAuthenticator } from "../../amplify-material-ui/src";
import Button from 'react-bootstrap/Button';
import awsmobile from '../aws-exports';
import JSignOut from './Signout';
import { Auth } from 'aws-amplify';
import UserForms from './Userforms';
Amplify.configure(awsmobile);

const signUpConfig = {
  signUpFields: [
    {
      label: 'User Name',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'text'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'text'
    },
    {
      label: 'First name',
      key: 'first_name',
      required: true,
      displayOrder: 2,
      type: 'text',
      //   intl: {
      //     label: 'signUp.labels.family_name',
      //   }
    },
    {
      label: 'Last Name',
      key: 'last_name',
      required: true,
      displayOrder: 2,
      type: 'text'
    },
    {
      label: 'City',
      key: 'city',
      required: true,
      displayOrder: 3,
      type: 'text'
    },
    {
      label: 'State',
      key: 'state',
      required: true,
      displayOrder: 3,
      type: 'text'
    },
    {
      label: 'Zip Code',
      key: 'zip',
      required: true,
      displayOrder: 3,
      type: 'text'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password',
    },
  ],
  //   initialValues: {
  //     given_name: 'John',
  //     family_name: 'Smith',
  //   }
}




class UserPortal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      showForms: false
    }
    this.handleClickButton = this.handleClickButton.bind(this)
    this._onButtonClick = this._onButtonClick.bind(this);
  }


  componentDidMount() {
    this.currentUser();
  }

  currentUser = () => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log("USER", user);
        this.setState({
          user: user
        })
      })
      .catch(err => {
        console.log("ERROR", err);
        this.setState({
          user: false
        })
      });
  };

  handleClickButton() {
    this.setState({
      showForms: !this.showForms
    })
  }

  _onButtonClick() {
    this.setState({
      showForms: !this.state.showForms
    });
  }


  render() {
    return (
      <div className="userPortalScreen">
        <Button className="firstButton" onClick={this._onButtonClick}>My Forms</Button>
        {this.state.showForms ? <UserForms /> : null }
        <JSignOut />
      </div>
    )
  }
}

export default withAuthenticator(UserPortal, {
  initialAuthState: 'signIn',
  signUpConfig
})