import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header';
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../components/contexts/AuthContext'
import SignUpForm from '../components/SignUpForm'
import Dashboard from '../components/Dashboard'
import Layout from '../components/layout'
import SignIn from '../components/SignInForm'

const App = () => (
  <div>
    <div id="wrapper">
      <div id='main' style={{ display: 'flex' }}>
        <article id="intro" class="active timeout" style={{ display: 'none' }}>
          <h2 class="major" style={{ margin: '0px', padding: '0px', width: '100%', textAlign: 'center' }}>WHAT WE DO</h2>

          {/* CONTENT GOES HERE */}
          <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route path='/signup' component={SignUpForm} />
                    <Route path='/login' component={SignIn} />
                </Switch>
            </AuthProvider>
            </Router>
          <Link to='/'>Back to main</Link>
        </article>
      </div>
      <Footer />
    </div>
    <div id="bg"></div>
  </div>
)

export default App
