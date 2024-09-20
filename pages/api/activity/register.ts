import type { NextRequest, NextResponse } from 'next/server'
import client from '/lib/client'

export const config = {
  runtime: 'edge',
  maxDuration: 60
}

const pick = (obj: any, keys) => Object.fromEntries(keys.filter(key => key in obj).map(key => [key, obj[key]]));

const field_ids = [
  'first_name',
  'last_name',
  'email',
  'address',
  'postal_code',
  'phone',
  'age',
  'sex',
  'city',
  'language',
  'url',
  'education',
  'mission',
  'work_category',
  'pdf'
];

export default async function handler(req: NextRequest, res: NextResponse) {

  if (req.method !== 'POST')
    return new Response('method not allowed', { status: 405 })

  try {

    const body = await req.json();
    let { member, id } = body;

    const itemTypes = await client.itemTypes.list()
    const memberTypeId = itemTypes.find(({ api_key }) => api_key === 'member')?.id;
    const applicationTypeId = itemTypes.find(({ api_key }) => api_key === 'application')?.id;
    const fields = pick(member, field_ids);

    const currentMember = (await client.items.list({
      filter: {
        type: 'member',
        fields: {
          email: {
            eq: fields.email,
          }
        },
      }
    }))?.[0];

    const memberData = {}

    Object.keys(fields).forEach(key => fields[key] && (memberData[key] = fields[key]));

    //console.log(memberData)

    if (currentMember) {
      console.log('updating member')
      member = await client.items.update(currentMember.id, memberData);
    } else {
      console.log('creating member')
      member = await client.items.create({ item_type: { type: "item_type", id: memberTypeId }, ...memberData });
    }

    // Find exisiting application
    let application = (await client.items.list({
      filter: {
        type: 'application',
        fields: { activity: { eq: id }, member: { eq: member.id } }
      }
    }))?.[0];

    if (!application) {
      application = await client.items.create({
        item_type: { type: "item_type", id: applicationTypeId },
        activity: id,
        member: member.id,
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