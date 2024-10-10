import React from "react";
import SkillsSection from "@/sections/SkillsSection";
import ContactSection from "@/sections/ContactSection";
import ProjectsSection from "@/sections/ProjectsSection";
import HeroSection from "@/sections/HeroSection";
import WithLove from "@/sections/WithLove";
import AboutMe from "@/sections/AboutMe";

const Home = () => {
  return (
    <div className="p-6 pb-[112px] sm:pb-40 flex flex-col gap-12">
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <WithLove />
    </div>
  );
};

export default Home;
