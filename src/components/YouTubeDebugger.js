import React, {Component} from 'react'

class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClick = (event) => {
    // console.log('hello')
    if(event.currentTarget.classList[0] === "bitrate") {
      // console.log(event.currentTarget.classList[0])
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    } else {
      // console.log('resolution')
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          }
        }
      })
    }
  }
  render() {
    // console.log(this.state.settings)
    return(
      <div>
        <button className='bitrate' onClick={this.handleClick}>Bitrate</button>
        <button className='resolution' onClick={this.handleClick}>Res</button>
      </div>
    )
  }
}

export default YouTubeDebugger
