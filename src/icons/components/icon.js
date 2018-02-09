import React from 'react'

export function Icon (props) {
  const {
    color,
    size
  } = props

  return (
    <svg
      fill={color}
      height={size}
      width={size}
      viewBox="0 0 32 32"
    >
      { props.children }
    </svg>
  )
}