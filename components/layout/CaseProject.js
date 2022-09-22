import Image from "next/image";
import classes from "./CaseProject.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import { useEffect } from "react";

const CaseProject = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    // Update code
    function pageCode() {
      const percentBox = "number";
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#wrapper",
          start: "top top",
          end: "bottom bottom",
          normalizeScroll: true,
          scrub: true,
          onUpdate: () => {
            let percent = Math.round(tl2.progress() * 100);
            document.getElementById(percentBox).textContent = percent;
          },
        },
      });
      tl2
        .to("#moving", {
          width: "100vw",
          height: "100vh",
          opacity: 0.4,
        })
        .fromTo(
          "#moving",

          {
            opacity: 0.2,
            clipPath: "polygon(1% 1%, 99% 1%, 99% 99%, 1% 99%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
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

    // const el = imgRef.current;
    // const target = "#moving";
    // const percentBox = "number";
    // const line = "#line";

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: el,
    //     // trigger element - viewport
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 1,
    //     onUpdate: () => {
    //       let percent = Math.round(tl.progress() * 100);
    //       document.getElementById(percentBox).textContent = percent;
    //     },
    //   },
    // });
    // tl.fromTo(
    //   target,
    //   {
    //     width: "40rem",
    //     height: "25rem",
    //     opacity: 0.2,
    //   },
    //   {
    //     width: "100vw",
    //     height: "100vh",
    //     opacity: 0.4,
    //   }
    // );
    // const tlTwo = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: el,
    //     // trigger element - viewport
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 1,
    //   },
    // });
    // tlTwo.fromTo(
    //   line,
    //   {
    //     width: "0%",
    //     duration: 1,
    //   },
    //   {
    //     width: "100%",
    //     duration: 1,
    //   }
    // );
  }, []);

  return (
    <div className={classes.ProjectSection}>
      <div className={classes.BgColor}>
        <div className="container">
          <div className={`${classes.DotWrapper} dotWrapper`}>
            <div className="dot"></div>
            <p>What makes us totally ok</p>
          </div>
        </div>
      </div>
      <div className={classes.HeroWrapper} ref={imgRef} id="wrapper">
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
                <p id="number">0</p>
                <div className={classes.ProjectLine}>
                  <div id="line"></div>
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
