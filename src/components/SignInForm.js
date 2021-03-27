import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Auth } from 'aws-amplify';
import JSignOut from './Signout';
import icon from '../images/FLSicon_02.png';

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            signedIn: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { signedIn, username, password } = this.state;

        if (!signedIn) {
            Auth.signIn({
                username: username,
                password: password
            })
            .then(() => console.log('signed in'))
            .catch(err => console.log(err));
        } else {
            Auth.confirmSignIn(username)
            .then(() => {
                this.setState({
                    signedIn: true
                })
                console.log('Confirmed Sign in')})
            .catch(err => console.log(err))
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { signedIn } = this.state;

        if (signedIn) {
            return (
                <div className="position-relative User">
                <h3>Welcome to your user portal</h3>
                <img src={icon} alt='Front Line Solutions Logo' className="position-absolute top-0 start-50 translate-middle"></img>
                <Button variant="primary">Go to my forms</Button>
                <Button variant="primary">Profile</Button>
                <JSignOut />
                </div>
            );
        } else {
            return (
                <form>
                    <label>Username</label>
                    <input type='text' name='username' onChange={ this.handleChange } />
                    <label>Password</label>
                    <input type='password' name='password' onChange={ this.handleChange } />
                    <Button onClick={this.handleSubmit}>Sign In</Button>
                </form>
            )
        }

    }
}

export default SignInForm;