// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  }

  handleClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked + 1
    }))
  }

  render(){
    console.log(this.state.timesClicked)
    return(
      <div>
        <button onClick={this.handleClick}>
          {this.state.timesClicked}
        </button>
      </div>
    )
  }

}

export default DigitalClicker
