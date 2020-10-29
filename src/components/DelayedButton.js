// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{

    handleClick =(e) =>{
        e.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, e)
    }
    render(){
        return(
            <center>
                <button onClick = {(e)=>this.handleClick(e)}>DelayedButton</button>
            </center>
        )
    }
}
