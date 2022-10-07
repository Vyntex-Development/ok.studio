import classes from "./Skills.module.css";
import Image from "next/image";
import Link from "../UI/Link";
import CaseStudiesItem from "./CaseStudiesItem";

const Skills = ({ casestudies, data }) => {
  console.log(data);
  const skillstitle = data && data["aboutpageData"]["pageBuilder"][2]["title"];
  const skillsdescription =
    data && data["aboutpageData"]["pageBuilder"][2]["description"];
  const skill01 = data && data["aboutpageData"]["pageBuilder"][2]["skill01"];
  const skill02 = data && data["aboutpageData"]["pageBuilder"][2]["skill02"];
  const skill03 = data && data["aboutpageData"]["pageBuilder"][2]["skill03"];
  const skill04 = data && data["aboutpageData"]["pageBuilder"][2]["skill04"];
  const skill05 = data && data["aboutpageData"]["pageBuilder"][2]["skill05"];
  const skill06 = data && data["aboutpageData"]["pageBuilder"][2]["skill06"];
  const skill07 = data && data["aboutpageData"]["pageBuilder"][2]["skill07"];
  const skill08 = data && data["aboutpageData"]["pageBuilder"][2]["skill08"];
  const skill09 = data && data["aboutpageData"]["pageBuilder"][2]["skill09"];
  const skill10 = data && data["aboutpageData"]["pageBuilder"][2]["skill10"];
  const skill11 = data && data["aboutpageData"]["pageBuilder"][2]["skill11"];
  const skill12 = data && data["aboutpageData"]["pageBuilder"][2]["skill12"];
  const slicedCase = casestudies.slice(3, 5);
  return (
    <div className={classes.SkillsSection}>
      <div className="container">
        <div className="dotWrapper-black">
          <div className="dot-black"></div>
          <p className="black">What can we actually do?</p>
        </div>
        <div className="grid">
          <div className="coll-4">
            <div className={classes.SkillsWrapperLeft}>
              <h2 className={classes.AboutTitle}>THE SKILLS</h2>
              <div className={classes.SmallContent}>
                <p className={classes.AboutP}>{skillsdescription}</p>
                <Link href="/services" type="transparent">
                  OUR PORTFOLIO
                </Link>
              </div>
            </div>
          </div>
          <div className="coll-8">
            <div className={classes.CollEight}>
              <h1 className={classes.h1}>{skillstitle}</h1>
              <div className={classes.Skills}>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.SkillsItem}>
                    <p className={classes.AboutP}>{skill01}</p>
                    <p className={classes.AboutP}>{skill02}</p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.SkillsItem}>
                    <p className={classes.AboutP}>{skill03}</p>
                    <p className={classes.AboutP}>{skill04}</p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.SkillsItem}>
                    <p className={classes.AboutP}>{skill05}</p>
                    <p className={classes.AboutP}>{skill06}</p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.SkillsItem}>
                    <p className={classes.AboutP}>{skill07}</p>
                    <p className={classes.AboutP}>{skill08}</p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.SkillsItem}>
                    <p className={classes.AboutP}>{skill09}</p>
                    <p className={classes.AboutP}>{skill10}</p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.SkillsItem}>
                    <p className={classes.AboutP}>{skill11}</p>
                    <p className={classes.AboutP}>{skill12}</p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
              </div>
              <div className={classes.SmallContentMobile}>
                <p className={classes.AboutP}>
                  We are carefully documenting our progress, so in case you like
                  studies — we ve got some cases.
                </p>
                <Link href="/" type="transparent">
                  OUR PORTFOLIO
                </Link>
              </div>
              <div className={classes.CaseItemWrapper}>
                {slicedCase.map(({ title, media, tag, _id, slug }) => {
                  return (
                    <CaseStudiesItem
                      key={_id}
                      title={title}
                      tag={tag}
                      media={media}
                      slug={slug}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.NumbersWrapper}>
          <div className="dotWrapper-black">
            <div className="dot-black"></div>
            <p className="black">OK.Studio in numbers</p>
          </div>
          <div className="grid">
            <div className="coll-4">
              <div className={classes.SkillsWrapperLeft}>
                <h2 className={classes.AboutTitleMargin}>THE NUMBERS</h2>
                <div className={classes.SmallContentAbout}>
                  <p className={classes.AboutP}>
                    We are carefully documenting our progress, so in case you
                    like studies — we ve got some cases.
                  </p>
                </div>
              </div>
            </div>
            <div className="coll-8">
              <div className={classes.Numbers}>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.NumberItem}>
                    <h1 className={classes.h1}>01</h1>
                    <h1 className={classes.h1}>STUDIO</h1>
                    <div className={classes.MobileTitle}>
                      <h1 className={classes.h1}>01</h1>
                      <h1 className={classes.h1}>STUDIO</h1>
                    </div>
                    <p className={classes.AboutP}>
                      We are carefully documenting our progress, so in case you
                      like.
                    </p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.NumberItem}>
                    <h1 className={classes.h1}>02</h1>
                    <h1 className={classes.h1}>PRODUCTS</h1>
                    <div className={classes.MobileTitle}>
                      <h1 className={classes.h1}>02</h1>
                      <h1 className={classes.h1}>PRODUCTS</h1>
                    </div>
                    <p className={classes.AboutP}>
                      We are carefully documenting our progress, so in case you
                      like.
                    </p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.NumberItem}>
                    <h1 className={classes.h1}>03</h1>
                    <h1 className={classes.h1}>SERVICES</h1>
                    <div className={classes.MobileTitle}>
                      <h1 className={classes.h1}>03</h1>
                      <h1 className={classes.h1}>SERVICES</h1>
                    </div>
                    <p className={classes.AboutP}>
                      We are carefully documenting our progress, so in case you
                      like.
                    </p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.NumberItem}>
                    <h1 className={classes.h1}>04</h1>
                    <h1 className={classes.h1}>PROJECTS</h1>
                    <div className={classes.MobileTitle}>
                      <h1 className={classes.h1}>04</h1>
                      <h1 className={classes.h1}>PROJECTS</h1>
                    </div>
                    <p className={classes.AboutP}>
                      We are carefully documenting our progress, so in case you
                      like.
                    </p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.WorkWrapper}>
          <div className={`${classes.Margin} dotWrapper-black`}>
            <div className="dot-black"></div>
            <p className="black">Work + Dework</p>
          </div>
          <div className="grid">
            <div className="coll-4">
              <div className={classes.SkillsWrapperLeftLast}>
                <h2 className={classes.AboutTitle}>DIGITAL CULTURE 3.0</h2>
                <div className={classes.SmallContentAbout}>
                  <Link href="/" type="transparent">
                    CAREERS
                  </Link>
                </div>
              </div>
            </div>
            <div className="coll-8">
              <div className={classes.WorkItem}>
                <p className={classes.AboutP}>
                  Nulla varius urna sagittis nunc aliquam porttitor. Maecenas ut
                  diam eu sapien ornare aliquet non finibus eros. Phasellus ut
                  varius augue. Phasellus posuere eros nec risus vulputate, non
                  luctus orci dapibus. Integer sodales, arcu sit amet laoreet
                  egestas, orci justo sagittis velit, sit amet eleifend lorem
                  risus eu nisi. Nunc pharetra, erat a consectetur rutrum,
                  lectus eros ultricies nibh, vel interdum dolor nibh.
                </p>
                <p className={classes.AboutP}>
                  Integer sodales, arcu sit amet laoreet egestas, orci justo
                  sagittis velit, sit amet eleifend lorem risus eu nisi. Nunc
                  pharetra, erat a consectetur rutrum, lectus eros ultricies
                  nibh, vel interdum dolor nibh eget odio. Nunc pharetra, erat a
                  consectetur rutrum, lectus eros ultricies nibh, vel interdum
                  dolor nibh eget odio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
