'use client';
import React from 'react';
import { motion } from 'framer-motion';

function AnimatedText({
  children,
  index,
}: {
  children: string;
  index: number;
}) {
  return (
    <>
      {children === ' ' ? (
        <div className="ml-2"></div>
      ) : (
        <motion.span
          style={{ originX: 0, originY: 0 }}
          animate={{
            y: [35, -5, 0],
            rotate: [25, -5, 0],
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            times: [0, 0.6, 1],
            delay: (index + 1) * 0.1,
          }}
          className="text-transparent w-fit font-bold text-3xl"
        >
          {children}
        </motion.span>
      )}
    </>
  );
}

const Test = () => {
  const charText = [
    'K',
    'u',
    'r',
    'n',
    'i',
    'a',
    '_',
    'K',
    'h',
    'a',
    'r',
    'i',
    's',
    'm',
    'a',
  ];
  return (
    <div className="flex w-fit bg-clip-text bg-gradient-to-br from-[#007CF0] to-[#00DFD8]  overflow-hidden">
      {'Kurnia Kharisma'.split('').map((char: string, index: number) => (
        <AnimatedText index={index} key={index}>
          {char}
        </AnimatedText>
      ))}
    </div>
  );
};

export default Test;
