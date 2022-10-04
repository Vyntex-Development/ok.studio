import Image from "next/image";
import classes from "./TechItem.module.css";
import { useEffect } from "react";
import { useRef } from "react";
import { config } from "../../lib/config";
import { useNextSanityImage } from "next-sanity-image";
import { urlFor } from "../../lib/sanity";

const TechItem = ({
  title,
  tehnologyfirst,
  tehnologysecond,
  iconfirst,
  iconsecond,
}) => {
  const imageProps = useNextSanityImage(config, iconfirst);
  const imagePropsSecond = useNextSanityImage(config, iconsecond);
  return (
    <div>
      <div className={classes.TechItem}>
        <div className={classes.NumberWrapper}>
          <p className={classes.Number}>01</p>
          <p className={classes.Description}>{title}</p>
        </div>
        <div className={classes.TechContent}>
          <div className={classes.Tech}>
            <Image
              layout="fixed"
              objectFit="fill"
              alt="icon"
              width={24}
              height={24}
              {...imageProps}
            ></Image>
            <p className={classes.TechDescription}>{tehnologyfirst}</p>
          </div>
          <div className={classes.Tech}>
            <Image
              layout="fixed"
              objectFit="fill"
              alt="icon"
              width={24}
              height={24}
              {...imagePropsSecond}
            ></Image>
            <p className={classes.TechDescription}>{tehnologysecond}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechItem;
