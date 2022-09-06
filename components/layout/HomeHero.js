import Image from "next/image";
import classes from "./HomeHero.module.css";

const HomeHero = () => {
  return (
    <div className="container">
      <div className={classes.HeroWrapper}>
        <div className={classes.HeroSticky}>
          <div className={classes.HeroImageWrapper}>
            <div className={classes.Image}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/hero_img.png"
              ></Image>
            </div>
            <div className={classes.TitleWrapper}>
              <h1>
                Elevating <span>brands</span> through digital{" "}
                <span>experiences</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
