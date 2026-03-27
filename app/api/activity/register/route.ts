import { sendActivityRegistration } from '@/emails';
import { client } from '@/lib/client';
import { Activity, Application, Member } from '@/types/datocms-cma';
import { Item } from '@datocms/cma-client/dist/types/generated/ApiTypes';

const field_ids = [
	'email',
	'kc_member',
	'protected_identity',
	'education_three_years',
	'have_worked_three_years',
	'social',
	'first_name',
	'last_name',
	'address',
	'city',
	'postal_code',
	'country',
	'phone',
	'age',
	'sex',
	'language',
	'url',
	'education',
	'mission',
	'work_category',
];

const pick = (obj: any, keys: string[]) =>
	Object.fromEntries(keys.filter((key) => key in obj).map((key) => [key, obj[key]]));

export const POST = async (req: Request) => {
	try {
		const body = await req.json();
		let { id, member } = body;
		const itemTypes = await client.itemTypes.list();
		const memberTypeId = itemTypes.find(({ api_key }) => api_key === 'member')?.id;
		const applicationTypeId = itemTypes.find(({ api_key }) => api_key === 'application')?.id;

		if (!memberTypeId || !applicationTypeId) throw new Error('Item types not found');

		const fields = pick(member, field_ids);

		fields.email = fields.email.toLowerCase();

		const currentMember = (
			await client.items.list<Member>({
				page: { limit: 1 },
				filter: {
					type: 'member',
					fields: {
						email: {
							eq: fields.email,
						},
					},
				},
			})
		)?.[0];

		let activity: Item<Activity> | null = null;

		try {
			activity = await client.items.find<Activity>(id);
		} catch (err) {
			console.log(err);
		}

		if (!activity) throw new Error('Det gick ej att hitta aktiviteten');

		const memberData: Record<string, any> = {};

		Object.keys(fields).forEach((key: string) => fields[key] && (memberData[key] = fields[key]));

		let newOrUpdatedMember: Item<Member> | null = null;

		if (!currentMember) {
			console.log('creating member');
			newOrUpdatedMember = await client.items.create<Member>({
				item_type: { type: 'item_type', id: memberTypeId as any },
				...memberData,
			});
		} else {
			console.log('updating member');
			newOrUpdatedMember = await client.items.update<Member>(currentMember.id, memberData);
		}

		// Find exisiting application
		let application = (
			await client.items.list<Application>({
				page: { limit: 1 },
				filter: {
					type: 'application',
					fields: { activity: { eq: id }, member: { eq: newOrUpdatedMember.id } },
				},
			})
		)?.[0];

		if (!application) {
			application = await client.items.create<Application>({
				item_type: { type: 'item_type', id: applicationTypeId as any },
				activity: id,
				member: newOrUpdatedMember.id,
			});
		}

		await sendActivityRegistration(newOrUpdatedMember.email as string, activity);

		return new Response(JSON.stringify(application), {
			headers: { 'content-type': 'application/json' },
		});
	} catch (err) {
		console.log(err);
		return new Response(JSON.stringify({ error: (err as Error).message ?? err }), {
			status: 500,
			headers: { 'content-type': 'application/json' },
		});
	}
};
