import React from 'react';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import ProjectsSection from '@/components/ProjectsSection';
import HeroSection from '@/components/HeroSection';
import AboutMe from '@/components/AboutMe';

const Home = () => {
  return (
    <div className="p-6 pb-[112px] sm:pb-40 flex flex-col gap-8 sm:gap-12">
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
