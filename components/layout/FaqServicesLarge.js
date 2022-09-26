import { useRouter } from "next/router";
import classes from "./FaqServicesLarge.module.css";
import Image from "next/image";

const FaqServicesLarge = ({ setActiveFaq, activeFaq }) => {
  const { pathname } = useRouter();
  return (
    <div>
      <div className="container">
        <div className={classes.FaqWrapper}>
          <div className={classes.DotWrapper}>
            <div className="dot"></div>
            <p className={classes.P}>Questions that are frequently asked</p>
          </div>
          <div className={`${classes.Grid} grid`}>
            <div className={classes.CollFour}>
              <p className={classes.FaqP}>FAQ</p>
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
                    <p>
                      I want to change the current design of my website. Can you
                      suggest something better?
                    </p>
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
                      Absolutely! Your current website design can be changed and
                      made up-to-date as per your requirements. Our UX design
                      team will review your current website layout and provide
                      suggestions for improvements required. The discovery call
                      is an introductory meeting that helps us get to know you
                      and understand your business, business goals, objectives,
                      budget, and timeline. During this call, we will scope your
                      project to see how we can help.
                    </p>
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
                    <p>
                      What if there is any problem after the website is built
                      and gone live?
                    </p>
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
                      Absolutely! Your current website design can be changed and
                      made up-to-date as per your requirements. Our UX design
                      team will review your current website layout and provide
                      suggestions for improvements required. The discovery call
                      is an introductory meeting that helps us get to know you
                      and understand your business, business goals, objectives,
                      budget, and timeline. During this call, we will scope your
                      project to see how we can help.
                    </p>
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
                    <p>Do you provide support after the site is developed?</p>
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
                      Absolutely! Your current website design can be changed and
                      made up-to-date as per your requirements. Our UX design
                      team will review your current website layout and provide
                      suggestions for improvements required. The discovery call
                      is an introductory meeting that helps us get to know you
                      and understand your business, business goals, objectives,
                      budget, and timeline. During this call, we will scope your
                      project to see how we can help.
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

export default FaqServicesLarge;
