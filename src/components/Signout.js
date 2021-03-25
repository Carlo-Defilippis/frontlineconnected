import React from 'react';
import Button from 'react-bootstrap/Button';
import { Auth } from 'aws-amplify';


// Component that replaces amplify styles and uses bootstrap instead
class JSignOut extends React.Component {

  render() {
    return (
      <Button light={valueOf.toString()} outline={valueOf.toString()} sm={valueOf.toString()} border="0" onClick={() => Auth.signOut()}>Sign Out</Button>
    )
  }
}

export default JSignOut;