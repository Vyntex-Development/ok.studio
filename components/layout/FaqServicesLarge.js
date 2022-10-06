import { useRouter } from "next/router";
import classes from "./FaqServicesLarge.module.css";
import Image from "next/image";
import FaqServicesLargeItem from "./FaqServicelargeItem";
import { useState } from "react";

const FaqServicesLarge = ({ service }) => {
  const { pathname } = useRouter();
  const [active, setActive] = useState(service.faq[0]._id);
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
                {service.faq.map(
                  ({ title, description, tag, _id, slug }, i) => {
                    return (
                      <FaqServicesLargeItem
                        key={_id}
                        title={title}
                        tag={tag}
                        description={description}
                        slug={slug}
                        id={_id}
                        setActiveFaq={(id) => setActive(id)}
                        active={active}
                        i={i}
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqServicesLarge;
