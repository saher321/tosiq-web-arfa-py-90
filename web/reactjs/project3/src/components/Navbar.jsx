import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  let activeLink = "text-green-500 font-bold";
  return (
    <nav className='p-4 my-4 mx-auto flex rounded gap-6 bg-gray-900 text-gray-100 w-fit'>
      <Link to={'/'} className={({ isActive }) => {isActive ? activeLink : ""}}> Home </Link> 
      <Link to={'/about-us'} className={({ isActive }) => {isActive ? activeLink : ""}}> About </Link> 
      <Link to={'/users'} className={({ isActive }) => {isActive ? activeLink : ""}}> Users </Link>
    </nav>
  )
}

export default Navbar
