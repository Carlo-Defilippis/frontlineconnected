import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { useAuth } from '../components/contexts/AuthContext';


const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const { currentUser } = useAuth()
    console.log('User in private Route ',currentUser)
  if (!currentUser && location.pathname !== `/app/login` && location.pathname !== `/app/signup` && location.pathname !== `/app/forgotpassword`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`)
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute


// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props => {
//         return !props.currentUser ? (
//           // If we’re not logged in, redirect to the login page.
//           <Redirect to={{ pathname: '/login' }} />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     }
//     />
//   );

//   export default PrivateRoute;