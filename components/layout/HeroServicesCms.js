import Link from "../UI/Link";
import classes from "./HeroServicesCms.module.css";
import { config } from "../../lib/config";
import { useNextSanityImage } from "next-sanity-image";
import { urlFor } from "../../lib/sanity";
import FaqServiceItem from "./FaqServiceItem";
import { useRouter } from "next/router";
import { useState } from "react";

const ServicesCmsHero = ({ service }) => {
  const { pathname } = useRouter();
  const [active, setActive] = useState(service && service.categories[0]._id);

  return (
    <div className="container">
      <div className={classes.HeroWrapper}>
        <h1>{service && service.title}</h1>
        <p>{service && service.description}</p>
        <Link href="/contact" type="dark">
          GET A QUOTE
        </Link>
      </div>
      <div>
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
                <p>{service && service.overviewfirst}</p>
                <p>{service && service.overviewsecond}</p>
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
                {service &&
                  service.categories?.map(({ title, description, _id }, i) => {
                    return (
                      <FaqServiceItem
                        key={_id}
                        id={_id}
                        title={title}
                        description={description}
                        setActiveFaq={(id) => setActive(id)}
                        active={active}
                        i={i}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCmsHero;
