import classes from "./InsightsSection.module.css";
import Link from "../UI/Link";
import InsightsItem from "./InsightsItem";

const InsightsSection = ({ insights }) => {
  const slicedInsights = insights && insights.slice(0, 3);
  // const slicedInsight = data["homepageData"]["pageBuilder"][0];
  // console.log(data["homepageData"]["pageBuilder"][0]);
  return (
    <div className="container">
      <div className={classes.InsightsWrapper}>
        <div className="dotWrapper">
          <div className="dot"></div>
          <p>Insights worth reading</p>
        </div>
        <div className="coll-8"></div>

        <div className={classes.InsightsItemsWrapper}>
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
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
