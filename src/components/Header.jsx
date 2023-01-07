import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser ,FaBars} from 'react-icons/fa'
//import { Popover } from '@headlessui/react'
//import Auth from './Auth'
import { loginUser } from '../state/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'




const Header = () => {

  const [click,setClicked]=useState(false)
  const handleClick=()=>setClicked(!click)
  const name = useSelector((state)=>state.user.name)

  const dispatch = useDispatch()

  //const [menuOpen,setMenuOpen]= useState(false)

  return (
    <div className=' overflow-hidden top-0 flex bg-gray-400 relative'>
      <nav className='max-w-7xl mx-auto w-full flex justify-between items-center p-5'>
        <div>
        <h1 className='font-bold text-2xl'>NIC.</h1>
        </div>
       <div className=' flex justify-around   flex-grow items-center" id="example-navbar-warning'>
       <Link to={'/'}className="font-bold text-white">Home</Link>
       <Link to={'/about'}className="font-bold text-white hover:text-gray-600">About</Link>
       <Link to={'/services'}className="font-bold text-white hover:text-gray-600">Services</Link>
       <Link to={'/contact'}className="font-bold text-white hover:text-gray-600">Contact</Link>
       <Link to={'/courses'}className="font-bold text-white hover:text-gray-600">Courses</Link>
       </div>
       <div className='flex'>
        <FaUser text="user"/>
        <span>{name}</span>
       </div>
       <div>
      
           {/* <Popover >
            {({open})=>(
              <>
              <Popover.Button fixed>
              <FaUser/>
              </Popover.Button>
              <Popover.Panel className='pt-7 w-45 h-45 shadow z-100'>
                <div className='flex  flex-col '>
                <Link to={'/login'}>Login</Link>
                <Link to={'/logout'}>logout</Link>
                <Link to={'/'}>sign up</Link>
                </div>
              </Popover.Panel>
            
              </>
            )}

           </Popover> */}
       </div>
       
       <div ocnClick={handleClick}>
       {/* <FaBars {click ? "<FaBars/>:"<FaBars/>"}/> */}
       </div>
      </nav>
    </div>
  )
}
export default Header