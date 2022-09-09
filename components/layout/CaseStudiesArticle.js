import Image from "next/image";
import Link from "../UI/Link";
import classes from "./CaseStudiesArticle.module.css";
const CaseStudiesArticle = () => {
  return (
    <div className={classes.CaseItemWrapper}>
      <Link type="blog" href="/">
        <div className={classes.CaseItem}>
          <div className={classes.CaseContent}>
            <p>
              An international hospitality brand that manages and developers
              resorts, hotels and spas worldword.
            </p>
            <h2>Banyan Tree</h2>
          </div>
          <div className={classes.CaseImageWrapper}>
            <div className={classes.CaseImage}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/case_home.png"
              ></Image>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CaseStudiesArticle;
