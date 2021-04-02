import React from 'react'
import { BrowserRouter as Router, Link, navigate } from 'gatsby';
import SignInForm from '../login';
import PrivateRoute from '../../components/PrivateRoute'
import UpdateProfile from './update-profile'
import MyDashboard from './mydashboard'
import { useAuth } from '../../components/contexts/AuthContext';
import { render } from 'node-sass';

function Dashboard() {

    const { currentUser } = useAuth()

    if (currentUser !== null) {
        return navigate('app/mydashboard')
    } else {
        return navigate('app/login')
    }


    return ( 
        <div>Loading</div>
    )

}

export default Dashboard;