import React, { useState } from 'react';
import { FaSearch, FaCaretDown, FaChevronLeft, FaChevronRight, FaSortUp} from 'react-icons/fa';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard'

export default function Body() {

  const [productdiv , setProductdiv] = useState(false);
  

    
  const Categories = [
    'Electronic', 'Accessories', 'Home & Living',
    'Sports & equipments', 'Toys & Games', 'Tools & hardware', 'Kitchen Tools'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const PrevCategory = () => {
    setCurrentIndex((prev) => (prev - 1 + Categories.length) % Categories.length);
  };

  const NextCategory = () => {
    setCurrentIndex((prev) => (prev + 1) % Categories.length);
  };

  const visibleCategories = [
    Categories[currentIndex],
    Categories[(currentIndex + 1) % Categories.length],
  ];

  const products = [
    { image: '/electronics/image1.jpg', title: 'Modern Headphone', price: '$10.02-13.04' },
    { image: '/electronics/image3.jpg', title: 'Modern Headphone', price: '$10.02-13.04' },
    { image: '/electronics/image6.jpg', title: 'Modern Headphone', price: '$10.02-13.04' },
    { image: '/electronics/image1.jpg', title: 'Modern Headphone', price: '$10.02-13.04' },
    { image: '/electronics/image3.jpg', title: 'Modern Headphone', price: '$10.02-13.04' },
    { image: '/electronics/image6.jpg', title: 'Modern Headphone', price: '$10.02-13.04' },
  ];

  
  return (
    <>
      {/* Desktop View */}
      <div className='hidden md:block bg-[#0B4F74] py-6'>
        <div className='py-3 text-center text-white font-bold text-2xl'>
          Gift Dollars for the Selected Sellers
        </div>
        <div className='flex px-10 justify-between py-6 text-white font-bold text-2xl'>
          <h1>5,000+ <span className='text-xs font-normal'>Products</span></h1>
          <h1>1,631+ <span className='text-xs font-normal'>Sellers</span></h1>
          <h1>50,000+ <span className='text-xs font-normal'>Avg. monthly visits</span></h1>
        </div>

        <div  className='flex ml-10 h-[42px] relative'>
          <div className='w-[160px] bg-[#C4C3C3] font-bold text-black py-2 px-2 flex items-center'>
            <span className='ml-5'>products</span>

            <button onClick={ ()=>setProductdiv(!productdiv)}>

              {productdiv? <FaCaretDown className='ml-2 cursor-pointer'  /> : <FaSortUp className='ml-2 cursor-pointer mt-2'/> }
            </button>

            
          </div>

          {/* product div */}

          {productdiv &&  (
             
            <div className=' absolute top-[105%] w-[160px] bg-white '>
              
              <div className=' flex flex-col px-[10%] py-[8%] space-y-5 '>

                <div className='cursor-pointer hover:bg-orange-400 hover:text-white'>Kitchen Tools</div>
                <div className='cursor-pointer hover:bg-orange-400 hover:text-white'>phones</div>
                <div className='cursor-pointer hover:bg-orange-400 hover:text-white'>Dresses </div>
                <div className='cursor-pointer hover:bg-orange-400 hover:text-white'>Kitchen Tools</div>
                <div className='cursor-pointer hover:bg-orange-400 hover:text-white'>Shoes</div>

              </div>

            </div>
          )}


          <div className='bg-white flex w-[800px] items-center'>
            <FaSearch className='ml-3 text-3xl mr-3 cursor-pointer'  />
            <input type='text' className='focus:outline-none w-full' />
          </div>
          <div className='w-[80px] bg-red-500'>
            <button className='w-full py-2 font-bold text-white text-xl'>Search</button>
          </div>
        </div>

        {/* Static category buttons */}
        <div className='mt-10 flex justify-between py-4 px-5'>
          {Categories.map((cat, i) => (
            <div key={i} className={`rounded-[20px] hover:bg-[#61979A] ${i === 0 ? 'bg-[#61979A]' : 'bg-white'}`}>
              <button className={`w-full py-2 px-4 font-medium ${i === 0 ? 'text-white' : ''}`}>
                {cat}
              </button>
            </div>
          ))}
        </div>

        <div className='mt-6 py-3'>
          <h1 className='text-center font-bold text-3xl text-white mb-[80px]'>Electronic Devices</h1>
          <div className='mx-[100px] grid grid-cols-3 gap-y-[50px] gap-x-[35px]'>
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className='block sm:hidden bg-[#0B4F74] py-2'>
        <div className='py-2 text-center text-white font-bold text-xl'>
          Gift Dollars for the Selected Sellers
        </div>

        <div className='flex ml-[10px] h-[40px] mt-4 mr-[10px]'>
          <div className='bg-white flex w-full items-center'>
            <FaSearch className='ml-4 text-2xl mr-3 cursor-pointer' />
            <input type='text' className='focus:outline-none w-full' />
          </div>
          <div className='w-[80px] bg-red-500'>
            <button className='w-full py-2 font-bold text-white text-xl'>Search</button>
          </div>
        </div>

        {/* Category scroll with animation */}
        <div className='mt-10 flex justify-between py-4 px-1 items-center'>
          <FaChevronLeft onClick={PrevCategory} className='text-white font-bold text-4xl cursor-pointer' />
          <div className='flex gap-2 items-center'>
            {visibleCategories.map((cat, idx) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className={`${idx === 0 ? 'bg-[#61979A]' : 'bg-white'} rounded-[20px] px-2 py-2`}
              >
                <span className={`${idx === 0 ? 'text-white' : 'text-black'} font-medium`}>
                  {cat}
                </span>
              </motion.div>
            ))}
          </div>
          <FaChevronRight onClick={NextCategory} className='text-white font-bold text-4xl cursor-pointer' />
        </div>

        <div className='py-2'>
          <h1 className='text-center font-bold text-3xl text-white mb-[80px]'>Electronic Devices</h1>
          <div className='mx-[5%] grid grid-cols-2 gap-y-[50px] gap-x-7'>
            {products.map((p, i) => <ProductCard key={i} {...p} isMobile />)}
          </div>
        </div>
      </div>
    </>
  );
}
