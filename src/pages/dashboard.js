import React from 'react'
import SignUpForm from './signup';
import { Container } from 'react-bootstrap/Container'
import { AuthProvider } from '../components/contexts/AuthContext'
import Layout from '../components/layout'
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