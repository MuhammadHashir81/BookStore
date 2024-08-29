import { React, useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import { useContext } from 'react';
import { MyContext } from '../Context/AuthContext';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [authUser, setAuthUser] = useContext(MyContext)
  console.log(authUser);
  const [sticky, setSticky] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
        console.log(window.scroll)
        console.log(sticky);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  };

  return (
    <div className={` ${darkMode ? 'bg-black text-white' : 'bg-white text-black '} ${sticky ? "shadow-lg" : ""} flex min-h-14 my-auto items-center fixed top-0 left-0 w-screen right-0 z-10`}>
      <div className='ml-4'>
        <RxHamburgerMenu className="hidden max-lg:block" onClick={toggleMenu} />
      </div>
      <div className={`hidden max-lg:flex justify-between absolute top-0 left-0 h-screen z-10 w-52 max-sm:w-40 bg-black text-white transform transition-transform duration-300  ${isMenuOpen ? '-translate-x-0' : '-translate-x-full'} `}>
        <ul className='w-full flex flex-col gap-4 mt-8 px-4'>
          <li> <NavLink to='/' exact className={({ isActive }) => ` ${isActive ? 'font-semibold' : ''}  ${darkMode ? 'hover:border-b-2 border-white duration-100 transition-transform' : 'hover:border-b-2 border-black duration-100 transition-transform'}`}>
            Home
          </NavLink></li>
          <li> <NavLink to='/course' exact className={({ isActive }) => ` ${isActive ? 'font-semibold' : ''}  ${darkMode ? 'hover:border-b-2 border-white duration-100 transition-transform' : 'hover:border-b-2 border-black duration-100 transition-transform'}`}>
            Course
          </NavLink></li>
          <li><NavLink to='/about' exact className={({ isActive }) => ` ${isActive ? 'font-semibold' : ''}  ${darkMode ? 'hover:border-b-2 border-white duration-100 transition-transform' : 'hover:border-b-2 border-black duration-100 transition-transform'}`}>
            About
          </NavLink></li>
          <li><NavLink to='/contact' exact className={({ isActive }) => ` ${isActive ? 'font-semibold' : ''}  ${darkMode ? 'hover:border-b-2 border-white duration-100 transition-transform' : 'hover:border-b-2 border-black duration-100 transition-transform'}`}>
            Contact
          </NavLink></li>
        </ul>
        <RxCross2 onClick={toggleMenu} />
      </div>
      <div className='flex justify-between items-center w-full max-lg:justify-end max-sm:justify-between  max-[390px]:flex-col'>
        <div>
          <Link to="/"><img src="logo.png" alt="logo" width={100} className='cursor-pointer' /></Link>
        </div>
        <div className='w-1/2 flex justify-around items-center mr-4  
         max-lg:justify-end gap-6 max-[390px]:w-full'  >
          <ul className='flex justify-around  w-1/2 items-center  max-sm:hidden max-lg:hidden max-xl:gap-4' >
            <li> <NavLink to='/' exact className={({ isActive }) => ` ${isActive ? 'font-semibold' : ''}  ${darkMode ? 'hover:border-b-2 border-white duration-100 transition-transform' : 'hover:border-b-2 border-black duration-100 transition-transform'}`}>
              Home
            </NavLink></li>
            <li><NavLink to='/course' exact className={({ isActive }) => ` ${isActive ? 'font-semibold' : ''}  ${darkMode ? 'hover:border-b-2 border-white duration-100 transition-transform' : 'hover:border-b-2 border-black duration-100 transition-transform'}`}>
              Course
            </NavLink></li>
            <li><NavLink to='/about' exact className={({ isActive }) => ` ${isActive ? 'font-semibold' : ''}  ${darkMode ? 'hover:border-b-2 border-white duration-100 transition-transform' : 'hover:border-b-2 border-black duration-100 transition-transform'}`}>
              About
            </NavLink></li>
            <li><NavLink to='/contact' exact className={({ isActive }) => ` ${isActive ? 'font-semibold' : ''}  ${darkMode ? 'hover:border-b-2 border-white duration-100 transition-transform' : 'hover:border-b-2 border-black duration-100 transition-transform'}`}>
              Contact
            </NavLink></li>
          </ul>
          <button type='button' onClick={toggleDarkMode} className='max-lg:hidden'>
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <input
            type="search"
            className="w-40 h-8 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Search..."
          />

          <div>
            {
              authUser ? <Logout /> :
                <NavLink to='/login'>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Login
                  </button>
                </NavLink>
            }


            {
              isModalOpen && (
                <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-25'>
                  <div className='relative bg-white w-1/3 rounded-md p-6 h-3/5  '>
                    <div className=' flex flex-col justify-around h-5/6'>
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" placeholder='first name' className='focus:border-2 border-2 rounded-md p-1' id='firstName' />
                      <label htmlFor="lastName">Last Name</label>
                      <input type='text' placeholder='last name' className='focus:border-2 border-2 rounded-md p-1' id='lastName'></input>
                      <label htmlFor="email">Email</label>
                      <input type="email" placeholder='email' className='focus:border-2 border-2 rounded-md p-1' id='email' />
                      <button type='click' className='my-4 text-white bg-blue-500 h-8 rounded-lg'>Login</button>
                    </div>
                    <RxCross1 className='absolute top-2 right-4 cursor-pointer' onClick={closeModal} />
                    <p className='text-center '>Don't have an account ? <NavLink to="/signup" className='border-b-2 border-blue-500 text-blue-500'>signup</NavLink> </p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar