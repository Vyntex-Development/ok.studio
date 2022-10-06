import Link from "../UI/Link";
import classes from "./HeroServicesCms.module.css";
import { config } from "../../lib/config";
import { useNextSanityImage } from "next-sanity-image";
import { urlFor } from "../../lib/sanity";
import FaqServiceItem from "./FaqServiceItem";
import { useRouter } from "next/router";
import { useState } from "react";

const ServicesCmsHero = ({ service }) => {
  console.log(service);
  const { pathname } = useRouter();
  const [active, setActive] = useState(service.categories[0]._id);

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
