import HeroServicesCms from "../layout/HeroServicesCms";

import { useState } from "react";
import FaqServices from "../layout/FaqServices";

const ServicesCms = () => {
  const [activeFaq, setActiveFaq] = useState("1");
  return (
    <div>
      <div>
        <HeroServicesCms></HeroServicesCms>
        <FaqServices
          activeFaq={activeFaq}
          setActiveFaq={(id) => {
            setActiveFaq(id);
          }}
        ></FaqServices>
      </div>
    </div>
  );
};

export default ServicesCms;
