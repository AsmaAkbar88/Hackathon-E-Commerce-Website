import React from 'react'
import Image from 'next/image'
import { CiHeart } from 'react-icons/ci'
import { RiDeleteBin6Line } from 'react-icons/ri'
const page = () => {
  return (
    <div className='max-w-5xl mx-auto w-full pt-12 '>
{/* dono div ko deal kr rhi hy   */}
        <div className='flex justify-between'>

{/* right side   */}
<div className=''>

<h1 className='text-[20px] font-bold '>Bag</h1>

<div className=''>
<div className=' flex pt-12 gap-6 items-center '>

<div className=' '>
    <Image src={'/allproduct/3rd.jpg'} alt={'.'} width={150} height={150}></Image>
</div>


<div className='space-y-3'>
    <p>Library Stool Chair</p>
    <p>Ashen Slate/Cobalt Bliss</p>

    <div className='flex gap-6'> 
        <p>Size <span>1</span></p>
        <p>Quality <span>1</span></p>
        </div>
  <div className='flex gap-6 items-center'>
  <CiHeart />
  <RiDeleteBin6Line />
  </div>
</div>
<div className='ml-40 -mt-24'>
    <p>MRP: $99</p>
</div>
</div>

{/* -------------------------------------------- 2nd right chairt   */}

{/* <div className='flex pt-16 gap-6  mb-24 border-t-2 mt-16'> */}


<div className=''>


<div className=''>
<div className=' flex pt-12 gap-6 items-center mb-24 border-t-2 mt-16'>

<div className=' '>
    <Image src={'/allproduct/9th.png'} alt={'.'} width={150} height={150}></Image>
</div>


<div className='space-y-3'>
    <p>Library Stool Chair</p>
    <p>Ashen Slate/Cobalt Bliss</p>

    <div className='flex gap-6'> 
        <p>Size <span>1</span></p>
        <p>Quality <span>1</span></p>
        </div>
  <div className='flex gap-6 items-center'>
  <CiHeart />
  <RiDeleteBin6Line />
  </div>
</div>
<div className='ml-40 -mt-24'>
    <p>MRP: $99</p>
</div>
</div>
</div>
</div>
</div>
</div>


{/* ================================================================== */}

<div className=' mr-4 '>


    <div className='pt-18'>
    <h1 className='text-xl font-bold '>Summary</h1>
<div className=' gap-20 pt-16 space-y-2'>
    <div className='text-sm flex justify-between'>
    <p>Subtotal </p>
    <p>$198.00</p>
    </div>
    <div className='pb-4 text-sm flex justify-between '>
    <p>Estimated Delivery & Handling </p>
    <p>Free</p>
    </div>
    <div className=' pt-4  border-b-2 border-t-2 pb-4  text-sm flex justify-between'>
    <p className=''>Total  </p>
    <p>$198.00</p>
    </div>
  </div>

    <div className='flex pt-12 justify-center'>
    <button className='bg-blue-400  rounded-full px-12 py-2
     text-white '>Member Checkout</button></div>
    
   </div>
   
</div>

        </div>
    
    </div>
  )
}

export default page
