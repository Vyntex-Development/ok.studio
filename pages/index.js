import HomePage from "../components/Pages/HomePage";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
import SEO from "../components/SEO/SEO";

export default function Home({ insights, casestudies, services, datahome }) {
  // console.log(data["homepageData"]["pageBuilder"][1]["servicesdescription"]);

  return (
    <>
      <SEO title="Homepage"></SEO>
      <HomePage
        insights={insights}
        casestudies={casestudies}
        services={services}
        datahome={datahome}
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

  const datahome = { homepageData, siteHeaderData };

  return {
    props: {
      insights,
      casestudies,
      services,
      datahome,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
