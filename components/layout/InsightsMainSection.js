import classes from "./InsightsMainSection.module.css";
import InsightsItem from "./InsightsItem";
import { useState } from "react";

const InsightsMainSection = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

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
            By clicking Subscribe above, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
      <div className={classes.ItemWrapper}>
        <InsightsItem></InsightsItem>
        <InsightsItem></InsightsItem>
        <InsightsItem></InsightsItem>
      </div>
      <div className={isActive ? "load-more" : ""} onClick={handleClick}>
        <div className="button-wrapper">
          <div className="load-button">LOAD MORE</div>
        </div>
        <div className="item-load">
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
                By clicking Subscribe above, you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsMainSection;
