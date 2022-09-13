import AboutHero from "../layout/AboutHero";
import FaqSection from "../layout/FaqSection";
import { useState } from "react";
import Founders from "../layout/Founders";
import Skills from "../layout/Skills";

const AboutPage = () => {
  const [activeFaq, setActiveFaq] = useState("1");
  return (
    <div>
      <AboutHero></AboutHero>
      <FaqSection
        activeFaq={activeFaq}
        setActiveFaq={(id) => {
          setActiveFaq(id);
        }}
      ></FaqSection>
      <Founders></Founders>
      <Skills></Skills>
    </div>
  );
};

export default AboutPage;
