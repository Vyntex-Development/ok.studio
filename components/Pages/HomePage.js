import FaqSection from "../layout/FaqSection";
import HomeHero from "../layout/HomeHero";
import CaseStudiesHome from "../layout/CaseStudiesHome";
import InsightsSection from "../layout/InsightsSection";
import VideoSection from "../layout/VideoSection";
import HeroHome from "../layout/HeroHome";

const HomePage = ({ insights, casestudies, services, datahome }) => {
  return (
    <div>
      <HeroHome></HeroHome>
      <FaqSection datahome={datahome} services={services}></FaqSection>
      <CaseStudiesHome
        casestudies={casestudies}
        datahome={datahome}
      ></CaseStudiesHome>
      <InsightsSection insights={insights}></InsightsSection>
    </div>
  );
};

export default HomePage;
