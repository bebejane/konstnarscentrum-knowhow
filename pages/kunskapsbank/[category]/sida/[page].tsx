import { chunkArray, pageSize } from '/lib/utils'
import { AllKnowledgesDocument } from "/graphql";
import { apiQueryAll } from 'dato-nextjs-utils/api';
export { default, getStaticProps } from '..'

export async function getStaticPaths() {

  const paths = []
  const items = await apiQueryAll(AllKnowledgesDocument)
  const pages = chunkArray(items, pageSize)

  pages.forEach((posts, pageNo) => {
    paths.push.apply(paths, posts.map(p => ({
      params: {
        knowledge: p.slug,
        category: p.category.slug,
        page: `${pageNo + 1}`
      }
    })))
  })

  return {
    paths,
    fallback: 'blocking'
  };
}