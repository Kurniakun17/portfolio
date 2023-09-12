import React from 'react';
import Test from './Test';

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end">
        <div>
          <p>SATURDAY 9 SEPTEMBER</p>
          <h2 className="font-bold text-3xl">Home</h2>
        </div>
        <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-[500px]"></div>
      </div>
      <div id="home" className="p-6 bg-secondEle rounded-xl">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-3xl">Hi,</h1>
            <div className="flex">
              {/* <Test /> */}
              <h2 className="font-bold text-3xl items-center relative">
                I&apos;m{' '}
                <span className="relative bg-clip-text text-transparent bg-gradient-to-br from-[#007CF0] to-[#00DFD8]">
                  Kurnia Kharisma.{' '}
                </span>
                <div className="inline-block translate-y-[4px] h-8 w-[3px] bg-gradient-to-br from-[#007CF0] to-[#00DFD8] typemark "></div>
              </h2>
            </div>
          </div>
          <h2 className="text-[#97979e]">
            a Software engineer and UI/UX Designer based in Indonesia. I have a
            great interest in full-stack development, either it&apos;s a
            website, native application, and multi-platform application.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
