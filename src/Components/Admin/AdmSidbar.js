import React from 'react'
import { Link } from 'react-router-dom';
import {
    FaLock,
    FaDollarSign,
    FaBookOpen,
    FaUsers,
    FaUserTie,
    FaUser,
    FaBoxOpen, 
    FaClipboardList,
    FaMoneyBillWave,
    FaChartBar,
    FaCog,
    FaTruckMoving ,
    FaShippingFast,
    FaFileInvoiceDollar,
    
  } from 'react-icons/fa';
  import { FaHandsHoldingCircle } from "react-icons/fa6";

 function AdmSidbar() {
  return (
    <>
    <div className='flex'>



         <div className='bg-blue-950 h-screen w-[300px] flex flex-col text-white text-2xl  m-0 p-3 gap-11  '>
          <Link to="/Seller" className="flex items-center space-x-4"><FaUserTie className="w-5 h-5" />
                    <span>Seller</span>
          </Link>
          <Link to="/Buyer" className='flex items-center space-x-4'> < FaUser className='w-5 h-5'/>
              <span>Buyer</span>
           </Link>
          <Link to="/Product" className='flex items-center space-x-4'> <FaBoxOpen className='w-5 h-5'/>
             <span>Product</span>
          </Link>
          <Link to="/Order" className='flex items-center space-x-4'> <FaClipboardList  className='w-5 h-5'/>
            <span> Order</span>
         </Link>
         <Link to="/Sales" className='flex items-center space-x-4'> <FaMoneyBillWave className='w-5 h-5'/>
           <span>Sales</span>
         </Link>
         <Link to="/Report" className='flex items-center space-x-4'>< FaChartBar className='w-5 h-5' />
            <span>Report</span>
         </Link>
          <Link to="/Settings" className='flex items-center space-x-4'> < FaCog className='w-5 h-5'/>
            <span>Settings</span>
          </Link>

         <button className='bg-slate-300 h-14 w-28 bottom-6 left-12 absolute text-black rounded-md'> <Link to="/">Logout</Link></button> 
         </div>


         <div>
           
            <div className=" text-center text-2xl font-bold  ">
              <h1>E-commerce Dashboard</h1>
            </div>

            <div className="bg-gray-100 p-8 flex  gap-20 ">

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
            
            <div className='flex justify-between  mt-48'>

                
                <div className="bg-orange-200 p-10 rounded-lg shadow-md w-1/2 gap-10 ">  
            
                    <h1 className='underline text-center' > Top Selling Products</h1>
                            

                      <div className='flex justify-between'>

                      <div className="flex items-start space-x-2">
                      <img src="/electronics/watch1.jpeg" alt="Apple watch" className="h-10 w-10 object-cover" />

                        <div>
                         <h3 className="font-bold text-sm">Apple watch</h3>
                           <p className="text-xs text-gray-600">USB, Wireless</p>
                          </div>
                        </div>
                          <div>
                            <p className='font-bold '> $200.00</p> 
                                
                          </div>  
                          </div>   
                            
                        <div className='flex justify-between mt-8'>
                        <div className="flex items-start space-x-2">
                      <img src="/electronics/macbook.jpg" alt="Apple watch" className="h-10 w-10 object-cover" />

                        <div>
                         <h3 className="font-bold text-sm">Macbook pro</h3>
                           <p className="text-xs text-gray-600">USB, Wireless</p>
                          </div>
                        </div>
                          <div>
                            <p className='font-bold '> $1200.00</p> 
                                
                          </div>  
                            </div>  
                            
                            <div className='flex justify-between mt-8'>
                            <div className="flex items-start space-x-2">
                      <img src="/electronics/fridge1.webp" alt="Apple watch" className="h-10 w-10 object-cover" />

                        <div>
                         <h3 className="font-bold text-sm">Apple watch</h3>
                           <p className="text-xs text-gray-600">controll cooler</p>
                          </div>
                        </div>
                                <div>
                                 <p className='font-bold '> $900.00</p> 
                                
                                </div>  
                            </div>  
                 </div>   


                 <div className="bg-blue-100 p-4 rounded-lg shadow-md w-1/2  ml-40">
                      <h1 className='underline text-center'> other Activities</h1>
                      
                    <div className='flex justify-between'>
                        
                    <div className="flex items-start space-x-2">
                         <FaTruckMoving className="text-lg mt-1" />

                     <div>
                      <h3 className="font-bold text-sm">Delivered</h3>
                       <p className="text-xs text-black-600">iPhone X mobile</p>
                     </div>
                    </div>

                    <div>
                    <p className='font-thin '> 25 minutes ago</p> 
                    </div>  
                     </div>  
                     
                <div className='flex justify-between mt-5'>
                  
            <div className="flex items-start space-x-2">
              <FaFileInvoiceDollar className="text-lg mt-1" />

              <div>
             <h3 className="font-bold text-sm">Invoice</h3>
             <p className="text-xs text-gray-600">Laptop PHP</p>
           </div>
          </div>
                

                   <div>
                      <p className='font-light '> 10 hours ago</p> 

                    </div>  
                </div>  
                      
                      
                <div className='flex justify-between mt-5'>
                  
               <div className="flex items-start space-x-2">
                <FaShippingFast className="text-lg mt-1" />

                 <div>
               <h3 className="font-bold text-sm">Dispatched</h3>
               <p className="text-xs text-gray-600">Washing machine</p>
               </div>
               </div>
 

                            <div>
                            <p className='font-light '> 12 hours ago</p> 

                            </div>  
                            </div>  
                            <div className='flex justify-between mt-5'>

                               
<div className="flex items-start space-x-2">
  <FaHandsHoldingCircle className="text-lg mt-1" />

  <div>
    <h3 className="font-bold text-sm">Received</h3>
    <p className="text-xs text-gray-600">MacAir laptop</p>
  </div>
</div> 
     
                                <div>
                                 <p className='font-light '> 10 days ago</p> 
                                
                                </div>  
                            </div>  
                      
                 </div> 
             
                 </div>

    
                 

     
            </div>


    </div>
    </>
  );
}
export default AdmSidbar;
