// ok 

import React from 'react'
import Image from 'next/image'
interface CategrayInterface {
    id : number,
    name:string
    products: string,
    image : string,
    href : string
}
const  BotmCategray = ({NewNamCategray} : {NewNamCategray : CategrayInterface} ) => (
  <div key= {NewNamCategray.id} className='group overflow-hidden'>
    <div className=' relative w-full'>
      <Image src={NewNamCategray.image} alt={NewNamCategray.name} width={424} height={424} className='
       object-cover
      transition-transform duration-300  group-hover:scale-105
       '></Image>
      <div className='absolute inset-0 bg-gradient-to-t from-black/60'>
      <div className=' absolute bottom-0 left-0 text-[#FFFFFF] mb-3-0 p-6'><h3 className=' mb-2  font-semibold text-xl '>  {NewNamCategray.products}</h3>
      <p className='text-sm'>{NewNamCategray.products}</p>
      </div>
      </div>
    </div>
  </div>
)

export default function ArrayCategories() {
    const categories = [
      {
        id:1,
        name: "Wing Chair",
        products: "3,584 Products",
        image: "/tproduct/1st.png",
        href: "/categories/wing-chair",
      },
      {id:2,
        name: "Wooden Chair",
        products: "157 Products",
        image: "/tproduct/2nd.png",
        href: "/categories/wooden-chair",
      },
      {id:3,
        name: "Desk Chair",
        products: "154 Products",
        image: "/tproduct/3rd.png",
        href: "/categories/desk-chair",
      },
    ];
  

    return (
      <div className='py-[28rem] px-[9rem]'>
        <div className='max-w-5xl mx-auto '>
          <h1 className='text-4xl text-blackPrimery font-semibold'>Top categories</h1>
        </div>

        <div className='grid grid-cols-3 gap-6 pt-16'>
          {categories.map((catergty) => (
          <BotmCategray key ={ catergty.id} NewNamCategray={catergty} />
        ))}</div>
     
      </div>
    )
  }