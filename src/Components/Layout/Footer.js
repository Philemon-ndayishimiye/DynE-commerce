import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (

    <>
    <div className=' hidden md:block bg-[#1F2B48] py-3'>
      <div className='ml-10 py-7'> <h1 className='text-white font-semibold text-xl'>E-commerce</h1> </div>

       <div className='flex'> 

         <div className='bg-[#1C2846] ml-10 w-[21%] py-4 h-[370px]'>
            <h1 className='text-white text-xl font-semibold py-2 ml-3 mb-7'>About</h1>

            <div className='flex flex-col space-y-4'>
                <Link className='text-white  px-3'>About</Link>
                <Link className='text-white  px-3'>Submit on Issue</Link>
                <Link className='text-white  px-3'>Github Repo</Link>
                <Link className='text-white  px-3'>Slack</Link>

            </div>
         </div>

          <div className='bg-[#1C2846] ml-10 w-[21%] py-4 h-[370px]'>
            <h1 className='text-white text-xl font-semibold py-2 ml-3 mb-7'>GETTING STARTED</h1>

            <div className='flex flex-col space-y-4'>
                <Link className='text-white  px-3'>Introduction</Link>
                <Link className='text-white  px-3'>Documentation</Link>
                <Link className='text-white  px-3'>Usage</Link>
                <Link className='text-white  px-3'>Globals</Link>
                <Link className='text-white  px-3'>Elements</Link>
                <Link className='text-white  px-3'>Collections</Link>
                <Link className='text-white  px-3'>Themes</Link>

            </div>
         </div>

          <div className='bg-[#1C2846] ml-10 w-[21%] py-4 h-[370px]'>
            <h1 className='text-white text-xl font-semibold py-2 ml-3 mb-7'>Resources</h1>

            <div className='flex flex-col space-y-4'>
                <Link className='text-white  px-3'>API</Link>
                <Link className='text-white  px-3'>FormValidation product</Link>
                <Link className='text-white  px-3'>Viability</Link>
                <Link className='text-white  px-3'>Accessibility</Link>
                <Link className='text-white  px-3'>community</Link>
                <Link className='text-white  px-3'>Design</Link>
                <Link className='text-white  px-3'>Marketplace</Link>

            </div>
         </div>

          <div className='bg-[#1C2846] ml-10 w-[21%] py-4 h-[370px]'>
            <h1 className='text-white text-xl font-semibold py-2 ml-3 mb-7'>GETTING STARTED</h1>

            <div className='flex flex-col space-y-4'>

                <p className='text-white  px-3' > Follow us on social media</p>
                <p className='text-white  px-3' > to find out the latest</p>
                <p className='text-white  px-3' > updates on our progress</p>

                <div className='py-3'>
                    

                </div>
                
                

            </div>
         </div>

       </div>
    </div>

  {/* view on mobile phone only */}

    <div className='block sm:hidden'>

      <div className=''> <h1 className='text-white font-semibold text-xl'>E-commerce</h1> </div>

       <div className='flex flex-col'> 

         <div className='bg-[#1C2846]  w-[100%] py-4 h-[370px] '>

            <h1 className='text-white text-xl font-semibold py-2 ml-3 mb-7'>About</h1>

            <div className='flex flex-col space-y-4'>
                <Link className='text-white  px-3'>About</Link>
                <Link className='text-white  px-3'>Submit on Issue</Link>
                <Link className='text-white  px-3'>Github Repo</Link>
                <Link className='text-white  px-3'>Slack</Link>

            </div>
         </div>

          <div className='bg-[#1C2846]  w-[100%] py-4 h-[370px]'>
            <h1 className='text-white text-xl font-semibold py-2 ml-3 mb-7'>GETTING STARTED</h1>

            <div className='flex flex-col space-y-4'>
                <Link className='text-white  px-3'>Introduction</Link>
                <Link className='text-white  px-3'>Documentation</Link>
                <Link className='text-white  px-3'>Usage</Link>
                <Link className='text-white  px-3'>Globals</Link>
                <Link className='text-white  px-3'>Elements</Link>
                <Link className='text-white  px-3'>Collections</Link>
                <Link className='text-white  px-3'>Themes</Link>

            </div>
         </div>

          <div className='bg-[#1C2846]  w-[100%] py-4 h-[370px]'>
            <h1 className='text-white text-xl font-semibold py-2 ml-3 mb-7'>Resources</h1>

            <div className='flex flex-col space-y-4'>
                <Link className='text-white  px-3'>API</Link>
                <Link className='text-white  px-3'>FormValidation product</Link>
                <Link className='text-white  px-3'>Viability</Link>
                <Link className='text-white  px-3'>Accessibility</Link>
                <Link className='text-white  px-3'>community</Link>
                <Link className='text-white  px-3'>Design</Link>
                <Link className='text-white  px-3'>Marketplace</Link>

            </div>
         </div>

          <div className='bg-[#1C2846]  w-[100%] py-4 h-[370px]'>
            <h1 className='text-white text-xl font-semibold py-2 ml-3 mb-7'>GETTING STARTED</h1>

            <div className='flex flex-col space-y-4'>

                <p className='text-white  px-3' > Follow us on social media</p>
                <p className='text-white  px-3' > to find out the latest</p>
                <p className='text-white  px-3' > updates on our progress</p>

                <div className='flex justify-between mr-[40%] ml-[2%] mt-5'>

                  <div className='text-white text-3xl font-bold cursor-pointer'> <FaFacebook/> </div>
                  <div className='text-white text-3xl font-bold cursor-pointer'> <FaLinkedin/> </div>
                  <div className='text-white text-3xl font-bold cursor-pointer'> <FaInstagramSquare/> </div>

                </div>
                <div className='py-3'>
                    

                </div>
                
                

            </div>
         </div>

       </div>


    </div>

    </>
  )
}
