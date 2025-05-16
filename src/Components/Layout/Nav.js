
import {Link} from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import React, { useState } from 'react'

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
    <div className=' hidden md:block bg-[#0A3D62] h-[60px]'>

        <div className='flex justify-between'>
            
            <div className='flex py-3 px-10'>
                <div></div>

                <Link   to="/">
                <h3 className='text-white font-bold text-2xl cursor-pointer'>E-commerce</h3>
                </Link> 

            </div>

            <div className='flex space-x-5 px-8 py-5'>
                <Link to="/about" className='text-white font-medium text-xs cursor-pointer'>ABOUT</Link>
                <Link to="contact" className='text-white font-medium text-xs cursor-pointer'>CONTACT US</Link>
                <Link  className='text-white font-medium text-xs cursor-pointer'> <div> <FaShoppingCart/> </div>  </Link>
                <Link to="/login" className='text-white font-medium text-xs cursor-pointer'> <div><FaUserAlt/></div>  </Link>

            </div>

        </div>
    </div>

    {/*visible only on mobile */}

    <div className='block sm:hidden bg-[#0A3D62] '>

      <div className='flex justify-between'>

        <div className=' py-3 px-2'>

               <Link to="/">
                <h3 className='text-white font-bold text-xl cursor-pointer'>E-comm</h3>
                </Link> 

        </div>

        <div className='mt-3 cursor-pointer'>

          <button onClick={(()=>setIsOpen(!isOpen))}>

            {isOpen?<IoClose size={30} color='white'/>:<IoMdMenu size={30} color='white' />} 
           </button>
          

        </div>

      </div>

        {isOpen && (

            <div className='absolute px-[40%] z-20 bg-[#0A3D62] w-full space-y-4 py-4 top-[52px] flex flex-col justify-between'>

                <Link onClick={()=>setIsOpen(false)} to="/about" className='text-white font-bold text-xl cursor-pointer hover:text-orange-400 '>About</Link>
                <Link onClick={()=>setIsOpen(false)} to="contact" className='text-white font-bold text-xl cursor-pointer  hover:text-orange-400'>Contact</Link>
                <Link onClick={()=>setIsOpen(false)}  className='text-white font-bold text-xl cursor-pointer  hover:text-orange-400'> Carts  </Link>
                <Link onClick={()=>setIsOpen(false)}  className='text-white font-bold text-xl cursor-pointer  hover:text-orange-400'> WhishList  </Link>
                <Link onClick={()=>setIsOpen(false)} to="/login" className='text-white font-bold text-xl cursor-pointer  hover:text-orange-400'> Login </Link>
                   
            </div>


           )}

    </div>

    </>
  )
}
