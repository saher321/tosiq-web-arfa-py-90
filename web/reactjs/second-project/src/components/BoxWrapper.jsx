import React from 'react'

const BoxWrapper = ({children}) => {
  return (
    <div className="mx-auto max-w-xl">
        {children}
    </div>
  )
}

export default BoxWrapper