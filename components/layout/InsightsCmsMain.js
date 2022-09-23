import Image from "next/image";
import classes from "./InsightsCmsMain.module.css";
import Link from "../UI/Link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import { useEffect } from "react";

const InsightsCmsMain = () => {
  const imgRef = useRef(null);

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

  return (
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
              <h3>
                We focus on digital design, strategic marketing, and all things
                technology to better businesses and brand experiences. We pride
                ourselves in being fully transparent. We are clear on every step
                we take, and you will always be involved in all business
                decisions.
              </h3>
              <h2>A simple strategy</h2>
              <p>
                Keep a folder and save designs that inspire you over the course
                of the week. At the end of the week, look through your folder
                and ask yourself some of these questions. You don t have to
                answer each one of those questions for every design, but do keep
                them in the back of your mind.
              </p>
              <h2>Browse design inspiration</h2>
              <p>
                For interface design you can look at sites like Dribbble ,
                Behance, and Awwwards. I use these sites as a way to see how
                other designers have solved specific problems and to keep up to
                date with popular design patterns.
              </p>
              <div className={classes.Image}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  src="/images/insights_cms.png"
                ></Image>
              </div>
              <p className={classes.Caption}>This is image caption</p>
              <h2>A simple strategy</h2>
              <p>
                Keep a folder and save designs that inspire you over the course
                of the week. At the end of the week, look through your folder
                and ask yourself some of these questions. You don t have to
                answer each one of those questions for every design, but do keep
                them in the back of your mind.
              </p>
              <ul>
                <li>
                  What is the purpose of the design? How has this affected the
                  design?
                </li>
                <li>How does this design make you feel?</li>
                <li>How does the type work with the design?</li>
                <li>What could you improve on in this design?</li>
                <li>Are you still drawn to it the same way as before?</li>
              </ul>
              <div className={classes.Image}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  src="/images/insights_cms.png"
                ></Image>
              </div>
              <p className={classes.Caption}>This is image caption</p>
              <p>
                Keep a folder and save designs that inspire you over the course
                of the week. At the end of the week, look through your folder
                and ask yourself some of these questions. You don t have to
                answer each one of those questions for every design, but do keep
                them in the back of your mind.
              </p>
              <p className={classes.Quote}>
                Deisgn is the silent ambassador of your brand. Design is so
                simple that is why it is complicated.
              </p>
              <p>
                For interface design you can look at sites like Dribbble ,
                Behance, and Awwwards. I use these sites as a way to see how
                other designers have solved specific problems and to keep up to
                date with popular design patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InsightsCmsMain;
