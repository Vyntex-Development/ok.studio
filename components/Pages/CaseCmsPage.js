import CaseCmsHero from "../layout/CaseCmsHero";
import CaseCmsMain from "../layout/CaseCmsMain";
import CaseProject from "../layout/CaseProject";

const CaseCmsPage = ({ casestudy }) => {
  return (
    <div>
      <CaseCmsHero casestudy={casestudy}></CaseCmsHero>
    </div>
  );
};

export default CaseCmsPage;
