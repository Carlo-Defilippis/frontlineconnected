import React from 'react';
import { useAuth } from './contexts/AuthContext';
import { navigate, Route } from 'gatsby';

export default function PrivateRoute({ component: Component, ...rest}) {
    const { currentUser } = useAuth();

    return (
        <Route
        {...rest}
        render={props => {
            if (currentUser === null) {
                return navigate('/login')
            } else {
                return <Component {...props} />
            }
            // return currentUser ? <Component {...props} /> : <Redirect to='/login' />
        }}
        />
    )
}

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