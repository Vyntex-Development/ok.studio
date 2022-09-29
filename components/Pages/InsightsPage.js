import HeroInsights from "../layout/HeroInsights";
import InsightsMainSection from "../layout/InsightsMainSection";

const InsightsPage = ({ insights }) => {
  return (
    <div>
      <HeroInsights></HeroInsights>
      <InsightsMainSection insights={insights}></InsightsMainSection>
    </div>
  );
};

export default InsightsPage;
