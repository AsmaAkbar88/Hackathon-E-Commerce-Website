import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { GoClockFill } from 'react-icons/go'
import ContactusBtmPart from '../components/ContactusBtmPart'


const page = () => {
  return (
    <div className='max-w-5xl mx-auto w-full pt-12 pb-12'>
      <div  className='text-center'>
        <h1 className='text-[36px] font-semibold'>
        Get In Touch With Us
        </h1>
        < p className='text-[16px] text-[#9F9F9F] pt-4 max-w-2xl mx-auto'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>

{/* BOTH DIV CNTR  */}
<div className='pt-24 flex  justify-between'>

    {/* right side div  */}
    <div className='space-y-12  '>
  

  {/* addres div  */}
  <div className='flex gap-4 '>
    <FaMapMarkerAlt className='h-[27.59px] w-[22px]' />
    <div>
        <p className='text-[24px] font-medium'>Address</p>
        <p className='text-[16px] max-w-40 mx-auto'>236 5th SE Avenue, New York NY10000, United States</p>
    </div>
  </div>
{/* -------------- */}


{/*Phone div  */}
<div className='flex gap-4 '>

<div className=''>
<FaPhoneAlt className='h-[27.59px] w-[22px]' />
</div>
<div>
    <p className='text-[24px] font-medium'>Phone</p>
    <p className='text-[16px] max-w-52  mx-auto '>Mobile: +(84) 546-6789
    Hotline: +(84) 456-6789</p>
</div>
</div>

{/* ------------------------- */}

{/* worktime div  */}
<div className='flex gap-4 '>

<div className=''>
<GoClockFill className='h-[27.59px] w-[22px]' />
</div>
<div>
    <p className='text-[24px] font-medium '>Working Time</p>
    <p className='text-[16px] max-w-36 mx-auto'>Monday-Friday: 9:00 - 22:00
    Saturday-Sunday: 9:00 - 21:00</p>
</div>
</div>





    </div>


{/* left side div  */}
<div className=' ml-96  '>
<form action=" " className=''>

    <div className=''>
    <label htmlFor="Name" className='text-[16px] '>Your Name</label>
     <input type="text" id= "name" placeholder='Your Name'
      className='border 
     border-[#9F9F9F]  mt-4  px-24  py-4 '/></div>


<div className='mt-8'>
    <label htmlFor="Name" className='text-[16px] '>Email Address</label>
     <input type="Email" id= "email" placeholder='Enter Your Email'
      className='border  
     border-[#9F9F9F] mt-4 px-24  py-4 '/></div>


<div className='mt-8'>
    <label htmlFor="Name" className='text-[16px] '>Subject</label>
     <input type="text" id= "Subject" placeholder='This is an Optional'
      className='border  
     border-[#9F9F9F]  mt-4 px-24  py-4 '/></div>

<div className='mt-8'>
    <label htmlFor="Name" className='text-[16px] '>Message</label>
     <input type="text" id= "message" placeholder='Enter Your Message'
      className='border 
     border-[#9F9F9F] mt-8  px-24  py-12 '/></div>


<button type='submit' className='bg-sky-400 rounded-md px-12 py-2 mt-16 mb-16'> Submit</button>

    
</form>
</div>


<div>

</div>


</div>


<ContactusBtmPart />

    </div>
  )
}

export default page
