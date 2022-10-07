import AboutPage from "../components/Pages/AboutPage";
import { getClient } from "../lib/sanity.server";
import groq from "groq";

export default function About({ casestudies, services, data }) {
  return (
    <>
      <AboutPage casestudies={casestudies} services={services} data={data} />
    </>
  );
}

const siteHeaderQuery = `*\[_type == "siteheader"\][0] {
  title,
  repoURL {
    current
  }
}`;

// Create a query called homepageQuery
const aboutpageQuery = `*\[_type == "aboutpage"\][0] {
  title,
  pageBuilder,
  
}`;

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

  const aboutpageData = await getClient(preview).fetch(aboutpageQuery);
  const siteHeaderData = await getClient(preview).fetch(siteHeaderQuery);

  const data = { aboutpageData, siteHeaderData };

  return {
    props: {
      casestudies,
      services,
      data,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
