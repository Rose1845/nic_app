import React from 'react'
import {FaApple,FaAnchor} from 'react-icons/fa'
import people from '../data'
import { motion } from 'framer-motion'

export default function Services() {
    return (
      <motion.div animate={{ x: 0 }} >
        <div className='overflow-hidden flex flex-col' >
        <motion.h1 animate={{fontSize:50,color:'#ff2994',x:100,y:-20}}>
        <h1 className='text-3xl pt-5 font-bold text-center'>Our Services</h1>
        </motion.h1>
        <div className='flex'>
        <div>
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <FaApple/>
          <div class="pt-6 t space-y-4">
          <blockquote>
           <p class="text-center text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam unde vitae accusamus aut ut, voluptatibus, impedit, adipisci sed libero esse sint saepe doloremque nostrum odit debitis quos expedita quo possimus?
           </p>
           </blockquote>
         <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Networking
             </div>
              <div class="text-slate-700 dark:text-slate-500">
              Nyayo Stadium , Nairobi
             </div>
          </figcaption>
         </div>
        </figure>
        </div>
        <div>
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <FaAnchor/>
          <div class="pt-6 t space-y-4">
          <blockquote>
           <p class="text-center text-lg font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati aperiam nisi vel a alias soluta dolor, accusamus architecto nihil sunt ea minima numquam voluptas? Optio maiores corporis excepturi neque veritatis?
           </p>
           </blockquote>
         <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
             CyberSecurity
             </div>
              <div class="text-slate-700 dark:text-slate-500">
              Nyayo Stadium, Nairobi
             </div>
          </figcaption>
         </div>
        </figure>
        </div>
        <div>
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <FaApple/>
          <div class="pt-6 t space-y-4">
          <blockquote>
           <p class="text-center text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, pariatur optio, quisquam blanditiis reprehenderit libero assumenda consequuntur, aspernatur nisi dicta deleniti ipsam? Laborum fuga, atque consequatur incidunt libero fugit dolore.
           </p>
           </blockquote>
         <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Software Engineering
             </div>
              <div class="text-slate-700 dark:text-slate-500">
              Nyayo Stadium, Nairobi
             </div>
          </figcaption>
         </div>
        </figure>
        </div>
          
          
        </div>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold text-center pt-5'>Our Reviews</h1>
        <div className='flex flex-row bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl'>
        <ul className="flex divide-x divide-gray-200">
        {people.map((person) => (
          <motion.li whileHOver={{
            scale:2
          }}animate={{ x:60 }}
          transition={{ delay: 1 }}>
            <li key={person.email} className="py-4 flex">
            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500">{person.email}</p>
              <p className='text-sm font-bold text-gray-600'>{person.role}</p>
              <blockquote>
                <p class="text-lg font-medium">{person.description}</p>
              </blockquote>
            </div>
          </li>
          </motion.li>
        ))}
      </ul>
        </div>
      </div>
    </div>
      </motion.div>
    )
  }