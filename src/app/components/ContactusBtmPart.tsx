import React from 'react'
import { BsTrophy } from 'react-icons/bs'
import { GoUnverified } from 'react-icons/go'
import { MdSupportAgent } from 'react-icons/md'

const ContactusBtmPart = () => {
  return (
    <div className='max-w-5xl mx-auto w-full bg-[#F4F4F4]'>
       <div className='flex justify-between py-12 px-8 mb-24'>

{/* 1st div  */}
        <div className='flex gap-4 '>
<div><BsTrophy className='w-[60px] h-[60px]' /></div>
<div>
    <p className='text-[25px] font-semibold'>High Quality</p>
    <span className='text-[20px] text-[#898989]'>crafted from top materials

    </span>
</div>
</div>
{/* --------------- */}

{/* 2nd div  */}

<div className='flex gap-4 '>
<div>< GoUnverified className='w-[60px] h-[60px]' /></div>
<div>
    <p className='text-[25px] font-semibold'>Warranty Protection</p>
    <span className='text-[20px] text-[#898989]'>Over 2 years

    </span>
</div>
</div>
{/* ------------------------ */}


{/* 3rd div  */}

<div className='flex gap-4 '>
<div><MdSupportAgent className='w-[60px] h-[60px]' /></div>
<div>
    <p className='text-[25px] font-semibold'>24 / 7 Support</p>
    <span className='text-[20px] text-[#898989]'>Dedicated support

    </span>
</div>
</div>


        
       </div>
    </div>
  )
}

export default ContactusBtmPart
