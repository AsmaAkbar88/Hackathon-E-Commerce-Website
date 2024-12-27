import React from 'react'
import Image from 'next/image'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterestP,
    FaYoutube,
  } from "react-icons/fa";

  import { FaPaypal, FaCcMastercard,  FaCcAmex,FaCcVisa } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='w-full mt-[800px]
     bg-white border border-gray-200 px-4'>
      <div className='max-w-5xl space-x-4 mx-auto mt-12 flex items-stretch
       justify-between gap-8
       py-12 '>

{/* 1st div  */}

<div className='flex flex-col w-full items-start'>
<div className='flex items-center gap-2'>


        <Image src={'/sofa.png'} alt={'Sofa log'} width={ 40} 
        height={23.34}>
        </Image>
        <span className='text-[26px] font-semibold '>Comforty</span>
     </div>

<div className='w-full'><h1 className='text-md text-[#272343] mt-5'>
Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
Cras egestas purus </h1></div>

<div className='flex justify-center gap-4 mt-4'>
<a href="https://facebook.com"
target='_blank'
className='"text-gray-600 hover:text-[#007580] text-xl p-2
border-2 border-transparent rounded-full hover:border-[#007580]'>
    <FaFacebookF/>
</a>

<a href="https://twitter.com"
target='_blank'
className='"text-gray-600 hover:text-[#007580] text-xl p-2
border-2 border-transparent rounded-full hover:border-[#007580]'>
    <FaTwitter/>
    
</a>
 
<a href="https://instagram.com"
target='_blank'
className='"text-gray-600 hover:text-[#007580] text-xl p-2
border-2 border-transparent rounded-full hover:border-[#007580]'>
    <FaInstagram/>
</a>

<a href="https://pinterest.com"
target='_blank'
className='"text-gray-600 hover:text-[#007580] text-xl p-2
border-2 border-transparent rounded-full hover:border-[#007580]'>
    <FaPinterestP/>
</a>

<a href="https://youtube.com"
target='_blank'
className='"text-gray-600 hover:text-[#007580] text-xl p-2
border-2 border-transparent rounded-full hover:border-[#007580]'>
    <FaYoutube/>
</a>

</div>
</div>
{/* ----------------------------------------------------------------------------- */}
{/* 2nd div  */}
<div className=' w-full '>
    <div className=' flex uppercase font-semibold text-[#9A9CAA] text-[14px]'>Category</div>
    <ul className='mt-4 text-[#272343] space-y-2 '>
        <li>
            <a href="#"
            className=' hover:text-[#007580] hover:underline'>Sofa</a>
        </li>
        <li>
            <a href="#"
            className=' hover:text-[#007580] hover:underline'>Armchair</a>
        </li>
        <li>
            <a href="#"
            className=' hover:text-[#007580] hover:underline'>wing Chair</a>
        </li>
        <li>
            <a href="#"
            className=' hover:text-[#007580] hover:underline'>Desk Chair</a>
        </li>
        <li>
            <a href="#"
            className=' hover:text-[#007580] hover:underline'>Wooden Chair</a>
        </li>
        <li>
            <a href="#"
            className=' hover:text-[#007580] hover:underline'>Park Bench</a>
        </li>
    </ul>
    
    
</div>
{/* ---------------------------------------------------------------------------------- */}

{/* 3rd div  */}
<div className='w-full'>
    <h1 className='text-[#9A9CAA] font-semibold text-[14px]'>Support</h1>

    <ul className='mt-4 text-[#272343] space-y-2'>
        <li>
        <a href="#" target='_blank' className='hover:text-[#007580] 
        hover:underline
'>Help & Support</a>
        </li>
        <li>
        <a href="#" target='_blank' className='hover:text-[#007580] 
        hover:underline
'>Tearms & Conditions</a>
        </li>

        <li>
        <a href="#" target='_blank' className='hover:text-[#007580] 
        hover:underline
'>Privacy Policy</a>
        </li>

        <li>
        <a href="#" target='_blank' className='hover:text-[#007580] 
        hover:underline
'>Help</a>
        </li>

        </ul>
</div>
{/* ----------------------------------------------------------------------------- */}
{/* 4th div  */}



<div className='w-full'>
    
<h1 className='text-[#9A9CAA] uppercase font-semibold text-[14px]'>Newsletter</h1>
<div className='flex gap-2 mt-4 '>
    <input type="email" placeholder='Your Email' 
    className='px-8  border border-gray-400 rounded-md py-2'/>
    <button className='bg-[#029FAE]  hover:bg-teal-700 px-6 py-2 
     text-white text-sm 
    rounded-md'>Subscribe</button>
</div>
<h3 className='text-[#272343] text-[15px] mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</h3>

</div>
</div>
     
    {/* ----------------------------------------------------------------------------- */}
    <div className='border-t'>     <div className=' text-[#9A9CAA] flex pt-8
     max-w-5xl mx-auto justify-between items-center'>
        <p>
        @ 2021 - Blogy - Designed & Developed by {" "}
        <a href="#" className="text-[#272343] hover:underline">
              Zakirsoft
            </a>
        </p>
        <div className='flex gap-2 mb-6'> 
        
         <FaCcMastercard size={40} />
         <FaPaypal size={40}/>  
           <FaCcAmex size={40}/>
            <FaCcVisa size={40}/>
        </div>

        </div>

     </div>
    
    </div>

  )
}

export default Footer
