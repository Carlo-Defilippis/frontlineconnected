import React, { useState } from 'react'
import dynamic from '@next-tools/dynamic'
import Canvas from '../../components/Canvas/Canvas'
import { useAuth } from '../../components/contexts/AuthContext'
import Button from 'react-bootstrap/Button'

// const DynamicComponentWithNoSSR = dynamic(
//     () => import("../../components/Toast"),
//     { ssr: false }
// );

// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'
// import Alert from 'react-bootstrap/Alert'
// import { useAuth } from '../../components/contexts/AuthContext'
// import Footer from '../../components/Footer'
import { Link, navigate } from 'gatsby'

export default function UpdateProfile() {

    const [error, setError] = useState('')
    const { logout } = useAuth()
    // const [loading, setLoading] = useState(false)

    // function handleProfileUpdate() {
    //     console.log('profile update hit')
    // }

    async function handleLogout() {
        try {
            setError('')
            await logout()
            navigate('/app/login')
        } catch {
            setError('Failed to log out')
        }
    }

    function handleBackToProfile() {
        navigate('/app/mydashboard')
    }

    return (
        <div>
            <Canvas />
            <div className='w-100 text-center mt-2'>
                <Button variant='primary' onClick={handleBackToProfile}>Back to Dashboard</Button>
            </div>
            <div className='w-100 text-center mt-2'>
                <Button variant='primary' onClick={handleLogout}>Log Out</Button>
            </div>
            <Link to='/'><p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>Back to main page</p></Link>
        </div>
    )
}






//     <div>
//     <div id="wrapper">
//         <div id='main' style={{ display: 'flex' }}>
//             <article id="intro" className="active timeout" style={{ display: 'none' }}>
//                 {/*  */}
//                 <Card>
//                     <h2 className='text-center mb-4 text-dark'>Update Profile Page</h2>
//                     {error && <Alert variant='danger'>{error}</Alert>}
//                     {/* <strong>Email: </strong> {currentUser.email} */}
//                     <Button disabled={loading} onClick={handleProfileUpdate}>Update Profile</Button>
//                     <Button disabled={loading} onClick={handleBackToProfile}>Back to Dashboard</Button>
//                 </Card>
//                 <div className='w-100 text-center mt-2'>
//                     <Button variant='primary' onClick={handleLogout}>Log Out</Button>
//                 </div>
//                 <Link to='/'><p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>Back to main page</p></Link>
//                 {/*  */}
//             </article>
//         </div>
//         <Footer />
//     </div>
//     <div id="bg"></div>
// </div>
