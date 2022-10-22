import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const About = () => {
  return (
    <div className='pt-6'>
      <motion.h1 animate={{fontSize:50,color:'#ff2994',x:100,y:-20}}>
      <h1 className='text-center font-bold text-3xl'>About Us</h1>
      </motion.h1>
      
      <div className='pt-5 flex'>
        <img className='w-30 h-30' src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className='text-1xl text-gray-800'>
          <p className='pl-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum, optio ipsum, exercitationem, ullam esse dolorum eveniet nostrum consequatur veritatis eligendi cumque! Modi earum id optio praesentium, atque deleniti recusandae nulla quo consectetur, accusantium neque ex eius enim explicabo perferendis.</p>
          <blockquote class="pt-6 text-2xl font-semibold italic text-center text-slate-900">
            Want to know more {""}
  <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
    <span class="relative text-white"> about us?</span>
  </span>
  <br />
  <a href='/contact'>Contact Us</a>
  <div className='flex justify-around items-center'>
    <a href="http://twitter.com/nyaugenya001">
      <FaTwitter/>
    </a>
    <a href="https://rwww.linkedin.com/in/ose-atieno-odhiambo-5038b420a">
      <FaLinkedinIn/>
    </a>
    <a href="https://">
      <FaFacebook/>
    </a>  
  </div>
</blockquote>
        </div>
      </div>
    </div>
  )
}

export default About