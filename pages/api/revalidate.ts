import { withRevalidate } from 'dato-nextjs-utils/hoc'

export const config = {
  runtime: 'nodejs',
  maxDuration: 30
};

export default withRevalidate(async (record, revalidate) => {

  const { api_key: apiKey } = record.model;
  const { slug } = record
  const paths = []

  switch (apiKey) {
    case 'about':
      paths.push(`/om/${slug}`)
      break;
    case 'footer':
      paths.push(`/`)
      break;
    default:
      break;
  }

  revalidate(paths)
})