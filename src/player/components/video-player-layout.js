import React from 'react'
import './video-player-layout.css'

export const VideoPlayerLayout = (props) => {
  return (
    <div className="VideoPlayer">
        {props.children}
    </div>    
  )    
}
