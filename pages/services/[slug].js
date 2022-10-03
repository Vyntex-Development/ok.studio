import groq from "groq";
import ServicesCms from "../../components/Pages/ServicesCms";
import { getClient } from "../../lib/sanity.server";

export default function ServiceCms({ services, service }) {
  console.log(service);
  return (
    <>
      <ServicesCms service={service} services={services} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "services" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const query = groq`*[_type == "services" && slug.current == $slug][0] {
    title,
    "username":author->username,
    body,
    description,
    media,
    tag,
    
}`;

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
  const service = await getClient(preview).fetch(query, {
    slug: params.slug,
  });
  return {
    props: {
      service,
      services,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
