import Image from "next/image";
import classes from "./HeroInsightsCms.module.css";
import Link from "../UI/Link";
import { useRef } from "react";
import { useEffect } from "react";

const HeroInsights = () => {
  const progressNav = useRef();
  const progressbarRef = useRef();

  useEffect(() => {
    let isScrolling = false;
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        isScrolling = true;
        render();
        function render() {
          if (!isScrolling) return;
          progressbarRef.current.value =
            (100 -
              ((progressNav.current.offsetHeight +
                progressNav.current.getBoundingClientRect().top) /
                progressNav.current.offsetHeight) *
                100) *
            0.29;
          isScrolling = false;
        }
      });
    }
  }, []);

  return (
    <div className="container">
      <div ref={progressNav} className={classes.HeroSection}>
        <progress ref={progressbarRef} min="0" max="100" value="1">
          <div className="progress-bar">
            <span></span>
          </div>
        </progress>
        <div className={classes.HeroWrapper}>
          <div className="grid">
            <div className="coll-4">
              <div className={classes.ShareWrapper}>
                <Link href="/" type="nav">
                  Share this post
                </Link>
                <div className={classes.NameWrapper}>
                  <p>
                    By: <span>Ilia Bortnikov</span>
                  </p>
                  <p>Latest modified: 24/08/2022</p>
                </div>
              </div>
            </div>
            <div className="coll-8">
              <div className={classes.HeroContent}>
                <p>UI-DESIGN</p>
                <h1>
                  Digging up the past and shaking it up: Fabian Maier-Bode’s
                  intrinsic artistry
                </h1>
                <p>
                  When it comes to typography, a little bit of knowledge goes a
                  long way. People who understand good typography make our world
                  a little more legible and beautiful. Let learn how…
                </p>
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
    </div>
  );
};

export default HeroInsights;
