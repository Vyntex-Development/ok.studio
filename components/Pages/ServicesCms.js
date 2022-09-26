import HeroServicesCms from "../layout/HeroServicesCms";
import { useState } from "react";
import FaqServices from "../layout/FaqServices";
import CaseServices from "../layout/CaseServices";

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
        <CaseServices></CaseServices>
      </div>
    </div>
  );
};

export default ServicesCms;
