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
    const { id, firstName, lastName, email, mode } = await req.json();

    const itemTypes = await client.itemTypes.list()
    const memberTypeId = itemTypes.find(({ api_key }) => api_key === 'member')?.id;
    const applicationTypeId = itemTypes.find(({ api_key }) => api_key === 'application')?.id;

    let member = null;
    let application = null;

    const activity = await client.items.find(id);
    const currentMember = (await client.items.list({
      filter: {
        type: 'member',
        fields: {
          email: {
            eq: email,
          }
        },
      }
    }))?.[0];

    if (mode === 'login' && !currentMember) {
      return new Response(JSON.stringify({ message: 'Member not found' }), {
        status: 404,
        headers: { 'content-type': 'application/json' }
      })
    } else if (mode === 'login' && currentMember) {
      member = currentMember;
    } else {

      const memberData = {}
      if (firstName) memberData['firstName'] = firstName;
      if (lastName) memberData['lastName'] = lastName;
      if (email) memberData['email'] = email;

      if (currentMember)
        member = await client.items.update(currentMember.id, memberData);
      else
        member = await client.items.create({ item_type: { type: "item_type", id: memberTypeId }, ...memberData });
    }

    console.log(member)

    //Find exisiting application
    application = (await client.items.list({
      filter: {
        type: 'application',
        fields: { activity: { eq: id }, member: { eq: member.id } }
      }
    }))?.[0];

    if (!application) {
      application = await client.items.create({
        item_type: { type: "item_type", id: applicationTypeId },
        activity: id,
        member: member.id
      });
    }

    return new Response(JSON.stringify(application), {
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