import React from 'react'
import './home-layout.css'

export function HomeLayout (props) {
  return (
    <section className="HomeLayout">
        {props.children}
    </section>
  )    
}