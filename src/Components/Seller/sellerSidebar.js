import React from 'react'
import{ HiHome, HiPlus, HiEye, HiChat, HiBell, HiLocationMarker} from 'react-icons/hi';

export default function sellerSidebar() {
  return (
    <>
    <div>sellerSidebar</div>
    <aside className=" w-64 bg-white p-6 shadow h-screen">
     <h1 className='text-2xl font-bold mb-2 text-blue-600'>E sellerSidebar</h1>
     <p className='text-sm text-gray-600 mb-6'>seller@company.com</p>
     <nav className='space-y-4'>
      <a href="#" className='flex items-center text-gray-700 hover:text-blue-500'>
        <HiHome className='mr-2'/> Home
      </a>
      <a href="#" className='flex items-center text-gray-700 hover:text-blue-500'>
        <HiPlus className='mr-2'/> Add Product
      </a>
      <a href="#" className='flex items-center text-gray-700 hover:text-blue-500'>
        <HiEye className='mr-2'/> View Product
      </a>
      <a href="#" className='flex items-center text-gray-700 hover:text-blue-500'>
        <HiChat className='mr-2'/> Messages
      </a>
      <a href="#" className='flex items-center text-gray-700 hover:text-blue-500'>
        <HiBell className='mr-2'/> Notification
      </a>
      <a href="#" className='flex items-center text-gray-700 hover:text-blue-500'>
        <HiLocationMarker className='mr-2'/> Location
      </a>

      
      </nav> 

    </aside>
    </>
  )
}
