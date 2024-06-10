import type { NextRequest, NextResponse } from 'next/server'
import { apiQuery } from 'dato-nextjs-utils/api';
import { buildClient } from '@datocms/cma-client';
import { SiteSearchDocument } from '/graphql';
import { truncateParagraph, isEmptyObject, recordToSlug } from '/lib/utils';

export const config = {
  runtime: 'edge',
  maxDuration: 5
}

const client = buildClient({ apiToken: process.env.GRAPHQL_API_TOKEN });

export default async function handler(req: NextRequest, res: NextResponse) {

  try {
    const params = await req.json();
    const results = await siteSearch(params)
    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    })

  } catch (err) {
    console.log(err)
    return new Response(JSON.stringify(err), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    })
  }
}


export const siteSearch = async (opt: any) => {

  const { query } = opt;

  const variables = {
    query: query ? `${query.split(' ').filter(el => el).join('|')}` : undefined
  };

  if (isEmptyObject(variables))
    return {}

  console.time(`search: "${query}"`)

  const itemTypes = await client.itemTypes.list();

  const search = (await client.items.list({
    filter: { type: itemTypes.map(m => m.api_key).join(','), query },
    order_by: '_rank_DESC',
    allPages: true
  })).map(el => ({
    ...el,
    _api_key: itemTypes.find((t) => t.id === el.item_type.id).api_key
  }))

  const data: { [key: string]: unknown[] } = {}
  const first = 100

  for (let i = 0; i < search.length; i += first) {
    const chunk = search.slice(i, first - 1)
    const res = await apiQuery(SiteSearchDocument, {
      variables: {
        activityIds: chunk.filter(el => el._api_key === 'activity').map(el => el.id),
        aboutIds: chunk.filter(el => el._api_key === 'about').map(el => el.id),
        knowledgeIds: chunk.filter(el => el._api_key === 'knowledge').map(el => el.id),
        first,
        skip: i,
      }
    })
    Object.keys(res).forEach((k) => {
      data[k] = data[k] ?? [];
      data[k] = data[k].concat(res[k])
    })
  }
  console.log('hej search')
  Object.keys(data).forEach(type => {
    if (!data[type].length)
      delete data[type]
    else
      data[type] = data[type].map((el: any) => ({
        ...el,
        category: itemTypes.find(({ api_key }) => api_key === el._modelApiKey).name,
        text: truncateParagraph(el.text, 1, false),
        slug: recordToSlug(el)
      }))
  })

  console.timeEnd(`search: "${query}"`)
  return data;
}