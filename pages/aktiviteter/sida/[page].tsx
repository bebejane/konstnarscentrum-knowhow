import { getStaticPaginationPaths } from '/lib/utils'
import { AllActivitiesDocument } from "/graphql";
export { default, getStaticProps } from '..'

export const getStaticPaths = () => {
  return getStaticPaginationPaths(AllActivitiesDocument, 'activities')
}