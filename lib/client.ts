import { buildClient } from '@datocms/cma-client'
const client = buildClient({
  apiToken: process.env.DATOCMS_API_TOKEN,
  environment: process.env.DATOCMS_ENVIRONMENT ?? 'main'
})
export default client;
export { buildClient }