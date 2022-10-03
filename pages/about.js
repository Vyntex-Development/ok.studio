import AboutPage from "../components/Pages/AboutPage";
import { getClient } from "../lib/sanity.server";
import groq from "groq";

export default function About({ casestudies }) {
  return (
    <>
      <AboutPage casestudies={casestudies} />
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
  return {
    props: {
      casestudies,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
