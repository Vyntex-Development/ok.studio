import HeroServicesCms from "../layout/HeroServicesCms";
import { useState } from "react";
import FaqServices from "../layout/FaqServices";
import CaseServices from "../layout/CaseServices";
import FaqServicesLarge from "../layout/FaqServicesLarge";

const ServicesCms = ({ service }) => {
  console.log(service);
  return (
    <div>
      <div>
        <HeroServicesCms service={service}></HeroServicesCms>
        {/* <FaqServices></FaqServices>
        <CaseServices></CaseServices>
        <FaqServicesLarge></FaqServicesLarge> */}
      </div>
    </div>
  );
};

export default ServicesCms;
