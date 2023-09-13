import React from 'react';
import { ChevronFirst } from 'lucide-react';

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
        <div>
          <p className="text-[#97979e] font-bold">{formattedDate}</p>
          <h2 className="font-bold text-3xl">Home</h2>
        </div>
        <ChevronFirst size={48} color="#007CF0" />
      </div>
      <div id="home" className="p-6 bg-secondEle rounded-xl">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-3xl">Hi,</h1>
            <div className="flex">
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
