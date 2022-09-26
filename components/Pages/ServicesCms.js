import HeroServicesCms from "../layout/HeroServicesCms";
import { useState } from "react";
import FaqServices from "../layout/FaqServices";
import CaseServices from "../layout/CaseServices";
import FaqServicesLarge from "../layout/FaqServicesLarge";

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
        <FaqServicesLarge
          activeFaq={activeFaq}
          setActiveFaq={(id) => {
            setActiveFaq(id);
          }}
        ></FaqServicesLarge>
      </div>
    </div>
  );
};

export default ServicesCms;
