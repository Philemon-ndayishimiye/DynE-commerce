import React from 'react';
import img from '../about/images/team4.jpeg'
import { FaCog, FaHandshake, FaUsers, FaBullseye } from 'react-icons/fa';


export default function OurStory() {
  return (
    <>
    <div className='flex justify-between gap-6 p-6'>
    {/* The story about us */}

        <div className="flex-1 max-w-[500px]">
           <h2 className="text-slate-900 text-3xl font-bold text-center ">Our story</h2>
            <p className='text-slate-600 text-sm mt-4 mb-4 leading-relaxed text-center' >
               Delivering quality and innovation service.
            </p>
            <img className='w-full h-auto rounded-md shadow-md object-cover mt-15' src={img} alt='team photo'/>
        </div>
    {/* The mission */}

        <div className='gap-4 mt-20 flex-2'>
          <h2 className='text-xl font-bold mb-5 text-center'>Our mission</h2>
          <div className=' space-y-6'>
            <div className='bg-gray-200 border border-gray-400 rounded-md  px-4 py-4 mb-5 text-center font-medium w-[200px] h-[20px] flex items-center justify-center  sm:w-[250px] md:w-[300px] lg:w-[400px]'>      
              <div className='flex items-center gap-2'>
                <span><FaBullseye/></span>Vision and mission
              </div>
            </div>


            <div className='bg-gray-200 border border-gray-400 rounded-md px-4 py-4 mb-5 text-center font-medium w-[200px] h-[20px] flex items-center justify-center sm:w-[250px] md:w-[300px] lg:w-[400px]'>
              <div className='flex items-center gap-2'>
               <span><FaHandshake/></span>Trust & Values
              </div>
            </div>

            <div className='bg-gray-200 border border-gray-400 rounded-md px-4 py-4 mb-5  text-center font-medium w-[200px] h-[20px] flex items-center justify-center sm:w-[250px] md:w-[300px] lg:w-[400px]'>
              <div className='flex items-center gap-2'>
                <span><FaCog/></span>Services
              </div>
            </div>


            <div className='bg-gray-200 border border-gray-400 rounded-md px-4 py-4 mb-10 text-center font-medium w-[200px] h-[20px] flex items-center justify-center sm:w-[250px] md:w-[300px] lg:w-[400px]'>
              <div className='flex items-center gap-2'>
                <span><FaUsers/></span>Customer Relationship
              </div>

              </div>
            </div>
        </div>

    {/* the team role */}
        <div>

        </div>
    </div>
    </>
  );
}
