import React from 'react';
import AppPreview from './AppPreview';
import Project from './Project';

const ProjectsSection = () => {
  return (
    <div id="projects" className="rounded-xl flex flex-col items-center gap-6">
      <div className="flex flex-col justify-start items-start w-full">
        <div className="text-[#97979e] font-bold">Previous</div>
        <div className="font-bold text-3xl">Projects</div>
      </div>

      <Project
        src="/quizifyyy"
        title="Quizifyyy"
        description="a quiz web app"
        link="https://quizifyyy.vercel.app"
      />
      <Project
        src="/yoomy"
        title="Yoomy"
        description="an online restaurant guide"
        link="https://yoomy.vercel.app"
      />
      <Project
        src="/daly"
        title="Daly Content Agency"
        isImageTop
        description="Company landing page"
        link="https://www.dalycontentagency.com/"
      />
      <Project
        src="/ics"
        isImageTop
        title="Interactive Comment Section"
        description="a reddit-like comment section"
        link="https://interactive-comment-section-kurni.vercel.app/home"
      />
    </div>
  );
};

export default ProjectsSection;
