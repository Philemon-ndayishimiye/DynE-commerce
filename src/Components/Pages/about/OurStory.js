import React from 'react';
import img from '../about/images/team4.jpeg'
export default function OurStory() {
  return (
    <>
    <div className='flex justify-between '>
    {/* The story about us */}
        <div className="ml-[20px] mr-[20px] mt-[20px] w-[400px]">
           <h2 class="text-slate-900 text-3xl font-bold">Our story</h2>
            <p>We are passionate about delivering quality and innovation through everything we build.</p>
            <img className='' src={img} alt='team photo'/>
        </div>
    {/* The mission */}
        <div className='gap-4 mt-4'>slide 2

            <div className='flex '> head 1
                <h1> mission</h1>

            </div>
            <div>
                trust
            </div>
            <div>
                customer
            </div>
            
        </div>

    {/* the team role */}
        <div>slide 3

        </div>
    </div>





    {/* <div className="ml-[20px] mr-[20px] mt-[20px] w-[400px]">
      <div className="overlay">
        <h2 class="text-slate-900 text-3xl font-bold">Our story</h2>
        <p>We are passionate about delivering quality and innovation through everything we build.</p>

        <img className='' src={img} alt='team photo'/>
      </div> 
      <button  className="bg-blue-600 text-white font-semibold px-6 py-2 mt-5 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
        Learn more About us</button>
    </div> */}
    </>
  );
}
