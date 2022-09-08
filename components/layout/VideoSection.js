import classes from "./VideoSection.module.css";
import Image from "next/image";

const VideoSection = () => {
  return (
    <div className={`${classes.Container} container`}>
      <div className={`${classes.DotWrapper} dotWrapper`}>
        <div className="dot"></div>
        <p>We build powerful websites — that impact millions</p>
      </div>
      <div>
        <div className={classes.Image}>
          <Image
            layout="fill"
            objectFit="cover"
            alt="hero"
            src="/images/hero_img.png"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
