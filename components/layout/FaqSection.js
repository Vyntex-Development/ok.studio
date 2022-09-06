import classes from "./FaqSection.module.css";
import Image from "next/image";
import Link from "../UI/Link";

const FaqSection = ({ setActiveFaq, activeFaq }) => {
  return (
    <div>
      <div className="container">
        <div className={classes.FaqWrapper}>
          <div className="dotWrapper">
            <div className="dot"></div>
            <p>We are what we do</p>
          </div>
          <div className="coll-8">
            <div className={classes.ContentWrapper}>
              <p className="p-large">
                We focus on digital design, strategic marketing, and all things
                technology to ■ <span>better businesses</span> and brand
                experiences.
              </p>
              <p className="p-large">
                We pride ourselves in being ● <span>fully transparent</span>. We
                are clear on every step we take, and you will always be involved
                in all ▲ business decisions.
              </p>
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
                    We conceive and create experiences that immerse consumers in
                    the brand through a combination of utility and creativity.
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
                    We conceive and create experiences that immerse consumers in
                    the brand through a combination of utility and creativity.
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
                    We conceive and create experiences that immerse consumers in
                    the brand through a combination of utility and creativity.
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
  );
};

export default FaqSection;
