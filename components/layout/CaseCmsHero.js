import Image from "next/image";
import classes from "./CaseCmsHero.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect } from "react";

// ScrollTrigger.normalizeScroll(true);
// ScrollTrigger.config({ ignoreMobileResize: true })
const CaseCmsHero = () => {
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

      <div className={classes.CaseMain}>
        <div className="container">
          <div className={classes.OverviewSection}>
            <div className="dotWrapper">
              <div className="dot"></div>
              <p>What makes us totally ok</p>
            </div>
            <div className={`${classes.Grid} grid`}>
              <div className="coll-3">
                <div className={classes.ContentWrapper}>
                  <h2>OVERVIEW</h2>
                  <div className={classes.DescriptionWrapper}>
                    <p>
                      We were very excited to work with Minespider. This
                      innovative company has received funds from the European
                      Union and has worked with industry giants such as Google,
                      Volkswagen, and more.
                    </p>
                    <p>
                      Minespider contacted us to create a new digital identity
                      and website for their company. We love what they do and
                      align with their brand values which are transparency and
                      responsibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="coll-9">
                <div className={classes.ImageMain}>
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
          <div className={classes.TechSection}>
            <div className="dotWrapper">
              <div className="dot"></div>
              <p>Which technology did we use?</p>
            </div>
            <div className={`${classes.Grid} grid`}>
              <div className="coll-4">
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
                  src="/images/challenge_01.png"
                ></Image>
              </div>
              <div className={classes.ImageChallenge}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  src="/images/challenge_02.png"
                ></Image>
              </div>
              <div className={classes.ImageChallenge}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  src="/images/challenge_03.png"
                ></Image>
              </div>
            </div>
            <div className={classes.ContentWrapperChallenge}>
              <div className={classes.ContentWrapper}>
                <h2>OVERVIEW</h2>
                <div className={classes.DescriptionWrapper}>
                  <p>
                    Minespider was not happy with its current digital image and
                    needed to add marketing solutions for its potential
                    customers. The challenge was to create a visual language
                    that would integrate the mineral industry and blockchain
                    technology by designing a unique and modern user experience.
                  </p>
                  <p>
                    The plan included detailed service pages that served as
                    landing pages with an appointment scheduling element, a
                    modern blog, and a stable marketing infrastructure.
                  </p>
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
                    <p>
                      In order to achieve and go beyond our client is
                      expectations, we started by characterizing the work. We
                      learned about the target audience and researched the
                      market and their competitors.
                    </p>
                    <p>
                      Once the characterization was stable and met customer
                      expectations, we started building the initial impression
                      of the company. The first impression is the most critical
                      step in creating the brand image. We went through
                      potential color palettes that work well with minerals and
                      the world of advanced technology.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${classes.SolutionCollEight} coll-8`}>
                <div className={classes.ImageMain}>
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
                    <p>
                      In order to achieve and go beyond our clients
                      expectations, we started by characterizing the work. We
                      learned about the target audience and researched the
                      market and their competitors.
                    </p>
                    <p>
                      Once the characterization was stable and met customer
                      expectations, we started building the initial impression
                      of the company. The first impression is the most critical
                      step in creating the brand image. We went through
                      potential color palettes that work well with minerals and
                      the world of advanced technology.
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.CollTwelveMiddle}>
                <div className={classes.ImageLarge}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="hero"
                    src="/images/solution.png"
                  ></Image>
                </div>
              </div>
              <div className={classes.CollEightMiddle}>
                <div className={classes.ContentWrapper}>
                  <div className={classes.DescriptionWrapper}>
                    <p>
                      Thanks to open communication, we were able to reach a
                      final prototype that combines customer needs and market
                      standards. The web design and branding included custom UI
                      creation, icon design for the brand, illustrations, and
                      animations that will support the brand message that the
                      site needs to convey to the target audience.
                    </p>
                    <p>
                      For Minespider, it was important to incorporate modern
                      animations in all parts of the site in order to emphasize
                      the technological aspect and the world standard. We chose
                      to work with Webflow s development software to create an
                      advanced digital experience. We wanted a website that was
                      not online exceptional for its visitors but also a CMS
                      that is easy to manage and update for the Minespider
                      marketing team.
                    </p>
                    <p>
                      Thanks to the detailed prototype we created in Figma, the
                      development team had no room for imagination and the
                      transition between the planned design and the final
                      product was simple and quick. We have created an advanced
                      content management system in Webflow for the client that
                      does not require any prior knowledge in programming. We
                      built an integration between the site systems and the
                      customer management systems for their marketing team.
                    </p>
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
              <div className="coll-4">
                <div className={classes.ContentWrapper}>
                  <h2>THE OUTCOME</h2>
                  <div className={classes.DescriptionWrapper}>
                    <p>
                      With the full cooperation of Minespider, our design and
                      development team were able to overcome the challenges and
                      give the brand its necessary facelift.
                    </p>
                    <p>
                      Aside from creating a digital experience that met the
                      clients standards, we were also able to optimize search
                      engine rankings and brand exposure. We believe Minespider
                      is new digital identity will be able to build long-term
                      trust with their customers and increase conversion rates.
                    </p>
                    <p>
                      We are pleased to take part in such a significant project
                      which creates advanced technology and fights for human
                      rights in developing countries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="coll-8">
                <div className={classes.ImageMain}>
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
      </div>
    </div>
  );
};

export default CaseCmsHero;
