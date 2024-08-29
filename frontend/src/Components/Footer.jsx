import React from 'react'
import { SiInstagram  } from "react-icons/si";
import { GrYoutube } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-white mt-4 min-h-14 flex flex-col items-center  shadow-md overflow-hidden'>
       <p className='mt-4'>&copy; {currentYear} Your Company. All rights reserved.</p>
       <div className='flex mt-6 mb-6 '>
       <FaFacebookF className='mx-2'/>
       <SiInstagram className='mx-2'/>
       <GrYoutube className='mx-2'/>
       </div>
    </div>
  )
}

export default Footer
