import React from 'react';
import Button from 'react-bootstrap/Button';

// import aws_exports from '../aws-exports';
// import { withAuthenticator } from 'aws-amplify-react';

// Amplify.configure(aws_exports);

// Component that replaces amplify styles and uses bootstrap instead
class JSignOut extends React.Component {

  render() {
    return (
      // <Button className="signOutButton" light={valueOf.toString()} outline={valueOf.toString()} sm={valueOf.toString()} border="0" onClick={() => Auth.signOut()}>Sign Out</Button>
      <Button className="signOutButton" light={valueOf.toString()} outline={valueOf.toString()} sm={valueOf.toString()} border="0" onClick={() => console.log('Signing Out')}>Sign Out</Button>

      )
  }
}

export default JSignOut;