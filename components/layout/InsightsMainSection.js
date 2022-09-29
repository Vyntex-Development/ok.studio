import classes from "./InsightsMainSection.module.css";
import InsightsItem from "./InsightsItem";
import { useState } from "react";

const InsightsMainSection = ({ insights }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  const slicedInsights = insights.slice(0, 5);
  const slicedInsightsSecond = insights.slice(5, 8);
  return (
    <div className="container">
      <div className="dotWrapperAbout">
        <div className="dot"></div>
        <p>Those who always stay invovled</p>
      </div>
      <div className={classes.ItemWrapper}>
        {slicedInsights.map(({ title, media, tag, _id, slug }) => {
          return (
            <InsightsItem
              key={_id}
              title={title}
              tag={tag}
              media={media}
              slug={slug}
            />
          );
        })}
        <div className={`${classes.YellowCard} yellow-card`}>
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
        {slicedInsightsSecond.map(({ title, media, tag, _id, slug }) => {
          return (
            <InsightsItem
              key={_id}
              title={title}
              tag={tag}
              media={media}
              slug={slug}
            />
          );
        })}
      </div>
      {/* <div className={classes.ItemWrapperStatic}>
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
      </div>  */}
      {/* <div className={classes.ItemWrapper}>
        <InsightsItem></InsightsItem>
        <InsightsItem></InsightsItem>
        <InsightsItem></InsightsItem>
      </div> */}
      {/* <div className={isActive ? "load-more" : ""} onClick={handleClick}>
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
      </div> */}
      <div className={classes.ButtonWrapper}>
        <div type="submit" className={classes.Button}>
          LOAD MORE
        </div>
      </div>
    </div>
  );
};

export default InsightsMainSection;
