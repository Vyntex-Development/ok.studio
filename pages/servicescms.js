import ServicesCms from "../components/Pages/ServicesCms";

export default function Services({ casestudies }) {
  return (
    <>
      <ServicesCms casestudies={casestudies} />
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
