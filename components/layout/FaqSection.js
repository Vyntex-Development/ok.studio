import classes from "./FaqSection.module.css";
import Image from "next/image";
import Link from "../UI/Link";
import { ABOUT_PAGE } from "../../utils/utils";
import { useRouter } from "next/router";

const FaqSection = ({ setActiveFaq, activeFaq }) => {
  const { pathname } = useRouter();
  return (
    <div>
      <div className="container">
        <div className={classes.FaqWrapper}>
          <div
            className={`${classes.DotWrapper} ${
              pathname === ABOUT_PAGE ? classes.DotWrapperAbout : ""
            }`}
          >
            <div className="dot"></div>
            <p
              className={`${classes.Pnone} ${
                pathname === ABOUT_PAGE ? classes.AboutP : ""
              }`}
            >
              What makes us totally ok
            </p>
            <p
              className={`${classes.P} ${
                pathname === ABOUT_PAGE ? classes.AboutHome : ""
              }`}
            >
              We are OK Studio
            </p>
          </div>
          <div className="grid">
            <div
              className={`${classes.CollFour} ${
                pathname === ABOUT_PAGE ? classes.CollAbout : ""
              }`}
            >
              <p className={classes.FaqP}>THE STORY</p>
              <div className={classes.Image}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  src="/images/hero_img.png"
                ></Image>
              </div>
            </div>
            <div className="coll-8">
              <div
                className={`${classes.ContentWrapper} ${
                  pathname === ABOUT_PAGE ? classes.ContentWrapperAbout : ""
                }`}
              >
                <p className="p-large">
                  We Are a ■ strategy-driven Digital Agency. We focus on digital
                  design, data-driven insights, and all things technology.
                </p>
                <p className="p-large">
                  We
                  <span> better businesses </span>, solve problems with ●
                  creative solutions and elevate brand experiences through ▲
                  digital culture.
                </p>
                <div className={classes.ContentAbout}>
                  <p>
                    Nulla varius urna sagittis nunc aliquam porttitor. Maecenas
                    ut diam eu sapien ornare aliquet non finibus eros. Phasellus
                    ut varius augue. Phasellus posuere eros nec risus vulputate,
                    non luctus orci dapibus. Integer sodales, arcu sit amet
                    laoreet egestas, orci justo sagittis velit, sit amet
                    eleifend lorem risus eu nisi. Nunc pharetra, erat a
                    consectetur rutrum, lectus eros ultricies nibh, vel interdum
                    dolor nibh.
                  </p>
                  <p>
                    Integer sodales, arcu sit amet laoreet egestas, orci justo
                    sagittis velit, sit amet eleifend lorem risus eu nisi. Nunc
                    pharetra, erat a consectetur rutrum, lectus eros ultricies
                    nibh, vel interdum dolor nibh eget odio. Nunc pharetra, erat
                    a consectetur rutrum, lectus eros ultricies nibh, vel
                    interdum dolor nibh eget odio.
                  </p>
                </div>
              </div>
              <div className={classes.FaqRight}>
                <div className={classes.Faq}>
                  <div
                    onClick={() => {
                      setActiveFaq("1");
                    }}
                    className={`${classes.FaqQuestionWrapper} ${
                      activeFaq === "1" ? classes.ActiveQuestion : ""
                    }`}
                  >
                    <p>01</p>
                    <p>Websites + Platforms</p>
                    <div className={classes.FaqIcon}>
                      <Image
                        layout="fixed"
                        objectFit="fill"
                        alt="icon"
                        width={26}
                        height={26}
                        src="/images/faq_icon.png"
                      ></Image>
                    </div>
                  </div>
                  <div
                    className={`${classes.FaqAnswerWrapper} ${
                      activeFaq === "1" ? classes.Active : ""
                    }`}
                  >
                    <p>
                      We conceive and create experiences that immerse consumers
                      in the brand through a combination of utility and
                      creativity.
                    </p>
                    <Link type="dark" href="/">
                      LEARN MORE
                    </Link>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.Faq}>
                  <div
                    onClick={() => {
                      setActiveFaq("2");
                    }}
                    className={`${classes.FaqQuestionWrapper} ${
                      activeFaq === "2" ? classes.ActiveQuestion : ""
                    }`}
                  >
                    <p>02</p>
                    <p>Branded ECommerces </p>
                    <div className={classes.FaqIcon}>
                      <Image
                        layout="fixed"
                        objectFit="fill"
                        alt="icon"
                        width={26}
                        height={26}
                        src="/images/faq_icon.png"
                      ></Image>
                    </div>
                  </div>
                  <div
                    className={`${classes.FaqAnswerWrapper} ${
                      activeFaq === "2" ? classes.Active : ""
                    }`}
                  >
                    <p>
                      We conceive and create experiences that immerse consumers
                      in the brand through a combination of utility and
                      creativity.
                    </p>
                    <Link type="dark" href="/">
                      LEARN MORE
                    </Link>
                  </div>
                  <div className={classes.ProgressWrapper}>
                    <div className={classes.Progress}></div>
                  </div>
                </div>
                <div className={classes.Faq}>
                  <div
                    onClick={() => {
                      setActiveFaq("3");
                    }}
                    className={`${classes.FaqQuestionWrapper} ${
                      activeFaq === "3" ? classes.ActiveQuestion : ""
                    }`}
                  >
                    <p>03</p>
                    <p>BRANDING AND ADVERTISING</p>
                    <div className={classes.FaqIcon}>
                      <Image
                        layout="fixed"
                        objectFit="fill"
                        alt="icon"
                        width={26}
                        height={26}
                        src="/images/faq_icon.png"
                      ></Image>
                    </div>
                  </div>
                  <div
                    className={`${classes.FaqAnswerWrapper} ${
                      activeFaq === "3" ? classes.Active : ""
                    }`}
                  >
                    <p>
                      We conceive and create experiences that immerse consumers
                      in the brand through a combination of utility and
                      creativity.
                    </p>
                    <Link type="dark" href="/">
                      LEARN MORE
                    </Link>
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

export default FaqSection;
