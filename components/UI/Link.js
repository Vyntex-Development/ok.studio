import NextLink from "next/link";
import classes from "./Link.module.css";

const Link = ({ children, href, type, onClick }) => {
  let className;

  if (type === "dark") {
    className = classes.Dark;
  }
  if (type === "logo") {
    className = classes.Logo;
  }
  if (type === "white") {
    className = classes.White;
  }

  if (type === "nav") {
    className = classes.Nav;
  }

  if (type === "footer") {
    className = classes.Footer;
  }

  if (type === "navButton") {
    className = classes.NavButton;
  }

  if (type === "blog") {
    className = classes.Blog;
  }

  return (
    <div onClick={onClick} className={`${classes.Link} ${className}`}>
      <NextLink passHref href={href}>
        <a>{children}</a>
      </NextLink>
    </div>
  );
};

export default Link;
