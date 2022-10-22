import React from 'react'
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
  <div className='flex  flex-col justify-around items-center'>
    <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded ">
      <motion.h3 animate={{fontSize:50,color:'#ff2994',x:100,y:-20}}>
      <h3 className="text-3xl text-center font-semibold">Contact us</h3>
      </motion.h3>
    </div>
    <div className='flex'>
    <div className='pt-1 flex flex-col justify-center items-center'>
      <h2>Social Media links</h2>
      <FaTwitter/>
      <FaFacebook/>
      <FaLinkedinIn/>
    </div>
  <div>
    <div className="relative p-6 flex-auto">
        <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 ">
          <label className="block text-black text-sm font-bold mb-1">
            First Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
          <label className="block text-black text-sm font-bold mb-1">
            Last Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
          <label className="block text-black text-sm font-bold mb-1">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
          <label className="block text-black text-sm font-bold mb-1">
            Message
          </label>
          <textarea name=""className='shadow appearance-none border rounded w-full py-2 px-1 text-black"' id="" cols="30" rows="10"></textarea>
        </form>
    </div>
    <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">

        <button
          className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"

        >
          Submit
        </button>
    </div>
  <div/>
    </div>
    </div>
  </div>
  )
}

export default Contact