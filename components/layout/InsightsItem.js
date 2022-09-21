import Link from "../UI/Link";
import classes from "./InsightsItem.module.css";
import Image from "next/image";

const CaseStudiesItem = () => {
  return (
    <div className={classes.CaseItemWrapper}>
      <Link type="blog" href="/insightscms">
        <div className={classes.CaseItem}>
          <div className={classes.CaseImageWrapper}>
            <div className={classes.CaseImage}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/insights_item.png"
              ></Image>
            </div>
          </div>
          <div className={classes.CaseContent}>
            <p>Design Basics</p>
            <h2>Collaborating with others, what should you know?</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CaseStudiesItem;
