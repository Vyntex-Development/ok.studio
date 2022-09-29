import InsightsCmsMain from "../layout/InsightsCmsMain";
import InsightsSectionStatic from "../layout/InsightsSectionStatic";

const InsightsCmsPage = ({ insight, insights }) => {
  return (
    <div>
      <InsightsCmsMain insight={insight}></InsightsCmsMain>
      <InsightsSectionStatic insights={insights}></InsightsSectionStatic>
    </div>
  );
};

export default InsightsCmsPage;
