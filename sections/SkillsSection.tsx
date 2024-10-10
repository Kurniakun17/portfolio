import React from "react";
import Marquee from "react-fast-marquee";
import SkillChild from "../components/SkillChild";

const SkillsSection = () => {
  const css = `.marquee-container {
            overflow-x: visible !important ;
          }
          `;

  return (
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
      <Marquee speed={8} delay={4} autoFill>
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
  );
};

export default SkillsSection;
