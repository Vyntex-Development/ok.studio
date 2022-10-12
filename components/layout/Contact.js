import classes from "./Contact.module.css";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "147yq19f",
  dataset: "production",
  apiVersion: "2021-10-21", // use current UTC date - see "specifying API version"!
  token:
    "skGtvaPCryjuiIplkRAhlIOiTWrfVBOlxEkKueIimT8UiZKx9kJ5g06bqry9imIeCBrXDgXVj0ehDoxmq2FxR3wmXwUM69Gn5Fd9j5kTeTgLrXFgriLH5CAJqQRLnh42kkzO6bGPDemzVDsrtvJOhxH3VX41Iq7hi4JQ9RweWApjyxRIzhH4", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [topic, setTopic] = useState("E-COMMERCE");
  const [budget, setBudget] = useState("$25k - $50K");
  const [nameInputError, setNameInputError] = useState("");
  const [emailInputError, setEmailInputError] = useState("");
  const [companyInputError, setCompanyInputError] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (isSubmitted) {
      router.push("/");
    }
  }, [isSubmitted]);
  const setTopicHandler = (ev) => {
    setTopic(ev.target.value);
  };
  const setBudgetHandler = (ev) => {
    setBudget(ev.target.value);
  };
  const nameInputRef = useRef();
  const companyInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const onSubmitHandler = (ev) => {
    ev.preventDefault();
    nameInputRef.current.value.trim() === ""
      ? setNameInputError("This name is required")
      : setNameInputError("");
    console.log(emailInputRef.current.value);
    emailInputRef.current.value.trim() === ""
      ? setEmailInputError("This email is required")
      : setEmailInputError("");
    if (emailInputRef.current.value.trim() !== "") {
      !emailInputRef.current.value.includes("@")
        ? setEmailInputError("Email must include @ symbol")
        : setEmailInputError("");
    }

    companyInputRef.current.value.trim() === ""
      ? setCompanyInputError("This company required")
      : setCompanyInputError("");
    if (
      nameInputRef.current.value.trim() === "" ||
      emailInputRef.current.value.trim() === "" ||
      companyInputRef.current.value.trim() === "" ||
      (emailInputRef.current.value.trim() !== "" &&
        !emailInputRef.current.value.includes("@"))
    ) {
      return;
    }

    const doc = {
      _type: "formData",
      name: nameInputRef.current.value,
      company: companyInputRef.current.value,
      email: emailInputRef.current.value,
      phone: phoneInputRef.current.value,
      topic: topic,
      budget: budget,
    };

    client.create(doc);
    setIsSubmitted(true);
  };
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
            <form method="get" onSubmit={onSubmitHandler}>
              <div className={classes.InputFields}>
                <div className={classes.InputWrapper}>
                  <input
                    ref={nameInputRef}
                    type="text"
                    placeholder="FULL NAME*"
                  ></input>
                  {nameInputError && <span>{nameInputError}</span>}
                  <input
                    ref={companyInputRef}
                    type="text"
                    placeholder="COMPANY*"
                  ></input>
                  {companyInputError && <span>{companyInputError}</span>}
                </div>
                <div className={classes.InputWrapper}>
                  <input
                    ref={emailInputRef}
                    // type="email"
                    placeholder="EMAIL ADDRESS*"
                  ></input>
                  {emailInputError && <span>{emailInputError}</span>}
                  <input
                    ref={phoneInputRef}
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
                      onChange={setTopicHandler}
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
                      onChange={setTopicHandler}
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
                      onChange={setTopicHandler}
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
                      onChange={setTopicHandler}
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
                      onChange={setTopicHandler}
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
                      onChange={setBudgetHandler}
                      className={classes.Radio}
                      type="radio"
                      id="11"
                      name="price"
                      value="$10k - $25K"
                    ></input>
                    <label className={classes.Label} htmlFor="11">
                      $10k - $25K
                    </label>
                  </div>
                  <div className={classes.RadioWrapper}>
                    <input
                      onChange={setBudgetHandler}
                      className={classes.Radio}
                      type="radio"
                      id="12"
                      name="price"
                      value="$25k - $50K"
                      defaultChecked
                    ></input>
                    <label className={classes.Label} htmlFor="12">
                      $25k - $50K
                    </label>
                  </div>
                  <div className={classes.RadioWrapper}>
                    <input
                      onChange={setBudgetHandler}
                      className={classes.Radio}
                      type="radio"
                      id="13"
                      name="price"
                      value="$50k - $100k"
                    ></input>
                    <label className={classes.Label} htmlFor="13">
                      $50k - $100k
                    </label>
                  </div>
                  <div className={classes.RadioWrapper}>
                    <input
                      onChange={setBudgetHandler}
                      className={classes.Radio}
                      type="radio"
                      id="14"
                      name="price"
                      value="$100K+"
                    ></input>
                    <label className={classes.Label} htmlFor="14">
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
