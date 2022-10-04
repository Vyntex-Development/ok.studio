import CaseStudiesArticle from "./CaseStudiesArticle";
import classes from "./CaseServices.module.css";
import Link from "../UI/Link";

const CaseServices = ({ casestudies }) => {
  return (
    <div className="container">
      <div className={`${classes.DotCase} dotWrapper`}>
        <div className="dot"></div>
        <p>How it works?</p>
      </div>
      <div className={classes.ContentFirst}>
        <div className={`${classes.Grid} grid`}>
          <div className={`${classes.CollFour} coll-4`}>
            <div className={classes.ContentLeft}>
              <h2>FEATURED WORK</h2>
            </div>
          </div>
          <div className={`${classes.CollEight} coll-8`}>
            <div className={classes.Height}>
              <div className={classes.Sticky}>
                <div className={classes.WrapperAnimate} id="wrapper">
                  <div className={classes.ItemsWrapper} id="component">
                    <div className={classes.ItemsWrapper} id="component">
                      {/* {casestudies.map(
                        ({ title, media, description, _id, slug }) => {
                          return (
                            <CaseStudiesArticle
                              key={_id}
                              title={title}
                              description={description}
                              media={media}
                              slug={slug}
                            />
                          );
                        }
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseServices;
