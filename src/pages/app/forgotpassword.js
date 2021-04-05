import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import Footer from '../../components/Footer';
import { Link, navigate } from 'gatsby';
import { useAuth } from '../../components/contexts/AuthContext';

export default function ForgotPassword() {
    const emailRef = useRef();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const { resetPassword } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions.')
        } catch {
            setError('Failed to reset password, please try again or check your email was input correctly.')
        }
        setLoading(false)
        console.log('handle submit hit')    
    }

    return (
        <div>
            <div id="wrapper">
                <div id='main' style={{ display: 'flex' }}>
                    <article id="intro" className="active timeout" style={{ display: 'none' }}>

                            <Card style={{ maxWidth: '400px', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
                                <Card.Body className='w-100'>
                                    <h2 className='text-dark text-center mb-4'>Log In</h2>
                                    {message && <Alert variant='success'>{message}</Alert>}
                                    {error && <Alert variant='danger'>{error}</Alert>}
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group id='email'>
                                            <Form.Label><strong className='text-dark font-weight-bold'>Email</strong></Form.Label>
                                            <Form.Control className='border border-dark mb-4' autoComplete='username' type='email' ref={emailRef} required />
                                        </Form.Group>
                                        <Button disabled={loading} className='w-100' type='submit'>Reset Password</Button>
                                        <Button variant='primary' onClick={() => console.log(emailRef)}>Console Log</Button>
                                    </Form>
                                    <div className='w-100 text-center mt-2 text-light'><Link to='/app/login'>Log In.</Link></div>
                                </Card.Body>
                            </Card>

                        <Link to='/'><p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>Back to main page</p></Link>
                    </article>
                </div>
                <Footer />
            </div>
            <div id="bg"></div>
        </div>

    )
}
