import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifyConfirmSignUp , AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import icon from '../images/FLSicon_02.png'
import Button from 'react-bootstrap/Button';
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

// async function isData() {
//   let models = await DataStore.query(USERS);
//   console.log('My saved Data: ', JSON.stringify(models));
// }



const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();
    console.log(authState)
    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData);
            console.log(user)
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="position-relative User">
    <h3>Welcome to your user portal</h3>
    <img src={icon} className="position-absolute top-0 start-50 translate-middle"></img>
    <Button variant="primary">Go to my forms</Button>
    <br />
    <AmplifySignOut style={{ borderRadius: '5%' }} />
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