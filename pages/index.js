import HomePage from "../components/Pages/HomePage";
import { getClient } from "../lib/sanity.server";
import groq from "groq";

export default function Home({ insights, casestudies, services }) {
  return (
    <>
      <HomePage
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
      "tech":tech[]->{id,number},
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
      insights,
      casestudies,
      services,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
