import FaqSection from "../layout/FaqSection";
import HomeHero from "../layout/HomeHero";
import CaseStudiesHome from "../layout/CaseStudiesHome";
import InsightsSection from "../layout/InsightsSection";
import VideoSection from "../layout/VideoSection";
import HeroHome from "../layout/HeroHome";

const HomePage = ({ insights, casestudies, services }) => {
  return (
    <div>
      <HeroHome></HeroHome>
      <FaqSection services={services}></FaqSection>
      <CaseStudiesHome casestudies={casestudies}></CaseStudiesHome>
      <InsightsSection insights={insights}></InsightsSection>
    </div>
  );
};

export default HomePage;
