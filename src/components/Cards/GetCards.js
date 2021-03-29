import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import '../../assets/scss/components/_cards.scss';
import { intoxicated_driver_form_page_1 } from './CardImages/index'




const GenCards = (props) => {

    const [ user, setUser ] = React.useState()
    const [ myForm, setmyForm ] = React.useState(false)

    const cardInfo = [
        {image: intoxicated_driver_form_page_1, title: "Form Title", text: "This is some information about the form"},
        {image: intoxicated_driver_form_page_1, title: "Form Title", text: "This is some information about the form"},
        {image: intoxicated_driver_form_page_1, title: "Form Title", text: "This is some information about the form"},
        {image: intoxicated_driver_form_page_1, title: "Form Title", text: "This is some information about the form"},
        {image: intoxicated_driver_form_page_1, title: "Form Title", text: "This is some information about the form"},
        {image: intoxicated_driver_form_page_1, title: "Form Title", text: "This is some information about the form"}
    ];


    console.log(props)

    const renderCards = (card, index) => {
        return (
            <div key={index}>
            <Card className="masonry-brick">
                <Card.Img variant="top" src={card.image} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title style={{ textAlign: 'center' }}>{card.title}</Card.Title>

                    <Button className="mx-auto">Choose Form</Button>

                </Card.Body>
            </Card>
            </div>
        )
    }

    console.log(props)

    return (
        <div className="myFormCards" style={props ? { display: 'flex' } : { display: 'none' }}>
            <div className="masonry">
            <p>This list is for USER ID #{props.parentState}</p>
            {cardInfo.map(renderCards)}
            </div>
        </div>
    ) 
    
}

export default GenCards;