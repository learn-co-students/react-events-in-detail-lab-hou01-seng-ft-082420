// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {

    constructor(){
        super()
        this.state = {

        }
    }

    handleClick = (event) => {
        let coordinateArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinateArray)
    }

    render() {

        return(
            <button 
            onClick={this.handleClick}
            >
            Coordinate Button
            </button>
        )

    }
}

export default CoordinatesButton

