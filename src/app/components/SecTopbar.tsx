// ok 
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Firsttopbar from './Firsttopbar'

const SecTopbar = () => {
  return (

    <div>
      <Firsttopbar />
      <div className=" bg-[#F0F2F3]  h-[84px]">
        <div className="max-w-5xl mx-auto h-full flex justify-between
         items-center">

          {/* Left side:  */}
          <div className="flex  gap-2 ">
            <Image src={'/sofa.png'} alt={'Sofa pic'} width={40} height={40}></Image>
            <div className="text-[26px] leading-[120%] font-medium
           text-blackPrimery">Comforty</div>
          </div>



          {/* Right side:  */}
          <Link href="/Cart">
            <button className="flex items-center gap-4
           bg-white py-2 px-3
          rounded-md">
              <FaShoppingCart className="w-[16px] h-[16px]" />
              <span className='text-[12px] text-blackPrimery'>Cart</span>

              <div className="flex items-center justify-center
             px-2 py-1 bg-skyblue text-white text-xs rounded-full">
                2
              </div>
            </button>
          </Link>

        </div>
      </div>
    </div>

  )
}

export default SecTopbar
