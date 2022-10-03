import classes from "./CaseStudiesHome.module.css";
import Link from "../UI/Link";
import CaseStudiesItem from "./CaseStudiesItem";

const CaseStudiesHome = ({ casestudies }) => {
  return (
    <div className="container">
      <div className={classes.CaseWrapper}>
        <div className="dotWrapper">
          <div className="dot"></div>
          <p>Works we are proud of</p>
        </div>
        <div className="grid">
          <div className="coll-8">
            <div className={classes.CaseContent}>
              <h1>Case Studies</h1>
              <p className="p-large">
                Here are some projects we are proud of, or to be direct — a list
                of projects that we can display without getting sued. (you know,
                NDAs)
                <span>(you know, NDAs)</span>
              </p>
              <Link type="dark" href="/casestudycms" scroll={false}>
                OUR PORTFOLIO
              </Link>
            </div>
          </div>
        </div>
        {/* <div className={classes.CaseItemsWrapper}>
          <CaseStudiesItem></CaseStudiesItem>
          <CaseStudiesItem></CaseStudiesItem>
          <CaseStudiesItem></CaseStudiesItem>
          <CaseStudiesItem></CaseStudiesItem>
          <CaseStudiesItem></CaseStudiesItem>
        </div> */}
        <div className={classes.CaseItemsWrapper}>
          {casestudies.map(({ title, media, tag, _id, slug }) => {
            return (
              <CaseStudiesItem
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

export default CaseStudiesHome;
