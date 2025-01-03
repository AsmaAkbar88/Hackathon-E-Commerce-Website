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


    <div className="relative aspect-square ">
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


   export default function OurProduct  ()  {
   const arrayVerproducts: InterProduct[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/OurProduct/1st.png",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/OurProduct/2nd.jpg",
      isSale: true,
    },
    { id: 3, title: "Library Stool Chair", 

      price: 20, image: "/OurProduct/3rd.jpg" },
      

      
    { id: 4, title: "Library Stool Chair"
      , price: 20, image: "/OurProduct/4th.jpg" },
      

    //   2nd row 


    {
        id: 5,
        title: "Library Stool Chair",
        price: 20,
        image: "/OurProduct/12.png",
        isNew: true,
      },
      {
        id: 6,
        title: "Library Stool Chair",
        price: 20,
        originalPrice: 30,
        image: "/OurProduct/6th.jpg",
        isSale: true,
      },
      { id: 7, title: "Library Stool Chair", 
  
        price: 20, image: "/OurProduct/7th.jpg" },
        
  
        
      { id: 8, title: "Library Stool Chair"
        , price: 20, image: "/OurProduct/8th.png" }
   
  ];

  return (
    
<section className=" w-full h-[84px] mb-[800px]">
  <div className="  max-w-5xl mx-auto h-full   mt-28">
    


    <div className="">

{/* heading div  */}
    <div className=" mb-10 flex items-center justify-center">
    <h1 className=' text-black font-bold 
    text-4xl text-center '>Our Products</h1>
  </div>


   {/* image div and botm din  */}
  <div className="  py-10"> 

      <div className="grid  gap-12 grid-cols-4">
        {arrayVerproducts.map((arrayVerproduct) => (
          <Productbtom key={arrayVerproduct.id}
           NewNamproduct={arrayVerproduct} />
        ))}
      </div>
    </div>

      </div>
      </div>
      </section>
    
  )
}



