import React from 'react';

export default function ContactPage() {
  return (
    <div>
      <div className='flex right-32 top-5'>
        <div className='absolute mt-10'>
        <img src="/electronics/contact-icon.png" alt="contact us" className="mt-4 w-52 h-28"  />
          <p className='font-medium text-[20px]'>We value honesty, integrity, and efficiency and build quality products<br/> at affordable prices.<br/>
          We are here to help you with any questions or concerns you may have.</p>
          
         
        </div>
        <div>
          <p className='w-96 h-96 rounded-full bg-orange-600 right-44 absolute mt-10'></p>
        </div>
      </div>
      <form className="max-w-xl mx-auto bg-gray-300 w-full h-[450px] mt-36 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">First Name</label>
            <input type="text" className="w-full border-b border-black bg-transparent outline-none py-1" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Last Name</label>
            <input type="text" className="w-full border-b border-black bg-transparent outline-none py-1" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input type="email" className="w-full border-b border-black bg-transparent outline-none py-1" required />
          </div>
          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input type="tel" className="w-full border-b border-black bg-transparent outline-none py-1" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea className="w-full border-b border-black bg-transparent outline-none py-1" rows="4" required></textarea>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-blue-800 text-white py-5 px-28 rounded">Submit</button>
        </div>
      </form>

      <div className='bg-blue-800 w-full h-44 mt-10'>  </div>
    </div>
  );
}

