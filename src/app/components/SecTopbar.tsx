
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const SecTopbar = () => {
  return (
    <div className="w-full bg-[#F0F2F3] pt-[20px] pb-[20px] h-[84px]">
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">

        {/* Left side:  */}
        <div className="flex flex-row items-center gap-2 ml-0 w-[166px] h-[40px]">
          <Image src={'/sofa.png'} alt={'Sofa pic'} width={40} height={40}></Image>
          <div className="text-[26px] leading-[120%] font-medium text-primerypurple">Comforty</div>
        </div>

        {/* Right side:  */}
        <Link href="/cart">
          <button className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md mr-3">
            <FaShoppingCart className="text-xl" />
            <span className="hidden sm:inline">Cart</span>
            <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-sm rounded-full">
              2
            </div>
          </button>
        </Link>
        
      </div>
    </div>
  )
}

export default SecTopbar
