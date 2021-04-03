import React, { useRef, useState, useContext } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { AuthContext } from '../components/contexts/AuthContext';
import { Link, navigate } from 'gatsby';
import Footer from '../components/Footer';
import firebase from 'gatsby-plugin-firebase'

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { setCurrentUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [userloading, setUserLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('HandleSubmit hit')
        try {
            setError('')
            setUserLoading(true)
            console.log('Handle Submit in try')
            const result = await firebase.auth().signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
            setCurrentUser(result)
            console.log(result)
            navigate('/app/mydashboard')
        } catch {
            setUserLoading(false)
            console.log('try failed')
        }
    }

    return (
        <div>
            <div id="wrapper">
                <div id='main' style={{ display: 'flex' }}>
                    <article id="intro" className="active timeout" style={{ display: 'none' }}>

                        {/* CONTENT GOES HERE */}
                        {/* <Router>
                <Switch>
                  <Route exact path='/dashboard' component={Dashboard} />
                  <Route path='/signup' component={SignUpForm} />
                  <Route path='/login' component={SignInForm} />
                  </Switch>
                </Router> */}

                            <Card style={{ maxWidth: '400px', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
                                <Card.Body className='w-100'>
                                    <h2 className='text-dark text-center mb-4'>Log In</h2>
                                    {error && <Alert variant='danger'>{error}</Alert>}
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group id='email'>
                                            <Form.Label className='text-dark'>Email</Form.Label>
                                            <Form.Control autoComplete='username' type='email' ref={emailRef} required />
                                        </Form.Group>
                                        <Form.Group id='password'>
                                            <Form.Label className='text-dark'>Password</Form.Label>
                                            <Form.Control autoComplete='current-password' type='password' ref={passwordRef} required />
                                        </Form.Group>
                                        <Button disabled={userloading} className='w-100' type='submit'>Log In</Button>
                                        <Button variant='primary'>Console Log</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                            <div className='w-100 text-center mt-2 text-light'>Need an account? <Link to='/signup'>Sign Up</Link></div>





                        <Link to='/'><p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>Back to main page</p></Link>
                    </article>
                </div>
                <Footer />
            </div>
            <div id="bg"></div>
        </div>




    )

}