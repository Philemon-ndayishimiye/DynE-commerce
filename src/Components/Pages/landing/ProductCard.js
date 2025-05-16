
import React from 'react'
import {  FaHeart , FaShoppingCart } from 'react-icons/fa';

import { useState } from 'react';

const ProductCard = ({ image, title, price, isMobile }) =>{ 
    
     const [ishover , setIshovered] = useState(false)
     
    return (  
    <div onMouseEnter={()=>setIshovered(true)} onMouseLeave={()=>setIshovered(false)}
    className={`flex flex-col bg-white rounded-lg ${isMobile ? 'h-[250px]' : 'h-[370px]'}`}>
      <div className={`w-[85%] mx-auto mt-4 relative `}>

        <img className='rounded-lg w-full cursor-pointer' src={image} alt='product' />

        {ishover && (
          

           <FaHeart className='text-white font-bold absolute cursor-pointer hover:text-orange-500 text-2xl top-3 right-5'/> 
 
        )}

        
      </div>
      <div className='mt-2 ml-[20px] mb-3'>
        <h4 className='text-black font-bold'>{title}</h4>
        <h6 className='text-orange-500 font-bold'>{price}</h6>
      </div>
      <div className={`flex bg-orange-500 rounded-[20px] ${isMobile ? 'w-[120px] ml-[10px]' : 'w-[170px] ml-[90px]'} mb-3 px-2`}>
        <div> <FaShoppingCart className='text-white mt-2 mr-2 ml-2 cursor-pointer'/> </div>
        <button className='px-1 py-1 text-white'>add to cart</button>
      </div>

     
    </div>
  ) };


  export default ProductCard
