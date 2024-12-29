import React from 'react'
import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'

const page = () => {
  return (
    <div className='max-w-5xl mx-auto  pt-24'>
    
   {/* main div  */}

   <div className='flex gap-8 items-center  justify-between '>
    <Image src={'/instgrm/3rd.jpg'} alt={'Chair'} width={475} height={407}></Image>
    <div className=''>
        <h1 className='text-[#272343] text-6xl title-font font-bold mb-14 '>Library Stool Chair</h1>
        <button className="bg-[#029FAE] hover:bg-[#029FAE] rounded-full
             border-0 py-2 px-5 
              text-lg inline-flex text-white mb-14  ">$20.00 USD</button>

        <p className="leading-relaxed mb-12 border-t-2 pt-6 border-gray-300">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
          cornhole raw denim forage brooklyn.
        </p>
           
            <button className="inline-flex items-center
             bg-gray-100 border-0 py-1 px-3 focus:outline-none mb-4 hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    {/* <div className='pt-12 bg-slate-400 items-center  flex gap-2 '> */}
    <FaShoppingCart className='h-4 w-4'/ >
    <div  className='w-40 h-6 text-center '>Add To cart</div>
        {/* </div> */}
</button>

    </div>
   </div>


{/* 2nd div  */}
<div className=' pt-24'>


    <div className='flex justify-between items-center'>
       <h1 className='text-[40px] '>Featured Products</h1>
    <div className=' border-b-2 border-black pb-0  '>View all</div>
    </div>
</div>
<div className='grid grid-cols-5 gap-6 pt-24 mb-24 '>
    <Image src={'/pages/1st.png'} alt={''} width={270} height={263}></Image>
    <Image src={'/pages/2nd.png'} alt={''} width={270} height={263}></Image>
    <Image src={'/pages/3rd.png'} alt={''} width={270} height={263}></Image>
    <Image src={'/pages/4th.jpg'} alt={''} width={270} height={263}></Image>
    <Image src={'/pages/5th.png'} alt={''} width={270} height={263}></Image>
</div>



      </div>
    
  )
}

export default page
