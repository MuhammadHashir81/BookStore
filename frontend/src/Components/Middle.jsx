import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import FreeBook from './FreeBook';
import book from './book.png'
const Middle = () => {
  return (
    <div>
    <div className='my-4 h-screen bg-red-white max-sm:mt-24 max-sm:h-[800px]'>
        <div className='flex justify-around h-full max-md:items-center max-sm:flex-col' >
          <div className='w-1/3 h-1/2 my-auto flex flex-col max-sm:flex-col justify-around max-sm:w-5/6  ' >
          <h2 className='font-bold text-3xl max-md:mb-4'>Learn something informative, Learn something of your interest !</h2>
          <p className='max-md:mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum repellendus voluptatum corporis ut inventore laudantium impedit molestias soluta. Maxime illo similique tempore temporibus rerum eligendi eum ullam fugit earum!
          </p>
            <div className='flex items-center border border-gray-300 rounded-md bg-white text-black max-md:mb-4'>
            <HiOutlineMail className='mx-2 text-gray-500' />
            <input
              type="email"
              placeholder='Email'
              className='flex-grow py-2 focus:outline-none focus:border-indigo-500'
            />
          </div>
          <button className='py-2 w-1/3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600'>
              secondary
            </button>
          </div>
          <div> 
            <img src={book} className='h-full max-md:h-80' alt="error" />
          </div>
        </div>
    </div>
    <FreeBook/>
    </div>
  )
}

export default Middle








