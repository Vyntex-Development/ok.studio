import classes from "./CaseStudiesMain.module.css";
import Link from "../UI/Link";
import CaseStudiesArticle from "./CaseStudiesArticle";

const CaseStudiesMain = ({ casestudies, services }) => {
  // console.log(services[2]["casestudies"]);
  return (
    <div className="container">
      <div className={classes.CaseMainTop}>
        <Link type="blog" href="/">
          All <span> (16)</span>
        </Link>
        <div className={classes.CaseLinks}>
          <Link type="blog" href="#platforms">
            Websites + Platforms <span> (8)</span>
          </Link>
          <Link
            type="blog"
            href="#ecommerces"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Branded Ecommerces <span> (3)</span>
          </Link>
          <Link type="blog" href="#advertising">
            Branding and Advertising <span> (5)</span>
          </Link>
        </div>
      </div>
      <div className={classes.ContentFirst} id="platforms">
        <div className={`${classes.Grid} grid`}>
          <div className={`${classes.CollFour} coll-4`}>
            <div className={classes.ContentLeft}>
              <h2>{services && services[2]["title"]}</h2>
              <p>{services && services[2]["description"]}</p>
              <Link type="dark" href="/services/websites-platforms">
                LEARN MORE
              </Link>
            </div>
          </div>
          <div className={`${classes.CollEight} coll-8`}>
            <div className={classes.Height}>
              <div className={classes.Sticky}>
                <div className={classes.WrapperAnimate} id="wrapper">
                  <div className={classes.ItemsWrapper} id="component">
                    {services[2]["casestudies"] &&
                      services[2]["casestudies"].map(
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
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ContentSecond} id="advertising">
        <div className={`${classes.Grid} grid`}>
          <div className={`${classes.CollFour} coll-4`}>
            <div className={classes.ContentLeft}>
              <h2>{services && services[0]["title"]}</h2>
              <p>{services && services[0]["description"]}</p>
              <Link type="dark" href="/services/branding-and-advertising">
                LEARN MORE
              </Link>
            </div>
          </div>
          <div className={`${classes.CollEight} coll-8`}>
            <div className={classes.Height}>
              <div className={classes.Sticky}>
                <div className={classes.WrapperAnimate} id="wrapper">
                  <div className={classes.ItemsWrapper} id="component">
                    {services[0]["casestudies"] &&
                      services[0]["casestudies"].map(
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
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ContentThird} id="ecommerces">
        <div className={`${classes.Grid} grid`}>
          <div className={`${classes.CollFour} coll-4`}>
            <div className={classes.ContentLeft}>
              <h2>{services && services[1]["title"]}</h2>
              <p>{services && services[1]["description"]}</p>
              <Link type="dark" href="/services/branded-ecommerces">
                LEARN MORE
              </Link>
            </div>
          </div>
          <div className={`${classes.CollEight} coll-8`}>
            <div className={classes.Height}>
              <div className={classes.Sticky}>
                <div className={classes.WrapperAnimate} id="wrapper">
                  <div className={classes.ItemsWrapper} id="component">
                    {services[1]["casestudies"] &&
                      services[1]["casestudies"].map(
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
                      )}
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

export default CaseStudiesMain;
