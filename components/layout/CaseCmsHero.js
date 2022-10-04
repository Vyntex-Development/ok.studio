import Image from "next/image";
import classes from "./CaseCmsHero.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";
import { useRef } from "react";
import { config } from "../../lib/config";
import { useNextSanityImage } from "next-sanity-image";
import { urlFor } from "../../lib/sanity";

// ScrollTrigger.normalizeScroll(true);
// ScrollTrigger.config({ ignoreMobileResize: true })
const CaseCmsHero = ({ casestudy }) => {
  // ScrollTrigger.normalizeScroll(true);
  // ScrollTrigger.config({ ignoreMobileResize: true });
  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
  }, []);
  useEffect(() => {
    let tlMain = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section-height",
          start: "top top",
          end: "98% bottom",
          scrub: 1,
          // normalizeScroll: true,
          // ignoreMobileResize: true,
          // config: {
          //   ignoreMobileResize: true,
          // },
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
          // normalizeScroll: true,
          // config: {
          //   ignoreMobileResize: true,
          // },
          // ignoreMobileResize: true,
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
          // normalizeScroll: true,

          // // ignoreMobileResize: true,
          scrub: true,
          // config: {
          //   ignoreMobileResize: true,
          // },
        },
      })
      .from("#note-panel-img", { rotate: 40, scale: 0.3 });
    // { rotate: 40, scale: 0.3 })
    // thanks
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#thanks-panel-wrapp",
          containerAnimation: tlMain,
          start: "left left",
          end: "right right",
          // normalizeScroll: true,
          // ignoreMobileResize: true,
          scrub: true,
          // config: {
          //   ignoreMobileResize: true,
          // },
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
  }, []);

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
  }, []);
  const imageProps = useNextSanityImage(config, casestudy && casestudy.media);
  const imageLightFirst = useNextSanityImage(
    config,
    casestudy && casestudy.herolightfirst
  );
  const imageLightSecond = useNextSanityImage(
    config,
    casestudy && casestudy.herolightsecond
  );
  const imageLightThird = useNextSanityImage(
    config,
    casestudy && casestudy.herolightthird
  );
  const imageDarkfirst = useNextSanityImage(
    config,
    casestudy && casestudy.herodarkfirst
  );
  const imageDarkSecond = useNextSanityImage(
    config,
    casestudy && casestudy.herodarksecond
  );
  const imageDarkThird = useNextSanityImage(
    config,
    casestudy && casestudy.herodarkthird
  );
  const imageHero = useNextSanityImage(
    config,
    casestudy && casestudy.heroimage
  );

  const imageHeroSmall = useNextSanityImage(
    config,
    casestudy && casestudy.heroimagesmall
  );

  const imageOverview = useNextSanityImage(
    config,
    casestudy && casestudy.overviewimage
  );

  const imageChallengeFirst = useNextSanityImage(
    config,
    casestudy && casestudy.challengeimagefirst
  );
  const imageChallengeSecond = useNextSanityImage(
    config,
    casestudy && casestudy.challengeimagesecond
  );
  const imageChallengeThird = useNextSanityImage(
    config,
    casestudy && casestudy.challengeimagethird
  );
  const imageSolution = useNextSanityImage(
    config,
    casestudy && casestudy.solutionimage
  );

  const imageLast = useNextSanityImage(
    config,
    casestudy && casestudy.lastimage
  );

  const imageOutcome = useNextSanityImage(
    config,
    casestudy && casestudy.outcomeimage
  );
  const imageProject = useNextSanityImage(
    config,
    casestudy && casestudy.projectimage
  );
  return (
    <div className={classes.CaseSection}>
      <div>
        <div className={classes.HeroWrapper}>
          <div className="container">
            <div className={`${classes.Grid} grid`}>
              <div className="coll-4">
                <div className={classes.HeroTitle}>
                  <h1>{casestudy && casestudy.title}</h1>
                </div>
              </div>
              <div className={`${classes.Coll6} coll-6`}>
                <p className={classes.HeroDescription}>
                  {casestudy && casestudy.description}
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
                        {...imageHero}
                      ></Image>
                    </div>
                    <div className={classes.ImageMobile}>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        src="/images/case_hero_mobile.png"
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
                          {...imageHeroSmall}
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
                      <h1 className={classes.Title}>Case study</h1>
                      <div className={classes.ThanksPaneRelative}>
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
                                  {...imageLightFirst}
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
                                  {...imageLightSecond}
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
                                  {...imageLightThird}
                                ></Image>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={classes.ThanksPanelContainTwo}
                      id="thanks-panel-contain-two"
                    >
                      <h1 className={classes.TitleWhite}>Case study</h1>
                      <div className={classes.ThanksPaneRelative}>
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
                                  {...imageDarkfirst}
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
                                  {...imageDarkSecond}
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
                                  {...imageDarkThird}
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
      <div className={classes.CaseMain}>
        <div className="container">
          <div className={classes.OverviewSection}>
            <div className="dotWrapper">
              <div className="dot"></div>
              <p>What makes us totally ok</p>
            </div>
            <div className={`${classes.Grid} grid`}>
              <div className={`${classes.OverColl4} coll-3`}>
                <div className={classes.ContentWrapper}>
                  <h2>OVERVIEW</h2>
                  <div className={classes.DescriptionWrapper}>
                    <p>{casestudy && casestudy.overviewdescriptionfirst}</p>
                    <p>{casestudy && casestudy.overviewdescriptionsecond}</p>
                  </div>
                </div>
              </div>
              <div className="coll-9">
                <div className={classes.ImageMain}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    {...imageOverview}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.TechSection}>
            <div className="dotWrapper">
              <div className="dot"></div>
              <p>Which technology did we use?</p>
            </div>
            <div className={`${classes.Grid} grid`}>
              <div className={`${classes.OverColl4} coll-4`}>
                <div className={classes.ContentWrapper}>
                  <h2>TECH STACK</h2>
                </div>
              </div>
              <div className="coll-8">
                <div className={classes.TechWrapper}>
                  <div className={classes.TechItem}>
                    <div className={classes.NumberWrapper}>
                      <p className={classes.Number}>01</p>
                      <p className={classes.Description}>Research</p>
                    </div>
                    <div className={classes.TechContent}>
                      <div className={classes.Tech}>
                        <Image
                          layout="fixed"
                          objectFit="fill"
                          alt="icon"
                          width={24}
                          height={24}
                          src="/images/ahrefs.png"
                        ></Image>
                        <p className={classes.TechDescription}>Ahrefs</p>
                      </div>
                      <div className={classes.Tech}></div>
                    </div>
                  </div>
                  <div className={classes.TechItem}>
                    <div className={classes.NumberWrapper}>
                      <p className={classes.Number}>02</p>
                      <p className={classes.Description}>Communication</p>
                    </div>
                    <div className={classes.TechContent}>
                      <div className={classes.Tech}>
                        <Image
                          layout="fixed"
                          objectFit="fill"
                          alt="icon"
                          width={24}
                          height={24}
                          src="/images/slack.png"
                        ></Image>
                        <p className={classes.TechDescription}>Slack</p>
                      </div>
                      <div className={classes.Tech}>
                        <Image
                          layout="fixed"
                          objectFit="fill"
                          alt="icon"
                          width={24}
                          height={24}
                          src="/images/notion.png"
                        ></Image>
                        <p className={classes.TechDescription}>Notion</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.TechItem}>
                    <div className={classes.NumberWrapper}>
                      <p className={classes.Number}>03</p>
                      <p className={classes.Description}>
                        Design and Prototype
                      </p>
                    </div>
                    <div className={classes.TechContent}>
                      <div className={classes.Tech}>
                        <Image
                          layout="fixed"
                          objectFit="fill"
                          alt="icon"
                          width={24}
                          height={24}
                          src="/images/figma.png"
                        ></Image>
                        <p className={classes.TechDescription}>Figma</p>
                      </div>
                      <div className={classes.Tech}></div>
                    </div>
                  </div>
                  <div className={classes.TechItem}>
                    <div className={classes.NumberWrapper}>
                      <p className={classes.Number}>04</p>
                      <p className={classes.Description}>Framework</p>
                    </div>
                    <div className={classes.TechContent}>
                      <div className={classes.Tech}>
                        <Image
                          layout="fixed"
                          objectFit="fill"
                          alt="icon"
                          width={24}
                          height={24}
                          src="/images/next.png"
                        ></Image>
                        <p className={classes.TechDescription}>Next.js</p>
                      </div>
                      <div className={classes.Tech}></div>
                    </div>
                  </div>
                  <div className={classes.TechItem}>
                    <div className={classes.NumberWrapper}>
                      <p className={classes.Number}>05</p>
                      <p className={classes.Description}>
                        Library and Languages
                      </p>
                    </div>
                    <div className={classes.TechContent}>
                      <div className={classes.Tech}>
                        <Image
                          layout="fixed"
                          objectFit="fill"
                          alt="icon"
                          width={24}
                          height={24}
                          src="/images/react.png"
                        ></Image>
                        <p className={classes.TechDescription}>React</p>
                      </div>
                      <div className={classes.Tech}>
                        <Image
                          layout="fixed"
                          objectFit="fill"
                          alt="icon"
                          width={24}
                          height={24}
                          src="/images/green.png"
                        ></Image>
                        <p className={classes.TechDescription}>GreenSock</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.TechItem}>
                    <div className={classes.NumberWrapper}>
                      <p className={classes.Number}>06</p>
                      <p className={classes.Description}>CMS, CRM, ERP</p>
                    </div>
                    <div className={classes.TechContent}>
                      <div className={classes.Tech}>
                        <Image
                          layout="fixed"
                          objectFit="fill"
                          alt="icon"
                          width={24}
                          height={24}
                          src="/images/strapi.png"
                        ></Image>
                        <p className={classes.TechDescription}>Strapi</p>
                      </div>
                      <div className={classes.Tech}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.ChallengeSection}>
            <div className="dotWrapper">
              <div className="dot"></div>
              <p>What makes us totally ok</p>
            </div>
            <div className={`${classes.ChallengeGrid} grid`}>
              <div className={classes.ImageChallenge}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  {...imageChallengeFirst}
                ></Image>
              </div>
              <div className={classes.ImageChallenge}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  {...imageChallengeSecond}
                ></Image>
              </div>
              <div className={classes.ImageChallenge}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  {...imageChallengeThird}
                ></Image>
              </div>
            </div>
            <div className={classes.ContentWrapperChallenge}>
              <div className={classes.ContentWrapper}>
                <h2>OVERVIEW</h2>
                <div className={classes.DescriptionWrapper}>
                  <p>{casestudy && casestudy.challengedescriptionfirst}</p>
                  <p>{casestudy && casestudy.challengedescriptionsecond}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.SolutionSection}>
            <div className="dotWrapper">
              <div className="dot"></div>
              <p>What makes us totally ok</p>
            </div>
            <div className={`${classes.SolutionGrid} grid`}>
              <div className={`${classes.SolutionCollFour} coll-4`}>
                <div className={classes.ContentWrapper}>
                  <h2>OUR SOLUTION</h2>
                  <div className={classes.DescriptionWrapper}>
                    <p>{casestudy && casestudy.solutiondescriptionfirst}</p>
                    <p>{casestudy && casestudy.solutiondescriptionsecond}</p>
                  </div>
                </div>
              </div>
              <div className={`${classes.SolutionCollEight} coll-8`}>
                <div className={classes.ImageMain}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    {...imageSolution}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.MiddleSection}>
            <div className="dotWrapper">
              <div className="dot"></div>
              <p>What makes us totally ok</p>
            </div>
            <div className={classes.GridMiddle}>
              <div className={classes.CollFourMiddle}>
                <div className={classes.ContentWrapper}>
                  <h2>THE OUTCOME</h2>
                  <div className={classes.DescriptionWrapper}>
                    <p>{casestudy && casestudy.outcomedescriptionfirst}</p>
                    <p>{casestudy && casestudy.outcomedescriptionsecond}</p>
                  </div>
                </div>
              </div>
              <div className={classes.CollTwelveMiddle}>
                <div className={classes.ImageLarge}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    {...imageOutcome}
                  ></Image>
                </div>
              </div>
              <div className={classes.CollEightMiddle}>
                <div className={classes.ContentWrapper}>
                  <div className={classes.DescriptionWrapper}>
                    <p>{casestudy && casestudy.outcomedescriptionthird}</p>
                    <p>{casestudy && casestudy.outcomedescriptionfourth}</p>
                    <p>{casestudy && casestudy.outcomedescriptionfifth}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.OutcoemSection}>
            <div className="dotWrapper">
              <div className="dot"></div>
              <p>What makes us totally ok</p>
            </div>
            <div className={`${classes.Grid} grid`}>
              <div className={`${classes.OverColl4} coll-4`}>
                <div className={classes.ContentWrapper}>
                  <h2>THE OUTCOME</h2>
                  <div className={classes.DescriptionWrapper}>
                    <p>{casestudy && casestudy.lastdescriptionfirst}</p>
                    <p>{casestudy && casestudy.lastdescriptionsecond}</p>
                    <p>{casestudy && casestudy.lastdescriptionthird}</p>
                  </div>
                </div>
              </div>
              <div className="coll-8">
                <div className={classes.ImageMain}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    imageLast
                    {...imageLast}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ProjectSection}>
        <div className={classes.BgColor}>
          <div className="container">
            <div className={`${classes.DotWrapperProject} dotWrapper`}>
              <div className="dot"></div>
              <p>What makes us totally ok</p>
            </div>
          </div>
        </div>
        <div className={classes.HeroWrapperProject} ref={imgRef} id="wrapper">
          <div className={classes.HeroStickyProject}>
            <div className={classes.HeroImageWrapperProject} id="moving">
              <div className={classes.ImageProject}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  {...imageProject}
                ></Image>
              </div>
            </div>
            <div className={classes.TitleWrapperDesktop}>
              <h1>{casestudy && casestudy.projecttitle}</h1>
              <div className={classes.ProjectWrapper}>
                <div className={classes.NumberWrapperProject}>
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
    </div>
  );
};

export default CaseCmsHero;
