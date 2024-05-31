import { withRevalidate } from 'dato-nextjs-utils/hoc'

export const config = {
  runtime: 'nodejs',
  maxDuration: 30
};

export default withRevalidate(async (record, revalidate) => {

  const { api_key: apiKey } = record.model;
  const { slug, category } = record
  const paths = []

  switch (apiKey) {
    case 'start': case 'footer':
      paths.push(`/`)
      break;
    case 'about':
      paths.push(`/om/${slug}`)
      break;
    case 'in_english':
      paths.push(`/english`)
      break;
    case 'contact_page':
      paths.push(`/contact`)
      break;
    case 'activity':
      paths.push(`/aktiviteter/${slug}`)
      break;
    case 'knowledge':
      paths.push(`/kunskapsbank/${category.slug}/${slug}`)
      break;
    default:
      break;
  }

  revalidate(paths)
})