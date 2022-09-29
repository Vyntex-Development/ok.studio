import HomePage from "../components/Pages/HomePage";
import { getClient } from "../lib/sanity.server";
import groq from "groq";

export default function Home({ insights }) {
  return (
    <>
      <HomePage insights={insights} />
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
