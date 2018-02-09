import React from 'react'
import './modal.css'

export function Modal (props) {
  return (
    <div className="Modal">
        {props.children}
      <button onClick={props.handleCloseClick}>Cerrar</button>    
    </div>    
  )    
}
