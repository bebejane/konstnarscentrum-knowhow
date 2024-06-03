import { withWebPreviewsEdge } from 'dato-nextjs-utils/hoc';

export const config = {
  runtime: 'edge'
}

export default withWebPreviewsEdge(async ({ item, itemType }) => {

  const { slug, category } = item.attributes

  let path = null;

  switch (itemType.attributes.api_key) {
    case 'start': case 'footer':
      path = `/`
      break;
    case 'about':
      path = `/om/${slug}`
      break;
    case 'in_english':
      path = `/english`
      break;
    case 'contact_page':
      path = `/contact`
      break;
    case 'activity':
      path = `/aktiviteter/${slug}`
      break;
    case 'knowledge':
      path = `/kunskapsbank/${category.slug}/${slug}`
      break;
    default:
      break;
  }

  return path
})