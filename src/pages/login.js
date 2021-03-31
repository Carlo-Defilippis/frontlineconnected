import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth, AuthProvider } from '../components/contexts/AuthContext';
import { Link } from 'gatsby';
import Footer from '../components/Footer';


export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const signup = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();


        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to log in, please make sure your password and email are correct')
        }
        setLoading(false)
    }

    return (
        <div>
            <div id="wrapper">
                <div id='main' style={{ display: 'flex' }}>
                    <article id="intro" class="active timeout" style={{ display: 'none' }}>

                        {/* CONTENT GOES HERE */}
                        {/* <Router>
                <Switch>
                  <Route exact path='/dashboard' component={Dashboard} />
                  <Route path='/signup' component={SignUpForm} />
                  <Route path='/login' component={SignInForm} />
                  </Switch>
                </Router> */}
                        <AuthProvider>
                            <Card className='' style={{ maxWidth: '400px', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
                                <Card.Body className='w-100'>
                                    <h2 className='text-dark text-center mb-4'>Log In</h2>
                                    {error && <Alert variant='danger'>{error}</Alert>}
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group id='email'>
                                            <Form.Label className='text-dark'>Email</Form.Label>
                                            <Form.Control type='email' ref={emailRef} required />
                                        </Form.Group>
                                        <Form.Group id='password'>
                                            <Form.Label className='text-dark'>Password</Form.Label>
                                            <Form.Control type='password' ref={passwordRef} required />
                                        </Form.Group>
                                        <Button disabled={loading} className='w-100' type='submit'>Log In</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                            <div className='w-100 text-center mt-2 text-light'>Need an account? <Link to='/signup'>Sign Up</Link></div>
                        </AuthProvider>




                        <Link to='/'><p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', marginTop: '5vh' }}>Back to main page</p></Link>
                    </article>
                </div>
                <Footer />
            </div>
            <div id="bg"></div>
        </div>




    )

}