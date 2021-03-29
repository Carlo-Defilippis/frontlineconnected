import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../assets/scss/components/_cards.scss'
import { Auth } from 'aws-amplify'

const GenCards = () => {

    const [ user, setUser ] = React.useState()

    // const currentUser = () => {
    //     Auth.currentAuthenticatedUser()
    //       .then(user => {
    //         console.log("USER", user);
    //         setUser({
    //           user: user,
    //           userId: user.attributes.sub
    //         })
    //       })
    //       .catch(err => {
    //         console.log("ERROR", err);
    //         setUser({
    //           user: false
    //         })
    //       });
    //   };

    const cardInfo = [
        {image: "https://picsum.photos/100/100", title: "Form Title", text: "This is some information about the form"},
        {image: "https://picsum.photos/100/100", title: "Form Title", text: "This is some information about the form"},
        {image: "https://picsum.photos/100/100", title: "Form Title", text: "This is some information about the form"},
        {image: "https://picsum.photos/100/100", title: "Form Title", text: "This is some information about the form"},
        {image: "https://picsum.photos/100/100", title: "Form Title", text: "This is some information about the form"},
        {image: "https://picsum.photos/100/100", title: "Form Title", text: "This is some information about the form"}
    ];


    const renderCards = (card, index) => {
        return (
            <div key={index}>
            <Card className="masonry-brick">
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>{card.title}</Card.Title>
                    <Button>Choose Form</Button>
                </Card.Body>
            </Card>
            </div>
        )
    }

    console.log(user)

    return <div className="myFormCards masonry"><h4>{user}</h4>{cardInfo.map(renderCards)}</div>
}

export default GenCards;