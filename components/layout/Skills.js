import classes from "./Skills.module.css";
import Image from "next/image";
import Link from "../UI/Link";
import CaseStudiesItem from "./CaseStudiesItem";

const Skills = () => {
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
                <p className={classes.AboutP}>
                  We are carefully documenting our progress, so in case you like
                  studies — we ve got some cases.
                </p>
                <Link href="/" type="transparent">
                  OUR PORTFOLIO
                </Link>
              </div>
            </div>
          </div>
          <div className="coll-8">
            <div className={classes.CollEight}>
              <h1 className={classes.h1}>
                Product, Branding, Design, Development and CX
              </h1>
              <div className={classes.Skills}>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.SkillsItem}>
                    <p className={classes.AboutP}>
                      Design Systems and Guidelines
                    </p>
                    <p className={classes.AboutP}>Visual Identity</p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.SkillsItem}>
                    <p className={classes.AboutP}>Website and App Design</p>
                    <p className={classes.AboutP}>
                      Brand Guidelines and Playbooks
                    </p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.SkillsItem}>
                    <p className={classes.AboutP}>UI Design</p>
                    <p className={classes.AboutP}>Visual Design</p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.SkillsItem}>
                    <p className={classes.AboutP}>Interaction Design</p>
                    <p className={classes.AboutP}>Graphic Design</p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.SkillsItem}>
                    <p className={classes.AboutP}>Full-Stack Development</p>
                    <p className={classes.AboutP}>Art Direction</p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.SkillsItemWrapper}>
                  <div className={classes.SkillsItem}>
                    <p className={classes.AboutP}>Custom CMS Implementation</p>
                    <p className={classes.AboutP}>Campaign Development</p>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
              </div>
              <div className={classes.CaseItemWrapper}>
                <CaseStudiesItem></CaseStudiesItem>
                <CaseStudiesItem></CaseStudiesItem>
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
                <h2 className={classes.AboutTitle}>THE SKILLS</h2>
                <div className={classes.SmallContent}>
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
      </div>
    </div>
  );
};
export default Skills;
