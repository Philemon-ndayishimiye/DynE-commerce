import React from 'react'
import{ HiHome, HiPlus, HiEye, HiChat, HiBell, HiLocationMarker, HiChartBar} from 'react-icons/hi';
import { FaDollarSign, FaShareAlt, FaThumbsUp, FaStar } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function SellerSidebar() {

  return(
     
   <div className= "flex bg-gray-200">
     <div className= "bg-[#28345C] text-center w-[300px] h-[500px] ml-5 mt-2 p-5 rounded-lg">

      <FaUserAlt className="text-4xl text-white mx-auto"/>
      <div className="text-white-500">
        <div><h4 className= "text-2xl font-bold text-white mt-3">E SELLER</h4></div>
        <div><p className="text-sm text-gray-600 mb-6">seller@company.com</p></div>
        
    </div >
       <div  className="space-y-4 justify-center p-[20px] text-white">
         <div> <Link className="flex "> <HiHome  className="mr-2 text-lg"/> Home</Link></div>
         <div><Link className="flex "><HiPlus className="mr-2 text-lg"/>Add Product</Link></div>
         <div><Link className="flex"><HiEye className="mr-2 text-lg"/>View Product</Link></div>
         <div><Link className="flex"><HiChat className="mr-2 text-lg"/>Messages</Link></div>
         <div><Link className="flex"><HiBell className="mr-2 text-lg"/>Notification</Link></div>
         <div><Link className="flex"><HiLocationMarker className="mr-2 text-lg"/>Location</Link></div>
         <div><Link className="flex"><HiChartBar className="mr-2 text-lg"/>Graph</Link></div>
       </div>
     </div>
<div className=" ">
  <h3 className="p-5 ">Dashboard User</h3>
  <div className= "flex ">
  <div className= "bg-[#28345C] p-5 w-[200px] ml-[50px] relative">
    <h4 className="absolute top-0 left-2 ">Earning</h4>
    <p className="text-center"><span className="text-4xl font-semibold">$</span>628</p>
    <FaDollarSign className="absolute top-2 right-2 "/>
</div>
<div  className="bg-white  p-5 w-[200px] ml-[50px] relative">
  <h4 className="absolute top-0 left-2 ">Share</h4>
  <p className="text-center">2434</p>
  <FaShareAlt className="absolute top-2 right-2 " />
</div>
<div className="bg-white p-5 w-[200px] ml-[50px] relative">
  <h4 className="absolute top-0 left-2 ">Likes</h4>
  <p className="text-center ">1259</p>
  <FaThumbsUp className="absolute top-2 right-2 " />
</div>
<div className="bg-white p-5  w-[200px] ml-[50px] relative">
  <h4 className="absolute top-0 left-2 ">Rating</h4>
  <p className=" text-center">8,5</p>
  <FaStar className="absolute top-2 right-2 "/>
</div>

  </div>
  


</div>

<div className=" absolute top-[13%] right-[30px] ">
    < GiHamburgerMenu/>

</div>


     </div> 
  )
}
