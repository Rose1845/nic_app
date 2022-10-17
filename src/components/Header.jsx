import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-400 '>
      <nav className='max-w-7xl w-full flex justify-between items-center p-5'>
        <div>
        <h1 className='font-bold text-2xl'>NIC.</h1>
        </div>
      <Link to={'/'}className="font-bold text-white">Home</Link>
       <Link to={'/about'}className="font-bold text-white hover:text-gray-600">About</Link>
       <Link to={'/services'}className="font-bold text-white hover:text-gray-600">Services</Link>
       <Link to={'/contact'}className="font-bold text-white hover:text-gray-600">Contact</Link>
      </nav>
      
    </div>
  )
}

export default Header