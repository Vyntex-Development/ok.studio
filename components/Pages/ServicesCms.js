import HeroServicesCms from "../layout/HeroServicesCms";
import { useState } from "react";
import CaseServices from "../layout/CaseServices";
import FaqServicesLarge from "../layout/FaqServicesLarge";

const ServicesCms = ({ service, casestudies }) => {
  return (
    <div>
      <div>
        <HeroServicesCms service={service}></HeroServicesCms>
        <CaseServices
          casestudies={casestudies}
          service={service}
        ></CaseServices>
        <FaqServicesLarge service={service}></FaqServicesLarge>
      </div>
    </div>
  );
};

export default ServicesCms;
