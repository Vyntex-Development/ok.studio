import Image from "next/image";
import classes from "./Header.module.css";
import Link from "../UI/Link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const router = useRouter();
  const onNavigationClose = () => {
    setNavOpen(false);
  };

  const openNavHandler = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className={classes.Navigation}>
      <div className="container">
        <div className={classes.NavWrapper}>
          <div className={classes.NavLeft}>
            <Link type="logo" href="/">
              <Image
                layout="fixed"
                objectFit="contain"
                alt="logo"
                width={74}
                height={16}
                src="/images/logo.png"
              ></Image>
            </Link>
            <div className={classes.NavLinkWrapper}>
              <Link type="nav" href="/services">
                Work
              </Link>
              <Link type="nav" href="/about">
                About
              </Link>
              <Link type="nav" href="/insights">
                Insights
              </Link>
            </div>
          </div>
          <div className={classes.NavRight}>
            <Link type="navButton" href="/contact">
              Contact
            </Link>

            <div
              onClick={openNavHandler}
              className={`${classes.MenuButton} ${
                navOpen ? classes.HamburgerTransform : ""
              }`}
            >
              <div></div>
              <div></div>
            </div>
            <div
              className={`${classes.NavMobile} ${
                navOpen ? classes.NavOpen : classes.NavClose
              }`}
            >
              <div className={classes.NavLinksMobile}>
                <Link
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                  type="nav"
                  href="/services"
                >
                  Work
                </Link>
                <Link
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                  type="nav"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                  type="nav"
                  href="/insights"
                >
                  Insights
                </Link>
                <Link
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                  type="nav"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
              <div className={classes.NavBottom}>
                <div className={classes.TextWrapper}>
                  <div></div>
                  <p>We are social</p>
                </div>
                <div className={classes.LinksBottom}>
                  <Link href="/" type="footer">
                    Dribbble
                  </Link>
                  <Link href="/" type="footer">
                    LinkedIn
                  </Link>
                  <Link href="/" type="footer">
                    Behance
                  </Link>
                  <Link href="/" type="footer">
                    Instagram
                  </Link>
                  <Link href="/" type="footer">
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
