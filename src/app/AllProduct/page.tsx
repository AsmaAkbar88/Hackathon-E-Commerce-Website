// ok 


import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { ShoppingCart } from "lucide-react";



interface InterProduct  {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

const Productbtom = ({ NewNamproduct }: 
  { NewNamproduct: InterProduct }) => (
  <div key={NewNamproduct.id} className="group ">


    <div className="relative aspect-square rounded-lg">
      {NewNamproduct.isNew && (
        <div className="absolute text-xs left-3 top-3 px-1 py-1
         bg-emerald-500 hover:bg-emerald-600">
          New
        </div>
      )}

      
      {NewNamproduct.isSale && (
        <div className="absolute text-xs  px-1 py-1 
        left-3 top-3
         bg-orange-500 hover:bg-orange-600">
          Sale
        </div>
      )}
      <Link href={`/product/${NewNamproduct.id}`}>
      <Image
          src={NewNamproduct.image}
          alt={NewNamproduct.title}
          height={312}
          width={312}
          className="h-full  w-full object-cover
          transition-transform duration-300 
          group-hover:scale-105"
          // aria-label={`View details of ${product.title}`}
        />
      </Link>
    </div>



    {/* bottm div  */}
    <div className="mt-4 flex items-center
     justify-between">
      <div>
        <h3 className="text-xl hover:text-[#007580]  text-[#1C1B1F]">{NewNamproduct.title}</h3>


        <div className="mt-1  flex items-center gap-2">
          <span className="text-lg font-bold  text-[#1C1B1F]">
            ${NewNamproduct.price}
          </span>
          {NewNamproduct.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${NewNamproduct.originalPrice}
            </span>
          )}
        </div>
      </div>


      <button
        className="rounded-md bg border  bg-[#ffffff] p-2 text-black  
         hover:bg-[#2aa79c]"
        // aria-label={` ${product.title} to cart`}
      >
        <ShoppingCart className="h-5 w-5" />
      </button>


    </div>
  </div>
);


   export default function AllProduct  ()  {
   const arrayVerproducts: InterProduct[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/allProduct/1st.png",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/allProduct/2nd.jpg",
      isSale: true,
    },
    { id: 3, title: "Library Stool Chair", 

      price: 20, image: "/allProduct/3rd.jpg" },
      

      
    { id: 4, title: "Library Stool Chair"
      , price: 20, image: "/allProduct/4th.jpg" },
      

    //   2nd row 


    {
        id: 5,
        title: "Library Stool Chair",
        price: 20,
        image: "/allProduct/5th.png",
        isNew: true,
      },
      {
        id: 6,
        title: "Library Stool Chair",
        price: 20,
        originalPrice: 30,
        image: "/allProduct/6th.jpg",
        isSale: true,
      },
      { id: 7, title: "Library Stool Chair", 
  
        price: 20, image: "/allProduct/7th.jpg" },
        
  
        
      { id: 8, title: "Library Stool Chair"
        , price: 20, image: "/allProduct/8th.png" },

        // 3rd row 

        {
            id: 9,
            title: "Library Stool Chair",
            price: 20,
            image: "/allProduct/9th.png",
            isNew: true,
          },
          {
            id: 10,
            title: "Library Stool Chair",
            price: 20,
            originalPrice: 30,
            image: "/allProduct/10th.jpg",
            isSale: true,
          },
          { id: 11, title: "Library Stool Chair", 
      
            price: 20, image: "/allProduct/11th.jpg" },
            
      
            
          { id: 12, title: "Library Stool Chair"
            , price: 20, image: "/allProduct/12th.png" }
   
  ];

  return (
    
<section className="  w-full ">
  <div className="  max-w-5xl mx-auto h-full  mt-28">
    


    <div className="">

{/* heading div  */}
    <div className=" mb-10 flex items-center justify-center">
    <h1 className=' text-black font-bold 
    text-4xl text-center '>Our Products</h1>
  </div>


   {/* image div and botm div  */}
  <div className="  py-10"> 

      <div className="grid  gap-12 grid-cols-4">
        {arrayVerproducts.map((arrayVerproduct) => (
          <Productbtom key={arrayVerproduct.id}
           NewNamproduct={arrayVerproduct} />
        ))}
      </div>
    </div>
    {/* ------------------------------------------------------------  */}

{/* 2nd div  */}
<section className='  bg-gray-200 mt-24 mb-24' >
<div className=' '>

    <div className='pt-12 flex items-center justify-center'>
        <h1 className='text-[50px] capitalize'>
            Or subscribe to the newsletter</h1></div>
            </div>
            <div>
        <span className='pt-8 flex gap-4 items-center justify-center'>
        <input className='border  px-12 rounded-md border-black py-2' type="email" 
        placeholder='Email Address'/>
        <button type='submit' className='bg-gray-500 px-8 py-2 rounded-md'>Submit</button>
        </span>
        
        </div>


{/* 2nd instrgm section  */}


<div className=' container mx-auto px-4 py-20 pt-16'>
    <div className=''><h1 className=' mb-12 text-[40px] text-center '>Follow Products And Discounts On Instagram
    </h1></div>
<div className='grid grid-cols-6 gap-6 '>
    <Image src={'/instgrm/1st.png'} alt={''} width={186} height={186} className="max-w-full"></Image>
    <Image src={'/instgrm/2nd.png'} alt={''} width={200} height={200} className="max-w-full"></Image>
    <Image src={'/instgrm/3rd.jpg'} alt={''} width={200} height={200} className="max-w-full"></Image>
    <Image src={'/instgrm/4th.png'} alt={''} width={200} height={200} className="max-w-full"></Image>
    <Image src={'/instgrm/5th.jpg'} alt={''} width={196} height={196} className="max-w-full"></Image>
    <Image src={'/instgrm/6th.png'} alt={''} width={200} height={200} className="max-w-full"></Image>
</div>



</div>



        </section>

      </div>
      
      </div>
      
      </section>
     
  )
}



