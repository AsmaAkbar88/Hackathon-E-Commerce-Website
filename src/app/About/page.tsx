import React from 'react'
import Image from 'next/image'
import { FaTruck } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import { IoFileTrayOutline } from 'react-icons/io5'
import { BiSolidLeaf } from 'react-icons/bi'




const page = () => {
  return (
    <div className='max-w-5xl mx-auto w-full '>


        <div className='flex gap-6 mt-24  '>
 {/* both div ko  */}



 {/* right side div  */}
 <div className='bg-sky-400 w-[672px] px-6'>

<div>
    <h1 className='text-[32px] font-bold pt-8 ' > About Us - Comforty</h1>
    <p className='text-[18px] pt-6  '>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
  
        <button className='text-[16px] text-white pt-12'>View collection</button>
    
</div>
 </div>

{/* left side div  */}
<div>
    <Image src={'/about/block.png'} alt={''} width={619} height={478}></Image>
</div>
  </div>
{/* ===================================== */}

<div className='mt-24'>
    <div className='flex justify-center '>
        <h1 className='text-[32px] font-bold'>What makes our Brand Different</h1>
    </div >
 
<div className='flex gap-16 '>
 {/* 1  */}
    <div className='pt-16 space-y-4'>
    <FaTruck/>
    <h4 className='text-[20px]'>Next day as standard</h4>
    <p className='text-[16px] '>Order before 3pm and get your order the next day as standard</p>
    </div>



{/* 2  */}
<div className='pt-16 space-y-4'>
    <FaCheck/>
    <h4 className='text-[20px]'>Next day as standard</h4>
    <p className='text-[16px] '>Order before 3pm and get your order the next day as standard</p>
    </div>



    {/* 3 */}
    <div className='pt-16 space-y-4'>
    <IoFileTrayOutline/>
    <h4 className='text-[20px]'>Next day as standard</h4>
    <p className='text-[16px] '>Order before 3pm and get your order the next day as standard</p>
    </div>


    {/* 4  */}

    <div className='pt-16 space-y-4'>
    <BiSolidLeaf/>
    <h4 className='text-[20px]'>Next day as standard</h4>
    <p className='text-[16px] '>Order before 3pm and get your order the next day as standard</p>
    </div>
    </div>




</div>

{/* ============================================= */}

<div className='pt-24'>
    <div className=''>
        <h1 className='text-[32px] font-semibold'>Our Popular Products </h1>
    </div>

    <div className='flex pt-16 gap-6 mb-24'>


{/* 1 */}
        <div>  
            <Image src={'/about/sofa.jpg'} alt={''} width={580} height={375} className='mx-auto object-cover'></Image>
              <h4 className='text-20px pt-4'>The Poplar suede sofa</h4>
              <p className='pt-2'>$99.00</p>
                  </div>

                  {/* 2 */}

                  <div>  
            <Image src={'/about/2nd.jpg'} alt={''} width={305} height={375} className='mx-auto object-cover'></Image>
              <h4 className='text-20px pt-4'>The Poplar suede sofa</h4>
              <p className='pt-2'>$99.00</p>
                  </div>
{/* 3  */}

<div>  
            <Image src={'/about/3rd.jpg'} alt={''} width={305} height={375} className=' mx-auto object-cover'></Image>
              <h4 className='text-20px pt-4'>The Poplar suede sofa</h4>
              <p className='pt-2'>$99.00</p>
                  </div>
    </div>
</div>








    </div>
  )
}

export default page
