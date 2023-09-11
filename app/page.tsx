import AppPreview from '@/components/AppPreview';
import SkillChild from '@/components/SkillChild';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FiMail } from 'react-icons/fi';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const Home = () => {
  const css = `.marquee-container {
            overflow-x: visible !important ;
          }
          `;

  return (
    <div className="p-6 pb-[112px] flex flex-col gap-6">
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
                <h2 className="font-bold text-3xl items-center relative">
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-br from-[#007CF0] to-[#00DFD8]">
                    Kurnia Kharisma{' '}
                  </span>
                  <span className="text-white">here.</span>
                  <div className="ml-2 inline-block translate-y-[4px] h-8 w-[3px] bg-gradient-to-br from-[#007CF0] to-[#00DFD8] typemark "></div>
                </h2>
              </div>
            </div>
            <h2 className="text-[#97979e]">
              I&apos;m a Software engineer and UI/UX Designer based in
              Indonesia. I have a great interest in full-stack development,
              either it&apos;s a website, native application, and multi-platform
              application.
            </h2>
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

      <div className="p-6 bg-secondEle rounded-xl flex items-center flex-col gap-6 overflow-x-hidden">
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
            <button className="relative shadow-none justify-self-center w-fit flex items-center gap-2 px-4 h-fit py-1  duration-200 bg-gradient-to-r from-[#007CF0] to-[#00DFD8] rounded-full">
              Say Hi <FiMail />
            </button>
          </div>
        </div>
        <p>Or checkout my social media</p>
        <div className="flex gap-5">
          <BsGithub className="text-3xl" />
          <BsInstagram className="text-3xl" />
          <BsLinkedin className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
