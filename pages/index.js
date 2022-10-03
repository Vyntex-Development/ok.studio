import HomePage from "../components/Pages/HomePage";
import { getClient } from "../lib/sanity.server";
import groq from "groq";

export default function Home({ insights, casestudies }) {
  return (
    <>
      <HomePage insights={insights} casestudies={casestudies} />
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
