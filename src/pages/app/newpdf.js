import React, { Component } from 'react'
import loadable from '@loadable/component'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const App = loadable(() => import('../../components/Canvas/EditPDF/src/App'))

export default class NewPDF extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('Props in newpdf.js', this.props)
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <App />
                </Row>
            </Container>
        )
    }
}
