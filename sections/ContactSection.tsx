'use client'
import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <div
      id="Contact"
      className="p-6 bg-secondEle rounded-xl flex items-center flex-col gap-6 overflow-x-hidden"
    >
      <div className="w-full">
        <div className="text-[#97979e] font-bold">
          {/* eslint-disable-next-line react/no-unescaped-entities*/}
          Let's get to know each other
        </div>
        <div className="font-bold text-2xl">Contact Me</div>
      </div>
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute pulse-container rounded-full blur-[2px] inset-0 scale-y-[60%] bg-gradient-to-r origin-center from-[#007CF0]/40 to-[#00DFD8]/40  "></div>
          <button
            onClick={() => {
              window.location.href = 'mailto:kurniakharisma17@gmail.com';
            }}
            className="relative shadow-none justify-self-center w-fit flex items-center gap-2 px-4 h-fit py-1  duration-200 bg-gradient-to-r from-[#007CF0] to-[#00DFD8] rounded-full"
          >
            Say Hi <FiMail />
          </button>
        </div>
      </div>
      <p className="text-[#97979e]">Or checkout my social media</p>
      <div className="flex gap-5">
        <a target="_blank" href="https://github.com/kurniakun17">
          <BsGithub className="text-3xl" />
        </a>
        <a target="_blank" href="https://instagram.com/kurniakun17">
          <BsInstagram className="text-3xl" />
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/kurnia-kharisma-agung-samiadjie-88b54a224/"
        >
          <BsLinkedin className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
