import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='p-4 my-4 mx-auto flex rounded gap-6 bg-gray-900 text-gray-100 w-fit'>
      <Link to={'/'}> Home </Link> <Link to={'/about-us'}> About </Link> <Link to={'/users'}> Users </Link>
    </nav>
  )
}

export default Navbar
