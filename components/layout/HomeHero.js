import Image from "next/image";
import classes from "./HomeHero.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import { useEffect } from "react";

const HomeHero = () => {
  console.log(ScrollTrigger);
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    const target = "#moving";

    let tl = gsap.timeline({
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
        width: "42rem",
        height: "25rem",
        duration: 1,
      },
      {
        width: "100vw",
        height: "100vh",
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
    <div className="container">
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
