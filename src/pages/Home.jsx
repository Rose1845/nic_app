import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col pt-6 '>
      <div className='flex pt-6'>
      <div className='flex justify-center items-center flex-col pt-4'>
      <h1 className='text-center text-2xl p-5'>NIC Consultancy Firm</h1>
      <p className='text-center text-black p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Delectus, dignissimos ipsa perspiciatis minima magnam eveniet dolorum sunt aliquid adipisci, <br/>nihil eaque quos illo eligendi qui, tempora nobis alias sequi. Veritatis?</p>
      <button class="rounded p-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
       Read More
      </button>
      </div>
      <div className='ml-4 pt-4'>
        <img className='w-30 h-30'src="https://media.istockphoto.com/photos/anonymous-people-avatars-in-virtual-space-picture-id1367515302?b=1&k=20&m=1367515302&s=170667a&w=0&h=HuEzA7NhyU503Xm8gPrQAYAnQYP_VgtoFMyY-cM1KEs=" alt="" />
      </div>
      </div>
      <div className='mt-12 bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl'>
      <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
  <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
    <span class="relative text-white">Networking</span>
  </span>
   is an investment in your business. It takes time and when done correctly can yield great results for years to come.
</blockquote>
      </div>
    </div>
  )
}

export default Home
