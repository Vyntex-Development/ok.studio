import classes from "./Footer.module.css";
import Link from "../UI/Link";
import Image from "next/image";
import { CASE_PAGE } from "../../utils/utils";
import { useRouter } from "next/router";

const Footer = () => {
  const { pathname } = useRouter();
  return (
    <div
      className={`${classes.Footer} ${
        pathname === CASE_PAGE ? classes.FooterNone : ""
      }`}
    >
      <div className="container">
        <div className={classes.FooterWrapper}>
          <div className={classes.FooterTop}>
            <div className={classes.FooterFormWrapper}>
              <Link type="logo" href="/">
                <Image
                  layout="fixed"
                  objectFit="contain"
                  alt="logo"
                  width={74}
                  height={16}
                  src="/images/logo_dark.png"
                ></Image>
              </Link>
              <h2>
                Subscribe to our newsletter to stay in touch with the latest.
              </h2>
              <form method="get">
                <div className={classes.InputWrapper}>
                  <input type="email" placeholder="Email Address*" required />
                  <button type="submit" className={classes.Submit}>
                    <Image
                      layout="fixed"
                      objectFit="fill"
                      alt="icon"
                      width={16}
                      height={5}
                      src="/images/arrow_input.png"
                    ></Image>
                  </button>
                </div>
              </form>
            </div>
            <div className={classes.LinksWrapper}>
              <div className={classes.LinkWrapper}>
                <p>Menu</p>
                <div className={classes.Links}>
                  <Link type="footer" href="/services">
                    Work
                  </Link>
                  <Link type="footer" href="/about">
                    About
                  </Link>
                  <Link type="footer" href="/insights">
                    Insights
                  </Link>
                  <Link type="footer" href="/">
                    Careers
                  </Link>
                  <Link type="footer" href="/contact">
                    Contact
                  </Link>
                </div>
              </div>
              <div className={classes.LinkWrapper}>
                <p>SERVICES</p>
                <div className={classes.Links}>
                  <Link type="footer" href="/">
                    Branded E-commerce
                  </Link>
                  <Link type="footer" href="/">
                    Website + Platforms
                  </Link>
                  <Link type="footer" href="/">
                    Digital Products + Services
                  </Link>
                  <Link type="footer" href="/">
                    Branding and Advertising
                  </Link>
                </div>
              </div>
              <div className={classes.LinkWrapper}>
                <p>SOCIAL</p>
                <div className={classes.Links}>
                  <Link type="footer" href="/">
                    Dribbble
                  </Link>
                  <Link type="footer" href="/">
                    Behance
                  </Link>
                  <Link type="footer" href="/">
                    Twitter
                  </Link>
                  <Link type="footer" href="/">
                    LinkedIn
                  </Link>
                  <Link type="footer" href="/">
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.FooterBottom}>
            <div className={classes.Dot}>
              <div></div>
            </div>
            <div className={classes.CopyRight}>
              <p className={classes.FooterText}> Copyright OK STUDIO LLC</p>
            </div>
            <div className={classes.Privacy}>
              <Link type="footer" href="/">
                Privacy
              </Link>
              <Link type="footer" href="/">
                Terms
              </Link>
              <Link type="footer" href="/">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
