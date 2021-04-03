import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../components/contexts/AuthContext';
import { Link, navigate } from 'gatsby';
import Footer from '../components/Footer'

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [userloading, setUserLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('The passwords you entered do not match')
        }

        try {
            setError('')
            setUserLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/app/mydashboard')
        } catch {
            setError('Failed to create an account')
        }
        setUserLoading(false)
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
                                <h2 className='text-center mb-4 text-dark'>Sign Up</h2>
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
                                    <Form.Group id='passwordConfirm'>
                                        <Form.Label className='text-dark'>Confirm Password</Form.Label>
                                        <Form.Control type='password' ref={passwordConfirmRef} required />
                                    </Form.Group>
                                    <Button disabled={userloading} className='w-100' type='submit'>Sign Up</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <div className='w-100 text-center mt-2 text-light'>Already have an account? <Link to='/login'>Log In</Link></div>




                        <Link to='/'><p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', marginTop: '5vh' }}>Back to main page</p></Link>
                    </article>
                </div>
                <Footer />
            </div>
            <div id="bg"></div>
        </div>










        )
    
}



// class SignUpForm extends Component {
//     constructor(props) {
//         super(props);
//         this.myPwRef = React.createRef();
//         this.myConfRef = React.createRef();
//         this.state = {
//             username: '',
//             email: '',
//             phone_number: '',
//             first_name: '',
//             last_name: '',
//             city: '',
//             state: '',
//             zip: '',
//             confirmationCode: 0,
//             signedUp: false,
//             validated: false,
//             validZip: '',
//             placeHolderCity: 'Check Zip to populate this field.',
//             placeHolderState: 'Check Zip.',
//             confirm_passwordError: '',
//             isUser: false
//         }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleZip = this.handleZip.bind(this);
        // this.handleIsUser = this.handleIsUser.bind(this);
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const { signedUp, username, email, phone_number, first_name, last_name, city, state, zip, confirmationCode } = this.state;
    //     const form = e.currentTarget;

    //     console.log(this.myPwRef.current.value, passwordComplexity().validate(this.myPwRef.current.value))
    //     if (form.checkValidity() === false) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //     }

    //     if (this.myPwRef.current.value === this.myConfRef.current.value && this.myPwRef.current.value !== '' && this.myConfRef.current.value !== '') {
    //         if (!passwordComplexity().validate(this.myPwRef.current.value).error) {
    //             this.setState({
    //                 confirm_passwordError: '',
    //                 validated: true
    //             })
    //         } else {
    //             this.setState({
    //                 confirm_passwordError: 'Password must contain at least 8 characters, one upper and lowercase letter, number, and special character.'
    //             })
    //             e.preventDefault();
    //             e.stopPropagation();
    //         }
    //     } else {
    //         this.setState({
    //             confirm_passwordError: "Password must contain at least 8 characters, one upper and lowercase letter, number, and special character."
    //         })
    //         e.preventDefault();
    //         e.stopPropagation();
    //     }

    //     if (!signedUp) {
    //         Auth.signUp({
    //             username: username,
    //             password: this.myPwRef.current.value,
    //             attributes: {
    //                 email: email,
    //                 'custom:first_name': first_name,
    //                 'custom:last_name': last_name,
    //                 'custom:city': city,
    //                 'custom:state': state,
    //                 'custom:zip': zip
    //             }
    //         })
    //             .then(() => {
    //                 this.setState({
    //                     signedUp: true
    //                 })
    //             })
    //             .catch(err => console.log(err));
    //     } else {
    //         Auth.confirmSignUp(email, confirmationCode)
    //             .then(() => console.log('Confirmed SIgn up'))
    //             .catch(err => console.log(err))
    //     }
    // }

    // handleChange(e) {
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
//     }

//     handleZip(e) {
//         e.preventDefault();
//         const mySteady = ''
//         console.log(Form.Control.Feedback)
//         if (mySteady !== this.zip && this.state.zip.length === 5) {
//             let myZipSearch = zipcodes.lookup(this.state.zip)
//             console.log(myZipSearch)
//             if (myZipSearch.city) {
//                 console.log('i exist')
//                 this.setState({
//                     city: myZipSearch.city,
//                     state: myZipSearch.state,
//                     validZip: ''
//                 })
//             } else {
//                 this.setState({
//                     validZip: "This doesn't seem to be a valid US zipcode.",
//                     placeHolderCity: "Check Zip to populate this field.",
//                     placeHolderState: "Check Zip.",
//                     state: '',
//                     city: ''
//                 })
//             }
//         } else {
//             console.log(this.state.zip)
//             this.setState({
//                 validZip: "This doesn't seem to be a valid US zipcode.",
//                 placeHolderCity: "Check Zip to populate this field.",
//                 placeHolderState: "Check Zip."
//             })
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             isUser: this.state.isUser
//         })
//     }

//     handleIsUser(e) {
//         this.setState({
//             isUser: !this.state.isUser
//         })
//     }

//     render() {
//         const {
//             signInWithEmail,
//             signUpWithEmail,
//             signInWithGoogle,
//             signInWithFacebook,
//             signInWithGithub,
//             signInWithTwitter,
//             googleAccessToken,
//             facebookAccessToken,
//             githubAccessToken,
//             twitterAccessToken,
//             twitterSecret,
//             signOut,
//             user,
//             error
//           } = this.props;
      
//         const { email, password, first_name, last_name, city, state, zip } = this.state
//         const { signedUp, isUser } = this.state;

