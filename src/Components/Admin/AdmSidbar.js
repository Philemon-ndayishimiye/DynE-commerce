import React from 'react'
import {
    FaLock,
    FaDollarSign,
    FaBookOpen,
    FaUsers,
  } from 'react-icons/fa';

 function AdmSidbar() {
  return (
    <div className='flex'>



         <div className='bg-blue-950 h-screen w-[300px] flex flex-col text-white text-xl  m-0 p-3'>
              <h2 className='space-y-11'> Sellers</h2>
              <h5>Buyers</h5>
              <h5> Products</h5>
              <h5> Orders</h5>
              <h5> Sales</h5>
              <h5> Report</h5>
              <h5> Settings</h5>
         </div>


         <div>
           
            <div className=" text-center text-2xl font-bold ">
              <h1>E-commerce Dashboard</h1>
            </div>

            <div className="bg-gray-100 p-8 flex flex-wrap gap-14">

              <div className="bg-purple-500 p-4 rounded-lg shadow-md w-56 relative">
                <h3>Total Sales</h3>
                <p>1,234,567</p>
                <p>Increased by 2%</p>
                <FaLock className="absolute top-2 right-2 text-white text-xl" />
              </div>

              <div className="bg-green-500 p-4 rounded-lg shadow-md w-56 relative">
                <h3>Total Revenue</h3>
                <p>$123,456</p>
                <p>Increased by 4.7%</p>
                <FaDollarSign className="absolute top-2 right-2 text-white text-xl" />
              </div>

              <div className="bg-blue-500 p-4 rounded-lg shadow-md w-56 relative">
                <h3>Total Users</h3>
                <p>12,345</p>
                <p>5%</p>
                <FaUsers className="absolute top-2 right-2 text-white text-xl" />
              </div>

              <div className="bg-orange-500 p-4 rounded-lg shadow-md w-56 relative">
                <h3>New Orders</h3>
                <p>56,743</p>
                <FaBookOpen className="absolute top-2 right-2 text-white text-xl" />
              </div>

            </div>
            
            <div className='flex justify-between'>

                
                <div className="bg-green-100 p-10 rounded-lg shadow-md w-80 ">

                           
            
                            <h1 className='underline'> Top Selling Products</h1>
                            <img src="https://via.placeholder.com/150" alt="Placeholder" className="w-full h-10 object-cover rounded-lg mb-4" />


                            <div className='flex justify-between'>

                                 <div>
                                     
                                 <h3 className='font-bold'>Apple watch</h3>
                                 <p>USB,Wireless</p>
     
                                </div> 
     
                                <div>
                                 <p className='font-bold'> $200</p> 
                                </div>  
                            </div>   
                 </div>   


                 <div className="bg-purple-200 p-4 rounded-lg shadow-md w-56 ">
                      <h1 className='underline'> other Activities</h1>
                     <h3>Delivered</h3>
                      <p>invoice</p>
                      <h1>Dispatch</h1>.
            
            
       
                 </div> 

             
                 </div>

    
                 

     
            </div>


    </div>
  );
}
export default AdmSidbar;
