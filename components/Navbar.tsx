'use client';
import { Zap, ChevronFirst, Briefcase, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [navigation, setNavigation] = useState('Home');
  return (
    <div className="navbar z-[100] p-4 px-12 flex justify-between gap-3 fixed bottom-0 w-full">
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
          setNavigation('Experience');
        }}
        href="#experience"
        className="flex flex-col justify-center items-center gap-1"
      >
        <Briefcase
          size={28}
          color={navigation === 'Experience' ? '#3385ff' : '#9ca3af'}
        />
        <p
          className={`${
            navigation === 'Experience' ? 'text-blueAccent' : 'text-gray-400'
          }`}
        >
          Experience
        </p>
      </a>
    </div>
  );
};

export default Navbar;