//         if (!signedUp) {
//             return (
//                 <div>
//                     <Form noValidate className="signUpForm" variant='light' validated={this.state.validated} onSubmit={this.handleSubmit}>
//                         <Form.Row>
//                             <Form.Group as={Col} md="5" controlId="validationCustomUsername">
//                                 <Form.Label>Username</Form.Label>
//                                 <InputGroup hasValidation>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Username"
//                                         aria-describedby="inputGroupPrepend"
//                                         required
//                                         name="username"
//                                         onChange={this.handleChange}
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         Please choose a username.
//                                     </Form.Control.Feedback>
//                                 </InputGroup>
//                             </Form.Group>
//                             <Form.Group as={Col} md="5" controlId="validationemail">
//                                 <Form.Label>Email</Form.Label>
//                                 <InputGroup hasValidation>
//                                     <Form.Control
//                                         type="email"
//                                         placeholder="Email"
//                                         aria-describedby="inputGroupPrepend"
//                                         required
//                                         name="email"
//                                         onChange={this.handleChange}
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         Please enter a valid email address.
//                                     </Form.Control.Feedback>
//                                 </InputGroup>
//                             </Form.Group>
//                         </Form.Row>
//                         <Form.Row>
//                             <Form.Group as={Col} md="5" controlId="validationPassword">
//                                 <Form.Label>Username</Form.Label>
//                                 <InputGroup>
//                                     <Form.Control
//                                         ref={this.myPwRef}
//                                         type="password"
//                                         placeholder="Enter Password"
//                                         aria-describedby="inputGroupPrepend"
//                                         required
//                                         name="password"
//                                     />
//                                 </InputGroup>
//                             </Form.Group>
//                             <Form.Group as={Col} md="5" controlId="validationConfirmPassword">
//                                 <Form.Label>Confirm Pasword</Form.Label>
//                                 <InputGroup>
//                                     <Form.Control
//                                         ref={this.myConfRef}
//                                         type="password"
//                                         placeholder="Re-enter Password"
//                                         aria-describedby="inputGroupPrepend"
//                                         required
//                                         name="confirm_password"
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                     </Form.Control.Feedback>
//                                 </InputGroup>
//                             </Form.Group>

//                         </Form.Row>
//                         <Form.Row>
//                             <Form.Group as={Col} md="4" controlId="validationCustom01">
//                                 <Form.Label>First name</Form.Label>
//                                 <Form.Control
//                                     required
//                                     type="text"
//                                     placeholder="First name"
//                                     name="first_name"
//                                     onChange={this.handleChange}
//                                 />
//                                 <Form.Control.Feedback type="invalid">Please enter a valid first name</Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group as={Col} md="4" controlId="validationCustom02">
//                                 <Form.Label>Last name</Form.Label>
//                                 <Form.Control
//                                     required
//                                     type="text"
//                                     placeholder="Last name"
//                                     name="last_name"
//                                     onChange={this.handleChange}
//                                 />
//                                 <Form.Control.Feedback type="invalid">Please enter a valid last name</Form.Control.Feedback>
//                             </Form.Group>
//                         </Form.Row>
//                         <Form.Row>
//                             <Form.Group as={Col} md="6" controlId="validationCustom03">
//                                 <Form.Label>City</Form.Label>
//                                 <Form.Control
//                                     variant="dark"
//                                     type=""
//                                     placeholder={this.state.placeHolderCity}
//                                     required
//                                     name="city"
//                                     disabled
//                                     value={this.state.city}
//                                     onChange={this.handleChange}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     Please provide a valid city.
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group as={Col} md="3" controlId="validationCustom04">
//                                 <Form.Label>State</Form.Label>
//                                 <Form.Control
//                                     type=""
//                                     placeholder={this.state.placeHolderState}
//                                     required
//                                     name="state"
//                                     disabled
//                                     value={this.state.state}
//                                     onChange={this.handleChange}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     Please choose a state.
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group as={Col} md="3" controlId="validationCustom05">
//                                 <Form.Label>Zip</Form.Label>
//                                 <Form.Control
//                                     name="zip"
//                                     type="text"
//                                     maxLength='5'
//                                     minLength='5'
//                                     placeholder="Zip"
//                                     required
//                                     onChange={this.handleChange}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     Please provide a valid zip.
//                                 </Form.Control.Feedback>
//                                 <div style={{ display: 'block' }} className='invalid-feedback'>{this.state.validZip}</div>
//                                 <Button style={{ marginTop: '3px' }} onClick={this.handleZip}>Check Zip</Button>
//                             </Form.Group>
//                         </Form.Row>
//                         <Form.Group>
//                             <Form.Check
//                                 required
//                                 type="checkbox"
//                                 id="custom-switch"
//                                 label="Agree to terms and conditions"
//                                 feedback="You must agree before submitting."
//                             />
//                         </Form.Group>
//                         <div className="text-danger">{this.state.confirm_passwordError}</div>
//                         <Button type="submit">Submit form</Button>
//                     </Form>
//                 </div>
//             );
//         } else {
//             return (
//                 <div>
//                     <SignInForm />
//                 </div>

//             )
//         }

//     }
// }

// SignUpForm.propTypes = {
//     route: PropTypes.object,
//     article: PropTypes.string,
//     articleTimeout: PropTypes.bool,
//     onCloseArticle: PropTypes.func,
//     timeout: PropTypes.bool,
//     setWrapperRef: PropTypes.func,
// }


// export default SignUpForm;