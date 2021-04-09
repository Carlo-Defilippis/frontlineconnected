import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import TextFieldsRoundedIcon from '@material-ui/icons/TextFieldsRounded';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';

class CanvasBar extends Component {

    onChangeHandler(e) {
        console.log(e.target.files[0])
    }

    render() {
        return (
			<>
                <Navbar bg="dark" variant="dark" expand="md">
                    <Navbar.Brand>Starter UI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Button className='bg-dark mx-1'>
                                <PublishOutlinedIcon />
                                <label htmlFor="my-file-selector">
                                    <input id="my-file-selector" type="file" className="d-none" onChange={this.onChangeHandler} />
                                    &ensp;Upload
                                </label>
                                </Button>
                                <Button className='bg-dark mx-1'>
                                    <TextFieldsRoundedIcon />
                                    &ensp;Add Text
                                </Button>
                                <Button className='bg-dark mx-1'>
                                    <DoneOutlineRoundedIcon />
                                    &ensp;Check Box
                                </Button>
                                <Button className='bg-dark mx-1'>
                                    <AssignmentTurnedInOutlinedIcon />
                                    &ensp;Add Signature Box
                                </Button>
					</Nav>
                    </Navbar.Collapse>
				</Navbar>
            </>
                )
    }
};

                export default CanvasBar;