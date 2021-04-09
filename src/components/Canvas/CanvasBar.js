import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import TextFieldsRoundedIcon from '@material-ui/icons/TextFieldsRounded';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';

class CanvasBar extends Component {
	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark" style={{ minWidth: 700 }}>
					<Navbar.Brand>Starter UI</Navbar.Brand>
					<Nav className="mr-auto">
                        <Button className='bg-dark mx-1'>
                            <PublishOutlinedIcon />
                            &ensp;Upload
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
				</Navbar>
            </>
        )
    }
};

export default CanvasBar;