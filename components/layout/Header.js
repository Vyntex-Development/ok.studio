import Image from "next/image";
import classes from "./Header.module.css";
import Link from "../UI/Link";

const Header = () => {
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
              <Link type="nav" href="/">
                Work
              </Link>
              <Link type="nav" href="/">
                About
              </Link>
              <Link type="nav" href="/">
                Insights
              </Link>
              <Link type="nav" href="/">
                Careers
              </Link>
            </div>
          </div>
          <div className={classes.NavRight}>
            <Link type="navButton" href="/">
              Contact
            </Link>
            <div className={classes.MenuButton}>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
