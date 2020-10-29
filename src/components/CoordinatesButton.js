// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{

    render(){
        return(
            <center>
                <button onClick={(e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])}>CoordinatesButton</button>
            </center>
        )
    }
}
