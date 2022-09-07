import FaqSection from "../layout/FaqSection";
import HomeHero from "../layout/HomeHero";
import { useState } from "react";
import CaseStudiesHome from "../layout/CaseStudiesHome";

const HomePage = () => {
  const [activeFaq, setActiveFaq] = useState("1");
  return (
    <div>
      <HomeHero></HomeHero>
      <FaqSection
        activeFaq={activeFaq}
        setActiveFaq={(id) => {
          setActiveFaq(id);
        }}
      ></FaqSection>
      <CaseStudiesHome></CaseStudiesHome>
    </div>
  );
};

export default HomePage;
