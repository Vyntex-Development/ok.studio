import Link from "../UI/Link";
import classes from "./HeroServicesCms.module.css";
import { useRef } from "react";
import { useEffect } from "react";
import { config } from "../../lib/config";
import { useNextSanityImage } from "next-sanity-image";
import { urlFor } from "../../lib/sanity";

const ServicesCmsHero = ({ service }) => {
  return (
    <div className="container">
      <div className={classes.HeroWrapper}>
        <h1>{service && service.title}</h1>
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
