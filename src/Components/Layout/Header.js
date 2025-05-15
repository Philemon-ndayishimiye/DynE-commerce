import React, { useEffect, useState } from 'react' 
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {

  const Images = [
    
      '/electronics/image1.jpg', '/electronics/image3.jpg', '/electronics/image6.jpg'
        
  ]

  
    const  [currentIndex , setCurrentIndex] = useState(0) ;

    const NextImage = ()=>{

     const isLstImage = currentIndex === Images.length-1 ;
     const NextImage = isLstImage? 0 : currentIndex + 1
      
      setCurrentIndex(NextImage);

    }

    
   

      useEffect(() => {
         const timeout = setTimeout(() => {
           NextImage();
         }, 3000); // 3 seconds
     
         // Cleanup timeout if component unmounts or currentIndex updates
         return () => clearTimeout(timeout);
         
          }, [currentIndex]);

  return (


    <>

    <div style={{backgroundImage: "url('/background.jpg')"}}

     className=' hidden md:block  bg-cover bg-center justify-between '>


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

        <div className='w-[500px]  h-[367px] absolute top-[60px] rounded-l-[50%] right-0'>

         
            
          {/*  <FaChevronLeft onClick={NextImage} className='absolute top-[45%] left-[10%] text-3xl cursor-pointer'/> */}

            <div className='w-full '>

               <AnimatePresence>
              <motion.img
                key={currentIndex}
                src={Images[currentIndex]}
                alt="slider"
                initial={{ opacity: 1, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full  rounded-l-[50%] object-cover "
              />
            </AnimatePresence>

            </div>

            
           {/* <FaChevronRight onClick={PrevImage} className='absolute top-[45%] right-[5%] text-3xl cursor-pointer'/> */}
        </div>
    </div>



    {/* visible only on mobile phone */}

    <div style={{backgroundImage: "url('/background.jpg')"}} className='block sm:hidden  bg-cover bg-center justify-between'>

         <div className='flex justify-between py-[10px]'>

             <div className='ml-[2%]'>
    
                <h2 className='text-white font-bold text-xl'>Raining Offers For</h2>
                <h2 className='text-white font-bold text-xl py-2'>Hot Summer!</h2>
                <h5 className='text-white font-medium text-xs py-4'>25% Off On All Products</h5>
    
              <div className='w-[200px] flex justify-between py-2'>
    
                    <button className='border-1 bg-white px-1 py-1 font-medium'>SHOP NOW</button>
                    <button className='border-1 bg-[#72A7CD] px-1 py-1 text-white font-medium'>FIND MORE</button>
              </div>
    
            </div>

      </div>

      {/*  <div className='w-[130px] bg-white h-[150px] py-10 absolute top-[60px] rounded-l-[50%] right-0'>

            <div>
                <h1> image slider</h1>
            </div>

        </div>
        */}

       

       
   </div>
    

    </>
  )
}
