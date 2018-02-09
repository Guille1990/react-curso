import React, { Component } from 'react'
import { VideoPlayerLayout } from '../components/video-player-layout'
import { Video } from '../components/video'
import { Title } from '../components/title'
import { PlayPause } from '../components/play-pause';

export class VideoPlayer extends Component {

  state = {
    pause: true
  }
  
  handleTogglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount () {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  render () {
    return (
      <VideoPlayerLayout>
          <Title 
            title="Esto es un video genial"
          />
          <PlayPause
            pause={this.state.pause}
            handleClick={this.handleTogglePlay}
          /> 
          <Video
            pause={this.state.pause}
            autoplay={this.props.autoplay}
            src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          />
      </VideoPlayerLayout>     
    )        
  }    
}
