import { Check, ChevronDown} from 'lucide-react'
import Link from "next/link";
import { FaExclamationCircle } from "react-icons/fa";


import React from 'react'

const topnavbar = () => {
  return (
    <div className=" w-full h-[45px] flex items-center bg-primerypurple ">
      <div className='max-w-5xl mx-auto w-full flex justify-between items-center'>

        {/* Left side:  */}
        <div className='flex text-gray-300 items-center gap-2'>
          <Check className='w-[16px] h-[16px]' />
          <div className=" text-[13px] leading-[110%] font-normal">Free shipping on all orders over $50</div>
        </div>

        {/* Right side:  */}
        <div className="text-gray-300 flex items-center space-x-4 font-normal text-center  text-[13px] ">
  <p className=" flex items-center space-x-1 cursor-pointer">
    Eng
    <ChevronDown className="w-4 h-4 ml-1 " /> 
  </p>
  <p ><Link href="/app/faq"><div className="cursor-pointer">FAQs</div></Link>
</p>

  <p className='flex items-center gap-x-1 cursor-pointer'>
  <FaExclamationCircle className="text-white" />
  Need Help</p>
</div>
      </div>
    </div>
  )
}

export default topnavbar
