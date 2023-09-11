import React from 'react';
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiFlutter,
  SiTypescript,
  SiChakraui,
  SiMongodb,
  SiNodedotjs,
  SiJasmine,
  SiRedux,
} from 'react-icons/si';

import { FaReact, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

function logoSkill(logoName: string) {
  switch (logoName) {
    case 'TypeScript':
      return <SiTypescript className="text-6xl ml-4" />;
    case 'MySQL':
      return <SiMysql className="text-6xl ml-4" />;
    case 'Flutter':
      return <SiFlutter className="text-6xl ml-4" />;
    case 'ChakraUI':
      return <SiChakraui className="text-6xl ml-4" />;
    case 'MongoDB':
      return <SiMongodb className="text-6xl ml-4" />;
    case 'NodeJS':
      return <SiNodedotjs className="text-6xl ml-4" />;
    case 'Jasmine':
      return <SiJasmine className="text-6xl ml-4" />;
    case 'ExpressJS':
      return <SiExpress className="text-6xl ml-4" />;
    case 'TailwindCSS':
      return <SiTailwindcss className="text-6xl ml-4" />;
    case 'HTML':
      return <FaHtml5 className="text-6xl ml-4 " />;
    case 'CSS':
      return <FaCss3 className="text-6xl ml-4 " />;
    case 'JavaScript':
      return <FaJs className="text-6xl ml-4 " />;
    case 'ReactJS':
      return <FaReact className="text-6xl ml-4 " />;
    case 'NextJS':
      return <TbBrandNextjs className="text-6xl ml-4 " />;
    case 'Redux':
      return <SiRedux className="text-6xl ml-4" />;
    default:
      break;
  }
}

const SkillChild = ({ logoName }: { logoName: string }) => {
  return (
    <div className="relative group">
      {logoSkill(logoName)}
      <div className="after:h-4 after:w-4 after:absolute after:bg-thirdEle after:rotate-45 after:left-[54%] after:translate-x-[-50%] after:bottom-[-8px] absolute z-50 top-[-40px] rounded-lg duration-150 left-[54%] translate-x-[-50%] scale-0 bg-thirdEle py-1.5 p-3 group-hover:scale-100">
        <p className="font-semibold">{logoName}</p>
      </div>
    </div>
  );
};

export default SkillChild;
