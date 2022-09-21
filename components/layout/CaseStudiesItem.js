import Link from "../UI/Link";
import classes from "./CaseStudiesItem.module.css";
import Image from "next/image";

const CaseStudiesItem = () => {
  return (
    <div className={classes.CaseItemWrapper}>
      <Link type="blog" href="/casestudycms">
        <div className={classes.CaseItem}>
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
          <div className={classes.CaseContent}>
            <h2>Banyan Tree</h2>
            <p>Development</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CaseStudiesItem;
