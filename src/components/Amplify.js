import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports'
 
Amplify.configure(awsconfig);

const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();
    // console.log(authState)
    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
      <div className="App">
          <div>Hello, {user.username}</div>
          <AmplifySignOut />
      </div>
    ) : (
      <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          formFields={[
            { type: "username",
            label: "Email",
            placeholder: "Enter your precincts email",
            required: true
        },
            { type: "email",
            email_verified: true,
            label: 'Retype Email',
            placeholder: 'Enter your precincts email again'
        },
            { type: "password" },
            { type: "address",
            label: "Address",
            placeholder: "Enter your precincts address",
            required: true,
        },
            { type: "phone_number"}
          ]}
        />
      </AmplifyAuthenticator>
  );
}

export default AuthStateApp;