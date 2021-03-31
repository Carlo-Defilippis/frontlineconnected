import React from 'react'
import SignUpForm from '../pages/SignUpForm';
import { Container } from 'react-bootstrap/Container'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Dashboard() {
    return (
        <div>Dashboard</div>
        // <Layout>
        //     <Router>
        //     <AuthProvider>
        //         <Switch>
        //             <Route path='/signup' component={SignUpForm} />
        //         </Switch>
        //     </AuthProvider>
        //     </Router>
        //     </Layout>
    )
}

export default Dashboard;