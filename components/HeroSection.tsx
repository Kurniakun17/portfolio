'use client';
import React from 'react';
import { ChevronFirst } from 'lucide-react';
import { motion } from 'framer-motion';
const HeroSection = () => {
  const date = new Date();
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
    date
  );
  const dateNum = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(
    date
  );
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    date
  );

  const formattedDate = `${weekday} ${dateNum} ${month}`;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end">
        <div className="overflow-hidden">
          <motion.p
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-[#97979e] font-bold"
          >
            {formattedDate}
          </motion.p>
          <motion.h2
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: { opacity: 0, x: 70 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-bold text-3xl"
          >
            Home
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ rotate: 720 }}
          transition={{ duration: 1, type: 'tween' }}
          className="hover:cursor-pointer"
        >
          <ChevronFirst size={48} color="#007CF0" />
        </motion.div>
      </div>
      <motion.div
        initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 2, type:"spring" }}
        id="home"
        className="p-6 bg-secondEle rounded-xl"
      >
        <div className="flex flex-col gap-4 overflow-hidden">
          <div>
            <motion.h1
              whileInView="visible"
              initial="hidden"
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="font-bold text-3xl"
            >
              Hi,
            </motion.h1>
            <div className="flex">
              <motion.div
                whileInView="visible"
                initial="hidden"
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{  duration: 1 }}
                viewport={{ once: true }}
                className="font-bold text-3xl flex gap-2 items-end justify-end relative"
              >
                <p>I&apos;m</p>
                <motion.div
                  whileHover={{ scale: 1.2, x: 30, y: -1 }}
                  transition={{ type: 'tween', duration: 0.2 }}
                  className="hover:cursor-pointer"
                >
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-br from-[#007CF0] to-[#00DFD8]">
                    Kurnia Kharisma.{' '}
                  </span>
                  <div className="inline-block translate-y-[4px] h-8 w-[3px] bg-gradient-to-br from-[#007CF0] to-[#00DFD8] typemark "></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <motion.p
            whileInView="visible"
            initial="hidden"
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ delay:0.5, duration: 1 }}
            viewport={{ once: true }}
            className="text-[#97979e]"
          >
            a Software engineer and UI/UX Designer based in Indonesia. I have a
            great interest in full-stack development, either it&apos;s a
            website, native application, and multi-platform application.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
