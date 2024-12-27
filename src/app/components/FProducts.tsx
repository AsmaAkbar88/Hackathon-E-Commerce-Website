// ok 


import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { ShoppingCart } from "lucide-react";



interface InterProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

const ProductCardw = ({ NewNamproduct }:
  { NewNamproduct: InterProduct }) => (
  <div key={NewNamproduct.id} className="group ">


    <div className="relative aspect-square ">
      {NewNamproduct.isNew && (
        <div className="absolute text-xs left-3 top-3 px-2 py-1
         bg-emerald-500 hover:bg-emerald-600">
          New
        </div>
      )}


      {NewNamproduct.isSale && (
        <div className="absolute text-xs  px-2 py-1 
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
          className="h-full w-full object-cover 
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
        <h3 className="text-[16px]  leading-[130%] text-blackPrimery hover:text-[#007580]">{NewNamproduct.title}</h3>


        <div className="mt-1  flex items-center gap-2">
          <span className="text-[18px] font-bold  text-blackPrimery">
            ${NewNamproduct.price}
          </span>

          {NewNamproduct.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${NewNamproduct.originalPrice}
            </span>
          )}
        </div>
      </div>


      <button
        className="rounded-md border p-2 bg-slate-200 hover:bg-[#029FAE] hover:text-white
         "
      // aria-label={` ${product.title} to cart`}
      >
        <ShoppingCart className="h-5 w-5" />
      </button>


    </div>
  </div>
);


const FeaturedProductsPage = () => {
  const arrayVerproducts: InterProduct[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/fproduct/1st.jpg",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/fproduct/2nd.jpg",
      isSale: true,
    },
    {
      id: 3, title: "Library Stool Chair",

      price: 20, image: "/fproduct/3rd.jpg"
    },



    {
      id: 4, title: "Library Stool Chair"
      , price: 20, image: "/fproduct/4th.jpg"
    },

  ];

  return (

    <section className=" w-full h-[84px]">
      <div className="  max-w-5xl mx-auto h-full flex  pt-8">



        <div className="">

          {/* heading div  */}
          <div className=" mb-4 flex items-center">
            <h1 className='mr-5 text-blackPrimery font-bold 
    text-3xl border-l-8 pl-3'>FEATURED PRODUCTS</h1>
          </div>


          {/* image div and botm din  */}
          <div className="  py-10">

            <div className="grid  gap-12 grid-cols-4">
              {arrayVerproducts.map((arrayVerproduct) => (
                <ProductCardw key={arrayVerproduct.id}
                  NewNamproduct={arrayVerproduct} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}

export default FeaturedProductsPage
