import React from 'react';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import ProjectsSection from '@/components/ProjectsSection';
import HeroSection from '@/components/HeroSection';

const Home = () => {

  return (
    <div className="p-6 pb-[112px] flex flex-col gap-6">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
