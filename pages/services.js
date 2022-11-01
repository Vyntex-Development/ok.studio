import CaseStudiesPage from "../components/Pages/CaseStudiesPage";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
import SEO from "../components/SEO/Seo";

export default function Case({ insights, casestudies, services }) {
  return (
    <>
      <SEO title="Services"></SEO>
      <CaseStudiesPage
        insights={insights}
        casestudies={casestudies}
        services={services}
      />
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
  const services = await getClient(preview).fetch(groq`
    *[_type == "services"]{
      _id,
      title,
      description,
      slug,
      media,
      tag,
      "casestudies":casestudies[]->{title,description,media,slug, _id},
    }
    `);
  return {
    props: {
      insights,
      casestudies,
      services,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
