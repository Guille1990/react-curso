import React, { Component } from 'react'
import './video.css'

export class Video extends Component {

  togglePlay () {
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  setRef = element => {
    this.video = element
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }

  render () {
    return (
      <div
        className="Video"
      >
        <video 
            autoPlay={this.props.autoplay}
            src={this.props.src}
            ref={this.setRef}
        /> 
      </div>   
    )    
  }    
}
