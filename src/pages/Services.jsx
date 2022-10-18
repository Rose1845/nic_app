import React from 'react'
import people from '../data'

export default function Services() {
    return (
      <div flex flex-col>
        
        <h1 className='text-3xl pt-5 font-bold text-center'>Our Services</h1>
        <div className='flex'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"/></svg>
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <FontAwesomeIcon icon="fa-sharp fa-solid fa-network-wired" />
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
        <FontAwesomeIcon icon="fa-solid fa-code-merge" />
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
        <FontAwesomeIcon icon="fa-sharp fa-solid fa-microchip" />
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