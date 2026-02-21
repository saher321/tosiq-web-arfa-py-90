import React from 'react'

const Card = ({children}) => {
  return (
    <div className='my-5 shadow rounded p-3'>{children}</div>
  );
}

export default Card