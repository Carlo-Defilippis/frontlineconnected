import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import '../../assets/scss/components/_cards.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FormTemplate from './FormTemplate';



const GenCards = (props) => {

    const [ form, setForm ] = React.useState()
    const [ myForm, setmyForm ] = React.useState(0)

    const cardInfo = [
        {image: '', title: "Form Title", text: "This is some information about the form", formId: "1"},
        {image: '', title: "Form Title", text: "This is some information about the form", formId: "2"},
        {image: '', title: "Form Title", text: "This is some information about the form", formId: "3"},
        {image: '', title: "Form Title", text: "This is some information about the form", formId: "4"},
        {image: '', title: "Form Title", text: "This is some information about the form", formId: "5"},
        {image: '', title: "Form Title", text: "This is some information about the form", formId: "6"}
    ];



    const renderCards = (card, index) => {
        return (
            <div key={index}>
            <Card className="masonry-brick">
                <Card.Img variant="top" src={card.image} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title style={{ textAlign: 'center' }}>{card.title}</Card.Title>
                    <Button onClick={() => setmyForm(parseInt(card.formId))} className="mx-auto">Choose Form</Button>
                </Card.Body>
            </Card>
            </div>
        )
    }



    const renderFormFields = (data) => {
        if(myForm < 0) {
            return (
            <FormTemplate parentState={data}/>
            )
        }
    }

    const MyForm = () => {
        if(myForm > 0) {
            const result = cardInfo.find(({ formId }) => formId === myForm.toString());


            return (
            <div className="mySingleForm">
              <h1 className="title is-1 text-center">{result.title}</h1>
              <Image src={result.image} thumbnail></Image>
              <p className="text-center">
                  {myForm} is my form ID.
              </p>
                <Container fluid>
              <Row>
                <Col className="text-center">
                <Button onClick={() => setmyForm(-1)}>Fill this out now</Button>
                </Col>
              </Row>
                <Row>
                <Col className="text-center">
                <Button onClick={() => setmyForm(0)} className="text-center">Go back to forms</Button>
                </Col>
                </Row>
                </Container>
            </div>
            )
        }
    };


    return (
        <div className="myFormCards">
            <div className="formInputFields" style={myForm < 0 ? { display: 'flex' } :  { display: 'none' } }>
                {renderFormFields(form)}
            </div>
            <div style={myForm > 0 ? { display: 'flex' } :  { display: 'none' } }>
                {MyForm()}
            </div>
            <div className="masonry" style={myForm === 0 ? { display: 'flex' } : { display: 'none' }}>
            <p>This list is for USER ID #{props.parentState}</p>
            {cardInfo.map(renderCards)}
            </div>
        </div>
    ) 
    
}

export default GenCards;