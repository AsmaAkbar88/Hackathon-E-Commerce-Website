// ok 

import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='w-full h-[750px] '>
      <div className='flex items-center  max-w-5xl bg-[#F0F2F3] 
            justify-evenly mx-auto h-full'>
        {/* left section  */}

        <div className='space-y-8 ml-12'>
          {/* 3 div left section  */}
          <div className='text-[14px] leading-[110%]'>Welcome to chairy</div>
          <div className='text-[60px] font-semibold leading-[110%] max-w-2xl
                    mx-auto '>Best Furniture
            Collection for your
            interior.</div>

          <button className='flex items-center justify-center py-3 
                         px-6  rounded-md text-white  bg-skyblue '>
            <span className='flex items-center text-[12px] 
                        font-semibold gap-2'>Shop Now
              <FaArrowRight className='text-[14px] mt-1' />
            </span>
          </button>

        </div>



        {/* right section   */}
        <div className='flex justify-center items-center mr-12'>
          <Image src={'/heroPic.png'} alt={'Product Image'} width={434} height={584}>
          </Image></div>
      </div>
    </div>
  )
}

export default Hero
