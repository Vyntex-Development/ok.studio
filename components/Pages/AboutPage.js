import AboutHero from "../layout/AboutHero";
import FaqSection from "../layout/FaqSection";
import { useState } from "react";
import Founders from "../layout/Founders";
import Skills from "../layout/Skills";

const AboutPage = ({ casestudies, services, data }) => {
  return (
    <div>
      <AboutHero data={data}></AboutHero>
      <FaqSection services={services}></FaqSection>
      <Founders data={data}></Founders>
      <Skills casestudies={casestudies} data={data}></Skills>
    </div>
  );
};

export default AboutPage;
