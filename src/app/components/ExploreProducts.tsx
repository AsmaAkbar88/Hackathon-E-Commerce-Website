import React from 'react'
import Image from 'next/image'

export default  function ExploreProduct  ()  {
  return (
    <div className='w-full -mt-80 '>
      <div className='  max-w-5xl mx-auto grid grid-cols-1   gap-10  md:grid-cols-[auto_1fr]'>
{/* text div  */}

<div className='relative'>
  <h3 className='absolute  text-[24px] -rotate-90 w-[648px] text-center uppercase
   -left-80 top-[210px]
  items-center '>
  Explore new and popular styles
  </h3>
</div>




 {/* image main div  */}
 <div className='flex items-center'>


 {/* image big div  */}
 <div  className="w-[55%]">
  <Image src={'/exploreProduct/1sst.jpg'} alt={'"Orange modern chair"'}
  width={500}
  height={500}
  ></Image>
 </div>


  {/* 4th main div  */}
  <div className='grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]'>
    
<div>                                                        {/*  1st */}
<Image
                src='/exploreProduct/2nd.png'
                alt="Gray upholstered chair"
              
                width={500}
                height={500}
              />

</div>

<div>                                                        {/*  2nd */}
<Image
                src='/exploreProduct/3rd.png'
                alt="Gray upholstered chair"
              
                width={500}
                height={500}
              />

</div>

<div>                                                        {/* 3rd */}
<Image
                src='/exploreProduct/4ht.png'
                alt="Gray upholstered chair"
                
                width={500}
                height={500}
              />

</div>



<div>                                                        {/*   4th */}
<Image
                src='/exploreProduct/5th.png'
                alt="Gray upholstered chair"
                
                width={500}
                height={500}
              />

</div>
  </div>
 </div>

      </div>
    </div>
  )
}

