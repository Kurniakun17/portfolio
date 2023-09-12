'use client';
import { Zap, ChevronFirst, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
const Navbar = () => {
  const [navigation, setNavigation] = useState('Home');
  return (
    <div className="glass z-[100] sm:bottom-8 sm:w-[500px] sm:rounded-full sm:left-1/2 sm:-translate-x-1/2 p-4 px-8 flex justify-between gap-3 sm:gap-6 fixed bottom-0 w-full">
      <a
        onClick={() => {
          setNavigation('Home');
        }}
        href="#home"
        className="flex flex-col justify-center items-center "
      >
        <ChevronFirst
          size={32}
          color={navigation === 'Home' ? '#3385ff' : '#9ca3af'}
        />
        <p
          className={`${
            navigation === 'Home' ? 'text-blueAccent' : 'text-gray-400'
          }`}
        >
          Home
        </p>
      </a>

      <a
        onClick={() => {
          setNavigation('about');
        }}
        href="#about"
        className="flex flex-col justify-center items-center gap-1"
      >
        <BsFillPersonFill
          className={`text-[28px] ${
            navigation === 'about' ? 'text-[#3385ff]' : 'text-[#9ca3af]'
          }`}
        />
        <p
          className={`${
            navigation === 'about' ? 'text-blueAccent' : 'text-gray-400'
          }`}
        >
          About
        </p>
      </a>

      <a
        onClick={() => {
          setNavigation('Projects');
        }}
        href="#projects"
        className="flex flex-col justify-center items-center gap-1"
      >
        <Zap
          size={28}
          color={navigation === 'Projects' ? '#3385ff' : '#9ca3af'}
        />
        <p
          className={`${
            navigation === 'Projects' ? 'text-blueAccent' : 'text-gray-400'
          }`}
        >
          Projects
        </p>
      </a>

      <a
        onClick={() => {
          setNavigation('Skills');
        }}
        href="#skills"
        className="flex flex-col justify-center items-center "
      >
        <Sparkles
          size={32}
          color={navigation === 'Skills' ? '#3385ff' : '#9ca3af'}
        />
        <p
          className={`${
            navigation === 'Skills' ? 'text-blueAccent' : 'text-gray-400'
          }`}
        >
          Skills
        </p>
      </a>

      <a
        onClick={() => {
          setNavigation('Contact');
        }}
        href="#Contact"
        className="flex flex-col justify-center items-center "
      >
        <FiMail
          className={`${
            navigation === 'Contact' ? 'text-[#3385ff]' : 'text-[#9ca3af]'
          } text-[32px]`}
        />
        <p
          className={`${
            navigation === 'Contact' ? 'text-blueAccent' : 'text-gray-400'
          }`}
        >
          Contact
        </p>
      </a>
    </div>
  );
};

export default Navbar;
