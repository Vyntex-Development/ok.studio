import classes from "./HeroCase.module.css";
const HeroCase = () => {
  return (
    <div className="container">
      <div className="grid">
        <div className="coll-8">
          <div className={classes.HeroWrapper}>
            <div className={classes.HeroItem}>
              <h1 className="p-large">
                <span>Our Works</span> <span>OK Studio</span> develops, designs
                and delivers websites and creative campaigns that drive results,
                build awareness and win awards. Our work never brags, but it
                sure loves to speak for itself.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCase;
