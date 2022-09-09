import classes from "./CaseStudiesMain.module.css";
import Link from "../UI/Link";
import CaseStudiesArticle from "./CaseStudiesArticle";
const CaseStudiesMain = () => {
  return (
    <div className="container">
      <div className={classes.CaseMainTop}>
        <Link type="blog" href="/">
          All <span> (16)</span>
        </Link>
        <div className={classes.CaseLinks}>
          <Link type="blog" href="/">
            Websites + Platforms <span> (8)</span>
          </Link>
          <Link type="blog" href="/">
            Branded Ecommerces <span> (3)</span>
          </Link>
          <Link type="blog" href="/">
            Branding and Advertising <span> (5)</span>
          </Link>
        </div>
      </div>
      <div className={`${classes.Grid} grid`}>
        <div className="coll-4">
          <div className={classes.ContentLeft}>
            <h2>Websites + Platforms</h2>
            <p>
              We conceive and create experiences that immerse consumers in the
              brand through a combination of utility and creativity.
            </p>
            <Link type="dark" href="/">
              LEARN MORE
            </Link>
          </div>
        </div>
        <div className="coll-8">
          <div className={classes.ItemsWrapper}>
            <CaseStudiesArticle></CaseStudiesArticle>
            <CaseStudiesArticle></CaseStudiesArticle>
            <CaseStudiesArticle></CaseStudiesArticle>
            <CaseStudiesArticle></CaseStudiesArticle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesMain;
