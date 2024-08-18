import React ,{ useEffect, useState } from 'react'
import books from '../../public/Books'
import { NavLink } from 'react-router-dom'

const Course = () => {
  const [bookArray,setBookArray] = useState([])
  useEffect(() => {
    const getbook = async()=>{
      try {
        const data = await fetch("http://localhost:3000/book/getbooks",{
          method:"GET",
          headers:{
            "Content-Type":"application/json",
          },
          
        })
        const jsonData = await data.json()
        setBookArray(jsonData)
      } catch (error) {
        console.log(error);
      }

    } 
    getbook()
  }, [])
  
    const freeBooks = bookArray.filter((book) => book.category === "Paid");
    console.log(freeBooks);
  return (
   <div className='mt-40'>
    <div>
    <div className='w-1/2  mx-auto flex flex-col items-center max-md:w-4/5'>
    <h2 className='font-bold text-4xl mb-4 '>Good to have you here!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ea beatae in! Libero, cum placeat! Eveniet iste rem, molestiae, placeat dolore dolor, error architecto impedit culpa eos ad. Quis, dignissimos.</p>
      <NavLink to="/" className='border-2 p-1 w-36 text-center bg-black text-white border-transparent rounded-md mt-5'>Back To Home</NavLink>
    </div>
    <div className='m-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

       {
           books.map((book)=>(
               <div key={book.id} className=' bg-white rounded-md border-2 hover:scale-105 hover:cursor-pointer duration-300'   >
                <div className=''>
                <img src={book.image} alt={book.title}  className='h-52 w-full object-cover'/>
                <div className='p-4'>
                <p>{book.title}</p>
                <p>{book.price}</p>
                <p>{book.category}</p>
                </div>
                </div>

            </div>
        ))
    }
    </div>
    </div>
    </div>
   </div>
  )
}

export default Course

