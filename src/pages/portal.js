import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../components/contexts/AuthContext';
import SignUpForm from './signup';
import SignInForm from './login';
import Dashboard from './dashboard';
import Layout from '../components/layout'

const App = () => (
  <AuthProvider>
    <div>
      <div id="wrapper">
        <div id='main' style={{ display: 'flex' }}>
          <article id="intro" class="active timeout" style={{ display: 'none' }}>
            <h2 class="major" style={{ margin: '0px', padding: '0px', width: '100%', textAlign: 'center' }}>WHAT WE DO</h2>

            {/* CONTENT GOES HERE */}
            {/* <Router>
              <Switch>
                <Route exact path='/dashboard' component={Dashboard} />
                <Route path='/signup' component={SignUpForm} />
                <Route path='/login' component={SignInForm} />
              </Switch>
            </Router> */}
            <Link to='/'><h6 style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center', margin: 'auto' }}>Back to main</h6></Link>
          </article>
        </div>
        <Footer />
      </div>
      <div id="bg"></div>
    </div>
  </AuthProvider>
)

export default App
