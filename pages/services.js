import CaseStudiesPage from "../components/Pages/CaseStudiesPage";
import { getClient } from "../lib/sanity.server";
import groq from "groq";

export default function Case({ insights, casestudies }) {
  return (
    <>
      <CaseStudiesPage insights={insights} casestudies={casestudies} />
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const insights = await getClient(preview).fetch(groq`
    *[_type == "insights"]{
      _id,
      title,
      description,
      slug,
      media,
      tag
    }
    `);
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
      insights,
      casestudies,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
