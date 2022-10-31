import groq from "groq";
import CaseCmsPage from "../../components/Pages/CaseCmsPage";
import { getClient } from "../../lib/sanity.server";

export default function CaseCms({ casestudy, casestudies }) {
  return (
    <>
      <CaseCmsPage casestudy={casestudy} casestudies={casestudies} />
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

export async function getStaticProps({ params, preview = false }) {
  const query = groq`*[_type == "casestudies" && slug.current == $slug][0] {
    title,
    "username":author->username,
   "categories":categories[]->{title, tehnologyfirst, tehnologysecond, iconfirst, iconsecond},
    body,
    description,
    media,
    tag,
    herolightfirst,
    herolightsecond,
    herolightthird,
    herodarkfirst,
    herodarksecond,
    herodarkthird,
    heroimage,
    imagedescription,
    heroimagesmall,
    blockcontentoverview,
    blockcontentchallenge,
    blockcontentsolution,
    blockcontentoutcomefirst,
    blockcontentoutcomesecond,
    blockcontentlast,
    overviewdescriptionfirst,
    overviewdescriptionsecond,
    overviewimage,
    challengedescriptionfirst,
    challengedescriptionsecond,
    challengeimagefirst,
    challengeimagesecond,
    challengeimagethird,
    solutiondescriptionfirst,
    solutiondescriptionsecond,
    solutionimage,
    outcomedescriptionfirst,
    outcomedescriptionsecond,
    outcomedescriptionthird,
    outcomedescriptionfourth,
    outcomedescriptionfifth,
    outcomeimage,
    lastdescriptionfirst,
    lastdescriptionsecond,
    lastdescriptionthird,
    lastimage,
    projectimage,
    projecttitle

    
}`;

  const casestudies = await getClient(preview).fetch(groq`
    *[_type == "casestudies"]{
      _id,
      title,
      description,
      slug,
      media,
      tag,
    }
    `);
  const casestudy = await getClient(preview).fetch(query, {
    slug: params.slug,
  });
  return {
    props: {
      casestudy,
      casestudies,
    },
    revalidate: 10, // Definisemo na koliko se update-uje strana
  };
}
