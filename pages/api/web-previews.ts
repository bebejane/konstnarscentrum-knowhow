import { withWebPreviewsEdge } from 'dato-nextjs-utils/hoc';

export const config = {
  runtime: 'edge'
}

export default withWebPreviewsEdge(async ({ item, itemType }) => {

  const { slug } = item.attributes

  let path = null;

  switch (itemType.attributes.api_key) {
    case 'about':
      path = `/om/${slug}`
      break;
    case 'in_english':
      path = `/english`
      break;
    default:
      break;
  }

  return path
})