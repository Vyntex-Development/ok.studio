import HomePage from "../components/Pages/HomePage";
import { getClient } from "../lib/sanity.server";
import groq from "groq";

export default function Home({ insights, casestudies, services, data }) {
  return (
    <>
      <HomePage
        insights={insights}
        casestudies={casestudies}
        services={services}
        data={data}
      />
    </>
  );
}

// Create a query called siteHeaderQuery
const siteHeaderQuery = `*\[_type == "siteheader"\][0] {
  title,
  repoURL {
    current
  }
}`;

// Create a query called homepageQuery
const homepageQuery = `*\[_type == "homepage"\][0] {
  title,
  pageBuilder,
  
}`;

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
  const homepageData = await getClient(preview).fetch(homepageQuery);
  const siteHeaderData = await getClient(preview).fetch(siteHeaderQuery);

  const data = { homepageData, siteHeaderData };

  return {
    props: {
      insights,
      casestudies,
      services,
      data,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
