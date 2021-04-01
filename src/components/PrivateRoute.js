import React from 'react'
import { Route, Redirect } from 'gatsby'
import { useAuth } from '../components/contexts/AuthContext';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        !props.currentUser ? (
          // If we’re not logged in, redirect to the login page.
          <Redirect to={{ pathname: `/portal/login` }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );

  export default PrivateRoute;