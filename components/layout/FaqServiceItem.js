import classes from "./FaqServiceItem.module.css";
import Image from "next/image";
import Link from "../UI/Link";

const FaqServiceItem = ({
  title,
  description,
  setActiveFaq,
  active,
  id,
  i,
}) => {
  return (
    <div>
      <div className={classes.Faq}>
        <div
          onClick={() => {
            setActiveFaq(id);
          }}
          className={`${classes.FaqQuestionWrapper} ${
            active === id ? classes.ActiveQuestion : ""
          }`}
        >
          <p>0{i + 1}</p>
          <p>{title}</p>
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
            active === id ? classes.Active : ""
          }`}
        >
          <p>{description}</p>
          <Link type="dark" href="/contact">
            GET A QUOTE
          </Link>
        </div>
        <div className={classes.ProgressWrapper}>
          <div className={classes.Progress}></div>
        </div>
      </div>
    </div>
  );
};

export default FaqServiceItem;
