import classes from "./Founders.module.css";
import Image from "next/image";
import Link from "../UI/Link";
import { useNextSanityImage } from "next-sanity-image";
import { config } from "../../lib/config";

const Founders = ({ data }) => {
  console.log(
    data["aboutpageData"]["pageBuilder"][1]["media"]["asset"]["_ref"]
  );
  const namefirst =
    data && data["aboutpageData"]["pageBuilder"][1]["namefirst"];
  const namesecond =
    data && data["aboutpageData"]["pageBuilder"][1]["namesecond"];
  const companyfirst =
    data && data["aboutpageData"]["pageBuilder"][1]["companyfirst"];
  const companysecond =
    data && data["aboutpageData"]["pageBuilder"][1]["companysecond"];
  const descriptionfirst =
    data && data["aboutpageData"]["pageBuilder"][1]["descriptionfirst"];
  const descriptionsecond =
    data && data["aboutpageData"]["pageBuilder"][1]["descriptionsecond"];
  const descriptionlarge =
    data && data["aboutpageData"]["pageBuilder"][1]["descriptionlarge"];
  // const image = useNextSanityImage(config, media);
  // const media = ["aboutpageData"]["pageBuilder"][1]["media"];
  return (
    <div>
      <div className="container">
        <div className="dotWrapperAbout">
          <div className="dot"></div>
          <p>Those who always stay invovled</p>
        </div>
        <div className={`${classes.Grid} grid`}>
          <div className="coll-4">
            <p className="p-about">THE FOUNDERS</p>
          </div>
          <div className="coll-8">
            <div className={classes.FoundersWrapper}>
              <div className={classes.FoundersLinks}>
                <Link type="blog" href="/">
                  <div className={classes.ImageHoverOne}>
                    <div className={classes.ImageFounders}>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        src="/images/team02.webp"
                      ></Image>
                    </div>
                  </div>
                  <div className={classes.NameHover}>
                    <div className={classes.ticker_track}>
                      <div className={classes.ticker_group}>
                        <p>
                          Ilia co-founded Ok.studio and oversees operations.
                        </p>
                      </div>
                      <div className={classes.ticker_group}>
                        <p>
                          Ilia co-founded Ok.studio and oversees operations.
                        </p>
                      </div>
                      <div className={classes.ticker_group}>
                        <p>
                          Ilia co-founded Ok.studio and oversees operations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.NameWrapper}>
                    <h1 className={classes.Name}>{namefirst}</h1>
                    <p>{companyfirst}</p>
                  </div>
                  <div className={classes.DescriptionWrapper}>
                    <p className={classes.Description}>
                      {/* If you are interested in creative collaborations or just
                      want to talk about your next project, */}
                      {descriptionfirst}
                      <span> email Ilia.</span>
                    </p>
                    <div className={classes.FounderIcon}>
                      <Image
                        layout="fixed"
                        objectFit="fill"
                        alt="icon"
                        width={100}
                        height={52}
                        src="/images/founder_icon.png"
                      ></Image>
                    </div>
                  </div>
                </Link>
                <Link type="blog" href="/">
                  <div className={classes.ImageHoverTwo}>
                    <div className={classes.ImageFounders}>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        alt="hero"
                        src="/images/team01.webp"
                      ></Image>
                    </div>
                  </div>
                  <div className={classes.NameHover}>
                    <div className={classes.ticker_track}>
                      <div className={classes.ticker_group}>
                        <p>
                          Ilia co-founded Ok.studio and oversees operations.
                        </p>
                      </div>
                      <div className={classes.ticker_group}>
                        <p>
                          Ilia co-founded Ok.studio and oversees operations.
                        </p>
                      </div>
                      <div className={classes.ticker_group}>
                        <p>
                          Ilia co-founded Ok.studio and oversees operations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.NameWrapper}>
                    <h1 className={classes.Name}>{namesecond}</h1>
                    <p>{companysecond}</p>
                  </div>
                  <div className={classes.DescriptionWrapper}>
                    <p className={classes.Description}>
                      {/* For all other inquiries including joining our team and
                      networking, */}
                      {descriptionsecond}
                      <span> email Marina.</span>
                    </p>
                    <div className={classes.FounderIcon}>
                      <Image
                        layout="fixed"
                        objectFit="fill"
                        alt="icon"
                        width={100}
                        height={52}
                        src="/images/founder_icon.png"
                      ></Image>
                    </div>
                  </div>
                </Link>
              </div>
              <p className={`${classes.Large} p-large-white`}>
                {descriptionlarge}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Image}>
        <Image
          layout="fill"
          objectFit="cover"
          alt="hero"
          src="/images/ok_image.png"
          // {...image}
        ></Image>
      </div>
    </div>
  );
};

export default Founders;
