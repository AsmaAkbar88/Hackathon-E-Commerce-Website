// ok

import React from "react";
import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className=" max-w-5xl mx-auto flex justify-between
    items-center pt-8 ">



      <div className="flex justify-center items-center">
        <Image src="/logo/logo1.png"
          alt="Zaphier Logo" width={85} height={87} />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/logo/logo2.png"
          alt="Pipe Drive Logo"
          width={107}
          height={109}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/logo/logo3.png"
          alt="Cib Bank Logo"
          width={135}
          height={139}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/logo/logo4.png"
          alt="Company 4 Logo"
          width={63}
          height={65}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/logo/logo5.png"
          alt="Burnt Toast Logo"
          width={98}
          height={101}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/logo/logo6.png"
          alt="Panda Doc Logo"
          width={113}
          height={115}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/logo/logo7.png" alt="Moz Logo" width={84} height={87} />
      </div>
    </div>
  );
};

export default CompanyLogo;
