import React from 'react'
import Footer from'../Layout/Footer';

export default function SignUp() {
  return (
    <>
    <div className='min-h-screen flex items-center justify-center bg-gray-200'>
      <div className='w-[800px] h-[450px] bg-white shadow-lg flex rounded-lg overflow-hidden justify-center'>
        {/*left panel*/}
        <div className="bg-blue-900 w-1/2 text-white p-8 flex flex-col justify-center"> 
          <h1 className="text-2xl font-bold mb-4">Simplify</h1>
          <p>our E-commerce</p>
        </div>
        {/*right panel*/}
        <div className="w-1/2 p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center ">E</div>
            <h2>Create account</h2>
          </div>
          <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          className="w-full mb-3 py-2 px-4 border border-gray-300 rounded bg-gray-100  "
          />
          <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded bg-gray-100"
          />
          <input
          type="password"
          id="password"
          placeholder="Create Your Password"
          className="w-full mb-3 py-2 px-4 border border-gray-300 rounded bg-gray-100"
          />
          <div>
          <input
          type="checkbox"
          id="checkbox"
          className=""/>
          <p>I agree Terms & Conditions</p>
          </div>
          <button 
          type="submit"
          id="submit"
          className="bg-blue-500 w-full text-white py-2 rounded mb-3">
          SignUp</button>
          <div className="text-center text-sm text-gray-500 mb-3">or Continue With</div>
          <div className="flex justify-center gap-4 ">
            <button className="flex items-center gap-2 border px-3  py-1 rounded">
              google
            </button>
            <button className="flex items-center gap-2 border px-3 py-1 rounded">
              facebook
            </button>
          </div>

        </div>

      </div>
      <div>
      {/* other sign-up form components */}
      
    </div>
    </div>
    <Footer />

    </>
     
  )
}
