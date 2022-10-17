import React from 'react'

const Footer = () => {
  return (
    <div className='sticky bg-black p-6 '>
      <div className='flex flex-col'>
      <p className='text-white font-bold text-center '>made with love by Rose</p>
      <div className='text-center items-center text-white'>
      Copyright &copy; {new Date().getFullYear()} 
      </div>
      </div>
    </div>
  )
}

export default Footer