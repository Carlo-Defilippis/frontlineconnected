import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import { DataStore } from '@aws-amplify/datastore'
import { USERS } from '../models'

// await DataStore.save(
//   new USERS({
//   "email": "email",
//   "family_name": "family_name",
//   "phone_number": "phone_number"
// })
// );

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
          <div>Hello, {user.family_name}</div>
          <AmplifySignOut />
      </div>
    ) : (
      <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          formFields={[
            { type: "family_name",
            label: "Precinct Name",
            placeholder: "Enter your precincts name",
            required: true
        },
            { type: "username",
            email_verified: true,
            label: 'Email',
            placeholder: 'Enter your precincts email',
            required: true
        },
            { 
              type: "password",
              required: true
        },
            { type: "phone_number",
              required: true
        }
        ]}
        />
      </AmplifyAuthenticator>
  );
}

export default AuthStateApp;