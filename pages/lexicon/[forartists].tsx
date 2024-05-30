import withGlobalProps from "/lib/withGlobalProps";
import { GetStaticProps } from "next";
import { apiQuery } from "dato-nextjs-utils/api";
import { AllForArtistDocument, ForArtistDocument } from "/graphql";
import { Article } from "/components";
import { getStaticPagePaths } from "/lib/utils";

export type Props = {
  forArtist: ForArtistRecord
  region: Region
}

export default function ForArtists({ forArtist: { id, image, title, content, intro } }: Props) {

  return (
    <Article
      id={id}
      image={image}
      text={intro}
      title={title}
      content={content}
    />
  );
}

ForArtists.page = { title: 'För konstnärer', crumbs: [{ title: 'För konstnärer' }] } as PageProps

export async function getStaticPaths() {
  return getStaticPagePaths(AllForArtistDocument, 'forartists')
}

export const getStaticProps: GetStaticProps = withGlobalProps({ queries: [] }, async ({ props, revalidate, context }: any) => {

  const slug = context.params.forartists;

  const { forArtist } = await apiQuery(ForArtistDocument, { variables: { slug }, preview: context.preview })

  if (!forArtist)
    return { notFound: true, revalidate }

  return {
    props: {
      ...props,
      forArtist,
      pageTitle: forArtist.title
    },
    revalidate
  };
});