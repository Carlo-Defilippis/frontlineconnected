import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Canvas extends Component {


    componentDidMount() {
        var canvas = document.getElementById('canvas');

        if (canvas.getContext) {
            var layout = canvas.getContext('2d');

            layout.font = '40px Helvetica'

            layout.fillStyle = "#000000"
            layout.fillRect(20,20,460,460)

            layout.strokeStyle = 'white'
            layout.strokeText('Hello world', 150, 230)

            layout.strokeStyle = 'yellow'
            layout.strokeText('Yellow text', 200, 130)
        }
    }

    render() {
        return (
            <div>
                <canvas className='border-blue-700' id='canvas' width='500' height='500'></canvas>    
            </div>
        )
    }
}
