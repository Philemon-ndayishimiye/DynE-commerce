import React from 'react'
import{ HiHome, HiPlus, HiEye, HiChat, HiBell, HiLocationMarker, HiChartBar} from 'react-icons/hi';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function SellerSidebar() {

  return(

     <div className= "bg-blue-300  w-[300px] ml-[20px] mt-[20px]">
      <FaUserAlt/>
      <div>
        <h4>E SELLER</h4>
        <h5>seller@company.com</h5>
        
    </div>
       <div  className="space-y-4">
         <div> <Link className="flex"> <HiHome  className="mr-2"/> Home</Link></div>
         <div><Link className="flex"><HiPlus className="mr-2"/>Add Product</Link></div>
         <div><Link className="flex"><HiEye className="mr-2"/>View Product</Link></div>
         <div><Link className="flex"><HiEye className="mr-2"/>View Product</Link></div>
         <div><Link className="flex"><HiChat className="mr-2"/>Messages</Link></div>
         <div><Link className="flex"><HiBell className="mr-2"/>Notification</Link></div>
         <div><Link className="flex"><HiLocationMarker className="mr-2"/>Location</Link></div>
         <div><Link className="flex"><HiChartBar className="mr-2"/>Graph</Link></div>
       </div>
     </div>   
  )
}
