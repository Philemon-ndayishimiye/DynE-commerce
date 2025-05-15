
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion'
  
  export default function Body(){

  
    const Categories = [
        'Electronic', 'Accessories', 'Home & Living', 'Sports Equipments',
        'Toys and Games', 'Tools & Hardware', 'Kitchen Tools'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const PrevCategory = () => {
        setCurrentIndex((prev) => (prev - 1 + Categories.length) % Categories.length);
    };

    const NextCategory = () => {
        setCurrentIndex((prev) => (prev + 1) % Categories.length);
    };

    // Get 2 visible categories
    const visibleCategories = [
        Categories[currentIndex],
        Categories[(currentIndex + 1) % Categories.length],
    ];



  return (

    <>

    <div className=' hidden md:block bg-[#0B4F74] py-6'>

       
        <div className='py-3'>

            <h2 className='text-2xl text-white font-bold text-center '>
                Gift Dollars for the  Selected Sellers</h2>
 
        </div>

        <div className='flex px-[40px] justify-between py-6'>

            <h1 className='text-white font-bold text-2xl'>5,000+  <span className='text-xs font-normal'>Products</span> </h1>
            <h1 className='text-white font-bold text-2xl'>1,631+  <span className='text-xs font-normal'> Sellers</span> </h1>
            <h1 className='text-white font-bold text-2xl'>50,000+ <span className='text-xs font-normal'>  Avg. monthly visits</span> </h1>
        </div>

        <div className='flex ml-[40px] h-[42px] '>

            <div className='w-[160px] bg-[#C4C3C3] font-bold text-black py-2 px-2 flex '>

                <h2 className='ml-5'>products</h2>
                <div className='mt-1 ml-2 cursor-pointer'><FaCaretDown/> </div>
            </div>

            <div className='bg-white flex w-[800px]'>
                <div className='ml-3 mt-2 text-3xl mr-3 cursor-pointer'> <FaSearch/></div>
                <input type='text' className='focus:outline-none focus:ring-0 focus:border-transparent'/>
            </div>
            <div className='w-[80px] bg-red-500'> 
                <button className='w-[100%] py-2 px-2 font-bold text-white text-xl'>Search</button>
            </div>

            
        </div>

        <div className='mt-10 flex justify-between py-4 px-5'>

            <div className='bg-[#61979A] rounded-[20px]'> <button className='w-full py-2 px-4 font-medium text-white'>Electronics</button> </div>

            <div className='bg-white rounded-[20px]'> <button className='w-full py-2 px-4 font-medium'>Electronics</button> </div>

            <div className='bg-white rounded-[20px]'> <button className='w-full py-2 px-4 font-medium'>Accessories</button> </div>

            <div className='bg-white rounded-[20px]'> <button className='w-full py-2 px-4 font-medium'>Home & Living</button> </div>

            <div className='bg-white rounded-[20px]'> <button className='w-full py-2 px-4 font-medium'>Sports Equipments</button> </div>

            <div className='bg-white rounded-[20px]'> <button className='w-full py-2 px-4 font-medium'>Toys and Games</button> </div>

            <div className='bg-white rounded-[20px]'> <button className='w-full py-2 px-4 font-medium'>Tools and hardware</button> </div>

            <div className='bg-white rounded-[20px]'> <button className='w-full py-2 px-4 font-medium'>Kitchen Tools</button> </div>
            
            
        </div>

        <div className='mt-6 py-3 '>
            <div className='mb-[80px]'>
                <h1 className='text-center font-bold text-3xl text-white '>Electronic Devices</h1>
            </div>

            <div className=' ml-[100px] mr-[100px]'>

                <div className='grid grid-cols-3 gap-y-[50px] gap-x-[35px]'>

                    <div className='flex flex-col bg-white rounded-lg h-[370px]'>

                         <div className='w-[85%] ml-[26px] rounded-md mt-4'>
                              <img  className='rounded-lg w-[300px]' src='/electronics/image1.jpg' alt='image1'/> 
                         </div>

                         <div className='mt-2 ml-[27px] mb-3'>
                             <h4 className='text-black font-bold'>modern headphone</h4>
                             <h6 className='text-orange-500 font-bold'>$10.02-13.04</h6>
                         </div>
     
                         <div className='flex bg-orange-500 rounded-[20px] w-[170px] mb-3 ml-[90px]'>
                             <div className='px-2 py-1 text-white'>ico</div>

                           <div className=' '> 
                              <button className='px-2 py-1  text-white'>add to cart</button> 
                            </div>
                         </div>

                    </div>    

                    <div className='flex flex-col bg-white rounded-lg h-[370px]'>

                         <div className='w-[85%] ml-[26px] rounded-md mt-4'>
                              <img  className='rounded-lg w-[300px]' src='/electronics/image3.jpg' alt='image1'/> 
                         </div>

                         <div className='mt-2 ml-[27px] mb-3'>
                             <h4 className='text-black font-bold'>modern headphone</h4>
                             <h6 className='text-orange-500 font-bold'>$10.02-13.04</h6>
                         </div>
     
                         <div className='flex bg-orange-500 rounded-[20px] w-[170px] mb-3 ml-[90px]'>
                             <div className='px-2 py-1 text-white'>ico</div>

                           <div className=' '> 
                              <button className='px-2 py-1  text-white'>add to cart</button> 
                            </div>
                         </div>

                    </div>    

                    <div className='flex flex-col bg-white rounded-lg h-[370px]'>

                         <div className='w-[85%] ml-[26px] rounded-md mt-4'>
                              <img  className='rounded-lg w-[300px]' src='/electronics/image1.jpg' alt='image1'/> 
                         </div>

                         <div className='mt-2 ml-[27px] mb-3'>
                             <h4 className='text-black font-bold'>modern headphone</h4>
                             <h6 className='text-orange-500 font-bold'>$10.02-13.04</h6>
                         </div>
     
                         <div className='flex bg-orange-500 rounded-[20px] w-[170px] mb-3 ml-[90px]'>
                             <div className='px-2 py-1 text-white'>ico</div>

                           <div className=' '> 
                              <button className='px-2 py-1  text-white'>add to cart</button> 
                            </div>
                         </div>

                    </div>    

                    <div className='flex flex-col bg-white rounded-lg h-[370px]'>

                         <div className='w-[85%] ml-[26px] rounded-md mt-4'>
                              <img  className='rounded-lg w-[300px]' src='/electronics/image3.jpg' alt='image1'/> 
                         </div>

                         <div className='mt-2 ml-[27px] mb-3'>
                             <h4 className='text-black font-bold'>modern headphone</h4>
                             <h6 className='text-orange-500 font-bold'>$10.02-13.04</h6>
                         </div>
     
                         <div className='flex bg-orange-500 rounded-[20px] w-[170px] mb-3 ml-[90px]'>
                             <div className='px-2 py-1 text-white'>ico</div>

                           <div className=' '> 
                              <button className='px-2 py-1  text-white'>add to cart</button> 
                            </div>
                         </div>

                    </div> 

                    <div className='flex flex-col bg-white rounded-lg h-[370px]'>

                         <div className='w-[85%] ml-[26px] rounded-md mt-4'>
                              <img  className='rounded-lg w-[300px]' src='/electronics/image3.jpg' alt='image1'/> 
                         </div>

                         <div className='mt-2 ml-[27px] mb-3'>
                             <h4 className='text-black font-bold'>modern headphone</h4>
                             <h6 className='text-orange-500 font-bold'>$10.02-13.04</h6>
                         </div>
     
                         <div className='flex bg-orange-500 rounded-[20px] w-[170px] mb-3 ml-[90px]'>
                             <div className='px-2 py-1 text-white'>ico</div>

                           <div className=' '> 
                              <button className='px-2 py-1  text-white'>add to cart</button> 
                            </div>
                         </div>

                    </div>   

                    <div className='flex flex-col bg-white rounded-lg h-[370px] static'>

                         <div className='w-[85%] ml-[26px] rounded-md mt-4'>
                              <img  className='rounded-lg w-[300px]' src='/electronics/image1.jpg' alt='image1'/> 
                         </div>

                         <div className='mt-2 ml-[27px] mb-3'>
                             <h4 className='text-black font-bold'>modern headphone</h4>
                             <h6 className='text-orange-500 font-bold'>$10.02-13.04</h6>
                         </div>
     
                         <div className='flex bg-orange-500 rounded-[20px] w-[170px] mb-3 ml-[90px]'>
                             <div className='px-2 py-1 text-white'>ico</div>

                           <div className=' '> 
                              <button className='px-2 py-1  text-white'>add to cart</button> 
                            </div>
                         </div>

                    </div>    

                </div>
            </div>
        </div>

    </div>



{/* visible for mobile device*/}



    <div className=' block sm:hidden bg-[#0B4F74] py-2'>

       
        <div className='py-2'>

            <h2 className='text-xl text-white font-bold text-center '>
                Gift Dollars for the  Selected Sellers</h2>
 
        </div>

        

        <div className='flex ml-[10px] h-[40px] mt-4 mr-[10px]'>


            <div className='bg-white flex w-full '>
                <div className='ml-4 mt-3 text-2xl mr-3 cursor-pointer'> <FaSearch/></div>
                <input type='text' className='focus:outline-none focus:ring-0 focus:border-transparent'/>
            </div>
            <div className='w-[80px] bg-red-500'> 
                <button className='w-[100%] py-2 px-2 font-bold text-white text-xl'>Search</button>
            </div>

            
        </div>

        <div className='mt-10 flex justify-between py-4 px-1'>

               <div className='text-white font-bold text-4xl cursor-pointer'>
                   <FaChevronLeft onClick={PrevCategory} />
                </div>

            <div className='flex gap-2 items-center'>
                {visibleCategories.map((cat, idx) => (
                    <motion.div
                        key={cat}
                        initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: idx === 0 ? 50 : -50 }}
                        transition={{ duration: 0.4 }}
                        className={`${idx === 0 ? 'bg-[#61979A]' : 'bg-white'} rounded-[20px] px-2 py-2`}
                    >
                        <span className={`${idx === 0 ? 'text-white' : 'text-black'} font-medium`}>
                            {cat}
                        </span>
                    </motion.div>
                ))}
            </div>

               <div className='text-white font-bold text-4xl cursor-pointer'>
                   <FaChevronRight onClick={NextCategory}/> 
               </div>

            
            
            
        </div>

        <div className=' py-2 '>

            <div className='mb-[80px]'>
                <h1 className='text-center font-bold text-3xl text-white '>Electronic Devices</h1>
            </div>

            <div className=' ml-[5%] mr-[2%]'>

                <div className='grid grid-cols-2 gap-y-[50px] gap-x-7'>

                    <div className='flex flex-col  bg-white rounded-lg h-[250px] '>

                         <div className='w-[85%] ml-[10px] rounded-md mt-4'>
                              <img  className='rounded-lg w-[300px]' src='/electronics/image1.jpg' alt='image1'/> 
                         </div>

                         <div className='mt-2 ml-[20px] mb-3'>
                             <h4 className='text-black font-bold'>modern headphone</h4>
                             <h6 className='text-orange-500 font-bold'>$10.02-13.04</h6>
                         </div>
     
                         <div className='flex bg-orange-500 rounded-[20px] w-[120px] mb-3 ml-[11px] mt-5 px-2'>

                           <div className=' '> 
                              <button className='px-1 py-1  text-white'>add to cart</button> 
                            </div>
                         </div>

                    </div>    

                     <div className='flex flex-col  bg-white rounded-lg h-[250px]'>

                         <div className='w-[85%] ml-[10px] rounded-md mt-4'>
                              <img  className='rounded-lg w-[300px]' src='/electronics/image3.jpg' alt='image1'/> 
                         </div>

                         <div className='mt-2 ml-[20px] mb-3'>
                             <h4 className='text-black font-bold'>modern headphone</h4>
                             <h6 className='text-orange-500 font-bold'>$10.02-13.04</h6>
                         </div>
     
                         <div className='flex bg-orange-500 rounded-[20px] w-[120px] mb-3 ml-[10px] mt-5 px-2'>
                             

                           <div className=' '> 
                              <button className='px-1 py-1  text-white'>add to cart</button> 
                            </div>
                         </div>

                    </div>    

                     <div className='flex flex-col  bg-white rounded-lg h-[250px] '>

                         <div className='w-[85%] ml-[10px] rounded-md mt-4'>
                              <img  className='rounded-lg w-[300px]' src='/electronics/image6.jpg' alt='image1'/> 
                         </div>

                         <div className='mt-2 ml-[20px] mb-3'>
                             <h4 className='text-black font-bold'>modern headphone</h4>
                             <h6 className='text-orange-500 font-bold'>$10.02-13.04</h6>
                         </div>
     
                         <div className='flex bg-orange-500 rounded-[20px] w-[120px] mb-3 ml-[11px] mt-5 px-2'>

                           <div className=' '> 
                              <button className='px-1 py-1  text-white'>add to cart</button> 
                            </div>
                         </div>

                    </div>    

                     <div className='flex flex-col  bg-white rounded-lg h-[250px]'>

                         <div className='w-[85%] ml-[10px] rounded-md mt-4'>
                              <img  className='rounded-lg w-[300px]' src='/electronics/image1.jpg' alt='image1'/> 
                         </div>

                         <div className='mt-2 ml-[20px] mb-3'>
                             <h4 className='text-black font-bold'>modern headphone</h4>
                             <h6 className='text-orange-500 font-bold'>$10.02-13.04</h6>
                         </div>
     
                         <div className='flex bg-orange-500 rounded-[20px] w-[120px] mb-3 ml-[10px] mt-5 px-2'>
                             

                           <div className=' '> 
                              <button className='px-1 py-1  text-white'>add to cart</button> 
                            </div>
                         </div>

                    </div> 

                     <div className='flex flex-col  bg-white rounded-lg h-[250px] '>

                         <div className='w-[85%] ml-[10px] rounded-md mt-4'>
                              <img  className='rounded-lg w-[300px]' src='/electronics/image1.jpg' alt='image1'/> 
                         </div>

                         <div className='mt-2 ml-[20px] mb-3'>
                             <h4 className='text-black font-bold'>modern headphone</h4>
                             <h6 className='text-orange-500 font-bold'>$10.02-13.04</h6>
                         </div>
     
                         <div className='flex bg-orange-500 rounded-[20px] w-[120px] mb-3 ml-[11px] mt-5 px-2'>

                           <div className=' '> 
                              <button className='px-1 py-1  text-white'>add to cart</button> 
                            </div>
                         </div>

                    </div>    

                     <div className='flex flex-col  bg-white rounded-lg h-[250px]'>

                         <div className='w-[85%] ml-[10px] rounded-md mt-4'>
                              <img  className='rounded-lg w-[300px]' src='/electronics/image6.jpg' alt='image1'/> 
                         </div>

                         <div className='mt-2 ml-[20px] mb-3'>
                             <h4 className='text-black font-bold'>modern headphone</h4>
                             <h6 className='text-orange-500 font-bold'>$10.02-13.04</h6>
                         </div>
     
                         <div className='flex bg-orange-500 rounded-[20px] w-[120px] mb-3 ml-[10px] mt-5 px-2'>
                             

                           <div className=' '> 
                              <button className='px-1 py-1  text-white'>add to cart</button> 
                            </div>
                         </div>

                    </div>    
   



               

                       
                </div>
            </div>
        </div>

    </div>


    </>
  )

}
