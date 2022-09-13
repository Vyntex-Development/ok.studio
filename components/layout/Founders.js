import classes from "./Founders.module.css";
import Image from "next/image";
import Link from "../UI/Link";

const Founders = () => {
  return (
    <div className="container">
      <div className="dotWrapper">
        <div className="dot"></div>
        <p className="gray">Those who always stay invovled</p>
      </div>
      <div className={`${classes.Grid} grid`}>
        <div className="coll-4">
          <p className="p-about">THE FOUNDERS</p>
        </div>
        <div className="coll-8">
          <div className={classes.FoundersWrapper}>
            <Link type="blog" href="/">
              <div className={classes.NameWrapper}>
                <h1 className={classes.Name}>ILIA BORTNIKOV</h1>
                <p>Co-Founder and President</p>
              </div>
              <p className={classes.Description}>
                If you are intrested hiring us or ask anything related to your
                next project, <span>email Ilia.</span>
              </p>
              <div className={classes.FounderIcon}>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={100}
                  height={52}
                  src="/images/founder_icon.png"
                ></Image>
              </div>
            </Link>
            <Link type="blog" href="/">
              <div className={classes.NameWrapper}>
                <h1 className={classes.Name}>MARINA LU</h1>
                <p>Co-Founder and CEO</p>
              </div>
              <p className={classes.Description}>
                If you are intrested hiring us or ask anything related to your
                next project, <span>email Marina.</span>
              </p>
              <div className={classes.FounderIcon}>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={100}
                  height={52}
                  src="/images/founder_icon.png"
                ></Image>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;