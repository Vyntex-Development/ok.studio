import Link from "../UI/Link";
import classes from "./InsightsItem.module.css";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { config } from "../../lib/config";
import { urlFor } from "../../lib/sanity";

const CaseStudiesItem = ({ title, media, tag, slug }) => {
  const imageProps = useNextSanityImage(config, media);

  return (
    <div className={classes.CaseItemWrapper}>
      <Link type="blog" href={`insights/${slug.current}`}>
        <div className={classes.CaseItem}>
          <div className={classes.CaseImageWrapper}>
            <div className={classes.CaseImage}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                {...imageProps}
              ></Image>
            </div>
          </div>
          <div className={classes.CaseContent}>
            <p>{tag}</p>
            <h2>{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CaseStudiesItem;
