
import React from "react"
import { Link } from "react-router-dom"
const UserModal = () =>{
    return(
    <div className="bg-sky-300 pt-8 h-8 md:h-12 w-8 md:w-12 bg-primary rounded-lg cursor-pointer flex items-center justify-center relative">
        <div className='flex flex-col  justify-between items-center'>
       <Link to={'/'}className="font-bold text-white">Home</Link>
       <Link to={'/about'}className="font-bold text-white hover:text-gray-600">About</Link>
       <Link to={'/services'}className="font-bold text-white hover:text-gray-600">Services</Link>
       <Link to={'/contact'}className="font-bold text-white hover:text-gray-600">Contact</Link>
       </div>
    </div>
    )
}
export default UserModal