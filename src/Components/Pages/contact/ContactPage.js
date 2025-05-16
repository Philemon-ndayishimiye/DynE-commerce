import React from 'react';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
    

   
      <div className="flex justify-center items-start relative px-10">
      
        <div className=" text-[24px] max-w-md">
        <div className="font-bold text-3xl p-4 m-16">
        <h1>Contact Us</h1>
      </div>
          <p>
            We value honesty, integrity, and efficiency.<br />
            Customer relations with best quality products at affordable prices.
          </p>
        </div>

 
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl ml-12 z-10">
          <div className="text-orange-600 font-bold text-xl mb-6 text-center">
            <h1>Need help??</h1>
          </div>

          <form className="space-y-6 p-11 mt-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block font-bold">First Name</label>
                <input
                  type="text"
                  required
                  className="w-full border-b border-gray-400 focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block font-bold">Last Name</label>
                <input
                  type="text"
                  required
                  className="w-full border-b border-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block font-bold">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border-b border-gray-400 focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block font-bold">Phone Number</label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10,15}"
                  required
                  className="w-full border-b border-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold">Message</label>
              <textarea
                required
                className="w-full border-b border-gray-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg"
            >
              SUBMIT
            </button>
          </form>
        </div>

       
        <div className="w-64 h-64 bg-orange-600 rounded-full absolute top-0 right-10 z-0"></div>
      </div>

     
      <div className="bg-blue-700 w-full h-48 mt-16 flex items-center justify-center text-white font-semibold text-xl">
        <p></p>
      </div>
    </div>
  );
}

export default ContactPage;
