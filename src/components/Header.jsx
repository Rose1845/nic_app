import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser ,FaBars} from 'react-icons/fa'
import { Popover } from '@headlessui/react'
import Auth from './Auth'
import { loginUser } from '../state/slices/authSlice'
import { useDispatch } from 'react-redux'
// import UserModal from './UserModal'
// import Modal from './Modal'



const Header = () => {
  const dispatch = useDispatch()

  const [menuOpen,setMenuOpen]= useState(false)

  return (
    <div className=' overflow-hidden flex bg-gray-400 '>
      <nav className='max-w-7xl mx-auto w-full flex justify-between items-center p-5'>
        <div>
        <h1 className='font-bold text-2xl'>NIC.</h1>
        </div>
       <div className='md:none flex justify-around  md:flex flex-grow items-center" id="example-navbar-warning'>
       <Link to={'/'}className="font-bold text-white">Home</Link>
       <Link to={'/about'}className="font-bold text-white hover:text-gray-600">About</Link>
       <Link to={'/services'}className="font-bold text-white hover:text-gray-600">Services</Link>
       <Link to={'/contact'}className="font-bold text-white hover:text-gray-600">Contact</Link>
       </div>
       <div>
      
           <Popover className='fixed'>
            {({open})=>(
              <>
              <Popover.Button>
              <FaUser/>
              </Popover.Button>
              <Popover.Panel className='w-45 h-45 shadow z-{-20}'>
                <div className='flex bottom-1/2 flex-col '>
                <Link to={'/login'}>Login</Link>
                <Link to={'/logout'}>logout</Link>
                <Link to={'/'}>sign up</Link>
                </div>
              </Popover.Panel>
            
              </>
            )}

           </Popover>
       </div>
       <div className=" "onClick={(e)=>{
        e.preventDefault();
        setMenuOpen(!menuOpen)
       }
      }>
        {/* {showModal && <UserModal/>} */}
        {menuOpen ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 flex-end h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  {/* <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      City
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form> */}
                  <div className='bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full flex flex-col  justify-between items-center'>
                 <Link to={'/'}className="font-bold text-white">Home</Link>
                 <Link to={'/about'}className="font-bold text-white hover:text-gray-600">About</Link>
                 <Link to={'/services'}className="font-bold text-white hover:text-gray-600">Services</Link>
                 <Link to={'/contact'}className="font-bold text-white hover:text-gray-600">Contact</Link>
                </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setMenuOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <FaBars className='hidden'/>
       </div>
      </nav>
      
    </div>
  )
}
export default Header