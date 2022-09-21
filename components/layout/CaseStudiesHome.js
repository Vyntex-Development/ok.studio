import classes from "./CaseStudiesHome.module.css";
import Link from "../UI/Link";
import CaseStudiesItem from "./CaseStudiesItem";

const CaseStudiesHome = () => {
  return (
    <div className="container">
      <div className={classes.CaseWrapper}>
        <div className="dotWrapper">
          <div className="dot"></div>
          <p>Works we proud of</p>
        </div>
        <div className="grid">
          <div className="coll-8">
            <div className={classes.CaseContent}>
              <h1>Case Studies</h1>
              <p className="p-large">
                Here are some of our projects we are proud of, or to be direct —
                list of projects that we can display without getting sued.{" "}
                <span>(you know, NDAs)</span>
              </p>
              <Link type="dark" href="/casestudycms">
                OUR PORTFOLIO
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.CaseItemsWrapper}>
          <CaseStudiesItem></CaseStudiesItem>
          <CaseStudiesItem></CaseStudiesItem>
          <CaseStudiesItem></CaseStudiesItem>
          <CaseStudiesItem></CaseStudiesItem>
          <CaseStudiesItem></CaseStudiesItem>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesHome;
