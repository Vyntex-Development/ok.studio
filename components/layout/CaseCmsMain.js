import classes from "./CaseCmsMain.module.css";
import Image from "next/image";

const CaseCmsMain = () => {
  return (
    <div>
      <div className="container">
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
                  We were very excited to work with Minespider. This innovative
                  company has received funds from the European Union and has
                  worked with industry giants such as Google, Volkswagen, and
                  more.
                </p>
                <p>
                  Minespider contacted us to create a new digital identity and
                  website for their company. We love what they do and align with
                  their brand values which are transparency and responsibility.
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
        <div className={classes.TechSection}>
          <div className="dotWrapper">
            <div className="dot"></div>
            <p className="gray">Which technology did we use?</p>
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
      </div>
    </div>
  );
};

export default CaseCmsMain;
