import HeroServicesCms from "../layout/HeroServicesCms";
import { useState } from "react";
import CaseServices from "../layout/CaseServices";
import FaqServicesLarge from "../layout/FaqServicesLarge";

const ServicesCms = ({ service, casestudies }) => {
  console.log(casestudies);
  return (
    <div>
      <div>
        <HeroServicesCms service={service}></HeroServicesCms>
        <CaseServices casestudies={casestudies}></CaseServices>
        {/* <FaqServicesLarge></FaqServicesLarge> */}
      </div>
    </div>
  );
};

export default ServicesCms;
