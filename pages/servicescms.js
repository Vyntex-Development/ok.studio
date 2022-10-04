import ServicesCms from "../components/Pages/ServicesCms";

export default function Services({ casestudies }) {
  return (
    <>
      <ServicesCms casestudies={casestudies} />
    </>
  );
}

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
  return {
    props: {
      casestudies,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
