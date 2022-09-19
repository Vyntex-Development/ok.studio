import Image from "next/image";
import classes from "./CaseCmsHero.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import { useEffect } from "react";

const CaseCmsHero = () => {
  useEffect(() => {
    let tlMain = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section-height",
          start: "top top",
          end: "98% bottom",
          scrub: 1,
        },
      })
      .to("#track", {
        xPercent: -100,
        ease: "none",
      });

    // hero photo
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero-panel",
          containerAnimation: tlMain,
          start: "left left",
          end: "right left",
          scrub: true,
        },
      })
      .from("#hero-panel-img", { scale: 1.6 }, 0);

    // note
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#note-panel",
          containerAnimation: tlMain,
          start: "left right",
          end: "left left",
          scrub: true,
        },
      })
      .from("#note-panel-img", { rotate: 45, scale: 0.3 });

    // thanks
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#thanks-panel-wrapp",
          containerAnimation: tlMain,
          start: "left left",
          end: "right right",
          scrub: true,
        },
      })
      .to("#thanks-panel", { xPercent: 100, ease: "none" })
      .to("#thanks-panel-photo", { scale: 1 }, 0)
      .fromTo(
        "#thanks-panel-contain-two",
        {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
        },
        0
      );

    // stagger photos
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".stagger-panel",
          containerAnimation: tlMain,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      })
      .from(".stagger-panel_img", { x: "100vw", stagger: { each: 0.05 } })
      .to(".stagger-panel_img", { scale: 0.5, stagger: { each: 0.05 } });
  }, []);

  return (
    <div className={classes.CaseSection}>
      <div>
        <div className={classes.HeroWrapper}>
          <div className="container">
            <div className={`${classes.Grid} grid`}>
              <div className="coll-4">
                <div className={classes.HeroTitle}>
                  <h1>Minespider</h1>
                </div>
              </div>
              <div className={`${classes.Coll6} coll-6`}>
                <p className={classes.HeroDescription}>
                  Banyan tree is an international hospitality brand that manages
                  and develops resorts, hotels. and spas in Asia, America,
                  Africa, and the middle east.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.SectionHeight} id="section-height">
          <div className={classes.StickyElement}>
            <div className={classes.Track} id="track">
              <div className={classes.TrackFlex}>
                <div className={classes.HeroPanel} id="hero-panel">
                  <div className={classes.HeroPanelImage} id="hero-panel-img">
                    <div className={classes.Image}>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        src="/images/case_hero.png"
                      ></Image>
                    </div>
                  </div>
                </div>
                <div className={classes.NotePanel} id="note-panel">
                  <div className={classes.NotePanelContain}>
                    <div className={classes.NotePanelImg} id="note-panel-img">
                      <div className={classes.NotePanelImageHeight}>
                        <Image
                          layout="fill"
                          objectFit="cover"
                          alt="hero"
                          src="/images/case_panel.png"
                        ></Image>
                      </div>
                    </div>
                    <p className={classes.DescriptionPanel}>
                      The plan included detailed service pages that served as
                      landing pages with an appointment scheduling element, a
                      modern blog, and a stable marketing infrastructure.
                    </p>
                  </div>
                </div>
                <div
                  className={classes.ThanksPanelWrapp}
                  id="thanks-panel-wrapp"
                >
                  <div className={classes.ThanksPanel} id="thanks-panel">
                    <div className={classes.ThanksPanelContain}>
                      <h1>title</h1>
                      <div className={classes.ThanksPanelImageOne}>
                        <div className={classes.ThanksPanelImageHeight}>
                          <div
                            className={classes.ThanksPanelPhoto}
                            id="thanks-panel-photo"
                          >
                            <div className={classes.Image}>
                              <Image
                                layout="fill"
                                objectFit="cover"
                                alt="hero"
                                src="/images/case_01.png"
                              ></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.ThanksPanelImageTwo}>
                        <div className={classes.ThanksPanelImageHeight}>
                          <div
                            className={classes.ThanksPanelPhoto}
                            id="thanks-panel-photo"
                          >
                            <div className={classes.Image}>
                              <Image
                                layout="fill"
                                objectFit="cover"
                                alt="hero"
                                src="/images/case_02.png"
                              ></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.ThanksPanelImageThree}>
                        <div className={classes.ThanksPanelImageHeight}>
                          <div
                            className={classes.ThanksPanelPhoto}
                            id="thanks-panel-photo"
                          >
                            <div className={classes.Image}>
                              <Image
                                layout="fill"
                                objectFit="cover"
                                alt="hero"
                                src="/images/case_03.png"
                              ></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={classes.ThanksPanelContainTwo}
                      id="thanks-panel-contain-two"
                    >
                      <h1>title</h1>
                      <div className={classes.ThanksPanelImageOne}>
                        <div className={classes.ThanksPanelImageHeight}>
                          <div
                            className={classes.ThanksPanelPhoto}
                            id="thanks-panel-photo"
                          >
                            <div className={classes.Image}>
                              <Image
                                layout="fill"
                                objectFit="cover"
                                alt="hero"
                                src="/images/case_03.png"
                              ></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.ThanksPanelImageTwo}>
                        <div className={classes.ThanksPanelImageHeight}>
                          <div
                            className={classes.ThanksPanelPhoto}
                            id="thanks-panel-photo"
                          >
                            <div className={classes.Image}>
                              <Image
                                layout="fill"
                                objectFit="cover"
                                alt="hero"
                                src="/images/case_01.png"
                              ></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={classes.ThanksPanelImageThree}>
                        <div className={classes.ThanksPanelImageHeight}>
                          <div
                            className={classes.ThanksPanelPhoto}
                            id="thanks-panel-photo"
                          >
                            <div className={classes.Image}>
                              <Image
                                layout="fill"
                                objectFit="cover"
                                alt="hero"
                                src="/images/case_02.png"
                              ></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCmsHero;
