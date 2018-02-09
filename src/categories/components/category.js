import React from 'react'
import { Playlist } from '../../playlist/components/playList'
import './category.css' 

export function Category (props) {
  return (
    <div className="Category">
        <p className="Category-description">{props.description}</p>
        <p className="Category-title">{props.title}</p>
        <Playlist 
            handleOpenModal={props.handleOpenModal}
            playlist={props.playlist}
        />    
    </div>
  )    
}