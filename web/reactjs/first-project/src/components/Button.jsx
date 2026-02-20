import React from 'react'

const Button = ({ title, func }) => {
  return (
    <button onClick={func}>{title}</button>
  )
}

export default Button
