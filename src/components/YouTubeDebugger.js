// Code YouTubeDebugger Component Here

import React, { Component } from 'react';

class DigitalClicker extends Component{
  constructor(props){
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8,
                  video: { resolution: '1080p' } }
    }
  }

  handleClickSettings = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  handleClickResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      },
    });
  }


  render(){
    return(
      <div>
        <button className='bitrate' onClick={this.handleClickSettings}>
        </button>
        <button className='resolution' onClick={this.handleClickResolution}>
        </button>
      </div>

    )
  }
}

export default DigitalClicker;
