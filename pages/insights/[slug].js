import groq from "groq";
import InsightsCmsPage from "../../components/Pages/InsightsCmsPage";
import { getClient } from "../../lib/sanity.server";

export default function InisghtsCms({ insight, insights }) {
  console.log(insight);
  return (
    <>
      <InsightsCmsPage insights={insights} insight={insight} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "insights" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

const query = groq`*[_type == "insights" && slug.current == $slug][0] {
    title,
    "username":author->username,
    body,
    description,
    media,
    tag,
    lastModifiedAt
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
  const insight = await getClient(preview).fetch(query, { slug: params.slug });
  return {
    props: {
      insight,
      insights,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
