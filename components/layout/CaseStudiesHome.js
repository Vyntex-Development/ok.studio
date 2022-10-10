import classes from "./CaseStudiesHome.module.css";
import Link from "../UI/Link";
import CaseStudiesItem from "./CaseStudiesItem";

const CaseStudiesHome = ({ casestudies, datahome }) => {
  console.log(datahome);
  const title = datahome && datahome["homepageData"]["pageBuilder"][2]["title"];
  const description =
    datahome && datahome["homepageData"]["pageBuilder"][2]["description"];
  const smalldescription =
    datahome && datahome["homepageData"]["pageBuilder"][2]["smalldescription"];
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
              <h1>{title}</h1>
              <p className="p-large">
                {description}
                <span>{smalldescription}</span>
              </p>
              <Link type="dark" href="/services" scroll={false}>
                OUR PORTFOLIO
              </Link>
            </div>
          </div>
        </div>

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
