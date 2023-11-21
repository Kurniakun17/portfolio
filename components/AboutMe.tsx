'use client';

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
import { motion } from 'framer-motion';
const AboutMe = () => {
  return (
    <div id="about" className="flex gap-8 flex-col items-center">
      <div className="flex flex-col items-start justify-start w-full">
        <motion.p
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 70 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.3, duration: 0.3 }}
          viewport={{ once: true }}
          className="text-[#97979e] font-bold"
        >
          Introduction
        </motion.p>
        <motion.p
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: { opacity: 0, x: 70 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.5, duration: 0.3 }}
          viewport={{ once: true }}
          className="font-bold text-3xl"
        >
          About Me
        </motion.p>
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <div className="w-[200px] ">
          <div className="mt-12">
            <div className="relative group">
              <motion.div
                // whileInView="visible"
                // initial="hidden"
                // variants={{
                //   hidden: { opacity: 0, scale: 0 },
                //   visible: { opacity: 1, scale: 1 },
                // }}
                // transition={{ duration: 0.3 }}
                // viewport={{ once: true }}
                className="absolute aspect-square left-1/2 -translate-x-1/2 h-[220px] pulse-container rounded-full blur-[2px] inset-0  bg-gradient-to-r origin-center from-[#007CF0]/40 to-[#00DFD8]/40  "
              ></motion.div>
              <Image
                width={1080}
                height={1080}
                src="/photo_kurnia.png"
                alt="photo kurnia"
                className="z-10 relative group-hover:hidden"
              />
              <Image
                width={1080}
                height={1080}
                src="/photo2_kurnia.png"
                alt="photo kurnia"
                className="z-10 relative group-hover:block hidden"
              />
              <SiChakraui className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[120px] rotate-[700deg] group-hover:rotate-0" />
              <SiTailwindcss className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[140px] group-hover:translate-y-[-50px] rotate-[700deg] group-hover:rotate-0 delay-0 opacity-0 group-hover:opacity-100" />
              <SiExpress className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[150px] group-hover:translate-y-[-100px] rotate-[700deg] group-hover:rotate-0 delay-75 group-hover:opacity-100" />
              <SiFlutter className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[140px] group-hover:translate-y-[-150px] rotate-[700deg] group-hover:rotate-0 delay-150 group-hover:opacity-100" />
              <SiJasmine className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[120px] group-hover:translate-y-[-200px] rotate-[700deg] group-hover:rotate-0 delay-300 group-hover:opacity-100" />
              <SiMongodb className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[80px] group-hover:translate-y-[-250px] rotate-[700deg] group-hover:rotate-0 delay-[450ms] group-hover:opacity-100" />
              <SiMysql className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[40px] group-hover:translate-y-[-280px] rotate-[700deg] group-hover:rotate-0 delay-[550ms] group-hover:opacity-100" />
              <SiTypescript className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[-10px] group-hover:translate-y-[-300px] rotate-[700deg] group-hover:rotate-0 delay-[625ms] group-hover:opacity-100" />
              <SiRedux className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[-60px] group-hover:translate-y-[-285px] rotate-[700deg] group-hover:rotate-0 delay-[700ms] group-hover:opacity-100" />
              <SiNodedotjs className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[-110px] group-hover:translate-y-[-250px] rotate-[700deg] group-hover:rotate-0 delay-[775ms] group-hover:opacity-100" />
              <FaCss3 className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[-160px] group-hover:translate-y-[-206px] rotate-[700deg] group-hover:rotate-0 delay-[850ms] group-hover:opacity-100" />
              <FaHtml5 className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[-180px] group-hover:translate-y-[-162px] rotate-[700deg] group-hover:rotate-0 delay-[925ms] group-hover:opacity-100" />
              <FaJs className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[-185px] group-hover:translate-y-[-110px] rotate-[700deg] group-hover:rotate-0 delay-[1000ms] group-hover:opacity-100" />
              <FaReact className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[-160px] group-hover:translate-y-[-60px] rotate-[700deg] group-hover:rotate-0 delay-[1075ms] group-hover:opacity-100" />
              <TbBrandNextjs className="bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 absolute z-30 bottom-0 left-1/2 -translate-x-1/2 text-3xl scale-0 group-hover:scale-100 duration-500 group-hover:translate-x-[-140px] group-hover:translate-y-[-10px] rotate-[700deg] group-hover:rotate-0 delay-[1150ms] group-hover:opacity-100" />
            </div>
          </div>
        </div>

        <motion.div
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: { clipPath: 'inset(0% 100% 0% 0%)' },
            visible: { clipPath: 'inset(0% 0% 0% 0%)' },
          }}
          viewport={{ once: true }}
          transition={{ duration: 2, type: 'spring', delay: 0.5 }}
          className="p-6 bg-secondEle rounded-xl"
        >
          <motion.p
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 70 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 2, type: 'spring', delay: 0.5 }}
            viewport={{ once: true }}
            className="text-[#97979e]"
          >
            I am currently a{' '}
            <span className="font-bold">Frontend Developer</span> at{' '}
            <a
              href="https://www.pharos.co.id/"
              className="font-bold text-blue-500 hover:text-blue-400 duration-300"
            >
              PT Pharos Indonesia
            </a>
            . At the same time, I am taking a computer science degree at UPN
            Veteran Jakarta as an undergraduate who&apos;s now in the 3rd year.
            I&apos;m interested in following the developments of any
            technologies that&apos;s related to software engineering. I also
            make a content on my instagram and play video games .
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
