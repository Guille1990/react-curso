import React from 'react'
import './search.css'

export const SearchInput = (props) => (
  <form 
    action="" 
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef} 
      type="text"
      className="Search-input"
      placeholder="Busca tu video favorito"
      value={props.value}
      onChange={props.handleChange}
    />   
  </form>    
)
