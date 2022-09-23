import classes from "./Contact.module.css";
import Link from "../UI/Link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="container">
      <div className={classes.HeroWrapper}>
        <div className={classes.HeroContent}>
          <h1>Let s talk about your next project</h1>
          <p>
            We pride ourselves in being fully transparent. We are clear on every
            step we take, and you will always be involved in all business
            decisions.
          </p>
        </div>
      </div>
      <div className={classes.ContactMain}>
        <div className={`${classes.DotWrapper} dotWrapper`}>
          <div className={`${classes.Dot} dot`}></div>
          <p className={`${classes.Gray} gray`}>
            If you are not a forms person, please <span>email us directly</span>
            .
          </p>
        </div>
        <div className={classes.ContactWrapper}>
          <div className={classes.ContactLeft}>
            <p>
              Once the form submitted, you will recieve a confirmation email
              with further instructions.
            </p>
          </div>
          <div className={classes.ContactRight}>
            <div className={classes.TitleWrapper}>
              <Image
                layout="fixed"
                objectFit="fill"
                alt="icon"
                width={32}
                height={34}
                src="/images/contact_icon.png"
              ></Image>
              <h2>Contact details</h2>
            </div>
            <form method="get">
              <div className={classes.InputFields}>
                <div className={classes.InputWrapper}>
                  <input type="text" placeholder="FULL NAME*" required></input>
                  <input type="text" placeholder="COMPANY*" required></input>
                </div>
                <div className={classes.InputWrapper}>
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS*"
                    required
                  ></input>
                  <input
                    type="tel"
                    placeholder="PHONE (OPTIONAL)"
                    name="phone"
                  ></input>
                </div>
              </div>
              <div className={classes.TitleWrapper}>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={32}
                  height={34}
                  src="/images/contact_icon.png"
                ></Image>
                <h2>Select a topic</h2>
              </div>
              <div className={classes.RadioButtons}>
                <div className={classes.InputWrapperRadio}>
                  <div className={classes.RadioWrapper}>
                    <input
                      className={classes.Radio}
                      type="radio"
                      id="1"
                      name="button"
                      value="WEBSITE / PLATFORM"
                    ></input>
                    <label className={classes.Label} htmlFor="1">
                      WEBSITE / PLATFORM
                    </label>
                  </div>
                  <div className={classes.RadioWrapper}>
                    <input
                      className={classes.Radio}
                      type="radio"
                      id="2"
                      name="button"
                      value="E-COMMERCE"
                      defaultChecked
                    ></input>
                    <label className={classes.Label} htmlFor="2">
                      E-COMMERCE
                    </label>
                  </div>
                  <div className={classes.RadioWrapper}>
                    <input
                      className={classes.Radio}
                      type="radio"
                      id="3"
                      name="button"
                      value="BRANDING"
                    ></input>
                    <label className={classes.Label} htmlFor="3">
                      BRANDING
                    </label>
                  </div>
                  <div className={classes.RadioWrapper}>
                    <input
                      className={classes.Radio}
                      type="radio"
                      id="4"
                      name="button"
                      value="COLLABORATION"
                    ></input>
                    <label className={classes.Label} htmlFor="4">
                      COLLABORATION
                    </label>
                  </div>
                  <div className={classes.RadioWrapper}>
                    <input
                      className={classes.Radio}
                      type="radio"
                      id="5"
                      name="button"
                      value="OTHER"
                    ></input>
                    <label className={classes.Label} htmlFor="5">
                      OTHER
                    </label>
                  </div>
                </div>
              </div>
              <div className={classes.TitleWrapper}>
                <Image
                  layout="fixed"
                  objectFit="fill"
                  alt="icon"
                  width={32}
                  height={34}
                  src="/images/contact_icon.png"
                ></Image>
                <h2>Est. budget</h2>
              </div>
              <div className={classes.RadioButtons}>
                <div className={classes.InputWrapperRadio}>
                  <div className={classes.RadioWrapper}>
                    <input
                      className={classes.Radio}
                      type="radio"
                      id="1"
                      name="price"
                      value="$10k - $25K"
                    ></input>
                    <label className={classes.Label} htmlFor="1">
                      $10k - $25K
                    </label>
                  </div>
                  <div className={classes.RadioWrapper}>
                    <input
                      className={classes.Radio}
                      type="radio"
                      id="2"
                      name="price"
                      value="$25k - $50K"
                      defaultChecked
                    ></input>
                    <label className={classes.Label} htmlFor="2">
                      $25k - $50K
                    </label>
                  </div>
                  <div className={classes.RadioWrapper}>
                    <input
                      className={classes.Radio}
                      type="radio"
                      id="3"
                      name="price"
                      value="$50k - $100k"
                    ></input>
                    <label className={classes.Label} htmlFor="3">
                      $50k - $100k
                    </label>
                  </div>
                  <div className={classes.RadioWrapper}>
                    <input
                      className={classes.Radio}
                      type="radio"
                      id="4"
                      name="price"
                      value="$100K+"
                    ></input>
                    <label className={classes.Label} htmlFor="4">
                      $100K+
                    </label>
                  </div>
                </div>
              </div>

              <div className={classes.InputWrapperButton}>
                <p>
                  By clicking Subscribe above, you agree to our{" "}
                  <span>Privacy Policy</span>.
                </p>
                <button type="submit" className={classes.Submit}>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
