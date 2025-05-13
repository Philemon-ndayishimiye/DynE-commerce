import React from 'react'

export default function Login() {
  return (
    <div className='min-h-screen flex items-center bg-gray-200'>
      <div className='w-[800px] h-[450px] bg-white shadow-lg flex rounded-lg overflow-hidden'>
        {/* Left panel */}
        <div className='bg-blue-900 w-1/2 text-white p-8 flex flex-col justify-center '>
        <h1 className='text-2xl font-bold mb-4'>Simplify</h1>
        <p className='text-sm leading-relaxed'>
          simply E-commerce management with friend
          </p>
       </div>
       {/*right panel */}
       <div className='w-1/2 p-8'>
         <div className='flex items-center' gap-2 mb-4>
          <div className='w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center'>
          E
          </div>
          <h2>pacis Ecommerce</h2>
         </div>
          <h2 className='text-lg font-bold'>Welcome Back</h2>
         <p className='text-sm text-gray-500 mb-4'>Please login</p>
      
         <input
         type='email'
         id='email'
         placeholder='you@gmail.com'
         className='w-full mb-3 px-4 py-2 border border-gray-300 rounded bg-gray-100'
         />
      
         
         <input
         type='password'
         id='password'
         placeholder='Enter your password'
         className='w-full mb-3 px-4 py-2 border border-gray-300 rounded bg-gray-100'
         />
        
         
         <div className='forgot-password'>
          <a href='jjj'>forgot password</a>
         </div>
         
         <button
         type='submit'
         id='submit'
         className='bg-blue-500'>Login</button>

         </div>
         
        
      </div>
    </div>
    

  )
}
