import classes from "./FaqHomeItem.module.css";
import Image from "next/image";
import Link from "../UI/Link";
import { useRouter } from "next/router";

const FaqHomeItem = ({
  setActiveFaq,
  title,
  description,
  tag,
  id,
  active,
  slug,
}) => {
  console.log(title, description, slug, tag, id);
  return (
    <div className={classes.Faq}>
      <div
        onClick={() => {
          setActiveFaq(id);
        }}
        className={`${classes.FaqQuestionWrapper} ${
          active === id ? classes.ActiveQuestion : ""
        }`}
      >
        <p>{tag}</p>
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
        <Link type="dark" href={`services/${slug.current}`}>
          GET A QUOTE
        </Link>
      </div>
      <div className={classes.ProgressWrapper}>
        <div className={classes.Progress}></div>
      </div>
    </div>
  );
};
export default FaqHomeItem;
