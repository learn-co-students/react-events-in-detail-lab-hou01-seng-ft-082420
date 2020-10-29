import React, { Component } from "react"

class CoordinatesButton extends Component {

    handleClick = (e) => {
        const newArray = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(newArray)
    }

    render() {

        return(<div>
            <button onClick={this.handleClick} />
        </div>)
    }
}


export default CoordinatesButton