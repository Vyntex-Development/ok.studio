import Link from "../UI/Link";
import classes from "./HeroServicesCms.module.css";

const ServicesCmsHero = () => {
  return (
    <div className="container">
      <div className={classes.HeroWrapper}>
        <h1>Branded Ecommerce</h1>
        <p>
          We pride ourselves in being fully transparent. We are clear on every
          step we take, and you will always be involved in all business
          decisions.
        </p>
        <Link href="/" type="dark">
          GET A QUOTE
        </Link>
      </div>
    </div>
  );
};

export default ServicesCmsHero;
