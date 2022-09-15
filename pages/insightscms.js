import InsightsCmsPage from "../components/Pages/InsightsCmsPage";

export default function InisghtsCms({ data }) {
  return (
    <>
      <InsightsCmsPage data={data} />
    </>
  );
}

export async function getStaticProps() {
  // Odavde vucemo podatke

  //const response = await fetch("URL");
  //const data = await response.json();
  return {
    props: {
      data: {},
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
