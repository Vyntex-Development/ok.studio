import AboutPage from "../components/Pages/AboutPage";
import { getClient } from "../lib/sanity.server";
import groq from "groq";

export default function About({ casestudies, services }) {
  return (
    <>
      <AboutPage casestudies={casestudies} services={services} />
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const casestudies = await getClient(preview).fetch(groq`
    *[_type == "casestudies"]{
      _id,
      title,
      description,
      slug,
      media,
      tag
    }
    `);
  const services = await getClient(preview).fetch(groq`
    *[_type == "services"]{
      _id,
      title,
      description,
      slug,
      media,
      tag
    }
    `);
  return {
    props: {
      casestudies,
      services,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
