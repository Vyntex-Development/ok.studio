import classes from "./HeroCase.module.css";
const HeroCase = () => {
  return (
    <div className="container">
      <div className="grid">
        <div className="coll-7">
          <div className={classes.HeroWrapper}>
            <div className={classes.HeroItem}>
              <h1>
                We got some <span>cases</span>, In case you like studies.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCase;
