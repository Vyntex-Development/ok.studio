import Image from "next/image";
import classes from "./HeroHome.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import { useEffect } from "react";

const HeroHome = () => {
  useEffect(() => {
    gsap.timeline({ repeat: -1, yoyo: true }).fromTo(
      "#stickybgimage",
      {
        filter: "brightness(80%)",
      },
      {
        filter: "brightness(120%)",
        ease: "power1.inOut",
        duration: 2.2,
      }
    );

    let staggerSquares = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#squaeretrigger",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      })
      .set("#stickysquares", { opacity: 1 })
      //stickysquares inside divs
      .from("#stickysquares", {
        opacity: 0,
        duration: 0.01,
        // stagger: { each: 0.5, from: "random" },
      });

    let logoScale = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#logotrigger",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
        defaults: {
          ease: "none",
        },
      })
      .set("#stickylogo", { opacity: 1 })
      .to("#stickylogowrapp", {
        opacity: 1,
        duration: 0.1,
      })
      .fromTo(
        "#stickylogo",
        { scale: 0.01, xPercent: 0 },
        {
          scale: 1,
          xPercent: 0.15,
          duration: 1,
          ease: "power1.out",
        }
      )
      .fromTo(
        "#stickybgimage",
        {
          scale: 1.3,
        },
        { scale: 1, duration: 1, ease: "power1.out" },
        0.1
      )
      .to(
        "#stickybgimage",
        {
          opacity: 1,
          duration: 0.03,
        },
        "<"
      )
      .to(
        "#stickylogo",
        {
          color: "#b8b8b8",
          duration: 0.03,
        },
        "<"
      );
  }, []);

  return (
    <div>
      <div className={classes.HeroWrapper}>
        <div className={classes.StickyWrapp}>
          <div className={classes.StickyContain}>
            <div className={classes.StickyPanel}>
              <div className={classes.Hero}>
                <div className={classes.Image}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    src="/images/hero_img.png"
                  ></Image>
                </div>
              </div>
              <div className={classes.StickySquares} id="stickysquares"></div>
              <div className={classes.StickyLogoWrapp} id="stickylogowrapp">
                <div className={classes.StickyBgImg} id="stickybgimage">
                  <img src="/images/insights_hero.png" alt="Girl in a jacket" />
                  {/* <Image
                    layout="fixed"
                    objectFit="fill"
                    width={1000}
                    height={1000}
                    alt="hero"
                    src="/images/insights_hero.png"
                  ></Image> */}
                  {/* <div className={classes.ImageBg}>
                    
                  </div> */}
                </div>
                <div className={classes.StickyLogo} id="stickylogo">
                  <Image
                    layout="fixed"
                    objectFit="fill"
                    width={674}
                    height={146}
                    alt="hero"
                    src="/images/logo.png"
                  ></Image>
                  {/* <div className={classes.LogoImg}>
                    
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className={classes.SquareTrigger} id="squaeretrigger"></div>
          <div className={classes.LogoTrigger} id="logotrigger"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
