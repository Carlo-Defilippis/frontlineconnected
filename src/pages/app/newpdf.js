import React, { Component } from 'react'
import loadable from '@loadable/component'
const App = loadable(() => import('../../components/Canvas/EditPDF/src/App'))

export default class NewPDF extends Component {

    render() {
        return (
            <div>
                <App />
            </div>
        )
    }
}
