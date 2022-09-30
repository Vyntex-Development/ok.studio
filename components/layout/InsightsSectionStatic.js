import classes from "./InsightsSectionStatic.module.css";
import InsightsItem from "./InsightsItem";

const InsightsSectionStatic = ({ insights }) => {
  const slicedInsights = insights && insights.slice(0, 2);
  return (
    <div className="container">
      <div className={classes.InsightsWrapper}>
        <div className="dotWrapper">
          <div className="dot"></div>
          <p>Insights worth reading</p>
        </div>
        <div className="coll-8"></div>

        <div className={classes.InsightsItemsWrapper}>
          <div className={classes.CardsWrapper}>
            {slicedInsights.map(({ title, media, tag, _id, slug }) => {
              return (
                <>
                  <InsightsItem
                    key={_id}
                    title={title}
                    tag={tag}
                    media={media}
                    slug={slug}
                  />
                </>
              );
            })}
          </div>
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
  );
};

export default InsightsSectionStatic;
