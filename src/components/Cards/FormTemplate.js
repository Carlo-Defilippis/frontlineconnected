import React, { useState } from 'react';
import { Form, Col, Button, InputGroup, Row } from 'react-bootstrap'


const FormTemplate = (props) => {


    function myCustomForm() {
        
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} autoComplete="off">
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label><ins>Name:</ins></Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label><ins>Report#</ins></Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter the report #"
                        autoComplete="off"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                    <Form.Label><ins>SSN:</ins></Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">SSN</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            placeholder="Social Security #"
                            aria-describedby="inputGroupPrepend"
                            required
                            autoComplete="off"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a SSN.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label><ins>OLN:</ins></Form.Label>
                    <Form.Control type="text" placeholder="OLN" required autoComplete="off" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a OLN.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Label><ins>Subject's Clothing Description:</ins></Form.Label>
            <Form.Row>
                <Form.Group as={Col} md="6">
                    <Form.Label className="mt-1 mb-0">Hat/Cap:</Form.Label>
                    <Form.Control type="text" placeholder="" autoComplete="off" />
                    <Form.Label className="mt-1 mb-0">Shirt/Blouse:</Form.Label>
                    <Form.Control type="text" placeholder="" autoComplete="off" />
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label className="mt-1 mb-0">Shoes:</Form.Label>
                    <Form.Control type="text" placeholder="" autoComplete="off" />
                    <Form.Label className="mt-1 mb-0">Condition of clothing:</Form.Label>
                    <Form.Control type="text" placeholder="" autoComplete="off" />
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label className="mt-0 mb-0">Coat/Sweater:</Form.Label>
                    <Form.Control type="text" placeholder="" autoComplete="off" />
                    <Form.Label className="mt-0 mb-0">Pants/Skirt:</Form.Label>
                    <Form.Control type="text" placeholder="" autoComplete="off" />
                </Form.Group>
                <Form.Group as={Col} md="6">
                    <Form.Label className="mt-0 mb-0">Heels:</Form.Label>
                    <Form.Control type="text" placeholder="" autoComplete="off" />
                </Form.Group>
            </Form.Row>
            <Form.Label><ins>Officer's Observations</ins></Form.Label>

            <Form.Row>
                <Form.Label>Odor of alcoholic beverage:</Form.Label>
                <Form.Group as={Col} md="6">

                        <Form.Check className="mt-2"
                            type="radio"
                            label="Strong"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Moderate"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                </Form.Group>
                <Form.Group as={Col} md="5">
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Slight"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                        <Form.Check className="mt-2"
                            type="radio"
                            label="None"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios4"
                        />
                </Form.Group>            
                </Form.Row>

                <Form.Label>Speech:</Form.Label>
                <Form.Row>
                <Form.Group as={Col} md="5">

                        <Form.Check className="mt-2"
                            type="radio"
                            label="Not understandable"
                            name="speechradio"
                            id="speech1"
                        />
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Slurred"
                            name="speechradio"
                            id="speech2"
                        />
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Mumbled"
                            name="speechradio"
                            id="speech3"
                        />
                </Form.Group>
                <Form.Group as={Col} md="4">
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Fair"
                            name="speechradio"
                            id="speech4"
                        />
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Good"
                            name="speechradio"
                            id="speech5"
                        />
                </Form.Group>            
                </Form.Row>

                <Form.Label>Eyes:</Form.Label>
                <Form.Row>
                <Form.Group as={Col} md="5">

                        <Form.Check className="mt-2"
                            type="radio"
                            label="Red"
                            name="eyesradio"
                            id="eyes1"
                        />
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Bloodshot"
                            name="eyesradio"
                            id="eyes2"
                        />
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Glassy"
                            name="eyesradio"
                            id="eyes3"
                        />
                </Form.Group>
                <Form.Group as={Col} md="4">
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Droopy eyelids"
                            name="eyesradio"
                            id="eyes4"
                        />
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Glasses/Contacts"
                            name="eyesradio"
                            id="eyes5"
                        />
                </Form.Group>            
                </Form.Row>

                <Form.Row>
                <Form.Label>Admitted Consumption:</Form.Label>
                <Form.Group as={Col} md="6">

                        <Form.Check className="mt-2"
                            type="radio"
                            label="Beer"
                            name="admitted"
                            id="admitted1"
                        />
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Wine"
                            name="admitted"
                            id="admitted2"
                        />
                </Form.Group>
                <Form.Group as={Col} md="5">
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Liquor"
                            name="admitted"
                            id="admitted3"
                        />
                        <Form.Check className="mt-2"
                            type="radio"
                            label="Other"
                            name="admitted"
                            id="admitted4"
                        />
                </Form.Group>            
                </Form.Row>


            <Form.Row>
                <Form.Group>
                    <Form.Label>Terms and conditions: </Form.Label>
                    <Form.Check
                        required
                        type="checkbox"
                        id="custom-switch"
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
            </Form.Row>

            <Button type="submit">Submit form</Button>
        </Form>
    );
}

export default FormTemplate;