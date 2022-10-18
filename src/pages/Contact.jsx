import React from 'react'

const Contact = () => {
  return (
    <div className='container mx-auto shadow-md '>
      <h1 className='text-center text-2xl '>Contact Us</h1>
      <form action="">
        <div className='flex flex-col justify-center items-center'>
          <input className='border-solid outline-2 outline-blue-500/50  dark:bg-slate-800 p-3 mb-4'placeholder='email address' type="email" name="" id="" />
          <input className='outline-2 outline-blue-500/50  p-3 dark:bg-slate-600 mb-4'type="text" name="" id=""placeholder='name' />
          <textarea className='outline-2 outline-blue-500/50 mb-4' placeholder='message here 'name="" id="" cols="30" rows="10"></textarea>
          <button className='bg-sky-500 rounded-full text-black p-3 m-1' onclick={(e)=>{
            e.preventDefault()
          }
          }>SUBMIT</button>
        </div>
      </form>
    
    </div>
  )
}

export default Contact