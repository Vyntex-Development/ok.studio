import AboutHero from "../layout/AboutHero";
import FaqSection from "../layout/FaqSection";
import { useState } from "react";
import Founders from "../layout/Founders";
import Skills from "../layout/Skills";

const AboutPage = ({ casestudies, services }) => {
  return (
    <div>
      <AboutHero></AboutHero>
      <FaqSection services={services}></FaqSection>
      <Founders></Founders>
      <Skills casestudies={casestudies}></Skills>
    </div>
  );
};

export default AboutPage;
