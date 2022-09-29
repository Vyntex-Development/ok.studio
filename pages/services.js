import CaseStudiesPage from "../components/Pages/CaseStudiesPage";
import { getClient } from "../lib/sanity.server";
import groq from "groq";

export default function Case({ insights }) {
  return (
    <>
      <CaseStudiesPage insights={insights} />
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
  return {
    props: {
      insights,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
