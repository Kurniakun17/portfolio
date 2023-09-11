import AppPreview from '@/components/AppPreview';
import SkillChild from '@/components/SkillChild';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FiMail } from 'react-icons/fi';

const Home = () => {
  const css = `.marquee-container {
            overflow-x: visible !important ;
          }
          `;

  return (
    <div className="p-6 pb-[90px] flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <div>
            <p>SATURDAY 9 SEPTEMBER</p>
            <h2 className="font-bold text-3xl">Today</h2>
          </div>
          <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-[500px]"></div>
        </div>
        <div id="home" className="p-6 bg-secondEle rounded-xl">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-3xl">Hi,</h1>
              <div className="flex">
                <h2 className="font-bold text-3xl  items-center bg-clip-text text-transparent bg-gradient-to-br from-[#007CF0] to-[#00DFD8]">
                  Kurnia Kharisma <span className="text-white">here.</span>
                  <div className="ml-2 inline-block translate-y-[4px] h-8 w-[3px] bg-gradient-to-br from-[#007CF0] to-[#00DFD8] typemark "></div>
                </h2>
              </div>
            </div>
            <h2 className="text-[#97979e]">
              I'm a Software engineer and UI/UX Designer based in Indonesia. I
              have a great interest in full-stack development, either it's a
              website, native application, and multi-platform application.
            </h2>
            <div className="flex justify-center">
              <button className="justify-self-center   w-fit flex items-center gap-2 px-4 h-fit py-1 bg-gradient-to-r duration-200 transition-colors  from-[#007CF0] to-[#00DFD8] rounded-md">
                Say Hi <FiMail />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className=" p-6 bg-secondEle rounded-xl flex flex-col gap-6"
      >
        <div>
          <div className="text-[#97979e] font-bold">Previous</div>
          <div className="font-bold text-3xl">Projects</div>
        </div>

        <AppPreview
          title="Quizifyyy"
          description="a quiz web app"
          link="https://quizifyyy.vercel.app"
        />
        <AppPreview
          title="Yoomy"
          description="an online restaurant guide"
          link=""
        />
        <AppPreview
          title="Daly Content Agency"
          description="Company landing page"
          link="https://www.dalycontentagency.com/"
        />
        <AppPreview
          title="Interactive Comment Section"
          description="a reddit-like comment section"
          link="https://interactive-comment-section-kurni.vercel.app/home"
          isBorder={false}
        />
      </div>

      <div
        id="skills"
        className="py-6 bg-secondEle rounded-xl flex flex-col gap-6 overflow-x-hidden"
      >
        <div className="px-6">
          <div className="text-[#97979e] font-bold">My</div>
          <div className="font-bold text-3xl">Skills</div>
        </div>
        <style>{css}</style>
        <Marquee speed={8} autoFill>
          <SkillChild logoName="TailwindCSS" />
          <SkillChild logoName="Flutter" />
          <SkillChild logoName="MySQL" />
          <SkillChild logoName="ExpressJS" />
          <SkillChild logoName="TypeScript" />
        </Marquee>
        <Marquee speed={12} delay={0.8} autoFill>
          <SkillChild logoName="HTML" />
          <SkillChild logoName="CSS" />
          <SkillChild logoName="JavaScript" />
          <SkillChild logoName="NextJS" />
          <SkillChild logoName="ReactJS" />
        </Marquee>
        <Marquee speed={8} autoFill>
          <SkillChild logoName="Jasmine" />
          <SkillChild logoName="ChakraUI" />
          <SkillChild logoName="Redux" />
          <SkillChild logoName="MongoDB" />
          <SkillChild logoName="NodeJS" />
        </Marquee>
      </div>

      <div className="p-6 bg-secondEle rounded-xl flex flex-col gap-6 overflow-x-hidden">
        <div>
          <div className="text-[#97979e] font-bold">Contact Me</div>
          <div className="font-bold text-2xl">What are you waiting for</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
