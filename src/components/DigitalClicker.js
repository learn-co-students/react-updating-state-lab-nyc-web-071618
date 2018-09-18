// Code DigitalClicker Component Here
import React, {Component} from 'react'

class DigitalClicker extends Component {

  constructor() {
    super()
    this.state = {//initial state
      timesClicked: 0
    }
  }

  handleClick = () => {//updates state
    // console.log('hello')
    this.setState({
      //whenever button is clicked, increments timesClicked by 1
      timesClicked: this.state.timesClicked + 1
    })
  }
  render() {//renders button with label that shows timesClicked value
    return(
      <button onClick={this.handleClick}>
        <label>{this.state.timesClicked}</label>
      </button>
    )
  }
}

export default DigitalClicker
