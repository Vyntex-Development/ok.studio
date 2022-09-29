import Image from "next/image";
import classes from "./InsightsCmsMain.module.css";
import Link from "../UI/Link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import { useEffect } from "react";
import { config } from "../../lib/config";
import { useNextSanityImage } from "next-sanity-image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/sanity";

// const insightComponents = {
//   type: {
//     image: ({ value }) => {
//       console.log(value.media);
//       // let imageProps = useNextSanityImage(config, value.media);
//       return (
//         <img
//           alt="rich text image"
//           // {...imageProps}
//           // layout="fill"
//           // objectFit="contain"
//           src={urlFor(value.media)}
//         />
//       );
//     },
//   },
// };

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      console.log(value);
      return (
        <figure>
          <figcaption>{value.caption}</figcaption>
          <img src={urlFor(value)} />
        </figure>
      );
    },
  },
};

const InsightsCmsMain = ({ insight }) => {
  const imgRef = useRef(null);
  // moze i ovako destucture da se uradi zapamti kada budes pametnija const { title } = insight;
  useEffect(() => {
    // Update code
    function pageCode() {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#rich",
          start: "top top",
          end: "bottom bottom",
          normalizeScroll: true,
          scrub: true,
        },
      });
      tl2.fromTo(
        "#bar",

        {
          width: "0%",
          height: "4px",
        },
        { width: "100%", height: "4px" },
        0
      );

      // line start

      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#wrapper",
          start: "top top",
          end: "bottom bottom",
          normalizeScroll: true,
          scrub: true,
        },
      });
      tl1.to("#line", {
        width: "100%",
      });

      // line end
    }
    pageCode();
  }, []);

  const imageProps = useNextSanityImage(config, insight.media);
  return (
    <div>
      <div className="container">
        <div className={classes.HeroSection}>
          <div className={classes.HeroWrapper}>
            <div className="grid">
              <div className={`${classes.CollFour} coll-4`}>
                <div className={classes.ShareWrapper}>
                  <Link href="/" type="nav">
                    Share this post
                  </Link>
                  <div className={classes.NameWrapper}>
                    <p>
                      By: <span>{insight.username}</span>
                    </p>
                    <p>
                      Latest modified:
                      {new Date(insight.lastModifiedAt).toDateString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${classes.CollEight} coll-8`}>
                <div className={classes.HeroContent}>
                  <p>{insight.tag}</p>
                  <h1>{insight.title}</h1>
                  <p>{insight.description}</p>
                </div>
              </div>
            </div>
            <div className={classes.Image}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                {...imageProps}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={classes.MainWrapper}>
          <div className={classes.Progress}>
            <div className={classes.ProgressBar} id="bar"></div>
          </div>
          <div className="grid">
            <div className={`${classes.CollTwo} coll-2`}>
              <div className={classes.StickyWrapper}>
                <Link href="/" type="nav">
                  Share this post
                </Link>
                <Link href="/" type="nav">
                  Subscribe
                </Link>
              </div>
            </div>
            <div className="coll-10">
              <div className={classes.RichWrapper} ref={imgRef} id="rich">
                <PortableText
                  value={insight.body}
                  components={myPortableTextComponents}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InsightsCmsMain;
