import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInForm from '../login';
import PrivateRoute from '../../components/PrivateRoute'
import UpdateProfile from './update-profile'
import MyDashboard from './mydashboard'

function Dashboard() {

    return (
                        <Router>
                            <Switch>
                                <PrivateRoute exact path="/app/mydashboard" component={MyDashboard} />
                                <PrivateRoute path="/app/update-profile" component={UpdateProfile} />
                                <Route path="/login" component={SignInForm} />
                            </Switch>
                        </Router>
    )
}

export default Dashboard;