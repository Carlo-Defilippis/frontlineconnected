import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

export default function PrivateRoute({ component: Component, ...rest}) {
    const { currentUser } = useAuth();

    return (
        <Route
        {...rest}
        render={props => {
            if (currentUser === null) {
                return <Redirect to='/login' />
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