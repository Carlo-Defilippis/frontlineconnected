import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { useAuth } from '../../components/contexts/AuthContext'
import { Link, navigate } from 'gatsby'
import Footer from '../../components/Footer'

function MyDashboard() {
    const [error, setError] = useState('');
    const { currentUser } = useAuth()
    const { logout } = useAuth()
    const [userloading, setUserLoading] = useState(false)

    if(currentUser) {

        async function handleLogout() {
    
    
            try {
                setError('')
    
                await logout()
                navigate('/login')
            } catch {
                setError('Failed to log out')
            }
    
        }
    
        function handleProfileUpdate() {
            navigate('/app/update-profile')
        }
    
        return (
            <>
                <div>
                    <div id="wrapper">
                        <div id='main' style={{ display: 'flex' }}>
                            <article id="intro" className="active timeout" style={{ display: 'none' }}>
                                {/*  */}
                                <Card>
                                    <h2 className='text-center mb-4 text-dark'>Profile</h2>
                                    {error && <Alert variant='danger'>{error}</Alert>}
                                    <strong>Email: </strong> {currentUser.email}
                                    <Button disabled={userloading} onClick={handleProfileUpdate}>Update Profile</Button>
                                </Card>
                                <div className='w-100 text-center mt-2'>
                                    <Button variant='primary' onClick={handleLogout}>Log Out</Button>
                                </div>
                                <Link to='/'><p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>Back to main page</p></Link>
                                {/*  */}
                            </article>
                        </div>
                        <Footer />
                    </div>
                    <div id="bg"></div>
                </div>
    
            </>
    
    
            // <div>Dashboard</div>
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
    } else {
        return (
            <div>{navigate('/login')}</div>
        )
        
    }
}

export default MyDashboard;