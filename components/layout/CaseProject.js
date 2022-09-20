import Image from "next/image";
import classes from "./CaseProject.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import { useEffect } from "react";

const CaseProject = () => {
  console.log(ScrollTrigger);
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    const target = "#moving";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.fromTo(
      target,
      {
        width: "40rem",
        height: "25rem",
        opacity: 0.2,
        duration: 1,
      },
      {
        width: "100vw",
        height: "100vh",
        opacity: 0.4,
        duration: 1,
      }
    );

    // gsap.fromTo(
    //   el,
    //   { width: "42rem", height: "25rem" },
    //   {
    //     width: "100vw",
    //     height: "100vh",
    //     duration: 3,
    //     scrollTrigger: { trigger: el },
    //   }
    // );
  }, []);

  return (
    <div>
      <div className="container">
        <div className="dotWrapper">
          <div className="dot"></div>
          <p>What makes us totally ok</p>
        </div>
      </div>
      <div className={classes.HeroWrapper} ref={imgRef}>
        <div className={classes.HeroSticky}>
          <div className={classes.HeroImageWrapper} id="moving">
            <div className={classes.Image}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/hero_img.png"
              ></Image>
            </div>
          </div>
          <div className={classes.TitleWrapperDesktop}>
            <h1>Hideo Ventures</h1>
            <div className={classes.ProjectWrapper}>
              <div className={classes.NumberWrapper}>
                <p>22</p>
                <div className={classes.ProjectLine}>
                  <div></div>
                </div>
                <p>/100</p>
              </div>
              <p className={classes.Next}>NEXT PROJECT</p>
            </div>
          </div>

          <div className={classes.HeroMobile}>
            <div className={classes.TitleWrapperMobile}>
              <h1>
                Elevating <span>brands</span> through digital
                <span> experiences</span>
              </h1>
            </div>
            <div className={classes.DateWrapper}>
              <p>2019 - 22</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseProject;
