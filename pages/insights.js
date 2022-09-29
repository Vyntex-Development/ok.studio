import InsightsPage from "../components/Pages/InsightsPage";
import { getClient } from "../lib/sanity.server";
import groq from "groq";

export default function Inisghts({ insights }) {
  return (
    <>
      <InsightsPage insights={insights} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  // Odavde vucemo podatke

  //const response = await fetch("URL");
  //const data = await response.json();
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
