import type { NextRequest, NextResponse } from 'next/server'
import { buildClient } from '@datocms/cma-client';

export const config = {
  runtime: 'edge',
  maxDuration: 60
}

const client = buildClient({
  apiToken: process.env.DATOCMS_API_TOKEN,
  environment: process.env.DATOCMS_ENVIRONMENT
});

export default async function handler(req: NextRequest, res: NextResponse) {

  if (req.method !== 'POST')
    return new Response('method not allowed', { status: 405 })

  try {

    const { id, approvalStatus } = await req.json();
    const itemTypes = await client.itemTypes.list()
    const application = await client.items.find(id);

    if (!application) {
      return new Response('error', {
        status: 404,
        statusText: 'Anmälan hittades ej',
        headers: { 'content-type': 'application/json' }
      })
    }

    const updatedApplication = await client.items.update(id, { approval_status: approvalStatus });

    return new Response(JSON.stringify(updatedApplication), {
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