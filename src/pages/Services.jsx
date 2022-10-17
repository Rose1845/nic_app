import React from 'react'
import people from '../data'

export default function Services() {
    return (
      <div flex flex-col>
        <h1 className='text-3xl pt-5 font-bold text-center'>Our Services</h1>
        <div className=''>
          
          
        </div>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold text-center pt-5'>Our Reviews</h1>
        <div className='flex flex-row bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl'>
        <ul className="flex divide-x divide-gray-200">
        {people.map((person) => (
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
        ))}
      </ul>
        </div>
      
      </div>
      </div>
    )
  }