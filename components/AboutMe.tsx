import React from 'react';
import Image from 'next/image';
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiFlutter,
  SiTypescript,
  SiChakraui,
  SiMongodb,
  SiNodedotjs,
  SiJasmine,
  SiRedux,
} from 'react-icons/si';

import { FaReact, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

const AboutMe = () => {
  return (
    <div className="flex gap-8 flex-col items-center">
      <div className="flex flex-col items-start justify-start w-full">
        <div className="text-[#97979e] font-bold">Introduction</div>
        <div className="font-bold text-3xl">About Me</div>
      </div>

      <div className="w-[200px] max-w-[500px]">
        <div className="relative mt-12">
          <div className="absolute aspect-square left-1/2 -translate-x-1/2 h-[220px] pulse-container rounded-full blur-[2px] inset-0  bg-gradient-to-r origin-center from-[#007CF0]/40 to-[#00DFD8]/40  "></div>
          <Image
            width={1080}
            height={1080}
            src="/photo2_kurnia.png"
            alt="photo kurnia"
            className="z-10 relative peer"
          />
          <SiChakraui className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[120px] rotate-[700deg] peer-hover:rotate-0" />
          <SiTailwindcss className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[140px] peer-hover:translate-y-[-50px] rotate-[700deg] peer-hover:rotate-0 delay-0 opacity-0 peer-hover:opacity-100" />
          <SiExpress className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[150px] peer-hover:translate-y-[-100px] rotate-[700deg] peer-hover:rotate-0 delay-75 peer-hover:opacity-100" />
          <SiFlutter className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[140px] peer-hover:translate-y-[-150px] rotate-[700deg] peer-hover:rotate-0 delay-150 peer-hover:opacity-100" />
          <SiJasmine className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[120px] peer-hover:translate-y-[-200px] rotate-[700deg] peer-hover:rotate-0 delay-300 peer-hover:opacity-100" />
          <SiMongodb className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[80px] peer-hover:translate-y-[-250px] rotate-[700deg] peer-hover:rotate-0 delay-[450ms] peer-hover:opacity-100" />
          <SiMysql className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[40px] peer-hover:translate-y-[-280px] rotate-[700deg] peer-hover:rotate-0 delay-[600ms] peer-hover:opacity-100" />
          <SiTypescript className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[-10px] peer-hover:translate-y-[-300px] rotate-[700deg] peer-hover:rotate-0 delay-[750ms] peer-hover:opacity-100" />
          <SiRedux className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[-60px] peer-hover:translate-y-[-285px] rotate-[700deg] peer-hover:rotate-0 delay-[900ms] peer-hover:opacity-100" />
          <SiNodedotjs className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[-110px] peer-hover:translate-y-[-250px] rotate-[700deg] peer-hover:rotate-0 delay-[1050ms] peer-hover:opacity-100" />

          <FaCss3 className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[-160px] peer-hover:translate-y-[-206px] rotate-[700deg] peer-hover:rotate-0 delay-[1200ms] peer-hover:opacity-100" />
          <FaHtml5 className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[-180px] peer-hover:translate-y-[-162px] rotate-[700deg] peer-hover:rotate-0 delay-[1350ms] peer-hover:opacity-100" />
          
          <FaJs className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[-185px] peer-hover:translate-y-[-110px] rotate-[700deg] peer-hover:rotate-0 delay-[16000ms] peer-hover:opacity-100" />
          <FaReact className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[-160px] peer-hover:translate-y-[-60px] rotate-[700deg] peer-hover:rotate-0 delay-[1750ms] peer-hover:opacity-100" />
          <TbBrandNextjs className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 peer-hover:scale-100 duration-500 peer-hover:translate-x-[-140px] peer-hover:translate-y-[-10px] rotate-[700deg] peer-hover:rotate-0 delay-[1900ms] peer-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
