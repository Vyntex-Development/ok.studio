import Image from "next/image";
import classes from "./HeroHome.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import { useEffect } from "react";
import { useNextSanityImage } from "next-sanity-image";
import { config } from "../../lib/config";

const HeroHome = ({ datahome }) => {
  useEffect(() => {
    // gsap.timeline({ repeat: -1, yoyo: true }).fromTo(
    //   "#stickybgimage",
    //   {
    //     filter: "brightness(80%)",
    //   },
    //   {
    //     filter: "brightness(120%)",
    //     ease: "power1.inOut",
    //     duration: 2.2,
    //   }
    // );

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
      .from("#squares", {
        opacity: 0,
        duration: 0.01,
        stagger: { each: 0.5, from: "random" },
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
        { scale: 0.8, xPercent: 0 },
        {
          scale: 8,
          xPercent: 0.15,

          duration: 1,
          ease: "power1.out",
        }
      )
      .fromTo(
        "#logo",
        { color: "#E4E4E4" },
        {
          color: "transparent",
        }
      )
      .fromTo(
        "#stickybgimage",
        { opacity: 0, scale: 1.3 },
        { opacity: 1, scale: 1, duration: 1, ease: "power1.out" },
        0.1
      )
      .fromTo(
        "#stickylogo",
        { opacity: 1 },
        {
          opacity: 1,
          duration: 3,

          ease: "power1.out",
        },
        0.1
      )
      .to(
        "#stickybgimage",
        {
          opacity: 0,
          duration: 0.03,
        },
        "<"
      )
      .to(
        "#stickylogo",
        {
          //   backgroundColor: "#06080F"

          duration: 0.03,
        },
        "<"
      );
  }, []);
  console.log(
    datahome["homepageData"]["pageBuilder"][0]["herovideo"]["asset"]["_ref"]
  );

  const heroImage = useNextSanityImage(
    config,
    datahome &&
      datahome["homepageData"]["pageBuilder"][0]["heroimage"]["asset"]["_ref"]
  );
  const heroVideo = useNextSanityImage(
    config,
    datahome &&
      datahome["homepageData"]["pageBuilder"][0]["herovideo"]["asset"]["_ref"]
  );

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
                    // src="/images/hero_img.png"
                    {...heroVideo}
                  ></Image>
                </div>
              </div>
              <div className={classes.StickySquares} id="stickysquares">
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
                <div id="squares" className={classes.Squares}></div>
              </div>
              <div className={classes.StickyLogoWrapp} id="stickylogowrapp">
                <img
                  className={classes.StickyBgImg}
                  id="stickybgimage"
                  // src="/images/hero_an.png"
                  {...heroImage}
                  alt="hero image"
                />

                <div className={classes.StickyLogo} id="stickylogo">
                  <svg
                    id="logo"
                    width="674"
                    height="146"
                    viewBox="0 0 674 146"
                    fill="#CFFD04"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.9366e-06 55.9022H6.19925V62.1042H12.3985V68.3486H18.5977V74.5505H68.319V68.3486H74.5183V62.1042L80.7175 62.1042V55.9022H86.9592L86.9592 18.6058H80.7175V12.4038H74.5183V6.20192L68.319 6.20192V2.17433e-06L18.5977 0V6.20192H12.3985V12.4038H6.19925V18.6058L5.56618e-06 18.6058L3.9366e-06 55.9022ZM12.3985 24.8502H18.5977V18.6058H24.8394V12.4038L62.0773 12.4038V18.6058L68.319 18.6058V24.8502H74.5183V49.7003H68.319V55.9022H62.0773V62.1042H24.8394L24.8394 55.9022H18.5977V49.7003H12.3985L12.3985 24.8502Z"
                      fill="#CFFD04"
                    />
                    <path
                      d="M2.03605e-06 99.4006H31.0387V105.603H24.8394V111.847H18.5977V118.049H12.3985V124.251H6.19924V130.495H6.77446e-07L0 146H6.19924V139.798H12.3985V133.596H18.5977L18.5977 127.352H24.8394V121.15H31.0387L31.0387 114.948H37.2379V108.746H49.6789V114.948H55.8781V121.15H62.0773V127.352H68.319V133.596H74.5183V139.798H80.7175V146H86.9592V130.495H80.7175V124.251H74.5183V118.049H68.319V111.847H62.0773V105.603H55.8781V99.4006H86.9592V86.9968H2.578e-06L2.03605e-06 99.4006Z"
                      fill="#CFFD04"
                    />
                    <path
                      d="M174.502 127.342C200.697 127.342 215.917 114.317 215.917 94.2677C215.917 72.6088 195.575 67.0477 175.819 61.1939C162.501 57.2426 156.648 54.9011 156.648 47.8766C156.648 41.8765 162.209 39.2423 170.111 39.2423C180.209 39.2423 186.648 44.0716 187.819 52.1206H214.454C213.722 30.9007 194.551 18.0224 170.111 18.0224C147.574 18.0224 129.72 26.9494 129.72 49.7791C129.72 68.5111 145.964 75.5356 164.111 81.0967C178.599 85.4871 188.99 87.8286 188.99 96.7556C188.99 102.17 184.014 106.122 174.209 106.122C162.355 106.122 153.135 101.585 153.135 89.4383H126.501C126.501 113.439 147.135 127.342 174.502 127.342ZM248.388 125H274.73V41.8765H305.023V20.3639H217.949V41.8765H248.388V125ZM358.878 127.342C390.488 127.342 402.635 113.292 402.635 87.2432V20.3639H376.293V87.2432C376.293 100.853 370.439 105.829 358.878 105.829C347.317 105.829 341.463 100.853 341.463 87.2432V20.3639H315.121V87.2432C315.121 113.292 327.268 127.342 358.878 127.342ZM419.326 125H467.181C496.303 125 512.401 106.414 512.401 72.7551C512.401 39.0959 494.84 20.3639 465.717 20.3639H419.326V125ZM445.668 103.487V41.8765H462.498C478.888 41.8765 485.474 53.7304 485.474 72.7551C485.474 91.7799 478.888 103.487 462.498 103.487H445.668ZM525.797 125H552.139V20.3639H525.797V125ZM617.088 127.342C650.015 127.342 668.894 104.219 668.894 72.6088C668.894 41.1447 650.015 18.0224 617.088 18.0224C583.868 18.0224 565.282 41.1447 565.282 72.6088C565.282 104.219 583.868 127.342 617.088 127.342ZM592.209 72.6088C592.209 54.4621 597.917 39.535 617.088 39.535C636.112 39.535 641.966 54.4621 641.966 72.6088C641.966 90.9018 636.112 105.829 617.088 105.829C597.917 105.829 592.209 90.9018 592.209 72.6088Z"
                      fill="currentColor"
                    />
                  </svg>
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
