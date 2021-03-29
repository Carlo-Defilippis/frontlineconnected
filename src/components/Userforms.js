import React, { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { Auth } from 'aws-amplify';
import Button from 'react-bootstrap/Button';
import GenCards from './Cards/GetCards';


class UserForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userId: ''
        }
        this.handleClickUploadButton = this.handleClickUploadButton.bind(this);
    }

    componentDidMount() {
        this.currentUser();
      }
  
      currentUser = () => {
        Auth.currentAuthenticatedUser()
          .then(user => {
            console.log("USER", user);
            this.setState({
              user: user,
              userId: user.attributes.sub
            })
          })
          .catch(err => {
            console.log("ERROR", err);
            this.setState({
              user: false
            })
          });
      };

    
      handleClickUploadButton() {
        console.log('State in user forms ', this.state)
      }


    render() {
        const myInfo = this.state.userId
        return (
            <div className="userPortalScreen">
                <h3>This is a test!</h3>
                <GenCards parentState={myInfo} />
                <Button onClick={this.handleClickUploadButton} >Click here to upload a new form</Button>
            </div>
        )}
}

export default UserForms;