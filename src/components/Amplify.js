import React from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import icon from '../images/FLSicon_02.png'
import Button from 'react-bootstrap/Button';
import JSignOut from './Signout';

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
    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData);
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="position-relative User">
      <h3>Welcome to your user portal</h3>
      <img src={icon} alt='Front Line Solutions Logo' className="position-absolute top-0 start-50 translate-middle"></img>
      <Button variant="primary">Go to my forms</Button>
      <Button variant="primary">Profile</Button>
      <JSignOut />
    </div>
) : (
      <AmplifyAuthenticator>
        <AmplifySignUp/>
      </AmplifyAuthenticator>
  );
}

export default AuthStateApp;