import CaseStudiesMain from "../layout/CaseStudiesMain";
import HeroCase from "../layout/HeroCase";
import InsightsSection from "../layout/InsightsSection";

const CaseStudiesPage = ({ insights, casestudies }) => {
  return (
    <div>
      <HeroCase></HeroCase>
      <CaseStudiesMain casestudies={casestudies}></CaseStudiesMain>
      <InsightsSection insights={insights}></InsightsSection>
    </div>
  );
};

export default CaseStudiesPage;
