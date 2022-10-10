import Image from "next/image";
import Link from "../UI/Link";
import classes from "./CaseStudiesArticle.module.css";
import { useNextSanityImage } from "next-sanity-image";
import { config } from "../../lib/config";
import { urlFor } from "../../lib/sanity";

const CaseStudiesArticle = ({ title, media, description, slug }) => {
  const imageProps = useNextSanityImage(config, media);
  return (
    <div className={classes.CaseItemWrapper}>
      <Link type="blog" href={`/casestudies/${slug.current}`}>
        <div className={classes.CaseItem}>
          <div className={classes.CaseContent}>
            <p>{description}</p>
            <h2>{title}</h2>
          </div>
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
        </div>
      </Link>
    </div>
  );
};

export default CaseStudiesArticle;
