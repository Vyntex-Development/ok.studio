import Link from "../UI/Link";
import classes from "./InsightsMainSection.module.css";
import Image from "next/image";
import InsightsItem from "./InsightsItem";

const InsightsMainSection = () => {
  return (
    <div className="container">
      <div className="dotWrapperAbout">
        <div className="dot"></div>
        <p className="gray">Those who always stay invovled</p>
      </div>
      <div className={classes.ItemWrapper}>
        <InsightsItem></InsightsItem>
        <InsightsItem></InsightsItem>
        <InsightsItem></InsightsItem>
      </div>
      <div className={classes.ItemWrapperStatic}>
        <InsightsItem></InsightsItem>
        <InsightsItem></InsightsItem>
        <div>Yelow</div>
      </div>
      <div className={classes.ItemWrapper}>
        <InsightsItem></InsightsItem>
        <InsightsItem></InsightsItem>
        <InsightsItem></InsightsItem>
      </div>
    </div>
  );
};

export default InsightsMainSection;
