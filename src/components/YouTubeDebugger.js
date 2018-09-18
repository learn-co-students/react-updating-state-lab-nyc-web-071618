import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
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

    resolutionClick = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          },
        },
      }, () => console.log(this.state.settings))
    }

    bitrateClick = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12,
        },
      }, () => console.log(this.state.settings));
    }

    render() {
      return (
        <div>
          <button className="bitrate" onClick={ this.bitrateClick }>Bitrate</button>
          <button className="resolution" onClick={ this.resolutionClick }>Resolution</button>
        </div>
      )
    }

}

export default YouTubeDebugger;
