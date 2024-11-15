import Image from 'next/image'
import { Heebo } from 'next/font/google';

const heebo = Heebo({subsets:['latin']});

const Hero = () => {
  return (
    <div className=" p-6 my-[66px] mx-auto w-[92%] md:w-[1030px] md:h-[308px] flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Text Div */}
      <div className=" md:w-[521px] md:h-[305px]  flex flex-col items-start md:justify-between justify-evenly">
        <h1 className={`${heebo.className} text-[27px] md:text-[48px] font-black text-myBlack`}>
          Hi, I am John, <br />
          Creative Technologist
        </h1>
        <p className={`${heebo.className} text-myBlack text-[16px] font-normal`}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className={`${heebo.className} w-[205px] h-[50px] text-[18px] text-white font-medium bg-myPink rounded-sm shadow-md shadow-black/60 `}>Download Resume</button>
      </div>
      {/* Image Div */}
      <div className=" w-[292px] h-[299px] relative ">
        <Image
          className="z-50"
          src={"/assets/hero-image.png"}
          alt="hero-image "
          width={292}
          height={299}
        />
        <div className="bg-heroElipse w-[292px] h-[299px] rounded-full -z-10 top-2 right-2 absolute " />
      </div>
    </div>
  );
}

export default Hero
