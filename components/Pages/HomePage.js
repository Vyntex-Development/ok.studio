import FaqSection from "../layout/FaqSection";
import HomeHero from "../layout/HomeHero";
import CaseStudiesHome from "../layout/CaseStudiesHome";
import InsightsSection from "../layout/InsightsSection";
import VideoSection from "../layout/VideoSection";
import HeroHome from "../layout/HeroHome";

const HomePage = ({ insights, casestudies, services, data }) => {
  return (
    <div>
      <HeroHome></HeroHome>
      <FaqSection services={services}></FaqSection>
      <CaseStudiesHome casestudies={casestudies}></CaseStudiesHome>
      <InsightsSection insights={insights} data={data}></InsightsSection>
    </div>
  );
};

export default HomePage;
