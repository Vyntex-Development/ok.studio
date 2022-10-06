import classes from "./FaqSection.module.css";
import Image from "next/image";
import Link from "../UI/Link";
import { ABOUT_PAGE } from "../../utils/utils";
import { useRouter } from "next/router";
import FaqHomeItem from "./FaqHomeItem";
import { useState } from "react";

const FaqSection = ({ services }) => {
  const { pathname } = useRouter();
  const [active, setActive] = useState(services[0]._id);

  return (
    <div>
      <div className="container">
        <div className={classes.FaqWrapper}>
          <div
            className={`${classes.DotWrapper} ${
              pathname === ABOUT_PAGE ? classes.DotWrapperAbout : ""
            }`}
          >
            <div className="dot"></div>
            <p
              className={`${classes.Pnone} ${
                pathname === ABOUT_PAGE ? classes.AboutP : ""
              }`}
            >
              What makes us totally ok
            </p>
            <p
              className={`${classes.P} ${
                pathname === ABOUT_PAGE ? classes.AboutHome : ""
              }`}
            >
              We are OK Studio
            </p>
          </div>
          <div className="grid">
            <div
              className={`${classes.CollFour} ${
                pathname === ABOUT_PAGE ? classes.CollAbout : ""
              }`}
            >
              <p className={classes.FaqP}>THE STORY</p>
              <div className={classes.Image}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  alt="hero"
                  src="/images/hero_img.png"
                ></Image>
              </div>
            </div>
            <div className="coll-8">
              <div
                className={`${classes.ContentWrapper} ${
                  pathname === ABOUT_PAGE ? classes.ContentWrapperAbout : ""
                }`}
              >
                <p className="p-large">
                  We Are a ■ <span> strategy-driven Digital Agency </span>. We
                  focus on digital design, data-driven insights, and all things
                  technology.
                </p>
                <p className="p-large">
                  We ●<span> better businesses </span>, solve problems with
                  creative solutions and elevate brand experiences through ▲
                  <span> digital culture </span>.
                </p>
                <div className={classes.ContentAbout}>
                  <p>
                    Our story begins with our co-founders Ilia and Marina. They
                    had the vision to evolve the digital landscape through art,
                    data, design, and technology. Vyntex Developments was their
                    first creation. What started out as a small design studio
                    quickly grew into an multidisciplinary agency, with happy
                    clients across all industries. OK Studio is their newest
                    creation. It is everything Vyntex is and more, with a focus
                    on data-driven insights, strategy, and culture.
                  </p>
                  <p>
                    Our clients make us who we are. Our purpose is to bring
                    impactful results to a client-centric environment. We love
                    going above and beyond for every single client ensuring
                    success with the latest technologies and strategy-driven
                    design experiences. Our values lead the way we work. We are
                    committed to our clients, to excellence, to inspiring
                    change, and to setting creative standards in the digital
                    world.
                  </p>
                </div>
              </div>
              <div className={classes.FaqRight}>
                {services.map(({ title, description, tag, _id, slug }) => {
                  return (
                    <FaqHomeItem
                      key={_id}
                      title={title}
                      tag={tag}
                      description={description}
                      slug={slug}
                      id={_id}
                      setActiveFaq={(id) => setActive(id)}
                      active={active}
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

export default FaqSection;
