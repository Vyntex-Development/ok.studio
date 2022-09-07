import classes from "./InsightsSection.module.css";
import Link from "../UI/Link";
import InsightsItem from "./InsightsItem";

const InsightsSection = () => {
  return (
    <div className="container">
      <div className={classes.InsightsWrapper}>
        <div className="dotWrapper">
          <div className="dot"></div>
          <p>Insights worth reading</p>
        </div>
        <div className="coll-8"></div>
        <div className={classes.InsightsItemsWrapper}>
          <InsightsItem></InsightsItem>
          <InsightsItem></InsightsItem>
          <InsightsItem></InsightsItem>
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
