import FaqSection from "../layout/FaqSection";
import HomeHero from "../layout/HomeHero";
import { useState } from "react";

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
    </div>
  );
};

export default HomePage;
