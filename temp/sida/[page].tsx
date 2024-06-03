import { getStaticPaginationPaths } from '/lib/utils'
import { AllKnowledgesDocument } from "/graphql";
export { default, getStaticProps } from '..'

export const getStaticPaths = () => {
  return getStaticPaginationPaths(AllKnowledgesDocument, 'knowledges')
}