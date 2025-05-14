import React from 'react'
import{ HiHome, HiPlus, HiEye, HiChat, HiBell, HiLocationMarker, HiChartBar} from 'react-icons/hi';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function SellerSidebar() {

  return(
     

     <div className= "bg-blue-300 text-center w-[300px] ml-5 mt-5 p-5 rounded-lg">

      <FaUserAlt className="text-4xl text-gray mx-auto"/>
      <div className="text-black-500">
        <div><h4 className= "text-2xl font-bold text-black mt-3">E SELLER</h4></div>
        <div><p className="text-sm text-gray-600 mb-6">seller@company.com</p></div>
        
    </div >
       <div  className="space-y-4 justify-center p-[20px]">
         <div> <Link className="flex "> <HiHome  className="mr-2 text-lg"/> Home</Link></div>
         <div><Link className="flex "><HiPlus className="mr-2 text-lg"/>Add Product</Link></div>
         <div><Link className="flex"><HiEye className="mr-2 text-lg"/>View Product</Link></div>
         <div><Link className="flex"><HiChat className="mr-2 text-lg"/>Messages</Link></div>
         <div><Link className="flex"><HiBell className="mr-2 text-lg"/>Notification</Link></div>
         <div><Link className="flex"><HiLocationMarker className="mr-2 text-lg"/>Location</Link></div>
         <div><Link className="flex"><HiChartBar className="mr-2 text-lg"/>Graph</Link></div>
       </div>
     </div> 
      
  )
}
