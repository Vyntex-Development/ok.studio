import ContactPage from "../components/Pages/ContactPage";
import SEO from "../components/SEO/SEO";

export default function Contact({ data }) {
  return (
    <>
      <SEO title="Contact"></SEO>
      <ContactPage data={data} />
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
