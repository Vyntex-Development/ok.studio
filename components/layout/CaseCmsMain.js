import classes from "./CaseCmsMain.module.css";
import Image from "next/image";

const CaseCmsMain = () => {
  return (
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
                    Minespider contacted us to create a new digital identity and
                    website for their company. We love what they do and align
                    with their brand values which are transparency and
                    responsibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="coll-9">
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
                    <p className={classes.Description}>Design and Prototype</p>
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
                    <p className={classes.Description}>Library and Languages</p>
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
                  needed to add marketing solutions for its potential customers.
                  The challenge was to create a visual language that would
                  integrate the mineral industry and blockchain technology by
                  designing a unique and modern user experience.
                </p>
                <p>
                  The plan included detailed service pages that served as
                  landing pages with an appointment scheduling element, a modern
                  blog, and a stable marketing infrastructure.
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
                    learned about the target audience and researched the market
                    and their competitors.
                  </p>
                  <p>
                    Once the characterization was stable and met customer
                    expectations, we started building the initial impression of
                    the company. The first impression is the most critical step
                    in creating the brand image. We went through potential color
                    palettes that work well with minerals and the world of
                    advanced technology.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${classes.SolutionCollEight} coll-8`}>
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
                    engine rankings and brand exposure. We believe Minespider is
                    new digital identity will be able to build long-term trust
                    with their customers and increase conversion rates.
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
  );
};

export default CaseCmsMain;
