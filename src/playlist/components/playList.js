import React from 'react'
import { Media } from './media';

/**
 * Los componentes funcionales son aquellos que no tienen o no necesitan un metodo del siclo de vida de 
 * reacty
 * @param {*} props 
 */
export function Playlist (props) {
  return (
    <div>
        {
        props.playlist.map((item) => {
            return <Media
                      handleClick={props.handleOpenModal} 
                      {...item} 
                      key={item.id} 
                   />
        })
        }
    </div>
  )
}
