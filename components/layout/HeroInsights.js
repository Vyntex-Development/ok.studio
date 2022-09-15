import Image from "next/image";
import classes from "./HeroInsights.module.css";

const HeroInsights = () => {
  return (
    <div className="container">
      <div className={classes.HeroWrapper}>
        <div className="grid">
          <div className="coll-8">
            <div className={classes.HeroContent}>
              <p>UI-DESIGN</p>
              <h1>
                Digging up the past and shaking it up: Fabian Maier-Bode’s
                intrinsic artistry
              </h1>
            </div>
          </div>
        </div>
        <div className={classes.Image}>
          <Image
            layout="fill"
            objectFit="cover"
            alt="hero"
            src="/images/insights_hero.png"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroInsights;
