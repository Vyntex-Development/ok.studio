import classes from "./FaqServices.module.css";
import Image from "next/image";
import Link from "../UI/Link";
import { useRouter } from "next/router";

const FaqServices = ({ setActiveFaq, activeFaq }) => {
  const { pathname } = useRouter();
  return (
    <div>
      <div className="container">
        <div className={classes.DotWrapper}>
          <div className="dot"></div>
          <p className={classes.P}>What is it all about?</p>
        </div>
        <div className={classes.DescriptionWrapper}>
          <div className={`${classes.Grid} grid`}>
            <div className={classes.CollFour}>
              <p className={classes.FaqP}>SERVICE OVERVIEW</p>
            </div>
            <div className="coll-8">
              <div className={classes.DescriptionContent}>
                <p>
                  Nulla varius urna sagittis nunc aliquam porttitor. Maecenas ut
                  diam eu sapien ornare aliquet non finibus eros. Phasellus ut
                  varius augue. Phasellus posuere eros nec risus vulputate, non
                  luctus orci dapibus. Integer sodales, arcu sit amet laoreet
                  egestas, orci justo sagittis velit, sit amet eleifend lorem
                  risus eu nisi. Nunc pharetra, erat a consectetur rutrum,
                  lectus eros ultricies nibh, vel interdum dolor nibh.
                </p>
                <p>
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
        <div className={classes.FaqWrapper}>
          <div className={classes.DotWrapper}>
            <div className="dot"></div>
            <p className={classes.P}>How it works?</p>
          </div>
          <div className={`${classes.Grid} grid`}>
            <div className={classes.CollFour}>
              <p className={classes.FaqP}>THE PROCESS</p>
            </div>
            <div className="coll-8">
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
                    <p>Discovery Call</p>
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
                      GET A QUOTE
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
                    <p>Scope of Work </p>
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
                      GET A QUOTE
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
                    <p>Strategy and Research</p>
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
                      GET A QUOTE
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

export default FaqServices;
