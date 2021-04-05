import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../components/contexts/AuthContext';
import { Link, navigate } from 'gatsby';
import Footer from '../../components/Footer';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/app/mydashboard')
        } catch {
            setLoading(false)
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
                                            <Form.Label className='text-dark'><strong className='text-dark font-weight-bold'>Email</strong></Form.Label>
                                            <Form.Control className='border border-dark mb-2' autoComplete='username' type='email' ref={emailRef} required />
                                        </Form.Group>
                                        <Form.Group id='password'>
                                            <Form.Label className='text-dark'><strong className='text-dark font-weight-bold'>Password</strong></Form.Label>
                                            <Form.Control className='border border-dark mb-2' autoComplete='current-password' type='password' ref={passwordRef} required />
                                        </Form.Group>
                                        <Button disabled={loading} className='w-100' type='submit'>Log In</Button>
                                        <Button variant='primary' onClick={() => console.log(currentUser)}>Console Log</Button>
                                    </Form>
                                    <div className='w-100 align-content-md-start mt-3 text-light'><Link to='/app/forgotpassword'>Forgot password?</Link></div>
                                </Card.Body>
                            </Card>
                            <div className='w-100 text-center mt-2 text-light'>Need an account? <Link to='/app/signup'>Sign Up</Link></div>





                        <Link to='/'><p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>Back to main page</p></Link>
                    </article>
                </div>
                <Footer />
            </div>
            <div id="bg"></div>
        </div>




    )

}