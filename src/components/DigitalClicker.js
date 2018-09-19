import React, { Component } from 'react'

class DigitalClicker extends React.Component {

    constructor(props){
        super(props)
        this.state={
            timesClicked:0
        }
    }

    incrementClicks = () => {
        this.setState({
            timesClicked: ++this.state.timesClicked
        })
    }

    render(){
        return(
            <button onClick={this.incrementClicks}>{this.state.timesClicked}</button>
        )
    }

} // end of DigitalClicker class

export default DigitalClicker