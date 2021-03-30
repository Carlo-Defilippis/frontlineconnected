import React from 'react'
import Button from 'react-bootstrap/Button';
import GetCards from './Cards/GetCards';


class UserForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userId: ''
        }
        this.handleClickUploadButton = this.handleClickUploadButton.bind(this);
    }

    componentDidMount() {
        // this.currentUser();
      }
  
      // currentUser = () => {
      //   Auth.currentAuthenticatedUser()
      //     .then(user => {
      //       this.setState({
      //         user: user,
      //         userId: user.attributes.sub
      //       })
      //     })
      //     .catch(err => {
      //       console.log("ERROR", err);
      //       this.setState({
      //         user: false,
      //       })
      //       alert("There was an error, we'll log you out. Try signing in and trying again.")
      //       Auth.signOut()
      //     });
      // };

    
      handleClickUploadButton() {
        console.log('State in user forms ', this.state)
        console.log('This is the props ', this.props)
      }

      
    render() {
        const myInfo = this.state.userId
        return (
            <div className="userPortalScreen" >
                <GetCards parentState={myInfo}/>
                <Button onClick={this.handleClickUploadButton} >Click here to upload a new form</Button>
            </div>
        )}
}

export default UserForms;