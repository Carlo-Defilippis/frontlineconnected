import React, { Component, setState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import TextFieldsRoundedIcon from '@material-ui/icons/TextFieldsRounded';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import CanvasApp from './CanvasApp';
import 'bootstrap/dist/css/bootstrap.min.css'

class CanvasBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileSelection: null,
            addText: '',
            addCheckBox: '',
            addSignature: null,
            imageWidth: '',
            imageHeight: '',
            imageRaw: {}
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onCheckState = this.onCheckState.bind(this);
        this.onChooseImage = this.onChooseImage.bind(this);
    }

    componentDidMount() {
        console.log(this.state)
    }

    onChangeHandler(e) {
        console.log(e.target.files[0])
        this.setState({
            fileSelection: e.target.files[0]
        })
    }

    onCheckState() {
        console.log(this.state)
    }

    onChooseImage(e) {
        let fr = new FileReader;

        fr.onload = () => {
            let img = new Image;
            img.onload = () => {
                this.setState({
                    imageWidth: img.width,
                    imageHeight: img.height,
                    imageRaw: img
                })
                console.log('The image object ', img.width, img.height)}
            img.src = fr.result;
        }

        console.log(fr.readAsDataURL(e.target.files[0]))
        this.setState({
            fileSelection: e.target.files[0]
        })
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
                                    <input id="my-file-selector" type="file" className="d-none" onChange={this.onChooseImage} />
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
                            <Button className='bg-dark mx-1' onClick={this.onCheckState}>
                                <AssignmentTurnedInOutlinedIcon />
                                &ensp;Check State
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <CanvasApp
                    fileSelection={this.state.fileSelection}
                    addText={this.state.addText}
                    addCheckBox={this.state.addCheckBox}
                    addSignature={this.state.addSignature}
                    imageWidth={this.state.imageWidth}
                    imageHeight={this.state.imageHeight}
                />
            </>
        )
    }
};

export default CanvasBar;