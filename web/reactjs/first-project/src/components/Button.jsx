import React from 'react'

const Button = ({ title, func, isToggle }) => {
  return (
    isToggle && <button onClick={func}>{title}</button>
  )
}

export default Button
