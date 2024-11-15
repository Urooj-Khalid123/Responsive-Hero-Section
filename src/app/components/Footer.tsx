import { Heebo } from "next/font/google";
import Link from "next/link";
import { FaFacebookSquare,  FaInstagram, FaTwitter,  FaLinkedin } from "react-icons/fa";


const heebo = Heebo({subsets:["latin"]})

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-footerBackground h-[243px] space-y-6">
      <div className="flex space-x-5">
        <Link href={""}>
          <FaFacebookSquare className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaInstagram className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaTwitter className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          {" "}
          <FaLinkedin className="w-[30px] h-[30px]" />
        </Link>
      </div>
      <p className={`${heebo.className} text-center font-medium text-[22px] `}>
        Copyright ©2024 All rights reserved
      </p>
    </div>
  );
}

export default Footer
