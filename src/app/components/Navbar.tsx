"use client";

import Link from "next/link";
import React, { useState } from "react";
import SecTopbar from "./SecTopbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div> <SecTopbar/>
       <nav className=" h-[74px] ">
      <div className="flex items-center max-w-5xl h-full mx-auto justify-between">



        {/* left side:  */}

        <div className="flex  gap-8 ">
          <Link href="/" className="hover:text-skyblue text-gray
          text-[14px] font-medium leading[110%]">
            Home
          </Link>
          <Link href={"#"} className="hover:text-skyblue text-gray
          text-[14px] font-medium leading[110%]">
            Shop
          </Link>
          <Link href="/product" className="hover:text-skyblue text-gray
          text-[14px] font-medium leading[110%]">
            Product
          </Link>
          <Link href={"#"} className="hover:text-skyblue text-gray
          text-[14px] font-medium leading[110%]">
            Pages
          </Link>
          <Link href="/about" className="hover:text-skyblue text-gray
          text-[14px] font-medium leading[110%]">
            About
          </Link>
        </div>

        {/* Right side  */}

        <div className="flex items-center gap-2 text-[14px]">
          <span className="font-normal text-gray ">
            Contact:
          </span>
          <span className="font-medium text-[#272343]">
            (808) 555-0111
          </span>
        </div>
      </div>

      {/* Mobile Menu Items (Visible below 768px) */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-4 px-4">
          <Link href="/" className="text-[#007580] text-[14px] font-medium">
            Home
          </Link>
          <Link href={""} className="text-[14px] font-medium">
            Shop
          </Link>
          <Link href="/product" className="text-[14px] font-medium">
            Product
          </Link>
          <Link href={"#"} className="text-[14px] font-medium">
            Pages
          </Link>
          <Link href="/about" className="text-[14px] font-medium">
            About
          </Link>
        </div>
        
  
      )}
    </nav>
    </div>
  );
};

export default Navbar;
