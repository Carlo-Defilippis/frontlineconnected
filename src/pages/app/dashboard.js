import React from 'react'
import { Router } from "@reach/router"
import SignInForm from './login';
import Signup from './signup'
import PrivateRoute from '../../components/PrivateRoute'
import UpdateProfile from './update-profile'
import MyDashboard from './mydashboard'
import Footer from '../../components/Footer'

function Dashboard() {

    return (
                <Router>
                    <PrivateRoute path='/app/mydashboard' component={MyDashboard} />
                    <PrivateRoute path='/app/update-profile' component={UpdateProfile} />
                    <SignInForm path='/app/login' />
                    <Signup path='/app/signup' />
                </Router>
    )
}

export default Dashboard;