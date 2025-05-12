import React from 'react'

export default function Header() {

  return (

    <div style={{backgroundImage: "url('/background.jpg')"}} className=' bg-cover bg-center justify-between'>

      <div className='flex justify-between py-[50px]'>

        <div className='ml-[4%]'>

            <h2 className='text-white font-bold text-4xl'>Raining Offers For</h2>
            <h2 className='text-white font-bold text-4xl py-4'>Hot Summer!</h2>
            <h5 className='text-white font-medium text-xl py-7'>25% Off On All Products</h5>

            <div className='w-[240px] flex justify-between py-4'>

                <button className='border-1 bg-white px-2 py-2 font-medium'>SHOP NOW</button>
                <button className='border-1 bg-[#72A7CD] px-2 py-2 text-white font-medium'>FIND MORE</button>
            </div>

        </div>

      </div>

        <div className='w-[500px] bg-white h-[367px] py-10 absolute top-[60px] rounded-l-[50%] right-0'>
            <div>
                <h1>this is the images section</h1>
            </div>
        </div>
    </div>
  )
}
