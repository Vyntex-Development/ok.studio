import classes from "./AboutHero.module.css";

const AboutHero = ({ data }) => {
  const title = data && data["aboutpageData"]["pageBuilder"][0]["title"];
  const description =
    data && data["aboutpageData"]["pageBuilder"][0]["description"];
  const smalldescription =
    data && data["aboutpageData"]["pageBuilder"][0]["smalldescription"];

  return (
    <div>
      <div className="container">
        <div className="grid">
          <div className="coll-8">
            <div className={classes.HeroWrapper}>
              <div className={classes.HeroItem}>
                <h1>
                  {/* {title} */}
                  It&apos;s <span>OK</span>, we are humans.
                </h1>
                <p className="p-large">
                  {/* As humans, we empower brands and provide end-to-end digital
                  solutions to better businesses. */}
                  {description}
                </p>
                <p>
                  {/* {smalldescription} */}
                  That what makes us <span>OK STUDIO</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
