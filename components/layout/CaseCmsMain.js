import classes from "./CaseCmsMain.module.css";
import Image from "next/image";

const CaseCmsMain = () => {
  return (
    <div>
      <div className="container">
        <div className="dotWrapper">
          <div className="dot"></div>
          <p>What makes us totally ok</p>
        </div>
        <div className={`${classes.Grid} grid`}>
          <div className="coll-3">coll4</div>
          <div className="coll-9">
            <div className={classes.Image}>
              <Image
                layout="fill"
                objectFit="cover"
                alt="hero"
                src="/images/case_02.png"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCmsMain;
