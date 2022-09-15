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
        <div className="yellow-card">
          <h1 className="h1-card">Subscribe</h1>
          <p className="p-card">
            Never stop learning. Subcribe to our newletter and get weekly
            insights, strategies and case studies.
          </p>
          <form method="get">
            <div className="input-wrapper">
              <input type="email" placeholder="Email Address" required />
              <button type="submit" className="submit-button">
                SUBSCRIBE
              </button>
            </div>
          </form>
          <p className="p-card-last">
            By clicking 'Subscribe' above, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
      <div className={classes.ItemWrapper}>
        <InsightsItem></InsightsItem>
        <InsightsItem></InsightsItem>
        <InsightsItem></InsightsItem>
      </div>
      <div className={classes.ButtonWrapper}>
        <Link href="/" type="dark">
          LOAD MORE
        </Link>
      </div>
    </div>
  );
};

export default InsightsMainSection;
