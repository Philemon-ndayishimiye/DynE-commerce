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
    FaShippingFast
    
  } from 'react-icons/fa';

 function AdmSidbar() {
  return (
    <>
    <div className='flex'>



         <div className='bg-blue-950 h-screen w-[300px] flex flex-col text-white text-3xl  m-0 p-3 gap-11 '>
         <div > <Link to="/Seller" className='flex ' >   < FaUserTie/>Seller</Link></div>
         <div> <Link to="/Buyer" className='flex'> < FaUser/>Buyer</Link></div>
         <div> <Link to="/Product" className='flex'> <FaBoxOpen/>Product</Link></div>
         <div> <Link to="/Order" className='flex'> <FaClipboardList/> Order</Link></div>
         <div><Link to="/Sales" className='flex'> <FaMoneyBillWave/>Sales</Link></div>
         <div><Link to="/Report" className='flex'>< FaChartBar />Report</Link></div>
         <div> <Link to="/Settings" className='flex'> < FaCog/>Settings</Link></div>

         <button className='bg-slate-300 h-14 w-28 bottom-6 left-12 absolute text-black'> <Link to="/">Logout</Link></button> 
         </div>


         <div>
           
            <div className=" text-center text-2xl font-bold ">
              <h1>E-commerce Dashboard</h1>
            </div>

            <div className="bg-gray-100 p-8 flex  gap-14 ">

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

                                 <div>
                                     
                                 <h3 className='font-bold flex h-6'>
                                   <img src='/electronics/watch1.jpeg' alt='Apple watch' />
                                   Apple watch
                                 </h3>
                                 <p>USB,Wireless</p>
                                
                                </div> 
     
                                <div>
                                 <p className='font-bold '> $200.00</p> 
                                
                                </div>  
                            </div>   
                            
                            <div className='flex justify-between'>

                                 <div>
                                     
                                 <h3 className='font-bold flex h-6'>
                                   <img src='/electronics/macbook.jpg' alt='Apple watch' />
                                   Macbook Pro
                                 </h3>
                                 <p>USB,Wireless</p>
                                
                                </div> 
     
                                <div>
                                 <p className='font-bold '> $1200.00</p> 
                                
                                </div>  
                            </div>  
                            
                            <div className='flex justify-between '>

                                 <div>
                                     
                                 <h3 className='font-bold flex h-6'>
                                   <img src='/electronics/fridge1.webp' alt='fridge' />
                                   Fridge
                                 </h3>
                                 <p>USB,Wireless</p>
                                
                                </div> 
     
                                <div>
                                 <p className='font-bold '> $900.00</p> 
                                
                                </div>  
                            </div>  
                 </div>   


                 <div className="bg-blue-100 p-4 rounded-lg shadow-md w-1/2  ml-40">
                      <h1 className='underline text-center'> other Activities</h1>
                      
                      <div className='flex justify-between'>

                  <div>
    
                <h3 className='font-bold flex h-6'>
                    < FaTruckMoving />
                     Delivered
                 </h3>
                <p>iphone x mobile</p>

                </div> 

             <div>
              <p className='font-thin '> 25 minutes ago</p> 

               </div>  
                     </div>  
                     
                <div className='flex justify-between'>

                    <div>
    
                      <h3 className='font-bold flex '>
                        
                         Invoice
                      </h3>
                      <p className='font-thin text-[15px]'>Laptop PHP</p>

                    </div> 

                   <div>
                      <p className='font-light '> 10 hours ago</p> 

                    </div>  
                </div>  
                      
                      
                <div className='flex justify-between'>

              <div>
    
             <h3 className='font-bold flex'>
                 <FaShippingFast/>
                 Dispatched
                </h3>
               <p>washing machine</p>

                    </div> 

                            <div>
                            <p className='font-light '> 12 hours ago</p> 

                            </div>  
                            </div>  
                            <div className='flex justify-between'>

                                 <div>
                                     
                                 <h3 className='font-bold flex h-6'>
                                  
                                   Received
                                 </h3>
                                 <p>MacAir laptop</p>
                                
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
