import { withRevalidate } from 'dato-nextjs-utils/hoc'
import { buildClient } from '@datocms/cma-client-node';

const client = buildClient({ apiToken: process.env.DATO_API_TOKEN });

export const config = {
  runtime: 'nodejs',
  maxDuration: 30
};

export default withRevalidate(async (record, revalidate) => {

  const { api_key: apiKey } = record.model;
  const { id, slug, category } = record
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
      paths.push(`/kontakta-oss`)
      break;
    case 'activity':
      paths.push(`/aktiviteter/${slug}`)
      break;
    case 'knowledge':
      paths.push(`/kunskapsbank/${category.slug}/${slug}`)
      break;
    case 'lexicon':
      paths.push(`/lexicon`)

      const records = await client.items.references(id, { version: 'published', limit: 500, nested: true })

      records.forEach(record => {
        switch (record.apiKey) {
          case 'activity':
            paths.push(`/aktiviteter/${record.slug}`)
            break;
          case 'knowledge':
            //@ts-ignore
            paths.push(`/kunskapsbank/${record.category.slug}/${record.slug}`)
            break;
          case 'in_english':
            paths.push(`/english`)
            break;
          case 'about':
            paths.push(`/om/${record.slug}`)
            break;
          case 'contact_page':
            paths.push(`/kontakta-oss`)
          default:
            break;
        }
      })

      break;
    default:
      break;
  }

  revalidate(paths)
})