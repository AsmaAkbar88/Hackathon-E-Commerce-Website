// ok 

import { Check, ChevronDown } from 'lucide-react'
import Link from "next/link";
import { FaExclamationCircle } from "react-icons/fa";
import React from 'react'



const Topnavbar = () => {
  return (
    <div className=" h-[45px]  text-[#FFFFFF] bg-blackPrimery ">
      <div className='max-w-5xl mx-auto h-full flex justify-between items-center'>

        {/* Left side:  */}


        <div className='flex items-center gap-1'>
          <Check className='w-4 h-4 ' />
          <div className=" text-[13px] leading-[110%]  capitalize font-normal">
            free shipping on all orders over $50</div>
        </div>

        {/* Right side:  */}


        <div className="text-gray-300 flex items-center gap-6
        font-normal text-center leading-[130%] text-[13px] ">

  {/* Eng  */}
<div className='flex cursor-pointer '>
          <p className="flex">
            Eng
            <ChevronDown className="w-4 h-4 ml-1 " />
          </p>
          </div>
          {/* fAQ  */}

          <div ><Link href="#"><p className="cursor-pointer">FAQs</p></Link>
          </div>

          {/* needs help  */}

          <div className='flex items-center gap-2 cursor-pointer'>
            <FaExclamationCircle/>
            Need Help</div>
        </div>
      </div>
    </div>
  )
}

export default Topnavbar
