import FaqSection from "../layout/FaqSection";
import HomeHero from "../layout/HomeHero";
import { useState } from "react";
import CaseStudiesHome from "../layout/CaseStudiesHome";
import InsightsSection from "../layout/InsightsSection";
import VideoSection from "../layout/VideoSection";

const HomePage = () => {
  const [activeFaq, setActiveFaq] = useState("1");

  return (
    <div>
      <HomeHero></HomeHero>
      <VideoSection></VideoSection>
      <FaqSection
        activeFaq={activeFaq}
        setActiveFaq={(id) => {
          setActiveFaq(id);
        }}
      ></FaqSection>
      <CaseStudiesHome></CaseStudiesHome>
      <InsightsSection></InsightsSection>
    </div>
  );
};

export default HomePage;
