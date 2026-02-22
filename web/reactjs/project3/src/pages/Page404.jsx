import React from 'react'
import { Link } from 'react-router'

const Page404 = () => {
  return (
    <div>
        <h1>
            Content not found
        </h1>
        <Link to={'/'}>Go back</Link>
    </div>
  )
}

export default Page404
