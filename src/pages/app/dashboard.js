import React from 'react'
import { Router } from "@reach/router"
import SignInForm from './login';
import Signup from './signup'
import ForgotPassword from './forgotpassword';
import PrivateRoute from '../../components/PrivateRoute'
import UpdateProfile from './updateprofile'
import MyDashboard from './mydashboard'


function Dashboard() {

    return (
                <Router>
                    <PrivateRoute path='/app/mydashboard' component={MyDashboard} />
                    <PrivateRoute path='/app/updateprofile' component={UpdateProfile} />
                    <SignInForm path='/app/login' />
                    <Signup path='/app/signup' />
                    <ForgotPassword path='/app/forgotpassword' />
                </Router>
    )
}

export default Dashboard;