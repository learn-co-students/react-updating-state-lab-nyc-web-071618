// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            errors: [],
            user:null,
            settings:{
                bitrate:8,
                video:{
                    resolution:'1080p'
                }
            }
        }
    }

   handleBitrate = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate:12
            }
        })
    }

    handleResolution = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                    resolution:'720p'
                }
            }
        })
    }



    render(){
        return(
            <div>
            <button className='bitrate'
                    onClick={this.handleBitrate}></button>
            <button className='resolution'
                    onClick={this.handleResolution}></button>
            </div>
        )
    }


} // end of YouTubeDebugger class

export default YouTubeDebugger

//js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }